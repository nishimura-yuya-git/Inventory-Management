import { AppLayout } from "@/components/app-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function CustomerRegisterForm2Page() {
  const paymentMethods = [
    "現金",
    "クレジットカード",
    "QUICPay+",
    "iD",
    "交通系電子マネー",
    "QR・コード決済",
    "その他",
  ]

  const genres = [
    "和食",
    "洋食",
    "中華",
    "アジア・エスニック",
    "カレー",
    "丼もの",
    "肉",
    "魚介・海鮮",
    "創作料理",
    "麺類",
    "パン・サンドイッチ・ハンバーガー",
    "スイーツ・ドリンク",
    "その他",
  ]

  return (
    <AppLayout>
      <div className="space-y-4 sm:space-y-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">顧客登録フォーム②</h1>

        <Card className="p-4 sm:p-8">
          <form className="space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <Label htmlFor="customerName" className="text-sm">顧客名 <span className="text-red-500">*</span></Label>
              <Input id="customerName" placeholder="顧客名を入力" required className="text-sm" />
            </div>

            <div className="space-y-3 sm:space-y-4">
              <Label className="text-sm">決済方法 <span className="text-red-500">*</span>（複数選択可）</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {paymentMethods.map((method) => (
                  <div key={method} className="flex items-center space-x-2">
                    <Checkbox id={method} />
                    <Label htmlFor={method} className="font-normal cursor-pointer text-sm">{method}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <Label className="text-sm">商品ジャンル <span className="text-red-500">*</span>（複数選択可）</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {genres.map((genre) => (
                  <div key={genre} className="flex items-center space-x-2">
                    <Checkbox id={genre} />
                    <Label htmlFor={genre} className="font-normal cursor-pointer text-sm">{genre}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold">販売商品情報</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="productName" className="text-sm">販売商品名 <span className="text-red-500">*</span></Label>
                  <Input id="productName" placeholder="商品名を入力" required className="text-sm" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="productPrice" className="text-sm">価格 <span className="text-red-500">*</span></Label>
                  <Input id="productPrice" type="number" placeholder="1000" required className="text-sm" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="productPoint" className="text-sm">商品の一押しポイント</Label>
                  <Textarea id="productPoint" placeholder="商品の特徴やアピールポイントを入力" rows={4} className="text-sm" />
                </div>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold">車両情報</h3>
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                <div className="space-y-2">
                  <Label htmlFor="vehicleLength" className="text-xs sm:text-sm">長さ（m）</Label>
                  <Input id="vehicleLength" type="number" placeholder="5.0" className="text-sm" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vehicleWidth" className="text-xs sm:text-sm">幅（m）</Label>
                  <Input id="vehicleWidth" type="number" placeholder="2.0" className="text-sm" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vehicleHeight" className="text-xs sm:text-sm">高さ（m）</Label>
                  <Input id="vehicleHeight" type="number" placeholder="2.5" className="text-sm" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="vehicleType" className="text-sm">車種</Label>
                  <Input id="vehicleType" placeholder="車種を入力" className="text-sm" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vehicleNumber" className="text-sm">車両ナンバー</Label>
                  <Input id="vehicleNumber" placeholder="車両ナンバーを入力" className="text-sm" />
                </div>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold">写真アップロード</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-sm">販売商品写真 <span className="text-red-500">*</span>（4枚以上必須）</Label>
                  <Input type="file" accept="image/*" multiple className="text-sm" />
                  <p className="text-xs sm:text-sm text-gray-500">4枚以上の写真をアップロードしてください</p>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm">キッチンカー本体写真 <span className="text-red-500">*</span></Label>
                  <Input type="file" accept="image/*" className="text-sm" />
                </div>
              </div>
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
