import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, UserCircle, Eye, BarChart3 } from "lucide-react";

interface RoleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  iconBgClass: string;
}

const RoleCard = ({ icon, title, description, features, buttonText, iconBgClass }: RoleCardProps) => {
  return (
    <Card className="p-6 bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className={`w-14 h-14 rounded-xl ${iconBgClass} flex items-center justify-center mb-5`}>
        {icon}
      </div>
      <h3 className="font-display font-bold text-xl text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{description}</p>
      
      <div className="flex-1">
        <ul className="space-y-2 mb-6">
          {features.map((feature) => (
            <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
        {buttonText}
      </Button>
    </Card>
  );
};

const RolesSection = () => {
  const roles = [
    {
      icon: <Shield className="w-7 h-7 text-primary" />,
      title: "Admin",
      description: "Manage the system, monitor election data, and ensure platform security",
      features: ["System Management", "Security Monitoring", "User Access Control", "Data Integrity"],
      buttonText: "Select Role",
      iconBgClass: "bg-primary/10",
    },
    {
      icon: <UserCircle className="w-7 h-7 text-success" />,
      title: "Citizen",
      description: "Track election processes, report issues, and engage in civic discussions",
      features: ["Election Tracking", "Issue Reporting", "Civic Engagement", "Voting Information"],
      buttonText: "Get Started",
      iconBgClass: "bg-success/10",
    },
    {
      icon: <Eye className="w-7 h-7 text-warning" />,
      title: "Election Observer",
      description: "Monitor election activities, report anomalies, and provide insights on fairness",
      features: ["Activity Monitoring", "Anomaly Detection", "Real-time Reporting", "Transparency Tools"],
      buttonText: "Select Role",
      iconBgClass: "bg-warning/10",
    },
    {
      icon: <BarChart3 className="w-7 h-7 text-purple-600" />,
      title: "Data Analyst",
      description: "Analyze election data, generate reports, and provide real-time updates",
      features: ["Data Analysis", "Report Generation", "Statistical Insights", "Trend Monitoring"],
      buttonText: "Select Role",
      iconBgClass: "bg-purple-500/10",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Choose Your Role
          </h2>
          <p className="text-muted-foreground text-lg">
            Access specialized tools designed for your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <div key={role.title} className={`animate-fade-up animation-delay-${(index + 1) * 100}`}>
              <RoleCard {...role} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RolesSection;
