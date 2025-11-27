import { AppLayout } from "@/components/app-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CustomerRegisterForm1Page() {
  return (
    <AppLayout>
      <div className="space-y-4 sm:space-y-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">顧客登録フォーム①</h1>

        <Card className="p-4 sm:p-8">
          <form className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <Label htmlFor="customerName" className="text-sm">顧客名 <span className="text-red-500">*</span></Label>
                <Input id="customerName" placeholder="顧客名を入力" required className="text-sm" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm">メールアドレス <span className="text-red-500">*</span></Label>
                <Input id="email" type="email" placeholder="example@email.com" required className="text-sm" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm">電話番号 <span className="text-red-500">*</span></Label>
                <Input id="phone" type="tel" placeholder="090-1234-5678" required className="text-sm" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="postalCode" className="text-sm">郵便番号</Label>
                <Input id="postalCode" placeholder="123-4567" className="text-sm" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="address" className="text-sm">住所</Label>
                <Input id="address" placeholder="都道府県市区町村番地" className="text-sm" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="prefecture" className="text-sm">都道府県</Label>
                <Input id="prefecture" placeholder="都道府県を選択" className="text-sm" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="departurePoint" className="text-sm">出発地点</Label>
                <Input id="departurePoint" placeholder="47都道府県エリア選択" className="text-sm" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-semibold">ファイルアップロード</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm">営業許可証</Label>
                  <Input type="file" accept=".pdf,.jpg,.png" className="text-sm" />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm">保険証券</Label>
                  <Input type="file" accept=".pdf,.jpg,.png" className="text-sm" />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm">食品衛生責任者証明書</Label>
                  <Input type="file" accept=".pdf,.jpg,.png" className="text-sm" />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm">運転免許証・車検証</Label>
                  <Input type="file" accept=".pdf,.jpg,.png" className="text-sm" />
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-500">最大100MB、10ファイルまで</p>
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3 pt-4 sm:pt-6">
              <Button type="button" variant="outline" className="w-full sm:w-auto order-2 sm:order-1">キャンセル</Button>
              <Button type="submit" className="w-full sm:w-auto order-1 sm:order-2">登録</Button>
            </div>
          </form>
        </Card>
      </div>
    </AppLayout>
  )
}
