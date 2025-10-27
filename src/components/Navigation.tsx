import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold tracking-tight">
            taskin
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#work" className="text-sm font-medium hover:text-accent transition-colors">
              WORK
            </a>
            <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">
              ABOUT
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">
              CONTACT
            </a>
          </div>

          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
