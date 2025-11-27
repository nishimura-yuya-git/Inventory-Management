"use client"

import type React from "react"

import { useState } from "react"
import {
  LayoutDashboard,
  Store,
  Users,
  UserCircle,
  Package,
  Calendar,
  FileText,
  BarChart3,
  Receipt,
  ClipboardList,
  Settings,
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  type LucideIcon,
} from "lucide-react"

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
}

interface MenuItem {
  icon: LucideIcon
  label: string
  href?: string
  subItems?: SubMenuItem[]
}

// 高級感のあるアイコンコンポーネント
const IconWrapper = ({ Icon, size = 22 }: { Icon: LucideIcon; size?: number }) => (
  <Icon size={size} strokeWidth={2.5} className="shrink-0" />
)

interface SubMenuItem {
  label: string
  href?: string
  subItems?: { label: string; href: string }[]
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>(["顧客管理", "出店予約管理"])

  const menuItems: MenuItem[] = [
    { icon: LayoutDashboard, label: "ダッシュボード", href: "/" },
    {
      icon: UserCircle,
      label: "顧客管理",
      subItems: [
        { label: "顧客一覧", href: "/customers" },
        { label: "顧客登録フォーム①", href: "/customers/register-form-1" },
        { label: "顧客登録フォーム②", href: "/customers/register-form-2" },
      ],
    },
    {
      icon: Calendar,
      label: "出店予約管理",
      subItems: [
        { label: "予約一覧", href: "/reservations" },
        { label: "予約カレンダー", href: "/reservations/calendar" },
        { label: "出店エントリーフォーム", href: "/reservations/entry-form" },
      ],
    },
    { icon: Package, label: "在庫管理", href: "/inventory" },
    { icon: Store, label: "出展先管理", href: "/venues" },
    { icon: BarChart3, label: "売上管理", href: "/sales" },
    { icon: Receipt, label: "請求書管理", href: "/invoices" },
    { icon: ClipboardList, label: "分析機能", href: "/analytics" },
    { icon: Calendar, label: "カレンダー", href: "/calendar" },
    { icon: FileText, label: "レポート", href: "/reports" },
    { icon: Settings, label: "設定", href: "/settings" },
  ]

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) => (prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]))
  }

  const renderSubItems = (subItems: SubMenuItem[], level = 1) => {
    return subItems.map((subItem, index) => (
      <div key={index}>
        {subItem.subItems ? (
          <div>
            <button
              onClick={() => toggleExpand(subItem.label)}
              className={`w-full flex items-center justify-between px-6 py-3 text-sm text-white/80 hover:bg-[#00406b] transition-colors ${
                expandedItems.includes(subItem.label) ? "bg-[#002a47]" : ""
              }`}
              style={{ paddingLeft: `${(level + 1) * 20}px` }}
            >
              <span>{subItem.label}</span>
              {expandedItems.includes(subItem.label) ? (
                <ChevronDown size={14} strokeWidth={2.5} />
              ) : (
                <ChevronRight size={14} strokeWidth={2.5} />
              )}
            </button>
            {expandedItems.includes(subItem.label) && (
              <div className="bg-[#00223b]">
                {subItem.subItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="block px-6 py-3 text-sm text-white/70 hover:bg-[#00406b] hover:text-white transition-colors"
                    style={{ paddingLeft: `${(level + 2) * 20}px` }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ) : (
          <a
            href={subItem.href}
            className="flex items-center justify-between px-6 py-3 text-sm text-white/80 hover:bg-[#00406b] hover:text-white transition-colors"
            style={{ paddingLeft: `${(level + 1) * 20}px` }}
          >
            <span>{subItem.label}</span>
            <ChevronRight size={14} strokeWidth={2.5} className="opacity-50" />
          </a>
        )}
      </div>
    ))
  }

  return (
    <aside
      className={`bg-[#003355] text-white flex flex-col transition-all duration-300 shadow-xl z-10 ${
        collapsed ? "w-20" : "w-72"
      }`}
    >
      <nav className="flex-1 py-4 overflow-y-auto">
        {menuItems.map((item, index) => (
          <div key={index}>
            {item.subItems ? (
              <div>
                <button
                  onClick={() => toggleExpand(item.label)}
                  className={`w-full flex items-center gap-4 px-6 py-4 hover:bg-[#00406b] transition-colors border-l-4 ${
                    expandedItems.includes(item.label)
                      ? "bg-[#002a47] border-blue-400 text-white"
                      : "border-transparent text-white/90"
                  }`}
                >
                  <IconWrapper Icon={item.icon} size={22} />
                  {!collapsed && (
                    <>
                      <span className="flex-1 text-left text-base font-medium tracking-wide">{item.label}</span>
                      {expandedItems.includes(item.label) ? (
                        <ChevronDown size={18} strokeWidth={2.5} />
                      ) : (
                        <ChevronRight size={18} strokeWidth={2.5} />
                      )}
                    </>
                  )}
                </button>
                {!collapsed && expandedItems.includes(item.label) && (
                  <div className="bg-[#002a47]">{renderSubItems(item.subItems)}</div>
                )}
              </div>
            ) : (
              <a
                href={item.href}
                className="flex items-center gap-4 px-6 py-4 hover:bg-[#00406b] transition-colors border-l-4 border-transparent hover:border-blue-400"
              >
                <IconWrapper Icon={item.icon} size={22} />
                {!collapsed && (
                  <>
                    <span className="flex-1 text-base font-medium tracking-wide">{item.label}</span>
                    <ChevronRight size={18} strokeWidth={2.5} className="opacity-50" />
                  </>
                )}
              </a>
            )}
          </div>
        ))}
      </nav>
      <button
        onClick={onToggle}
        className="p-5 hover:bg-[#00406b] transition-colors border-t border-[#00406b]/50 flex justify-center"
      >
        <ChevronLeft size={24} strokeWidth={2.5} className={`transition-transform ${collapsed ? "rotate-180" : ""}`} />
      </button>
    </aside>
  )
}
