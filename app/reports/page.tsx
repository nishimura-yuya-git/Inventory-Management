import { AppLayout } from "@/components/app-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ReportsPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">レポート</h1>
          <Button>レポート出力</Button>
        </div>

        <Tabs defaultValue="sales" className="space-y-6">
          <TabsList>
            <TabsTrigger value="sales">売上レポート</TabsTrigger>
            <TabsTrigger value="reservations">予約状況レポート</TabsTrigger>
            <TabsTrigger value="inventory">在庫状況レポート</TabsTrigger>
            <TabsTrigger value="scores">スコア分析レポート</TabsTrigger>
          </TabsList>

          <TabsContent value="sales">
            <Card className="p-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">売上レポート</h2>
                <div className="flex gap-3">
                  <Button variant="outline">日別レポート</Button>
                  <Button variant="outline">月別レポート</Button>
                  <Button variant="outline">スペース別レポート</Button>
                  <Button variant="outline">顧客別レポート</Button>
                </div>
                <div className="flex gap-3">
                  <Button>PDF出力</Button>
                  <Button variant="outline">Excel出力</Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="reservations">
            <Card className="p-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">予約状況レポート</h2>
                <div className="flex gap-3">
                  <Button>PDF出力</Button>
                  <Button variant="outline">Excel出力</Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="inventory">
            <Card className="p-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">在庫状況レポート</h2>
                <div className="flex gap-3">
                  <Button>PDF出力</Button>
                  <Button variant="outline">Excel出力</Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="scores">
            <Card className="p-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">スコア分析レポート</h2>
                <div className="flex gap-3">
                  <Button>PDF出力</Button>
                  <Button variant="outline">Excel出力</Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  )
}

