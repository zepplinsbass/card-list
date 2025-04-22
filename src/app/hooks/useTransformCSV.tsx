import { useState } from 'react'

import { ManaboxRow } from '../types/Manabox'
import { ExternalTcgPlayerRow } from '../types/TcgPlayer'

interface ManaboxRowWithTCGplayerID extends ManaboxRow {
  tcgplayer_id: string
}

export const useCSV = () => {
  const [manaboxCSV, setManaboxCSV] = useState<ManaboxRow[]>([])
  const [tcgplayerCSV, setTcgplayerCSV] = useState<Partial<ExternalTcgPlayerRow>[]>([])

  const saveManaboxCSV = (data: ManaboxRow[]) => {
    setManaboxCSV(data)
  }

  const saveTcgplayerCSV = (data: Partial<ExternalTcgPlayerRow>[]) => {
    setTcgplayerCSV(data)
  }

  const convertCSV = (rows: ManaboxRowWithTCGplayerID[]): Pick<ExternalTcgPlayerRow, 'Product ID' | 'Quantity' | 'Printing'>[] => {
    return rows.map(row => ({
      "Product ID": row.tcgplayer_id,
      "Quantity": row.Quantity,
      "Printing": row.Foil === 'foil' ? 'Foil' : 'Normal',
    }))
  }

  const removeManaboxCSV = () => setManaboxCSV([])

  return {
    manaboxCSV,
    tcgplayerCSV,
    saveManaboxCSV,
    saveTcgplayerCSV,
    removeManaboxCSV,
    convertCSV,
  }
}
