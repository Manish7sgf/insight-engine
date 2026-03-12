import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/DashboardLayout";
import { ShoppingBag, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const recommendations = [
  { product: "Wireless Noise-Cancelling Headphones", category: "Electronics", confidence: 94, reason: "Frequently bought with recent purchase", price: "$249" },
  { product: "Premium Leather Wallet", category: "Accessories", confidence: 89, reason: "Based on browsing history", price: "$79" },
  { product: "Organic Cotton T-Shirt Pack", category: "Apparel", confidence: 85, reason: "Popular in customer's segment", price: "$45" },
  { product: "Stainless Steel Water Bottle", category: "Lifestyle", confidence: 82, reason: "Trending in similar demographics", price: "$32" },
  { product: "Smart Fitness Tracker", category: "Electronics", confidence: 78, reason: "Complementary to past purchases", price: "$129" },
  { product: "Artisan Coffee Subscription", category: "Food & Drink", confidence: 75, reason: "High affinity score", price: "$24/mo" },
];

const Recommendations = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-[1400px]">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-2xl font-bold text-foreground">Product Recommendations</h1>
          <p className="text-sm text-muted-foreground mt-1">Hybrid collaborative + content-based filtering engine</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Recommendation CTR", value: "12.4%", sub: "+3.2% vs baseline" },
            { label: "Revenue from Recs", value: "$186K", sub: "Last 30 days" },
            { label: "Avg Upsell Value", value: "$42", sub: "Per recommendation click" },
          ].map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-border bg-card p-5">
              <div className="text-sm text-muted-foreground">{stat.label}</div>
              <div className="text-2xl font-bold text-card-foreground mt-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-semibold text-card-foreground mb-4">Top Personalized Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recommendations.map((rec, i) => (
              <motion.div key={rec.product} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.04 }}
                className="rounded-lg border border-border bg-background p-4 hover:border-primary/30 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <ShoppingBag className="h-5 w-5 text-primary" />
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{rec.confidence}% match</span>
                </div>
                <h4 className="font-semibold text-card-foreground text-sm mt-2">{rec.product}</h4>
                <p className="text-xs text-muted-foreground mt-1">{rec.category} • {rec.price}</p>
                <div className="flex items-center gap-1 mt-2 text-[10px] text-muted-foreground">
                  <Star className="h-3 w-3 text-warning" />
                  {rec.reason}
                </div>
                <Button variant="ghost" size="sm" className="w-full mt-3 text-xs gap-1 h-7">
                  View Details <ArrowRight className="h-3 w-3" />
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Recommendations;
