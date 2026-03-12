import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Settings as SettingsIcon } from "lucide-react";

const SettingsPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-[800px]">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-2xl font-bold text-foreground">Settings</h1>
          <p className="text-sm text-muted-foreground mt-1">Platform configuration and preferences</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <SettingsIcon className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Settings will be available once backend is connected.</span>
          </div>
          <div className="space-y-4">
            {["Data Sources", "Model Configuration", "Notification Preferences", "Access Control", "API Keys", "Privacy & Compliance"].map((section) => (
              <div key={section} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
                <span className="text-sm text-card-foreground">{section}</span>
                <span className="text-xs text-muted-foreground">Coming soon</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
