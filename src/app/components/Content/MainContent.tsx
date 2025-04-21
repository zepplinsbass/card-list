import { CSVTransform } from './CSVTransform/CSVTransform'
import TextTransform from './TextTransform'

type MenuItem = 'CSV Transform' | 'Text Transform' | 'Label Generator' | 'Settings'

export function MainContent({ selectedMenuItem }: { selectedMenuItem: MenuItem }) {
  return (
    <>
      { selectedMenuItem === 'CSV Transform' && <CSVTransform /> }
      { selectedMenuItem === 'Text Transform' && <TextTransform /> }
    </>
  )
}
