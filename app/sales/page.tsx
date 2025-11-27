import { AppLayout } from "@/components/app-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SalesPage() {
  // サンプルデータ
  const sales = [
    { id: 1, date: "2024/04/01", customerName: "山田太郎", venue: "スペースA", amount: 150000 },
    { id: 2, date: "2024/04/02", customerName: "佐藤花子", venue: "スペースB", amount: 200000 },
    { id: 3, date: "2024/04/03", customerName: "鈴木一郎", venue: "スペースC", amount: 180000 },
  ]

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">売上管理</h1>
          <div className="flex gap-3">
            <Button variant="outline">CSV出力</Button>
            <Button>売上データ入力</Button>
          </div>
        </div>

        <Tabs defaultValue="daily" className="space-y-6">
          <TabsList>
            <TabsTrigger value="daily">日別</TabsTrigger>
            <TabsTrigger value="monthly">月別</TabsTrigger>
            <TabsTrigger value="venue">スペース別</TabsTrigger>
            <TabsTrigger value="customer">顧客別</TabsTrigger>
          </TabsList>

          <TabsContent value="daily">
            <Card className="p-6">
              <div className="mb-6 flex gap-4">
                <Input type="date" className="max-w-xs" />
                <Button variant="outline">検索</Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>日付</TableHead>
                    <TableHead>顧客名</TableHead>
                    <TableHead>スペース名</TableHead>
                    <TableHead>売上金額</TableHead>
                    <TableHead>操作</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sales.map((sale) => (
                    <TableRow key={sale.id}>
                      <TableCell>{sale.date}</TableCell>
                      <TableCell className="font-medium">{sale.customerName}</TableCell>
                      <TableCell>{sale.venue}</TableCell>
                      <TableCell>¥{sale.amount.toLocaleString()}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">編集</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  )
}

