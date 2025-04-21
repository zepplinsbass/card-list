import * as React from 'react'
import { styled } from '@mui/material/styles'
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer'
import Box from '@mui/material/Box'

import { MenuContent } from './MenuContent'

type MenuItem = 'CSV Transform' | 'Text Transform' | 'Label Generator' | 'Settings'

interface SideMenuProps {
  selectedMenuItem: MenuItem
  changePage: (item: MenuItem) => void
}

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: 'border-box',
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
});

export function SideMenu({ selectedMenuItem, changePage }: SideMenuProps) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', md: 'block' },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: 'background.paper',
        },
      }}
    >
      <Box
        sx={{
          overflow: 'auto',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <MenuContent selectedMenuItem={selectedMenuItem} changePage={changePage} />
      </Box>
    </Drawer>
  );
}
