import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in">
          ready to start?
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto opacity-90 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Join thousands of freelancers already earning on Taskin. Your next opportunity is just a click away.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full text-lg px-12 py-6"
          >
            Join Now
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-full text-lg px-12 py-6"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
