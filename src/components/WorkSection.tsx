import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import designImg from "@/assets/category-design.jpg";
import devImg from "@/assets/category-development.jpg";
import writingImg from "@/assets/category-writing.jpg";
import marketingImg from "@/assets/category-marketing.jpg";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: "Design",
    description: "Logo design, UI/UX, graphics, and illustrations",
    tasks: "5,000+ tasks",
    image: designImg,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Writing",
    description: "Content writing, copywriting, and translation",
    tasks: "8,000+ tasks",
    image: writingImg,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Development",
    description: "Web development, mobile apps, and programming",
    tasks: "6,500+ tasks",
    image: devImg,
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Marketing",
    description: "Social media, SEO, and digital marketing",
    tasks: "4,200+ tasks",
    image: marketingImg,
    color: "from-orange-500/20 to-red-500/20",
  },
];

const WorkSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.from(".work-title", {
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".work-card", {
      scrollTrigger: {
        trigger: ".work-grid",
        start: "top 80%",
      },
      y: 80,
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
    <section id="work" ref={sectionRef} className="py-32 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="mb-20 text-center">
          <h2 className="work-title text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            explore work
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Discover thousands of micro-tasks across various categories. Pick what suits your skills and start earning.
          </p>
        </div>

        <div className="work-grid grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <Card
              key={category.title}
              className="work-card group relative overflow-hidden cursor-pointer border-2 hover:border-accent transition-all duration-500 hover:shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} group-hover:opacity-0 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-4xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-white/90 mb-3 text-lg">{category.description}</p>
                <div className="text-sm font-medium text-accent bg-accent/20 rounded-full px-4 py-2 inline-block">
                  {category.tasks}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;