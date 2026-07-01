"use client";

import { Users, TrendingUp, Mail, FileText, PhoneCall, Globe, CheckCircle, BarChart } from "lucide-react";

const TopCard = ({ title, value, icon: Icon, trend, trendValue }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex items-start justify-between">
    <div>
      <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
      <h3 className="text-3xl font-bold text-slate-800">{value}</h3>
      {trend && (
        <p className={`text-xs mt-2 font-medium flex items-center ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
          {trend === 'up' ? '↑' : '↓'} {trendValue}
        </p>
      )}
    </div>
    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
      <Icon className="h-6 w-6" />
    </div>
  </div>
);

export default function AdminDashboard() {
  const cards = [
    { title: "Today's Leads", value: "12", icon: Users, trend: "up", trendValue: "15% vs yesterday" },
    { title: "Total Leads", value: "1,248", icon: TrendingUp, trend: "up", trendValue: "12% this month" },
    { title: "Unread Messages", value: "5", icon: Mail },
    { title: "Consultations", value: "48", icon: PhoneCall, trend: "up", trendValue: "5% this week" },
    { title: "SEO Audits", value: "124", icon: BarChart },
    { title: "Quote Requests", value: "32", icon: FileText },
    { title: "Conversion Rate", value: "4.2%", icon: CheckCircle, trend: "up", trendValue: "0.5% this month" },
    { title: "Website Audits", value: "86", icon: Globe },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Dashboard Overview</h1>
          <p className="text-slate-500 text-sm mt-1">Welcome back, Admin. Here's what's happening today.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <TopCard key={idx} {...card} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-100 p-6 h-96 flex items-center justify-center">
          {/* Chart Placeholder */}
          <div className="text-center text-slate-400">
            <BarChart className="h-16 w-16 mx-auto mb-4 opacity-50" />
            <p>Lead Analytics Chart will render here</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          <h3 className="font-bold text-slate-800 mb-4">Recent Leads</h3>
          <div className="space-y-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="flex items-center justify-between pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-medium">
                    {`L${i}`}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-800">New Lead {i}</p>
                    <p className="text-xs text-slate-500">Just now • SEO Audit</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  New
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
