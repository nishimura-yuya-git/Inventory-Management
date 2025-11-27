import { AppLayout } from "@/components/app-layout"

export default function InventoryOrdersPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">発注管理</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">発注情報の管理画面です。</p>
        </div>
      </div>
    </AppLayout>
  )
}

