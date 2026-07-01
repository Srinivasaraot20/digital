import Sidebar from "@/components/admin/Sidebar";
import { Bell, Search, User } from "lucide-react";

export default function AdminDashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center text-slate-500 max-w-md w-full">
            <Search className="h-5 w-5 mr-3 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search leads, contacts, or audits..." 
              className="bg-transparent border-none focus:outline-none w-full text-sm text-slate-800 placeholder-slate-400"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-slate-400 hover:text-primary transition-colors rounded-full hover:bg-slate-100">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shadow-sm">
              <User className="h-5 w-5" />
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
