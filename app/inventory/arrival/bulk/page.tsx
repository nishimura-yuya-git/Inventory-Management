import { AppLayout } from "@/components/app-layout"

export default function ArrivalBulkPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">入荷一括登録(複数店舗)</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">複数店舗への入荷一括登録画面です。</p>
        </div>
      </div>
    </AppLayout>
  )
}

