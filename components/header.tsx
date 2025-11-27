"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function Header() {
  const [selectedStoreCount] = useState(2) // 選択されている店舗数

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
            <ChevronDown size={16} />
            <span>店舗選択</span>
            {selectedStoreCount > 0 && (
              <span className="bg-gray-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {selectedStoreCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
