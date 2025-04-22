import { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { ShippingInfoRow } from '@/app/types/Shipping';
import { ShippingTable } from './ShippingTable';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export function LabelGenerator() {
  const [currentTab, setCurrentTab] = useState<0 | 1>(0)
  const [shippingCSV, setShippingCSV] = useState<ShippingInfoRow[]>([])

  const handleChangeTab = () => setCurrentTab(0)
  const onUpload = (csv: ShippingInfoRow[]) => setShippingCSV(csv)

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={currentTab} onChange={handleChangeTab} aria-label="basic tabs example">
          <Tab label="Shipping Info CSV" />
          <Tab label="Shipping Labels" />
        </Tabs>
      </Box>
      { currentTab === 0 ? (
        <CustomTabPanel value={0} index={0}>
          <ShippingTable data={shippingCSV} onUpload={onUpload} />
        </CustomTabPanel>
        ) : (
        <CustomTabPanel value={1} index={1}>
          <div></div>
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
