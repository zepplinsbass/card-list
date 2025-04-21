import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import { TrimmedTcgPlayerRow } from '@/app/types/TcgPlayer';
import { useCSV } from '@/app/hooks/useCSV';

type TableProps = {
  data: TrimmedTcgPlayerRow[]
}

export function TcgPlayerTable({ data }: TableProps) {
  const { tcgplayerCSV } = useCSV()

  const columns = ["TCGplayer Id", "Add to Quantity", "TCG Marketplace Price"]
  const getRows = () => {
    return tcgplayerCSV.length > 0 ? tcgplayerCSV : data
  }
  const formattedData = {
    rows: getRows().map((row, index) => ({
      ...row,
      id: index,
    })),
    columns: columns.map(column => ({
      field: column,
      headerName: column,
      hide: false,
    })),
  }

  return (
    <Box sx={{ width: '100%' }}>
      <DataGrid
        {...formattedData}
        showToolbar
        slotProps={{
          toolbar: {
            csvOptions: {
              fileName: 'tcgplayer_scan',
              delimiter: ',',
              utf8WithBom: true,
            },
          },
        }}
      />
    </Box>
  );
}
