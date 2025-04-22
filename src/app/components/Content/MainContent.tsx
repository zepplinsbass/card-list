import { CSVTransform } from './CSVTransform/CSVTransform'
import { LabelGenerator } from './LabelGenerator/LabelGenerator'
import TextTransform from './TextTransform'

type MenuItem = 'CSV Transform' | 'Text Transform' | 'Label Generator' | 'Settings'

export function MainContent({ selectedMenuItem }: { selectedMenuItem: MenuItem }) {
  return (
    <>
      { selectedMenuItem === 'CSV Transform' && <CSVTransform /> }
      { selectedMenuItem === 'Text Transform' && <TextTransform /> }
      { selectedMenuItem === 'Label Generator' && <LabelGenerator /> }
    </>
  )
}
