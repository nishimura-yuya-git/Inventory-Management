import { AppLayout } from "@/components/app-layout"

export default function ArrivalListPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">入荷一覧</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">入荷一覧画面です。</p>
        </div>
      </div>
    </AppLayout>
  )
}

