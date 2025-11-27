"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { SalesSummary } from "@/components/sales-summary"
import { SalesChart } from "@/components/sales-chart"
import { Card } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"

export function InventoryDashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [currentDate, setCurrentDate] = useState(new Date(2024, 3, 27))
  const [viewMode, setViewMode] = useState<"daily" | "monthly" | "venue">("daily")

  const handlePrevDay = () => {
    setCurrentDate((prev) => new Date(prev.getTime() - 24 * 60 * 60 * 1000))
  }

  const handleNextDay = () => {
    setCurrentDate((prev) => new Date(prev.getTime() + 24 * 60 * 60 * 1000))
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">ダッシュボード</h1>
            
            <Alert className="bg-yellow-50 border-yellow-200 mb-4">
              <AlertDescription className="text-yellow-800">
                キッチンカーBが在庫不足です。早急に確認してください。
              </AlertDescription>
            </Alert>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="p-6">
              <div className="text-sm text-gray-600 mb-2">リアルタイム在庫状況</div>
              <div className="text-3xl font-bold text-blue-600 mb-2">23台</div>
              <div className="text-sm text-gray-500">利用可能: 18台 / 予約済み: 5台</div>
            </Card>
            <Card className="p-6">
              <div className="text-sm text-gray-600 mb-2">本日の予約数</div>
              <div className="text-3xl font-bold text-green-600 mb-2">12件</div>
              <div className="text-sm text-gray-500">確定: 10件 / 承認待ち: 2件</div>
            </Card>
            <Card className="p-6">
              <div className="text-sm text-gray-600 mb-2">本日の売上</div>
              <div className="text-3xl font-bold text-purple-600 mb-2">¥1,850,000</div>
              <div className="text-sm text-gray-500">前日比: +12.5%</div>
            </Card>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex rounded-md overflow-hidden border border-gray-300">
              <button
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  viewMode === "daily" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setViewMode("daily")}
              >
                日別
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  viewMode === "monthly" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setViewMode("monthly")}
              >
                月別
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  viewMode === "venue" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setViewMode("venue")}
              >
                スペース別
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={handlePrevDay} className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                <span>‹</span> 前日
              </button>
              <span className="text-2xl font-bold text-blue-600 px-4">
                {currentDate.getMonth() + 1}/{currentDate.getDate()}
              </span>
              <button onClick={handleNextDay} className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                翌日 <span>›</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <SalesSummary />
            <SalesChart date={`${currentDate.getMonth() + 1}/${currentDate.getDate()}`} />
          </div>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">予約状況サマリ</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">10</div>
                <div className="text-sm text-gray-600">確定</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">2</div>
                <div className="text-sm text-gray-600">承認待ち</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600">3</div>
                <div className="text-sm text-gray-600">エントリー済み</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">8</div>
                <div className="text-sm text-gray-600">出店完了</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">1</div>
                <div className="text-sm text-gray-600">キャンセル</div>
              </div>
            </div>
          </Card>
        </main>
      </div>
    </div>
  )
}
