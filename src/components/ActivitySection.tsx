import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle, UserCheck, TrendingUp, ShieldCheck, MessageSquare, ArrowRight } from "lucide-react";

interface ActivityItemProps {
  icon: React.ReactNode;
  title: string;
  status: "pending" | "active" | "completed" | "resolved";
  timeAgo: string;
  description: string;
  location: string;
  iconBgClass: string;
}

const ActivityItem = ({ icon, title, status, timeAgo, description, location, iconBgClass }: ActivityItemProps) => {
  const statusColors = {
    pending: "bg-warning/10 text-warning border-warning/20",
    active: "bg-primary/10 text-primary border-primary/20",
    completed: "bg-success/10 text-success border-success/20",
    resolved: "bg-muted text-muted-foreground border-border",
  };

  return (
    <div className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-card transition-all duration-200">
      <div className={`w-10 h-10 rounded-lg ${iconBgClass} flex items-center justify-center flex-shrink-0`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-1 flex-wrap">
          <h4 className="font-semibold text-foreground text-sm">{title}</h4>
          <Badge variant="outline" className={`${statusColors[status]} text-xs font-medium`}>
            {status}
          </Badge>
          <span className="text-xs text-muted-foreground">{timeAgo}</span>
        </div>
        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{description}</p>
        <Badge variant="secondary" className="text-xs">{location}</Badge>
      </div>
    </div>
  );
};

const ActivitySection = () => {
  const activities = [
    {
      icon: <AlertCircle className="w-5 h-5 text-warning" />,
      title: "New Issue Reported",
      status: "pending" as const,
      timeAgo: "2 minutes ago",
      description: "Voting machine malfunction reported at District 12, Station 4",
      location: "California",
      iconBgClass: "bg-warning/10",
    },
    {
      icon: <UserCheck className="w-5 h-5 text-primary" />,
      title: "Observer Check-in",
      status: "active" as const,
      timeAgo: "15 minutes ago",
      description: "Election observer Sarah Johnson checked in at Downtown Polling Center",
      location: "New York",
      iconBgClass: "bg-primary/10",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-success" />,
      title: "Turnout Update",
      status: "completed" as const,
      timeAgo: "32 minutes ago",
      description: "Voter turnout increased by 12% in the last hour across metropolitan areas",
      location: "National",
      iconBgClass: "bg-success/10",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-success" />,
      title: "Security Audit Completed",
      status: "completed" as const,
      timeAgo: "1 hour ago",
      description: "Routine security check completed successfully at all polling stations",
      location: "Texas",
      iconBgClass: "bg-success/10",
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-muted-foreground" />,
      title: "Citizen Inquiry",
      status: "resolved" as const,
      timeAgo: "1 hour ago",
      description: "Multiple citizens requested information about candidate registration deadlines",
      location: "National",
      iconBgClass: "bg-muted",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-12 animate-fade-up">
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Recent Activity
            </h2>
            <p className="text-muted-foreground">
              Stay updated with the latest election monitoring events
            </p>
          </div>
          <Button variant="outline" className="hidden sm:flex items-center gap-2">
            View All Activities
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={`${activity.title}-${index}`} className={`animate-fade-up animation-delay-${(index + 1) * 100}`}>
              <ActivityItem {...activity} />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button variant="outline" className="w-full flex items-center justify-center gap-2">
            View All Activities
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
