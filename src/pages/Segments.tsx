import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/DashboardLayout";
import { segmentData, clusterData } from "@/lib/mock-data";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Users, DollarSign, TrendingUp } from "lucide-react";

const segmentDetails = [
  { name: "VIP Customers", description: "High frequency, high value shoppers with strong brand loyalty", avgClv: "$2,450", retention: "94%", icon: "👑" },
  { name: "Frequent Buyers", description: "Regular purchasers with moderate basket sizes", avgClv: "$890", retention: "78%", icon: "🔄" },
  { name: "Price Sensitive", description: "Deal-driven customers who respond to promotions", avgClv: "$340", retention: "52%", icon: "💰" },
  { name: "At-Risk", description: "Previously active customers showing disengagement signals", avgClv: "$720", retention: "31%", icon: "⚠️" },
  { name: "One-Time Buyers", description: "Single purchase customers with low engagement", avgClv: "$85", retention: "12%", icon: "1️⃣" },
];

const Segments = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-[1400px]">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-2xl font-bold text-foreground">Customer Segments</h1>
          <p className="text-sm text-muted-foreground mt-1">RFM-based clustering with K-Means algorithm</p>
        </motion.div>

        {/* Cluster Scatter Plot */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-semibold text-card-foreground mb-4">Customer Clusters (Recency vs Monetary)</h3>
          <ResponsiveContainer width="100%" height={350}>
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="recency" name="Recency Score" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} label={{ value: "Recency Score", position: "bottom", fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
              <YAxis dataKey="monetary" name="Monetary Score" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} label={{ value: "Monetary Score", angle: -90, position: "insideLeft", fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
              <Scatter data={clusterData} fill="hsl(var(--primary))">
                {clusterData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} fillOpacity={0.7} />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Segment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {segmentData.map((seg, i) => {
            const detail = segmentDetails[i];
            return (
              <motion.div key={seg.name} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.05 }}
                className="rounded-xl border border-border bg-card p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{detail.icon}</span>
                  <div>
                    <h4 className="font-semibold text-card-foreground text-sm">{seg.name}</h4>
                    <p className="text-xs text-muted-foreground">{detail.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-4">
                  <div className="text-center">
                    <Users className="h-3.5 w-3.5 mx-auto text-muted-foreground mb-1" />
                    <div className="text-sm font-bold text-card-foreground">{seg.count.toLocaleString()}</div>
                    <div className="text-[10px] text-muted-foreground">Customers</div>
                  </div>
                  <div className="text-center">
                    <DollarSign className="h-3.5 w-3.5 mx-auto text-muted-foreground mb-1" />
                    <div className="text-sm font-bold text-card-foreground">${(seg.revenue / 1000).toFixed(0)}K</div>
                    <div className="text-[10px] text-muted-foreground">Revenue</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-3.5 w-3.5 mx-auto text-muted-foreground mb-1" />
                    <div className="text-sm font-bold text-card-foreground">{detail.retention}</div>
                    <div className="text-[10px] text-muted-foreground">Retention</div>
                  </div>
                </div>
                <div className="mt-3 w-full bg-muted rounded-full h-1.5">
                  <div className="h-1.5 rounded-full" style={{ width: `${seg.value}%`, backgroundColor: seg.color }} />
                </div>
                <div className="text-[10px] text-muted-foreground mt-1">{seg.value}% of total base</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Segments;
