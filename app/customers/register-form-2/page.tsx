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
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">顧客登録フォーム②</h1>

        <Card className="p-8">
          <form className="space-y-8">
            <div className="space-y-2">
              <Label htmlFor="customerName">顧客名 <span className="text-red-500">*</span></Label>
              <Input id="customerName" placeholder="顧客名を入力" required />
            </div>

            <div className="space-y-4">
              <Label>決済方法 <span className="text-red-500">*</span>（複数選択可）</Label>
              <div className="grid grid-cols-2 gap-3">
                {paymentMethods.map((method) => (
                  <div key={method} className="flex items-center space-x-2">
                    <Checkbox id={method} />
                    <Label htmlFor={method} className="font-normal cursor-pointer">{method}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Label>商品ジャンル <span className="text-red-500">*</span>（複数選択可）</Label>
              <div className="grid grid-cols-2 gap-3">
                {genres.map((genre) => (
                  <div key={genre} className="flex items-center space-x-2">
                    <Checkbox id={genre} />
                    <Label htmlFor={genre} className="font-normal cursor-pointer">{genre}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">販売商品情報</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="productName">販売商品名 <span className="text-red-500">*</span></Label>
                  <Input id="productName" placeholder="商品名を入力" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="productPrice">価格 <span className="text-red-500">*</span></Label>
                  <Input id="productPrice" type="number" placeholder="1000" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="productPoint">商品の一押しポイント</Label>
                  <Textarea id="productPoint" placeholder="商品の特徴やアピールポイントを入力" rows={4} />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">車両情報</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="vehicleLength">長さ（m）</Label>
                  <Input id="vehicleLength" type="number" placeholder="5.0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vehicleWidth">幅（m）</Label>
                  <Input id="vehicleWidth" type="number" placeholder="2.0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vehicleHeight">高さ（m）</Label>
                  <Input id="vehicleHeight" type="number" placeholder="2.5" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="vehicleType">車種</Label>
                  <Input id="vehicleType" placeholder="車種を入力" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vehicleNumber">車両ナンバー</Label>
                  <Input id="vehicleNumber" placeholder="車両ナンバーを入力" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">写真アップロード</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>販売商品写真 <span className="text-red-500">*</span>（4枚以上必須）</Label>
                  <Input type="file" accept="image/*" multiple />
                  <p className="text-sm text-gray-500">4枚以上の写真をアップロードしてください</p>
                </div>
                <div className="space-y-2">
                  <Label>キッチンカー本体写真 <span className="text-red-500">*</span></Label>
                  <Input type="file" accept="image/*" />
                </div>
              </div>
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

