import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/DashboardLayout";
import { clvDistribution, topCustomersByCLV } from "@/lib/mock-data";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Crown } from "lucide-react";

const CLV = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-[1400px]">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-2xl font-bold text-foreground">Customer Lifetime Value</h1>
          <p className="text-sm text-muted-foreground mt-1">BG/NBD + Gamma-Gamma model predictions</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Average CLV", value: "$342", sub: "Across all segments" },
            { label: "Top 10% CLV", value: "$2,870", sub: "VIP customer average" },
            { label: "Predicted 12mo Revenue", value: "$4.2M", sub: "Based on current models" },
          ].map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-border bg-card p-5">
              <div className="text-sm text-muted-foreground">{stat.label}</div>
              <div className="text-2xl font-bold text-card-foreground mt-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* CLV Distribution */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-semibold text-card-foreground mb-4">CLV Distribution</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={clvDistribution} barSize={40}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="range" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
              <YAxis tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
              <Bar dataKey="count" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Top Customers */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-semibold text-card-foreground mb-4 flex items-center gap-2">
            <Crown className="h-4 w-4 text-warning" /> Top Customers by Lifetime Value
          </h3>
          <div className="overflow-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  {["Rank", "Customer", "CLV", "Orders", "Avg Order", "Segment"].map(h => (
                    <th key={h} className="text-left py-2 text-muted-foreground font-medium text-xs">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {topCustomersByCLV.map((c, i) => (
                  <tr key={c.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-3 text-xs font-bold text-primary">#{i + 1}</td>
                    <td className="py-3">
                      <div className="text-xs font-medium text-card-foreground">{c.name}</div>
                      <div className="text-[10px] text-muted-foreground">{c.id}</div>
                    </td>
                    <td className="py-3 text-xs font-bold text-card-foreground">${c.clv.toLocaleString()}</td>
                    <td className="py-3 text-xs text-muted-foreground">{c.orders}</td>
                    <td className="py-3 text-xs text-muted-foreground">${c.avgOrder}</td>
                    <td className="py-3"><span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{c.segment}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default CLV;
