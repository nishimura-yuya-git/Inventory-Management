"use client"

import { X } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface SalesChartProps {
  date: string
}

export function SalesChart({ date }: SalesChartProps) {
  const chartData = Array.from({ length: 12 }, (_, i) => ({
    time: `${(i + 1) * 2}時`,
    sales: 0,
  }))

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">リアルタイム売上 (税抜表示)</h2>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <X size={20} />
        </button>
      </div>

      <div className="flex justify-end mb-4">
        <span className="px-3 py-1 text-sm border border-blue-500 text-blue-500 rounded">{date}の売上</span>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-blue-500"></div>
          <span className="text-sm text-gray-600">売上</span>
        </div>
        <span className="text-sm text-gray-500">{date}</span>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6B7280" }} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6B7280" }}
              tickFormatter={(value) => `¥${value}`}
              domain={[0, 8]}
              ticks={[0, 2, 4, 6, 8]}
            />
            <Tooltip formatter={(value: number) => [`¥${value}`, "売上"]} labelFormatter={(label) => `${label}`} />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={{ fill: "#3B82F6", strokeWidth: 0, r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">取引数</span>
          <div className="text-right">
            <div className="text-3xl font-bold text-gray-900">¥0</div>
            <div className="text-gray-500">0</div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-400 space-y-1">
        <p>※締めに関係なく純粋な当日のデータを表示しています。</p>
        <p>※値引き後の金額を表示しています。</p>
      </div>
    </div>
  )
}
