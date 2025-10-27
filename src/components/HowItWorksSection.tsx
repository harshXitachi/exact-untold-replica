import { useEffect, useRef } from "react";
import { UserPlus, Search, CheckCircle, DollarSign } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your free account in minutes. No credit card required.",
  },
  {
    icon: Search,
    title: "Browse Tasks",
    description: "Explore thousands of tasks matching your skills and interests.",
  },
  {
    icon: CheckCircle,
    title: "Complete Work",
    description: "Deliver quality work on time and build your reputation.",
  },
  {
    icon: DollarSign,
    title: "Get Paid",
    description: "Receive payments securely and withdraw anytime.",
  },
];

const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.from(".how-title", {
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
      },
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
    });

    gsap.from(".step-card", {
      scrollTrigger: {
        trigger: ".steps-container",
        start: "top 75%",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="how" ref={sectionRef} className="py-32 px-6">
      <div className="container mx-auto">
        <h2 className="how-title text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-20">
          how it works
        </h2>

        <div className="steps-container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="step-card relative group"
                >
                  <div className="bg-card border-2 border-border hover:border-accent rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <div className="bg-gradient-to-br from-accent to-[hsl(var(--accent-blue))] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                      {index + 1}
                    </div>

                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;