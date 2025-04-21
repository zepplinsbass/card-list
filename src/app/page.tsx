'use client'

import Box from '@mui/material/Box';

import { SideMenu } from "./components/Menu/SideMenu"
import { MainContent } from './components/Content/MainContent'
import { useMenu } from './hooks/useMenu';
// import { useTextTransform } from "./hooks/useTextTransform"

export default function Home() {
  const { selectedMenuItem, changePage } = useMenu()
  return (
    <Box sx={{ display: 'flex' }}>
      <SideMenu selectedMenuItem={selectedMenuItem} changePage={changePage} />
      <MainContent selectedMenuItem={selectedMenuItem} />
    </Box>
  )
}
