import { useState } from 'react'

const TCGPlayerFoil = '(Foil)'

export const useTextTransform = () => {
  const [manaboxList, setManaboxList] = useState<string>('')
  const [tcgplayerList, setTcgplayerList] = useState<string>('')
  
  const handleManaboxChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setManaboxList(event.target.value)
  }

  const resetTcgplayerList = () => {
    setTcgplayerList('')
  }

  const transformManaboxText = () => {
    if (!manaboxList) {
      return
    }

    const transformedRows = []
    // basically dealing with rows but in one blob of text
    const rows = manaboxList.split('\n')

    for (const row of rows) {
      const columns = row.split(' ')
      const transformedValues = []
      const treatmentOrCardNumElement = columns.pop()
      if (!treatmentOrCardNumElement) {
        continue
      }

      const isCardNumber = !Number.isNaN(parseInt(treatmentOrCardNumElement))
      if (!isCardNumber && treatmentOrCardNumElement === 'F') {
        transformedValues.unshift(TCGPlayerFoil)
        // ignore the card number that follows up the treatment column
        columns.pop()
      }

      const setElement = columns.pop()
      if (!setElement) {
        continue
      }

      const isSetElement = setElement.length === 5 && setElement[0] === '(' && setElement[4] === ')'
      if (isSetElement) {
        const transformedValue = setElement.replace('(', '[').replace(')', ']').toUpperCase()
        transformedValues.unshift(transformedValue)
      }

      const transformedColumns = columns.concat(transformedValues).join(' ')
      transformedRows.push(transformedColumns)
    }

    setTcgplayerList(transformedRows.join('\n'))
  }

  return {
    handleManaboxChange,
    resetTcgplayerList,
    transformManaboxText,
    tcgplayerList,
    manaboxList,
  }
}