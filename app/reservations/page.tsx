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
      <div className="space-y-4 sm:space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">予約一覧</h1>
          <Button size="sm" className="w-full sm:w-auto text-xs sm:text-sm">新規予約登録</Button>
        </div>

        <Card className="p-4 sm:p-6">
          <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row gap-2 sm:gap-4">
            <Input placeholder="顧客名で検索" className="w-full sm:max-w-xs text-sm" />
            <Input placeholder="スペース名で検索" className="w-full sm:max-w-xs text-sm hidden sm:block" />
            <Button variant="outline" size="sm" className="w-full sm:w-auto">検索</Button>
          </div>

          {/* モバイル用カードリスト */}
          <div className="sm:hidden space-y-4">
            {reservations.map((reservation) => (
              <Card key={reservation.id} className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-medium text-gray-900">{reservation.customerName}</div>
                    <div className="text-xs text-gray-500">予約ID: {reservation.id}</div>
                  </div>
                  <Badge className={`${statusColors[reservation.status] || ""} text-xs`}>
                    {reservation.status}
                  </Badge>
                </div>
                <div className="text-xs text-gray-600 mb-1">
                  <span className="font-medium">スペース:</span> {reservation.venue}
                </div>
                <div className="text-xs text-gray-600 mb-3">
                  <span className="font-medium">出店日:</span> {reservation.date}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 text-xs">編集</Button>
                  <Button variant="outline" size="sm" className="flex-1 text-xs">削除</Button>
                </div>
              </Card>
            ))}
          </div>

          {/* デスクトップ用テーブル */}
          <div className="hidden sm:block overflow-x-auto">
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
          </div>
        </Card>
      </div>
    </AppLayout>
  )
}
