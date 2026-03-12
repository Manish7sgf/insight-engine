// Mock data for the analytics platform

export const kpiData = {
  conversionRate: { value: 3.8, change: 12.5, trend: "up" as const },
  avgOrderValue: { value: 87.42, change: 5.3, trend: "up" as const },
  retentionRate: { value: 72.1, change: -2.1, trend: "down" as const },
  churnRate: { value: 4.2, change: -15.3, trend: "up" as const },
  clv: { value: 342, change: 8.7, trend: "up" as const },
  totalRevenue: { value: 2847300, change: 18.2, trend: "up" as const },
  activeCustomers: { value: 45230, change: 6.4, trend: "up" as const },
  marketingROI: { value: 4.2, change: 22.1, trend: "up" as const },
};

export const revenueData = [
  { month: "Jan", revenue: 185000, orders: 2100 },
  { month: "Feb", revenue: 198000, orders: 2250 },
  { month: "Mar", revenue: 215000, orders: 2400 },
  { month: "Apr", revenue: 232000, orders: 2580 },
  { month: "May", revenue: 248000, orders: 2720 },
  { month: "Jun", revenue: 267000, orders: 2900 },
  { month: "Jul", revenue: 245000, orders: 2680 },
  { month: "Aug", revenue: 278000, orders: 3050 },
  { month: "Sep", revenue: 295000, orders: 3200 },
  { month: "Oct", revenue: 312000, orders: 3400 },
  { month: "Nov", revenue: 340000, orders: 3700 },
  { month: "Dec", revenue: 365000, orders: 3950 },
];

export const funnelData = [
  { stage: "Visit", value: 100000, rate: 100 },
  { stage: "Product View", value: 62000, rate: 62 },
  { stage: "Add to Cart", value: 28000, rate: 28 },
  { stage: "Checkout", value: 15000, rate: 15 },
  { stage: "Purchase", value: 8400, rate: 8.4 },
];

export const segmentData = [
  { name: "VIP Customers", value: 8, count: 3618, revenue: 985000, color: "hsl(var(--chart-1))" },
  { name: "Frequent Buyers", value: 22, count: 9951, revenue: 742000, color: "hsl(var(--chart-2))" },
  { name: "Price Sensitive", value: 28, count: 12664, revenue: 456000, color: "hsl(var(--chart-3))" },
  { name: "At-Risk", value: 15, count: 6785, revenue: 312000, color: "hsl(var(--chart-4))" },
  { name: "One-Time Buyers", value: 27, count: 12212, revenue: 352300, color: "hsl(var(--chart-5))" },
];

export const churnRiskData = [
  { id: "C-1042", name: "Sarah Mitchell", riskScore: 92, lastPurchase: "87 days ago", clv: 1240, segment: "VIP" },
  { id: "C-2891", name: "James Chen", riskScore: 88, lastPurchase: "72 days ago", clv: 890, segment: "Frequent" },
  { id: "C-0334", name: "Emily Watson", riskScore: 85, lastPurchase: "95 days ago", clv: 2100, segment: "VIP" },
  { id: "C-4521", name: "Michael Brown", riskScore: 81, lastPurchase: "63 days ago", clv: 560, segment: "At-Risk" },
  { id: "C-1876", name: "Lisa Park", riskScore: 78, lastPurchase: "54 days ago", clv: 720, segment: "Frequent" },
  { id: "C-3209", name: "David Kim", riskScore: 75, lastPurchase: "48 days ago", clv: 450, segment: "Price Sensitive" },
  { id: "C-5643", name: "Anna Rodriguez", riskScore: 71, lastPurchase: "82 days ago", clv: 1560, segment: "VIP" },
  { id: "C-7812", name: "Tom Harris", riskScore: 68, lastPurchase: "41 days ago", clv: 380, segment: "One-Time" },
];

export const churnFeatureImportance = [
  { feature: "Days Since Last Purchase", importance: 0.28 },
  { feature: "Order Frequency Decline", importance: 0.22 },
  { feature: "Support Tickets", importance: 0.15 },
  { feature: "Email Engagement Drop", importance: 0.12 },
  { feature: "Cart Abandonment Rate", importance: 0.10 },
  { feature: "Session Duration Decline", importance: 0.08 },
  { feature: "Return Rate", importance: 0.05 },
];

export const clvDistribution = [
  { range: "$0-50", count: 8200 },
  { range: "$50-100", count: 12400 },
  { range: "$100-250", count: 10800 },
  { range: "$250-500", count: 7200 },
  { range: "$500-1K", count: 4100 },
  { range: "$1K-2K", count: 1800 },
  { range: "$2K+", count: 730 },
];

export const topCustomersByCLV = [
  { id: "C-0012", name: "Alexandra Foster", clv: 12450, segment: "VIP", orders: 87, avgOrder: 143 },
  { id: "C-0089", name: "Robert Chang", clv: 9870, segment: "VIP", orders: 64, avgOrder: 154 },
  { id: "C-0156", name: "Maria Santos", clv: 8920, segment: "VIP", orders: 71, avgOrder: 126 },
  { id: "C-0234", name: "William Turner", clv: 7650, segment: "VIP", orders: 52, avgOrder: 147 },
  { id: "C-0312", name: "Jennifer Liu", clv: 6890, segment: "Frequent", orders: 48, avgOrder: 144 },
];

export const channelAttribution = [
  { channel: "Organic Search", revenue: 842000, conversions: 3200, roi: 5.2 },
  { channel: "Paid Search", revenue: 624000, conversions: 2400, roi: 3.8 },
  { channel: "Email", revenue: 518000, conversions: 1900, roi: 8.4 },
  { channel: "Social Media", revenue: 385000, conversions: 1450, roi: 2.9 },
  { channel: "Direct", revenue: 312000, conversions: 1200, roi: 0 },
  { channel: "Referral", revenue: 166300, conversions: 650, roi: 6.1 },
];

export const clusterData = Array.from({ length: 120 }, (_, i) => {
  const segment = i % 5;
  const centers = [
    { x: 85, y: 90 }, // VIP
    { x: 70, y: 60 }, // Frequent
    { x: 30, y: 40 }, // Price Sensitive
    { x: 20, y: 70 }, // At-Risk
    { x: 15, y: 20 }, // One-Time
  ];
  return {
    recency: centers[segment].x + (Math.random() - 0.5) * 25,
    monetary: centers[segment].y + (Math.random() - 0.5) * 20,
    segment: segmentData[segment].name,
    color: segmentData[segment].color,
  };
});
