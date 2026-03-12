import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Upload as UploadIcon, FileText, Database, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

const DataUpload = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-[1000px]">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-2xl font-bold text-foreground">Data Upload</h1>
          <p className="text-sm text-muted-foreground mt-1">Import data from files or connect to external sources</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: FileText, title: "CSV Upload", desc: "Upload transactional, behavioral, or customer data", action: "Upload File" },
            { icon: Database, title: "SQL Database", desc: "Connect to MySQL, PostgreSQL, or SQL Server", action: "Connect" },
            { icon: Cloud, title: "Data Warehouse", desc: "Snowflake, BigQuery, or Redshift integration", action: "Configure" },
            { icon: UploadIcon, title: "API Import", desc: "Pull data from REST APIs or webhooks", action: "Set Up" },
          ].map((source, i) => (
            <motion.div key={source.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-border bg-card p-6 flex flex-col items-center text-center hover:border-primary/30 transition-colors">
              <source.icon className="h-10 w-10 text-primary mb-3" />
              <h3 className="font-semibold text-card-foreground">{source.title}</h3>
              <p className="text-xs text-muted-foreground mt-1 mb-4">{source.desc}</p>
              <Button variant="outline" size="sm">{source.action}</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DataUpload;
