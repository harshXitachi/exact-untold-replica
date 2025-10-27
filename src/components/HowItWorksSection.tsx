const steps = [
  {
    number: "01",
    title: "Sign Up",
    description: "Create your free account and set up your profile in minutes",
  },
  {
    number: "02",
    title: "Browse Tasks",
    description: "Explore thousands of micro-tasks that match your skills",
  },
  {
    number: "03",
    title: "Start Working",
    description: "Pick tasks, complete them, and submit your work",
  },
  {
    number: "04",
    title: "Get Paid",
    description: "Receive payments directly to your account after approval",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-20 text-center">
          how it works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="space-y-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-6xl md:text-7xl font-bold text-accent opacity-50">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
