import { AppLayout } from "@/components/app-layout"

export default function MembersPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">会員管理</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">会員情報の管理画面です。</p>
        </div>
      </div>
    </AppLayout>
  )
}

