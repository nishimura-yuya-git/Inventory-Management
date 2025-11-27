import { AppLayout } from "@/components/app-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function CustomersPage() {
  // サンプルデータ
  const customers = [
    { id: 1, name: "山田太郎", status: "登録完了", paymentMethods: "現金、クレジットカード", genres: "和食、麺類" },
    { id: 2, name: "佐藤花子", status: "登録中", paymentMethods: "QR・コード決済", genres: "スイーツ・ドリンク" },
    { id: 3, name: "鈴木一郎", status: "登録完了", paymentMethods: "現金、交通系電子マネー", genres: "洋食、パン・サンドイッチ・ハンバーガー" },
  ]

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">顧客一覧</h1>
          <div className="flex gap-3">
            <Button variant="outline">CSV出力</Button>
            <Button>新規顧客登録</Button>
          </div>
        </div>

        <Card className="p-6">
          <div className="mb-6 flex gap-4">
            <Input placeholder="顧客名で検索" className="max-w-xs" />
            <Input placeholder="決済方法で検索" className="max-w-xs" />
            <Input placeholder="商品ジャンルで検索" className="max-w-xs" />
            <Button variant="outline">検索</Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>顧客ID</TableHead>
                <TableHead>顧客名</TableHead>
                <TableHead>ステータス</TableHead>
                <TableHead>決済方法</TableHead>
                <TableHead>商品ジャンル</TableHead>
                <TableHead>操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>{customer.id}</TableCell>
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded text-sm ${
                      customer.status === "登録完了" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {customer.status}
                    </span>
                  </TableCell>
                  <TableCell>{customer.paymentMethods}</TableCell>
                  <TableCell>{customer.genres}</TableCell>
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

