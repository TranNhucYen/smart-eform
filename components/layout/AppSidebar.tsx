  import { FileText, HelpCircle, Home, Settings } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Trang chủ", href: "/home", icon: Home },
  { label: "Biểu mẫu", href: "/forms", icon: FileText },
  { label: "Cài đặt", href: "/settings", icon: Settings },
  { label: "Hỗ trợ", href: "/supports", icon: HelpCircle },
];

export default function AppSidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-66.25 flex-col bg-[#0f1d33] px-5 py-5 text-white">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 font-bold">
          S
        </div>
        <h1 className="text-2xl font-bold">eform</h1>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <Icon size={21} className="text-slate-400" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-4">
        <Button className="w-full bg-blue-600 hover:bg-blue-700">
            Nâng cấp Pro
        </Button>

        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/10 hover:text-white">
          <HelpCircle size={20} />
          <span>Trợ giúp & Hỗ trợ</span>
        </button>
      </div>
    </aside>
  );
}
