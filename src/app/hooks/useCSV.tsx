import { useState } from 'react'

import { ManaboxRow } from '../types/Manabox'
import { TrimmedTcgPlayerRow } from '../types/TcgPlayer'

interface ManaboxRowWithTCGplayerID extends ManaboxRow {
  tcgplayer_id: string
}

export const useCSV = () => {
  const [manaboxCSV, setManaboxCSV] = useState<ManaboxRow[]>([])
  const [tcgplayerCSV, setTcgplayerCSV] = useState<TrimmedTcgPlayerRow[]>([])

  const saveManaboxCSV = (data: ManaboxRow[]) => {
    setManaboxCSV(data)
  }

  const saveTcgplayerCSV = (data: TrimmedTcgPlayerRow[]) => {
    setTcgplayerCSV(data)
  }

  const convertCSV = (rows: ManaboxRowWithTCGplayerID[]): TrimmedTcgPlayerRow[] => {
    return rows.map(row => ({
      "TCGplayer Id": row.tcgplayer_id,
      "Add to Quantity": row.Quantity,
      "TCG Marketplace Price": row['Purchase price'],
    }))
  }

  return {
    manaboxCSV,
    tcgplayerCSV,
    saveManaboxCSV,
    saveTcgplayerCSV,
    convertCSV,
  }
}
