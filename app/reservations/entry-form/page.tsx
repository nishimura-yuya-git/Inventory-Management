import { AppLayout } from "@/components/app-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function ReservationEntryFormPage() {
  const spaces = Array.from({ length: 26 }, (_, i) => `スペース${String.fromCharCode(65 + i)}`)

  return (
    <AppLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">出店エントリーフォーム</h1>

        <Card className="p-8">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="customerName">顧客名 <span className="text-red-500">*</span></Label>
              <Input id="customerName" placeholder="顧客名を入力" required />
              <p className="text-sm text-gray-500">顧客登録が完了している必要があります</p>
            </div>

            <div className="space-y-4">
              <Label>スペース名 <span className="text-red-500">*</span>（26スペースから選択）</Label>
              <RadioGroup defaultValue="" className="grid grid-cols-2 gap-3">
                {spaces.map((space) => (
                  <div key={space} className="flex items-center space-x-2">
                    <RadioGroupItem value={space} id={space} />
                    <Label htmlFor={space} className="font-normal cursor-pointer">{space}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <Label>出店日 <span className="text-red-500">*</span>（最大10日まで）</Label>
              <div className="space-y-3">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Input type="date" className="max-w-xs" />
                    <Button type="button" variant="ghost" size="sm">削除</Button>
                  </div>
                ))}
              </div>
              <Button type="button" variant="outline" size="sm">出店日を追加</Button>
            </div>

            <div className="flex justify-end gap-3 pt-6">
              <Button type="button" variant="outline">キャンセル</Button>
              <Button type="submit">送信</Button>
            </div>
          </form>
        </Card>
      </div>
    </AppLayout>
  )
}

