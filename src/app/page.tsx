'use client'

import { useState } from 'react'

const TCGPlayerFoil = '(Foil)'

export default function Home() {
  const [manaboxList, setManaboxList] = useState<string>('')
  const [tcgplayerList, setTcgplayerList] = useState<string>('')
  
  const handleManaboxChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setManaboxList(event.target.value)
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

  return (
    <div style={{ padding: 24 }}>
      <div className="mb-12">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Manabox Card List
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="manabox"
          placeholder="1 CardName (SET) 123 F"
          style={{ height: 200 }}
          onChange={handleManaboxChange}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          TCGPlayer Card List
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="tcgplayer"
          style={{ height: 200 }}
          value={tcgplayerList}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
          onClick={transformManaboxText}
        >
          Transform
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
          onClick={() => setTcgplayerList('')}
        >
          Clear
        </button>
      </div>
    </div>
  )
}
