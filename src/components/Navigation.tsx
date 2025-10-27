import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-tight">
            taskin
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#work" className="text-sm font-medium hover:text-accent transition-colors">
              WORK
            </a>
            <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">
              ABOUT
            </a>
            <a href="#how" className="text-sm font-medium hover:text-accent transition-colors">
              HOW IT WORKS
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">
              CONTACT
            </a>
          </div>

          <Link to="/auth">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-accent to-[hsl(var(--accent-blue))] hover:opacity-90 text-accent-foreground rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;