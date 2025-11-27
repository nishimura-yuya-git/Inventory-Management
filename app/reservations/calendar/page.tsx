import { AppLayout } from "@/components/app-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ReservationsCalendarPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">予約カレンダー</h1>
          <div className="flex gap-3">
            <Button variant="outline">月表示</Button>
            <Button variant="outline">週表示</Button>
            <Button variant="outline">日表示</Button>
          </div>
        </div>

        <Card className="p-6">
          <div className="mb-6 flex items-center gap-4">
            <Button variant="outline">前月</Button>
            <h2 className="text-xl font-semibold">2024年4月</h2>
            <Button variant="outline">次月</Button>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {["日", "月", "火", "水", "木", "金", "土"].map((day) => (
              <div key={day} className="text-center font-semibold p-2">
                {day}
              </div>
            ))}
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="border rounded p-2 min-h-[100px] hover:bg-gray-50 cursor-pointer"
              >
                <div className="text-sm font-medium mb-1">{i + 1}</div>
                <div className="space-y-1">
                  {i % 7 === 0 && (
                    <div className="bg-orange-100 text-orange-800 text-xs p-1 rounded">
                      空き枠
                    </div>
                  )}
                  {i % 5 === 0 && (
                    <div className="bg-blue-100 text-blue-800 text-xs p-1 rounded">
                      予約あり
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppLayout>
  )
}

