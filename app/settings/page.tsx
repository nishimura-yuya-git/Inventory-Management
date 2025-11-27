import { AppLayout } from "@/components/app-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">設定</h1>

        <Tabs defaultValue="masters" className="space-y-6">
          <TabsList>
            <TabsTrigger value="masters">マスタ管理</TabsTrigger>
            <TabsTrigger value="users">ユーザー管理</TabsTrigger>
            <TabsTrigger value="system">システム設定</TabsTrigger>
          </TabsList>

          <TabsContent value="masters">
            <Card className="p-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">決済方法マスタ（7種類）</h2>
                  <div className="space-y-2">
                    {["現金", "クレジットカード", "QUICPay+", "iD", "交通系電子マネー", "QR・コード決済", "その他"].map((method) => (
                      <div key={method} className="flex items-center justify-between p-3 border rounded">
                        <span>{method}</span>
                        <Button variant="ghost" size="sm">編集</Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">商品ジャンルマスタ（13種類）</h2>
                  <div className="space-y-2">
                    {["和食", "洋食", "中華", "アジア・エスニック", "カレー", "丼もの", "肉", "魚介・海鮮", "創作料理", "麺類", "パン・サンドイッチ・ハンバーガー", "スイーツ・ドリンク", "その他"].map((genre) => (
                      <div key={genre} className="flex items-center justify-between p-3 border rounded">
                        <span>{genre}</span>
                        <Button variant="ghost" size="sm">編集</Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">CSV取込</h2>
                  <div className="flex gap-3">
                    <Input type="file" accept=".csv" className="max-w-xs" />
                    <Button>一括登録</Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card className="p-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">ユーザー管理</h2>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <div className="font-medium">管理者</div>
                      <div className="text-sm text-gray-500">admin@example.com</div>
                    </div>
                    <Button variant="ghost" size="sm">編集</Button>
                  </div>
                </div>
                <Button>新規ユーザー追加</Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="system">
            <Card className="p-6">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>システム名</Label>
                  <Input defaultValue="在庫管理システム" />
                </div>
                <div className="space-y-2">
                  <Label>バックアップ設定</Label>
                  <div className="flex items-center gap-2">
                    <Input type="time" defaultValue="02:00" className="max-w-xs" />
                    <span className="text-sm text-gray-500">に自動バックアップを実行</span>
                  </div>
                </div>
                <Button>設定を保存</Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  )
}

