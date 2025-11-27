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
      <div className="space-y-4 sm:space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">顧客一覧</h1>
          <div className="flex gap-2 sm:gap-3">
            <Button variant="outline" size="sm" className="text-xs sm:text-sm">CSV出力</Button>
            <Button size="sm" className="text-xs sm:text-sm">新規顧客登録</Button>
          </div>
        </div>

        <Card className="p-4 sm:p-6">
          <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row gap-2 sm:gap-4">
            <Input placeholder="顧客名で検索" className="w-full sm:max-w-xs text-sm" />
            <Input placeholder="決済方法で検索" className="w-full sm:max-w-xs text-sm hidden sm:block" />
            <Input placeholder="商品ジャンルで検索" className="w-full sm:max-w-xs text-sm hidden sm:block" />
            <Button variant="outline" size="sm" className="w-full sm:w-auto">検索</Button>
          </div>

          {/* モバイル用カードリスト */}
          <div className="sm:hidden space-y-4">
            {customers.map((customer) => (
              <Card key={customer.id} className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-medium text-gray-900">{customer.name}</div>
                    <div className="text-xs text-gray-500">ID: {customer.id}</div>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${
                    customer.status === "登録完了" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {customer.status}
                  </span>
                </div>
                <div className="text-xs text-gray-600 mb-1">
                  <span className="font-medium">決済:</span> {customer.paymentMethods}
                </div>
                <div className="text-xs text-gray-600 mb-3">
                  <span className="font-medium">ジャンル:</span> {customer.genres}
                </div>
                <Button variant="outline" size="sm" className="w-full text-xs">詳細を見る</Button>
              </Card>
            ))}
          </div>

          {/* デスクトップ用テーブル */}
          <div className="hidden sm:block overflow-x-auto">
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
          </div>
        </Card>
      </div>
    </AppLayout>
  )
}
