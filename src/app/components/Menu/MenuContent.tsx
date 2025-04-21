import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';

type MenuItem = 'CSV Transform' | 'Text Transform' | 'Label Generator' | 'Settings'

interface SideMenuProps {
  selectedMenuItem: MenuItem
  changePage: (item: MenuItem) => void
}

const mainListItems = [
  { text: 'CSV Transform', disabled: false },
  { text: 'Text Transform', disabled: false },
  { text: 'Label Generator', disabled: true },
] as const

const secondaryListItems = [
  { text: 'Settings' },
] as const

export function MenuContent({ selectedMenuItem, changePage }: SideMenuProps) {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton disabled={item.disabled} selected={item.text === selectedMenuItem} onClick={() => changePage(item.text)}>
              {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton onClick={() => changePage(item.text)}>
              {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
