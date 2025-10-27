import { useEffect, useState } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="inline-block animate-fade-in"
        style={{
          animationDelay: `${index * 0.05}s`,
          animationFillMode: "backwards",
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
      <div className="container mx-auto">
        <div className="relative">
          <h1 className="text-[8vw] md:text-[12vw] lg:text-[10rem] font-bold leading-none tracking-tight">
            <div className="relative inline-block">
              {splitText("we")}
              <div className="absolute top-[15%] left-[40%] w-[45%] h-[70%] overflow-hidden rounded-lg animate-scale-in">
                <img 
                  src={hero1} 
                  alt="Freelancer working" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <br />
            <div className="relative inline-block">
              {splitText("connect")}
              <div className="absolute top-[20%] right-[5%] w-[35%] h-[60%] overflow-hidden rounded-lg animate-scale-in" style={{ animationDelay: "0.3s" }}>
                <img 
                  src={hero2} 
                  alt="Creative designer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <br />
            <div className="relative inline-block">
              <div className="absolute top-[15%] left-[-10%] w-[40%] h-[70%] overflow-hidden rounded-lg animate-scale-in" style={{ animationDelay: "0.5s" }}>
                <img 
                  src={hero3} 
                  alt="Working hands" 
                  className="w-full h-full object-cover"
                />
              </div>
              {splitText("talent")}
            </div>
          </h1>

          <div className="mt-12 flex items-start gap-4">
            <div className="w-32 h-32 overflow-hidden rounded-lg animate-scale-in" style={{ animationDelay: "0.8s" }}>
              <img 
                src={hero4} 
                alt="Freelancers collaborating" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md animate-fade-in-up" style={{ animationDelay: "1s" }}>
              A platform where freelancers thrive. Take on micro-tasks, showcase your skills, and earn money doing what you love.
            </p>
          </div>

          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
            <a 
              href="#explore" 
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors group"
            >
              <span>SCROLL TO DISCOVER</span>
              <svg 
                className="w-4 h-4 animate-bounce" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
