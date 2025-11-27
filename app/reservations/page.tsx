import { AppLayout } from "@/components/app-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function ReservationsPage() {
  // サンプルデータ
  const reservations = [
    { id: 1, customerName: "山田太郎", venue: "スペースA", date: "2024/04/01", status: "確定" },
    { id: 2, customerName: "佐藤花子", venue: "スペースB", date: "2024/04/02", status: "承認待ち" },
    { id: 3, customerName: "鈴木一郎", venue: "スペースC", date: "2024/04/03", status: "エントリー済み" },
  ]

  const statusColors: Record<string, string> = {
    確定: "bg-blue-100 text-blue-800",
    承認待ち: "bg-yellow-100 text-yellow-800",
    エントリー済み: "bg-gray-100 text-gray-800",
    キャンセル: "bg-red-100 text-red-800",
    出店完了: "bg-green-100 text-green-800",
  }

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">予約一覧</h1>
          <Button>新規予約登録</Button>
        </div>

        <Card className="p-6">
          <div className="mb-6 flex gap-4">
            <Input placeholder="顧客名で検索" className="max-w-xs" />
            <Input placeholder="スペース名で検索" className="max-w-xs" />
            <Button variant="outline">検索</Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>予約ID</TableHead>
                <TableHead>顧客名</TableHead>
                <TableHead>スペース名</TableHead>
                <TableHead>出店日</TableHead>
                <TableHead>ステータス</TableHead>
                <TableHead>操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reservations.map((reservation) => (
                <TableRow key={reservation.id}>
                  <TableCell>{reservation.id}</TableCell>
                  <TableCell className="font-medium">{reservation.customerName}</TableCell>
                  <TableCell>{reservation.venue}</TableCell>
                  <TableCell>{reservation.date}</TableCell>
                  <TableCell>
                    <Badge className={statusColors[reservation.status] || ""}>
                      {reservation.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">編集</Button>
                      <Button variant="ghost" size="sm">削除</Button>
                    </div>
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

