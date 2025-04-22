import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import { ExternalTcgPlayerRow, ExternalTcgPlayerColumns } from '@/app/types/TcgPlayer';

type TableProps = {
  data: Partial<ExternalTcgPlayerRow>[]
}

export function TcgPlayerTable({ data }: TableProps) {
  const formattedData = {
    rows: data.map((row, index) => ({
      ...row,
      id: index,
    })),
    columns: ExternalTcgPlayerColumns.map(column => ({
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
