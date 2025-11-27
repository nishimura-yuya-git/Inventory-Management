import { AppLayout } from "@/components/app-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function CustomerRegisterForm1Page() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">顧客登録フォーム①</h1>

        <Card className="p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="customerName">顧客名 <span className="text-red-500">*</span></Label>
                <Input id="customerName" placeholder="顧客名を入力" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">メールアドレス <span className="text-red-500">*</span></Label>
                <Input id="email" type="email" placeholder="example@email.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">電話番号 <span className="text-red-500">*</span></Label>
                <Input id="phone" type="tel" placeholder="090-1234-5678" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="postalCode">郵便番号</Label>
                <Input id="postalCode" placeholder="123-4567" />
              </div>
              <div className="space-y-2 col-span-2">
                <Label htmlFor="address">住所</Label>
                <Input id="address" placeholder="都道府県市区町村番地" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="prefecture">都道府県</Label>
                <Input id="prefecture" placeholder="都道府県を選択" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="departurePoint">出発地点</Label>
                <Input id="departurePoint" placeholder="47都道府県エリア選択" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">ファイルアップロード</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>営業許可証</Label>
                  <Input type="file" accept=".pdf,.jpg,.png" />
                </div>
                <div className="space-y-2">
                  <Label>保険証券</Label>
                  <Input type="file" accept=".pdf,.jpg,.png" />
                </div>
                <div className="space-y-2">
                  <Label>食品衛生責任者証明書</Label>
                  <Input type="file" accept=".pdf,.jpg,.png" />
                </div>
                <div className="space-y-2">
                  <Label>運転免許証・車検証</Label>
                  <Input type="file" accept=".pdf,.jpg,.png" />
                </div>
              </div>
              <p className="text-sm text-gray-500">最大100MB、10ファイルまで</p>
            </div>

            <div className="flex justify-end gap-3 pt-6">
              <Button type="button" variant="outline">キャンセル</Button>
              <Button type="submit">登録</Button>
            </div>
          </form>
        </Card>
      </div>
    </AppLayout>
  )
}

