import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/DashboardLayout";
import { channelAttribution } from "@/lib/mock-data";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Attribution = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-[1400px]">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-2xl font-bold text-foreground">Marketing Attribution</h1>
          <p className="text-sm text-muted-foreground mt-1">Multi-touch attribution with Shapley value model</p>
        </motion.div>

        {/* Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {channelAttribution.map((ch, i) => (
            <motion.div key={ch.channel} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-border bg-card p-5 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-card-foreground text-sm">{ch.channel}</h4>
              <div className="grid grid-cols-3 gap-2 mt-3">
                <div>
                  <div className="text-lg font-bold text-card-foreground">${(ch.revenue / 1000).toFixed(0)}K</div>
                  <div className="text-[10px] text-muted-foreground">Revenue</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-card-foreground">{ch.conversions.toLocaleString()}</div>
                  <div className="text-[10px] text-muted-foreground">Conversions</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-primary">{ch.roi > 0 ? `${ch.roi}x` : "N/A"}</div>
                  <div className="text-[10px] text-muted-foreground">ROI</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Revenue by Channel Chart */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-semibold text-card-foreground mb-4">Revenue by Channel</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={channelAttribution} barSize={36}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="channel" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
              <YAxis tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} tickFormatter={(v) => `$${v / 1000}k`} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} formatter={(v: number) => `$${v.toLocaleString()}`} />
              <Bar dataKey="revenue" fill="hsl(var(--chart-2))" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Attribution;
