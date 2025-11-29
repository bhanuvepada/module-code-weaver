import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Users, AlertCircle } from "lucide-react";

interface ElectionCardProps {
  title: string;
  location: string;
  status: "Active" | "Completed" | "Upcoming";
  progress: number;
  registeredVoters: string;
  issuesReported: number;
}

const ElectionCard = ({ title, location, status, progress, registeredVoters, issuesReported }: ElectionCardProps) => {
  const statusColors = {
    Active: "bg-primary/10 text-primary border-primary/20",
    Completed: "bg-success/10 text-success border-success/20",
    Upcoming: "bg-muted text-muted-foreground border-muted-foreground/20",
  };

  return (
    <Card className="p-6 bg-card border border-border shadow-card hover:shadow-elegant transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-display font-semibold text-lg text-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
        <Badge variant="outline" className={`${statusColors[status]} font-medium`}>
          {status}
        </Badge>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">Voting Progress</span>
          <span className="text-sm font-semibold text-foreground">{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Users className="w-4 h-4" />
          <span>{registeredVoters}</span>
          <span className="text-xs">Registered Voters</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <AlertCircle className="w-4 h-4" />
          <span>{issuesReported}</span>
          <span className="text-xs">Issues</span>
        </div>
      </div>
    </Card>
  );
};

const ElectionsSection = () => {
  const elections = [
    {
      title: "Presidential Election 2024",
      location: "National",
      status: "Active" as const,
      progress: 68,
      registeredVoters: "45.2M",
      issuesReported: 2,
    },
    {
      title: "State Governor Election",
      location: "California",
      status: "Active" as const,
      progress: 45,
      registeredVoters: "12.8M",
      issuesReported: 0,
    },
    {
      title: "City Council Election",
      location: "New York",
      status: "Completed" as const,
      progress: 100,
      registeredVoters: "2.1M",
      issuesReported: 1,
    },
    {
      title: "Senate Election",
      location: "Texas",
      status: "Upcoming" as const,
      progress: 0,
      registeredVoters: "8.9M",
      issuesReported: 0,
    },
  ];

  return (
    <section id="elections" className="py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Current Elections
          </h2>
          <p className="text-muted-foreground text-lg">
            Monitor progress and status of ongoing democratic processes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {elections.map((election, index) => (
            <div key={election.title} className={`animate-fade-up animation-delay-${(index + 1) * 100}`}>
              <ElectionCard {...election} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElectionsSection;
