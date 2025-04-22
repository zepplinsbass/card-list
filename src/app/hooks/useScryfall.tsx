import { useState } from 'react'
import axios from 'axios'
import { ManaboxRow } from '../types/Manabox'

interface ScryfallResponse {
  tcgplayer_id: string
}

interface QueryProgress {
  loading: boolean
  progress: number
  total: number
}

const baseUrl = 'https://api.scryfall.com/cards/'

const sleep = async (ms: number) =>
  await new Promise(resolve => setTimeout(resolve, ms))

export const useScryfall = () => {
  const [queryProgress, setQueryProgress] = useState<QueryProgress>({
    loading: false,
    progress: 0,
    total: 0,
  })
  const getTcgPlayerIdForCard = async (scryfallId: string): Promise<string | null> => {
    console.log(scryfallId, 'scryfall id')
    const response = await axios.get<ScryfallResponse>(`${baseUrl}${scryfallId}`)
    if (!response.data) {
      console.error('Could not get response from Scryfall')
      return null
    }

    return response.data.tcgplayer_id
  }

  const getTcgPlayerIdForCards = async (rows: ManaboxRow[]): Promise<Array<ManaboxRow & { tcgplayer_id: string }>> => {
    const updatedList = []
    
    setQueryProgress({
      loading: true,
      progress: 0,
      total: rows.length,      
    })

    for (const row of rows) {
      await sleep(200)
      const response = await getTcgPlayerIdForCard(row['Scryfall ID'])
      
      setQueryProgress({
        loading: true,
        progress: updatedList.length + 1,
        total: rows.length,
      })

      if (!response) {
        continue
      }

      updatedList.push({ ...row, tcgplayer_id: response })
    }

    setQueryProgress({
      loading: false,
      progress: updatedList.length,
      total: rows.length,
    })

    return updatedList
  }

  return {
    getTcgPlayerIdForCards,
    queryProgress,
  }
}
