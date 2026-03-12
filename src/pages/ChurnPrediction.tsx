import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/DashboardLayout";
import { churnRiskData, churnFeatureImportance } from "@/lib/mock-data";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { AlertTriangle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChurnPrediction = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-[1400px]">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Churn Prediction</h1>
            <p className="text-sm text-muted-foreground mt-1">XGBoost model • AUC-ROC: 0.87 • Updated 2h ago</p>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" /> Export High-Risk List
          </Button>
        </motion.div>

        {/* Model Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "High Risk Customers", value: "1,247", sub: "Risk score > 70" },
            { label: "Model Accuracy", value: "87.2%", sub: "AUC-ROC score" },
            { label: "Predicted Revenue at Risk", value: "$482K", sub: "Next 90 days" },
          ].map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-border bg-card p-5">
              <div className="text-sm text-muted-foreground">{stat.label}</div>
              <div className="text-2xl font-bold text-card-foreground mt-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Feature Importance */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="rounded-xl border border-border bg-card p-5">
            <h3 className="text-sm font-semibold text-card-foreground mb-4">Feature Importance</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={churnFeatureImportance} layout="vertical" barSize={18}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
                <XAxis type="number" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} tickFormatter={(v) => `${(v * 100).toFixed(0)}%`} />
                <YAxis type="category" dataKey="feature" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} width={160} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} formatter={(v: number) => `${(v * 100).toFixed(1)}%`} />
                <Bar dataKey="importance" fill="hsl(var(--chart-4))" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* High-Risk Table */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="rounded-xl border border-border bg-card p-5">
            <h3 className="text-sm font-semibold text-card-foreground mb-4">Highest Risk Customers</h3>
            <div className="overflow-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 text-muted-foreground font-medium text-xs">Customer</th>
                    <th className="text-left py-2 text-muted-foreground font-medium text-xs">Risk</th>
                    <th className="text-left py-2 text-muted-foreground font-medium text-xs">Last Purchase</th>
                    <th className="text-right py-2 text-muted-foreground font-medium text-xs">CLV</th>
                  </tr>
                </thead>
                <tbody>
                  {churnRiskData.map((c) => (
                    <tr key={c.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                      <td className="py-2.5">
                        <div className="font-medium text-card-foreground text-xs">{c.name}</div>
                        <div className="text-[10px] text-muted-foreground">{c.id}</div>
                      </td>
                      <td className="py-2.5">
                        <div className="flex items-center gap-1.5">
                          <div className={`w-2 h-2 rounded-full ${c.riskScore > 80 ? "bg-destructive" : c.riskScore > 60 ? "bg-warning" : "bg-success"}`} />
                          <span className="text-xs font-medium text-card-foreground">{c.riskScore}%</span>
                        </div>
                      </td>
                      <td className="py-2.5 text-xs text-muted-foreground">{c.lastPurchase}</td>
                      <td className="py-2.5 text-right text-xs font-medium text-card-foreground">${c.clv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ChurnPrediction;
