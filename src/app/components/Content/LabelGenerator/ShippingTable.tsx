import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { DataGrid } from '@mui/x-data-grid';

import { UploadCSVButton } from '../../common/UploadCSVButton';
import { ShippingInfoColumns, ShippingInfoRow } from '@/app/types/Shipping';

type TableProps = {
  data: ShippingInfoRow[]
  onUpload: (csv: ShippingInfoRow[]) => void
}

export function ShippingTable({ data, onUpload }: TableProps) {
  const formattedData = {
    rows: data.map((row, index) => ({
      ...row,
      id: index,
    })),
    columns: ShippingInfoColumns.map(column => ({
      field: column,
      headerName: column,
      hide: false,
    })),
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
        <UploadCSVButton onUpload={onUpload} />
      </Stack>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <DataGrid
          {...formattedData}
          showToolbar
        />
      </div>
    </Box>
  );
}
