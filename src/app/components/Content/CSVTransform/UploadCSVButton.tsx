import { useCallback } from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Papa from 'papaparse'
import { ManaboxRow } from '@/app/types/Manabox';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const allowedExtensions = ["csv"];

export function UploadCSVButton({ onUpload }: { onUpload: (csv: ManaboxRow[]) => void }) {
  const handleUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length) {
      const inputFile = event.target.files[0];

      // Check the file extensions, if it not
      // included in the allowed extensions
      // we show the error
      const fileExtension =
          inputFile?.type.split("/")[1];
      if (
          !allowedExtensions.includes(fileExtension)
      ) {
          console.error("Please input a csv file");
          return
      }

      Papa.parse<ManaboxRow>(inputFile, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => onUpload(result.data)
      })
    }
  }, [onUpload])

  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
    >
      Upload CSV
      <VisuallyHiddenInput
        type="file"
        onChange={handleUpload}
        multiple
      />
    </Button>
  );
}
