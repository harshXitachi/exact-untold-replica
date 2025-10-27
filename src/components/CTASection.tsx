import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.from(".cta-content", {
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
      },
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-[hsl(var(--accent-blue))] to-accent animate-gradient-xy -z-10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTZ2LTZoNnYtNmg2djEyaC02di02em0tNi02di02aDZ2NmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20 -z-10" />
      
      <div className="container mx-auto text-center relative z-10">
        <div className="cta-content max-w-4xl mx-auto text-white">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
            ready to start?
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90">
            Join thousands of freelancers already earning on Taskin. Your next opportunity is just a click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button 
                size="lg"
                className="bg-white hover:bg-white/90 text-primary rounded-full text-lg px-12 py-6 shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105"
              >
                Join Now
              </Button>
            </Link>
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary rounded-full text-lg px-12 py-6 transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient-xy {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-xy {
          background-size: 200% 200%;
          animation: gradient-xy 15s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default CTASection;