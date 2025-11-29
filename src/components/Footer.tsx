import { CheckSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <CheckSquare className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-display font-bold text-background text-lg">ElectionWatch Pro</h3>
              <p className="text-xs text-background/60">Securing Democracy</p>
            </div>
          </div>
          
          <div className="flex items-center gap-8 text-sm text-background/70">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-background transition-colors">Contact</a>
          </div>
          
          <p className="text-sm text-background/60">
            © 2024 ElectionWatch Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
