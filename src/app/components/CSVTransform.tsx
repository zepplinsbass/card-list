import { CSVImporter } from "csv-import-react";
import { CSVLink } from "react-csv";
import { useState } from "react";

import { ManaboxColumns } from '../types/Manabox'
import { useCSV } from "../hooks/useCSV";
import { useScryfall } from "../hooks/useScryfall";
import { TrimmedTcgPlayerRow } from "../types/TcgPlayer";

export function CSVTransform() {
  const { manaboxCSV, tcgplayerCSV, convertCSV, saveTcgplayerCSV } = useCSV()
  const { getTcgPlayerIdForCards } = useScryfall()
  const columns = ManaboxColumns.map(column => ({
    name: column,
    key: column,
  }))

  const handleTransform = async () => {
    if (!manaboxCSV.length) {
      return
    }
    const updatedRows = await getTcgPlayerIdForCards(manaboxCSV)
    const updatedCSV = convertCSV(updatedRows)
    saveTcgplayerCSV(updatedCSV)
  }

  const shouldRenderImportButton = manaboxCSV.length > 0
  const shouldRenderTransformButton = !shouldRenderImportButton
  const shouldRenderDownloadButton = tcgplayerCSV.length > 0

  return (
    <>
      { shouldRenderTransformButton && <button onClick={handleTransform}>Transform Manabox CSV</button> }
      { shouldRenderImportButton && <CSVImport columns={columns} /> }
      { shouldRenderDownloadButton && <CSVDownload data={tcgplayerCSV} />}
    </>
  )
}

function CSVImport({ columns }: { columns: Array<{name: string, key: string }> }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open CSV Importer</button>

      <CSVImporter
        modalIsOpen={isOpen}
        modalOnCloseTriggered={() => setIsOpen(false)}
        darkMode={true}
        onComplete={(data) => console.log(data)}
        template={{
          columns,
        }}
      />
    </>
  )
}

const CSVDownload = ({ data }: { data: TrimmedTcgPlayerRow[] }) => {
  const headers = [{
    label: 'TCGplayer Id',
    key: 'TCGplayer Id'
  }, {
    label: 'Add to Quantity',
    key: 'Add to Quantity'
  }, {
    label: 'TCG Marketplace Price',
    key: 'TCG Marketplace Price'
  }] satisfies Array<{ label: keyof TrimmedTcgPlayerRow, key: keyof TrimmedTcgPlayerRow }>

  return (
    <CSVLink data={data} headers={headers}>
      Download me
    </CSVLink>
  )
}
