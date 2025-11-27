"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"

interface SalesItem {
  label: string
  value: string
  highlight?: boolean
}

export function SalesSummary() {
  const [showTaxIncluded, setShowTaxIncluded] = useState(false)

  const salesData: SalesItem[] = [
    { label: "総売上", value: "¥0" },
    { label: "値引き", value: "¥0" },
    { label: "ポイント利用", value: "¥0", highlight: true },
    { label: "クーポン利用", value: "¥0", highlight: true },
    { label: "売上原価", value: "¥0.0" },
    { label: "粗利益", value: "¥0.0" },
    { label: "粗利率", value: "0%" },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">純売上</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">税込価格を表示</span>
          <Switch checked={showTaxIncluded} onCheckedChange={setShowTaxIncluded} />
        </div>
      </div>

      <div className="text-center mb-8">
        <div className="text-5xl font-bold text-gray-900">¥0</div>
        <div className="text-sm text-gray-500 mt-2">
          消費税 <span className="ml-2">¥0</span>
        </div>
      </div>

      <div className="space-y-4">
        {salesData.map((item, index) => (
          <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
            <span className="text-gray-600">{item.label}</span>
            <span className={`font-medium ${item.highlight ? "text-red-500" : "text-gray-900"}`}>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
