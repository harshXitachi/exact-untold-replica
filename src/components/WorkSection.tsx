import { Card } from "@/components/ui/card";

const categories = [
  {
    title: "Design",
    description: "Logo design, UI/UX, graphics, and illustrations",
    tasks: "5,000+ tasks",
  },
  {
    title: "Writing",
    description: "Content writing, copywriting, and translation",
    tasks: "8,000+ tasks",
  },
  {
    title: "Development",
    description: "Web development, mobile apps, and programming",
    tasks: "6,500+ tasks",
  },
  {
    title: "Marketing",
    description: "Social media, SEO, and digital marketing",
    tasks: "4,200+ tasks",
  },
  {
    title: "Video",
    description: "Video editing, animation, and production",
    tasks: "3,800+ tasks",
  },
  {
    title: "Audio",
    description: "Voice-over, music, and sound design",
    tasks: "2,500+ tasks",
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            explore work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Discover thousands of micro-tasks across various categories. Pick what suits your skills and start earning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card
              key={category.title}
              className="p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group border-2 hover:border-accent animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <h3 className="text-3xl font-bold group-hover:text-accent transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground">{category.description}</p>
                <div className="text-sm font-medium text-accent">{category.tasks}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
