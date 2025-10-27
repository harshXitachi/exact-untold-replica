import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroWork from "@/assets/hero-work.jpg";
import freelance1 from "@/assets/freelance-1.jpg";
import freelance2 from "@/assets/freelance-2.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.from(".about-title", {
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".about-text", {
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
      },
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".about-image", {
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
      },
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
    });

    gsap.from(".stat-box", {
      scrollTrigger: {
        trigger: ".stats-grid",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.7)",
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="about-title text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
              about taskin
            </h2>
            <div className="about-text space-y-6 text-lg md:text-xl text-muted-foreground">
              <p>
                Taskin is revolutionizing the freelance economy by connecting talented individuals 
                with micro-work opportunities that fit their schedule and expertise.
              </p>
              <p>
                Whether you're a designer, developer, writer, or marketer, Taskin provides a 
                streamlined platform to showcase your skills and earn money on your own terms.
              </p>
              <p className="text-accent font-medium">
                Join thousands of freelancers already earning with Taskin.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="about-image col-span-2 rounded-3xl overflow-hidden shadow-2xl hover:shadow-accent/20 transition-all duration-300">
              <img src={heroWork} alt="Professional workspace" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="about-image rounded-3xl overflow-hidden shadow-2xl hover:shadow-accent/20 transition-all duration-300">
              <img src={freelance1} alt="Creative workspace" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="about-image rounded-3xl overflow-hidden shadow-2xl hover:shadow-accent/20 transition-all duration-300">
              <img src={freelance2} alt="Team collaboration" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="stat-box bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 text-center border-2 border-accent/20 hover:border-accent transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">50k+</div>
            <div className="text-sm text-muted-foreground">Active Freelancers</div>
          </div>
          <div className="stat-box bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--accent-blue))]/5 rounded-2xl p-8 text-center border-2 border-[hsl(var(--accent-blue))]/20 hover:border-[hsl(var(--accent-blue))] transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-[hsl(var(--accent-blue))] mb-2">30k+</div>
            <div className="text-sm text-muted-foreground">Tasks Available</div>
          </div>
          <div className="stat-box bg-gradient-to-br from-[hsl(var(--accent-green))]/10 to-[hsl(var(--accent-green))]/5 rounded-2xl p-8 text-center border-2 border-[hsl(var(--accent-green))]/20 hover:border-[hsl(var(--accent-green))] transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-[hsl(var(--accent-green))] mb-2">$2M+</div>
            <div className="text-sm text-muted-foreground">Paid Out</div>
          </div>
          <div className="stat-box bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 text-center border-2 border-accent/20 hover:border-accent transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;