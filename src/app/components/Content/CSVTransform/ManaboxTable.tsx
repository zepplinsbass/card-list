import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { DataGrid } from '@mui/x-data-grid';

import { ManaboxRow, ManaboxColumns } from '../../../types/Manabox';
import { UploadCSVButton } from './UploadCSVButton';

type TableProps = {
  data: ManaboxRow[]
  handleTransform: () => void
  onUpload: (csv: ManaboxRow[]) => void
}

export function ManaboxTable({ data, handleTransform, onUpload }: TableProps) {
  const formattedData = {
    rows: data.map((row, index) => ({
      ...row,
      id: index,
    })),
    columns: ManaboxColumns.map(column => ({
      field: column,
      headerName: column,
      hide: false,
    })),
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
        <UploadCSVButton onUpload={onUpload} />
        <Button size="medium" onClick={handleTransform}>
          Transform To TCGPlayer CSV
        </Button>
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
