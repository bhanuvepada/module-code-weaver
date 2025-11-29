import { Building2, Eye, AlertTriangle, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  change: string;
  changeType: "positive" | "negative";
  delay: string;
  bgClass: string;
  iconBgClass: string;
}

const StatCard = ({ icon, value, label, change, changeType, delay, bgClass, iconBgClass }: StatCardProps) => {
  const changeColor = changeType === "positive" ? "text-success" : "text-destructive";
  
  return (
    <Card className={`p-6 ${bgClass} border-0 shadow-card animate-fade-up ${delay}`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl ${iconBgClass} flex items-center justify-center`}>
          {icon}
        </div>
        <span className={`text-sm font-semibold ${changeColor}`}>{change}</span>
      </div>
      <h3 className="font-display text-3xl font-bold text-foreground mb-1">{value}</h3>
      <p className="text-sm text-muted-foreground">{label}</p>
    </Card>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: <Building2 className="w-6 h-6 text-primary" />,
      value: "248",
      label: "Active Elections",
      change: "+12%",
      changeType: "positive" as const,
      bgClass: "bg-gradient-to-br from-primary/5 to-primary/10",
      iconBgClass: "bg-primary/10",
    },
    {
      icon: <Eye className="w-6 h-6 text-success" />,
      value: "1,847",
      label: "Election Observers",
      change: "+8%",
      changeType: "positive" as const,
      bgClass: "bg-gradient-to-br from-success/5 to-success/10",
      iconBgClass: "bg-success/10",
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-warning" />,
      value: "23",
      label: "Issues Reported",
      change: "-15%",
      changeType: "negative" as const,
      bgClass: "bg-gradient-to-br from-warning/5 to-warning/10",
      iconBgClass: "bg-warning/10",
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      value: "892K",
      label: "Registered Voters",
      change: "+25%",
      changeType: "positive" as const,
      bgClass: "bg-gradient-to-br from-purple-500/5 to-purple-500/10",
      iconBgClass: "bg-purple-500/10",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Real-Time Election Overview
          </h2>
          <p className="text-muted-foreground text-lg">
            Live data from ongoing democratic processes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              {...stat}
              delay={`animation-delay-${(index + 1) * 100}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
