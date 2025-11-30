import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Zen_Kaku_Gothic_New } from "next/font/google"
import "./globals.css"

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zen-kaku-gothic-new",
  fallback: [
    "Noto Sans JP",
    "ヒラギノ明朝 ProN W3",
    "HiraMinProN-W3",
    "HG明朝E",
    "ＭＳ Ｐ明朝",
    "MS PMincho",
    "MS 明朝",
    "serif",
  ],
})

export const metadata: Metadata = {
  title: "在庫管理システム",
  description: "モダンな在庫管理・POS管理システム",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={zenKakuGothicNew.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
