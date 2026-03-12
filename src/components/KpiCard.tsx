import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string;
  change: number;
  trend: "up" | "down";
  icon: LucideIcon;
  delay?: number;
}

export function KpiCard({ title, value, change, trend, icon: Icon, delay = 0 }: KpiCardProps) {
  const isPositive = (trend === "up" && change > 0) || (trend === "down" && change < 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="rounded-xl border border-border bg-card p-5 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-muted-foreground">{title}</span>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </div>
      <div className="text-2xl font-bold text-card-foreground mb-1">{value}</div>
      <div className={`flex items-center gap-1 text-xs font-medium ${isPositive ? "text-success" : "text-destructive"}`}>
        {change > 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
        <span>{Math.abs(change)}% vs last period</span>
      </div>
    </motion.div>
  );
}
