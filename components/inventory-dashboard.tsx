"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { SalesSummary } from "@/components/sales-summary"
import { SalesChart } from "@/components/sales-chart"
import { Card } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function InventoryDashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        mobileOpen={mobileMenuOpen}
        onMobileClose={() => setMobileMenuOpen(false)}
      />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header onMenuClick={() => setMobileMenuOpen(true)} />
        <main className="flex-1 overflow-auto p-4 sm:p-6">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#003355] mb-4">ダッシュボード</h1>
            
            <Alert className="bg-amber-50 border-amber-200 mb-4">
              <AlertDescription className="text-amber-900 text-sm sm:text-base font-medium">
                キッチンカーBが在庫不足です。早急に確認してください。
              </AlertDescription>
            </Alert>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
            <Card className="p-4 sm:p-6 shadow-sm border-gray-200">
              <div className="text-xs sm:text-sm text-gray-500 font-medium mb-2">リアルタイム在庫状況</div>
              <div className="text-2xl sm:text-3xl font-bold text-slate-700 mb-2">23台</div>
              <div className="text-xs sm:text-sm text-gray-500">利用可能: 18台 / 予約済み: 5台</div>
            </Card>
            <Card className="p-4 sm:p-6 shadow-sm border-gray-200">
              <div className="text-xs sm:text-sm text-gray-500 font-medium mb-2">本日の予約数</div>
              <div className="text-2xl sm:text-3xl font-bold text-emerald-700 mb-2">12件</div>
              <div className="text-xs sm:text-sm text-gray-500">確定: 10件 / 承認待ち: 2件</div>
            </Card>
            <Card className="p-4 sm:p-6 sm:col-span-2 lg:col-span-1 shadow-sm border-gray-200">
              <div className="text-xs sm:text-sm text-gray-500 font-medium mb-2">本日の売上</div>
              <div className="text-2xl sm:text-3xl font-bold text-indigo-900 mb-2">¥1,850,000</div>
              <div className="text-xs sm:text-sm text-gray-500">前日比: +12.5%</div>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="flex rounded-md overflow-hidden border border-gray-300 w-full sm:w-auto shadow-sm">
              <button
                className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors ${
                  viewMode === "daily" ? "bg-[#003355] text-white" : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
                onClick={() => setViewMode("daily")}
              >
                日別
              </button>
              <button
                className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors ${
                  viewMode === "monthly" ? "bg-[#003355] text-white" : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
                onClick={() => setViewMode("monthly")}
              >
                月別
              </button>
              <button
                className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors ${
                  viewMode === "venue" ? "bg-[#003355] text-white" : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
                onClick={() => setViewMode("venue")}
              >
                スペース別
              </button>
            </div>
            <div className="flex items-center justify-center gap-2">
              <button onClick={handlePrevDay} className="text-gray-500 hover:text-[#003355] flex items-center gap-1 text-sm font-medium transition-colors">
                <span>‹</span> 前日
              </button>
              <span className="text-xl sm:text-2xl font-bold text-[#003355] px-4">
                {currentDate.getMonth() + 1}/{currentDate.getDate()}
              </span>
              <button onClick={handleNextDay} className="text-gray-500 hover:text-[#003355] flex items-center gap-1 text-sm font-medium transition-colors">
                翌日 <span>›</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
            <SalesSummary />
            <SalesChart date={`${currentDate.getMonth() + 1}/${currentDate.getDate()}`} />
          </div>

          <Card className="p-4 sm:p-6 shadow-sm border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold text-[#003355] mb-4">予約状況サマリ</h2>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
              <div className="text-center p-2 rounded hover:bg-gray-50 transition-colors">
                <div className="text-xl sm:text-2xl font-bold text-slate-700">10</div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium">確定</div>
              </div>
              <div className="text-center p-2 rounded hover:bg-gray-50 transition-colors">
                <div className="text-xl sm:text-2xl font-bold text-amber-600">2</div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium">承認待ち</div>
              </div>
              <div className="text-center p-2 rounded hover:bg-gray-50 transition-colors">
                <div className="text-xl sm:text-2xl font-bold text-gray-600">3</div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium">エントリー済み</div>
              </div>
              <div className="text-center p-2 rounded hover:bg-gray-50 transition-colors">
                <div className="text-xl sm:text-2xl font-bold text-emerald-700">8</div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium">出店完了</div>
              </div>
              <div className="text-center p-2 rounded hover:bg-gray-50 transition-colors">
                <div className="text-xl sm:text-2xl font-bold text-rose-700">1</div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium">キャンセル</div>
              </div>
            </div>
          </Card>
        </main>
      </div>
    </div>
  )
}
