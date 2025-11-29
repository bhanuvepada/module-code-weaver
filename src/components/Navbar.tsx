import { CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const navLinks = [
    { name: "Dashboard", href: "#dashboard" },
    { name: "Elections", href: "#elections" },
    { name: "Reports", href: "#reports" },
    { name: "Analytics", href: "#analytics" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <CheckSquare className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-display font-bold text-foreground text-lg leading-tight">
                ElectionWatch Pro
              </h1>
              <p className="text-xs text-muted-foreground">Securing Democracy</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Sign In Button */}
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6">
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
