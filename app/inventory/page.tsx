import { AppLayout } from "@/components/app-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function InventoryPage() {
  // サンプルデータ
  const inventory = [
    { id: 1, name: "キッチンカーA", total: 10, available: 8, reserved: 2, status: "正常" },
    { id: 2, name: "キッチンカーB", total: 5, available: 1, reserved: 4, status: "在庫不足" },
    { id: 3, name: "キッチンカーC", total: 8, available: 8, reserved: 0, status: "正常" },
  ]

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">在庫管理</h1>
          <Button>在庫登録</Button>
        </div>

        <Alert className="bg-yellow-50 border-yellow-200">
          <AlertDescription className="text-yellow-800">
            キッチンカーBが在庫不足です。早急に確認してください。
          </AlertDescription>
        </Alert>

        <Card className="p-6">
          <div className="mb-6 flex gap-4">
            <Input placeholder="キッチンカー名で検索" className="max-w-xs" />
            <Button variant="outline">検索</Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>キッチンカー名</TableHead>
                <TableHead>総在庫数</TableHead>
                <TableHead>利用可能数</TableHead>
                <TableHead>予約済み数</TableHead>
                <TableHead>ステータス</TableHead>
                <TableHead>操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.total}</TableCell>
                  <TableCell>{item.available}</TableCell>
                  <TableCell>{item.reserved}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded text-sm ${
                      item.status === "正常" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}>
                      {item.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">編集</Button>
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

