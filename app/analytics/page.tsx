import { AppLayout } from "@/components/app-layout"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AnalyticsPage() {
  // サンプルデータ
  const scores = [
    {
      customerName: "山田太郎",
      salesPerHour: 85,
      avgTicketSize: 90,
      purchaseRate: 88,
      totalScore: 87.7,
      spaceSatisfaction: 4.5,
    },
    {
      customerName: "佐藤花子",
      salesPerHour: 92,
      avgTicketSize: 85,
      purchaseRate: 90,
      totalScore: 89.0,
      spaceSatisfaction: 4.8,
    },
    {
      customerName: "鈴木一郎",
      salesPerHour: 78,
      avgTicketSize: 88,
      purchaseRate: 82,
      totalScore: 82.7,
      spaceSatisfaction: 4.2,
    },
  ]

  return (
    <AppLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">分析機能（スコアリング）</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-6">
            <div className="text-sm text-gray-600 mb-2">時間あたり売上スコア</div>
            <div className="text-3xl font-bold text-blue-600">85.0</div>
          </Card>
          <Card className="p-6">
            <div className="text-sm text-gray-600 mb-2">客単価スコア</div>
            <div className="text-3xl font-bold text-green-600">87.7</div>
          </Card>
          <Card className="p-6">
            <div className="text-sm text-gray-600 mb-2">購入率スコア</div>
            <div className="text-3xl font-bold text-purple-600">86.7</div>
          </Card>
          <Card className="p-6">
            <div className="text-sm text-gray-600 mb-2">総合スコア</div>
            <div className="text-3xl font-bold text-orange-600">86.5</div>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">顧客別スコア一覧</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>顧客名</TableHead>
                <TableHead>時間あたり売上スコア</TableHead>
                <TableHead>客単価スコア</TableHead>
                <TableHead>購入率スコア</TableHead>
                <TableHead>総合スコア</TableHead>
                <TableHead>スペース満足度</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scores.map((score, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{score.customerName}</TableCell>
                  <TableCell>{score.salesPerHour}</TableCell>
                  <TableCell>{score.avgTicketSize}</TableCell>
                  <TableCell>{score.purchaseRate}</TableCell>
                  <TableCell className="font-semibold">{score.totalScore}</TableCell>
                  <TableCell>{score.spaceSatisfaction}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </AppLayout>
  )
}

