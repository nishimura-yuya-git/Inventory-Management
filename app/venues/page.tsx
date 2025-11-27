import { AppLayout } from "@/components/app-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function VenuesPage() {
  // サンプルデータ（26スペース）
  const venues = [
    { id: 1, name: "スペースA", type: "イベント", maxVehicles: 5, feeRate: "10%", status: "利用可能" },
    { id: 2, name: "スペースB", type: "大学", maxVehicles: 3, feeRate: "8%", status: "利用可能" },
    { id: 3, name: "スペースC", type: "商業施設", maxVehicles: 10, feeRate: "12%", status: "利用可能" },
  ]

  const typeColors: Record<string, string> = {
    イベント: "bg-blue-100 text-blue-800",
    大学: "bg-green-100 text-green-800",
    商業施設: "bg-purple-100 text-purple-800",
    サービス顧客: "bg-orange-100 text-orange-800",
    公共施設: "bg-red-100 text-red-800",
    オフィスビル: "bg-gray-100 text-gray-800",
  }

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">出展先管理（26スペース）</h1>
          <Button>新規出展先登録</Button>
        </div>

        <Card className="p-6">
          <div className="mb-6 flex gap-4">
            <Input placeholder="スペース名で検索" className="max-w-xs" />
            <Input placeholder="種類で検索" className="max-w-xs" />
            <Button variant="outline">検索</Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>スペース名</TableHead>
                <TableHead>種類</TableHead>
                <TableHead>最大出店台数</TableHead>
                <TableHead>手数料率</TableHead>
                <TableHead>ステータス</TableHead>
                <TableHead>操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {venues.map((venue) => (
                <TableRow key={venue.id}>
                  <TableCell>{venue.id}</TableCell>
                  <TableCell className="font-medium">{venue.name}</TableCell>
                  <TableCell>
                    <Badge className={typeColors[venue.type] || ""}>
                      {venue.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{venue.maxVehicles}台</TableCell>
                  <TableCell>{venue.feeRate}</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 rounded text-sm bg-green-100 text-green-800">
                      {venue.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">詳細</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </AppLayout>
  )
}

