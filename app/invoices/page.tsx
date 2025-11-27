import { AppLayout } from "@/components/app-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function InvoicesPage() {
  // サンプルデータ
  const invoices = [
    { id: 1, invoiceNumber: "INV-2024-001", customerName: "山田太郎", amount: 150000, date: "2024/04/01", status: "未払い" },
    { id: 2, invoiceNumber: "INV-2024-002", customerName: "佐藤花子", amount: 200000, date: "2024/04/02", status: "支払済み" },
    { id: 3, invoiceNumber: "INV-2024-003", customerName: "鈴木一郎", amount: 180000, date: "2024/04/03", status: "未払い" },
  ]

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">請求書管理</h1>
          <Button>請求書生成</Button>
        </div>

        <Card className="p-6">
          <div className="mb-6 flex gap-4">
            <Input placeholder="請求書番号で検索" className="max-w-xs" />
            <Input placeholder="顧客名で検索" className="max-w-xs" />
            <Button variant="outline">検索</Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>請求書番号</TableHead>
                <TableHead>顧客名</TableHead>
                <TableHead>金額</TableHead>
                <TableHead>発行日</TableHead>
                <TableHead>ステータス</TableHead>
                <TableHead>操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">{invoice.invoiceNumber}</TableCell>
                  <TableCell>{invoice.customerName}</TableCell>
                  <TableCell>¥{invoice.amount.toLocaleString()}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded text-sm ${
                      invoice.status === "支払済み" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {invoice.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">PDF出力</Button>
                      <Button variant="ghost" size="sm">編集</Button>
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

