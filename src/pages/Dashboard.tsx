import { motion } from "framer-motion";
import { DollarSign, ShoppingCart, Users, TrendingUp, Target, BarChart3, Activity, Percent } from "lucide-react";
import { KpiCard } from "@/components/KpiCard";
import { DashboardLayout } from "@/components/DashboardLayout";
import { kpiData, revenueData, funnelData, segmentData } from "@/lib/mock-data";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, Legend
} from "recharts";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-[1400px]">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-2xl font-bold text-foreground">Executive Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">Real-time customer intelligence overview</p>
        </motion.div>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <KpiCard title="Total Revenue" value={`$${(kpiData.totalRevenue.value / 1e6).toFixed(1)}M`} change={kpiData.totalRevenue.change} trend="up" icon={DollarSign} delay={0} />
          <KpiCard title="Conversion Rate" value={`${kpiData.conversionRate.value}%`} change={kpiData.conversionRate.change} trend="up" icon={Target} delay={0.05} />
          <KpiCard title="Active Customers" value={kpiData.activeCustomers.value.toLocaleString()} change={kpiData.activeCustomers.change} trend="up" icon={Users} delay={0.1} />
          <KpiCard title="Avg Order Value" value={`$${kpiData.avgOrderValue.value}`} change={kpiData.avgOrderValue.change} trend="up" icon={ShoppingCart} delay={0.15} />
          <KpiCard title="Retention Rate" value={`${kpiData.retentionRate.value}%`} change={kpiData.retentionRate.change} trend="down" icon={Activity} delay={0.2} />
          <KpiCard title="Churn Rate" value={`${kpiData.churnRate.value}%`} change={kpiData.churnRate.change} trend="up" icon={TrendingUp} delay={0.25} />
          <KpiCard title="Customer LTV" value={`$${kpiData.clv.value}`} change={kpiData.clv.change} trend="up" icon={BarChart3} delay={0.3} />
          <KpiCard title="Marketing ROI" value={`${kpiData.marketingROI.value}x`} change={kpiData.marketingROI.change} trend="up" icon={Percent} delay={0.35} />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Revenue Trend */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-2 rounded-xl border border-border bg-card p-5">
            <h3 className="text-sm font-semibold text-card-foreground mb-4">Revenue Trend</h3>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                <YAxis tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} tickFormatter={(v) => `$${v / 1000}k`} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
                <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2.5} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Segment Distribution */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="rounded-xl border border-border bg-card p-5">
            <h3 className="text-sm font-semibold text-card-foreground mb-4">Customer Segments</h3>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie data={segmentData} cx="50%" cy="50%" innerRadius={55} outerRadius={90} dataKey="value" paddingAngle={3}>
                  {segmentData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11 }} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} formatter={(v: number) => `${v}%`} />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Conversion Funnel */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-semibold text-card-foreground mb-4">Conversion Funnel</h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={funnelData} layout="vertical" barSize={28}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} tickFormatter={(v) => v.toLocaleString()} />
              <YAxis type="category" dataKey="stage" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} width={100} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
              <Bar dataKey="value" fill="hsl(var(--primary))" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
