import { useTextTransform } from "../../hooks/useTextTransform"

export default function TextTransform() {
  const { handleManaboxChange, resetTcgplayerList, transformManaboxText, tcgplayerList } = useTextTransform()
  return (
    <div style={{ padding: 24, width: '100%' }}>
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
          onClick={resetTcgplayerList}
        >
          Clear
        </button>
      </div>
    </div>
  )
}
