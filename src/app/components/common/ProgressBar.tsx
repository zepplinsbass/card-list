import { useState } from 'react'
import { Backdrop, CircularProgress, Typography } from "@mui/material";

export default function ProgressBar({ loading, progress, total }: { loading: boolean, progress: number, total: number }) {
  const [isOpen, setIsOpen] = useState<boolean>(loading)

  const handleClose = () => {
    if (!loading) {
      setIsOpen(false)
    }
  }
  return (
    <Backdrop
      sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
      open={isOpen}
      onClick={handleClose}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography>{`${progress}/${total}`}</Typography>
        <CircularProgress style={{ margin: 12 }} />
      </div>
    </Backdrop>
  )
}
