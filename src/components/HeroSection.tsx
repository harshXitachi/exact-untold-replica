import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const images = imagesRef.current;

    if (!section || !text || !images) return;

    // Initial animations
    const tl = gsap.timeline();
    
    tl.from(".hero-word", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
    })
    .from(".hero-image", {
      scale: 0,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "back.out(1.7)",
    }, "-=0.5")
    .from(".hero-subtitle", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.3")
    .from(".hero-cta", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    }, "-=0.3");

    // Scroll animations
    gsap.to(".hero-parallax", {
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: 150,
      opacity: 0.3,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-[hsl(var(--accent-blue))]/5 -z-10" />
      
      <div ref={textRef} className="container mx-auto text-center relative z-10">
        <div className="mb-8 flex flex-wrap items-center justify-center gap-6 md:gap-12">
          <h1 className="hero-word text-6xl md:text-8xl lg:text-9xl font-bold">
            we
          </h1>
          
          <div ref={imagesRef} className="flex gap-4">
            <div className="hero-image hero-parallax w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-2xl hover:scale-110 transition-transform duration-300">
              <img src={hero1} alt="Freelancer" className="w-full h-full object-cover" />
            </div>
            <div className="hero-image hero-parallax w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-2xl hover:scale-110 transition-transform duration-300">
              <img src={hero2} alt="Workspace" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-6 md:gap-12">
          <h1 className="hero-word text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-accent to-[hsl(var(--accent-blue))] bg-clip-text text-transparent">
            connect
          </h1>
        </div>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-6 md:gap-12">
          <div className="flex gap-4">
            <div className="hero-image hero-parallax w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-2xl hover:scale-110 transition-transform duration-300">
              <img src={hero3} alt="Creative work" className="w-full h-full object-cover" />
            </div>
            <div className="hero-image hero-parallax w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-2xl hover:scale-110 transition-transform duration-300">
              <img src={hero4} alt="Collaboration" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <h1 className="hero-word text-6xl md:text-8xl lg:text-9xl font-bold">
            talent
          </h1>
        </div>

        <p className="hero-subtitle text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          The ultimate micro-work platform connecting skilled freelancers with opportunities worldwide. 
          Start earning today with Taskin.
        </p>

        <a href="#work" className="hero-cta inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors group">
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown className="w-4 h-4 animate-bounce group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;