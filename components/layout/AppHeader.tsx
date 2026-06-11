import { Bell, ChevronDown, Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-17 items-center justify-between border-b bg-white px-7">
      <div className="relative w-103.75">
        <Search
          size={20}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <Input
          placeholder="Tìm kiếm biểu mẫu, phản hồi hoặc mẫu..."
          className="h-10 rounded-lg pl-10"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="relative text-slate-600">
          <Bell size={22} />

          <span className="absolute -right-1 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            3
          </span>
        </button>

        <button className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatar.jpg" />
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>

            <span className="font-medium text-slate-900">Nguyễn Văn A</span>
          <ChevronDown size={18} className="text-slate-500" />
        </button>
      </div>
    </header>
  );
}
