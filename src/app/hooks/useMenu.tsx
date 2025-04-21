import { useCallback, useState } from 'react'

type MenuItem = 'CSV Transform' | 'Text Transform' | 'Label Generator' | 'Settings'

export const useMenu = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem>('CSV Transform')

  const changePage = useCallback((menuItem: MenuItem) => setSelectedMenuItem(menuItem), [setSelectedMenuItem])

  return {
    selectedMenuItem,
    changePage,
  }
}
