const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="max-w-5xl">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12 leading-tight">
            about freelancers
          </h2>
          
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Those who dare to dream big and work independently. Taskin connects talented freelancers with opportunities to showcase their skills and earn money on their own terms.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-accent">50K+</div>
                <div className="text-sm text-muted-foreground">Active Freelancers</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-accent">100K+</div>
                <div className="text-sm text-muted-foreground">Tasks Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-accent">95%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
