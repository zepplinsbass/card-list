import { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { useScryfall } from '@/app/hooks/useScryfall';
import { useCSV } from '@/app/hooks/useCSV';
import { ManaboxTable } from "./ManaboxTable";
import { TcgPlayerTable } from './TcgPlayerTable'
import { ManaboxRow } from '@/app/types/Manabox';
import ProgressBar from '../../common/ProgressBar';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export function CSVTransform() {
  const [currentTab, setCurrentTab] = useState<0 | 1>(0)
  const { manaboxCSV, tcgplayerCSV, saveManaboxCSV, saveTcgplayerCSV, convertCSV } = useCSV()

  const handleTabChange = () => {
    if (currentTab === 0) {
      setCurrentTab(1)
    } else {
      setCurrentTab(0)
    }
  }

  const { getTcgPlayerIdForCards, queryProgress } = useScryfall()

  const handleTransform = async () => {
    if (!manaboxCSV.length) {
      return
    }
    const updatedRows = await getTcgPlayerIdForCards(manaboxCSV)
    const updatedCSV = convertCSV(updatedRows)
    saveTcgplayerCSV(updatedCSV)
    setCurrentTab(1)
  }

  const onUpload = (csv: ManaboxRow[]) => saveManaboxCSV(csv)

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={currentTab} onChange={handleTabChange} aria-label="basic tabs example">
          <Tab label="Manabox CSV" />
          <Tab label="TCGPlayer CSV" />
        </Tabs>
      </Box>
      {queryProgress.loading && <ProgressBar loading={queryProgress.loading} progress={queryProgress.progress} total={queryProgress.total} />}
      { currentTab === 0 ? (
        <CustomTabPanel value={0} index={0}>
          <ManaboxTable data={manaboxCSV} handleTransform={handleTransform} onUpload={onUpload} />
        </CustomTabPanel>
        ) : (
        <CustomTabPanel value={1} index={1}>
          <TcgPlayerTable data={tcgplayerCSV} />
        </CustomTabPanel>
      )}
    </Box>
  );
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
