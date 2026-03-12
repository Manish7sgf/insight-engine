import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/DashboardLayout";
import { funnelData } from "@/lib/mock-data";
import { ArrowDown } from "lucide-react";

const Journey = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-[1400px]">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-2xl font-bold text-foreground">Customer Journey</h1>
          <p className="text-sm text-muted-foreground mt-1">Funnel analysis with drop-off detection</p>
        </motion.div>

        {/* Visual Funnel */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="rounded-xl border border-border bg-card p-8">
          <h3 className="text-sm font-semibold text-card-foreground mb-6">Conversion Funnel</h3>
          <div className="flex flex-col items-center gap-2 max-w-xl mx-auto">
            {funnelData.map((step, i) => {
              const width = `${Math.max(step.rate, 20)}%`;
              const dropOff = i > 0 ? funnelData[i - 1].value - step.value : 0;
              const dropRate = i > 0 ? ((dropOff / funnelData[i - 1].value) * 100).toFixed(1) : 0;
              return (
                <div key={step.stage} className="w-full flex flex-col items-center">
                  {i > 0 && (
                    <div className="flex items-center gap-2 text-xs text-destructive my-1">
                      <ArrowDown className="h-3 w-3" />
                      <span>{dropRate}% drop-off ({dropOff.toLocaleString()} users)</span>
                    </div>
                  )}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="bg-primary/15 border border-primary/20 rounded-lg py-3 px-4 flex items-center justify-between"
                    style={{ width }}
                  >
                    <span className="text-sm font-medium text-card-foreground">{step.stage}</span>
                    <span className="text-sm font-bold text-primary">{step.value.toLocaleString()}</span>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="rounded-xl border border-border bg-card p-5">
            <h3 className="text-sm font-semibold text-card-foreground mb-3">Key Friction Points</h3>
            <ul className="space-y-3">
              {[
                { point: "Cart to Checkout", drop: "46.4%", insight: "Complex checkout form causing abandonment" },
                { point: "Product View to Cart", drop: "54.8%", insight: "Insufficient product information & reviews" },
                { point: "Checkout to Purchase", drop: "44.0%", insight: "Shipping costs revealed too late" },
              ].map((f) => (
                <li key={f.point} className="border-l-2 border-destructive/50 pl-3">
                  <div className="text-xs font-medium text-card-foreground">{f.point} — <span className="text-destructive">{f.drop} drop</span></div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{f.insight}</div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="rounded-xl border border-border bg-card p-5">
            <h3 className="text-sm font-semibold text-card-foreground mb-3">Recommended Actions</h3>
            <ul className="space-y-3">
              {[
                { action: "Simplify checkout to single page", impact: "Est. +12% conversion" },
                { action: "Add social proof & reviews on PDP", impact: "Est. +8% add-to-cart" },
                { action: "Show shipping costs upfront", impact: "Est. +15% checkout completion" },
              ].map((a) => (
                <li key={a.action} className="border-l-2 border-success/50 pl-3">
                  <div className="text-xs font-medium text-card-foreground">{a.action}</div>
                  <div className="text-[11px] text-success mt-0.5">{a.impact}</div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Journey;
