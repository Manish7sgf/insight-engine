import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Cpu, CheckCircle, Clock, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const models = [
  { name: "Customer Segmentation", algo: "K-Means Clustering", status: "trained", accuracy: "Silhouette: 0.72", lastTrained: "2h ago" },
  { name: "Churn Prediction", algo: "XGBoost", status: "trained", accuracy: "AUC-ROC: 0.87", lastTrained: "3h ago" },
  { name: "CLV Forecasting", algo: "BG/NBD + Gamma-Gamma", status: "trained", accuracy: "MAE: $42", lastTrained: "5h ago" },
  { name: "Recommendation Engine", algo: "Hybrid CF", status: "training", accuracy: "—", lastTrained: "In progress" },
  { name: "Marketing Attribution", algo: "Shapley Value", status: "trained", accuracy: "R²: 0.81", lastTrained: "1h ago" },
];

const ModelTraining = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-[1000px]">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Model Training</h1>
            <p className="text-sm text-muted-foreground mt-1">ML model status and retraining controls</p>
          </div>
          <Button size="sm" className="gap-2"><RefreshCw className="h-4 w-4" /> Retrain All</Button>
        </motion.div>

        <div className="space-y-3">
          {models.map((m, i) => (
            <motion.div key={m.name} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-border bg-card p-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Cpu className="h-5 w-5 text-primary" />
                <div>
                  <h4 className="text-sm font-semibold text-card-foreground">{m.name}</h4>
                  <p className="text-xs text-muted-foreground">{m.algo}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="text-xs font-medium text-card-foreground">{m.accuracy}</div>
                  <div className="text-[10px] text-muted-foreground">{m.lastTrained}</div>
                </div>
                {m.status === "training" ? (
                  <div className="w-24">
                    <Progress value={67} className="h-1.5" />
                    <div className="text-[10px] text-muted-foreground mt-1 text-center">67%</div>
                  </div>
                ) : (
                  <CheckCircle className="h-5 w-5 text-success" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ModelTraining;
