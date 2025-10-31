import { Badge } from "@/components/ui/badge";
import { Code2, Award } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Tools",
    icon: Code2,
    skills: [
      "Python",
      "JavaScript",
      "HTML",
      "CSS",
      "AngularJS",
      "C",
      "PostgreSQL",
      "TensorFlow",
      "PyTorch",
      "Dash (Plotly)",
      "Git",
      "LLMs",
      "RAGs",
      "Agentic AI"
    ]
  },
  {
    title: "Core Competencies",
    icon: Award,
    skills: [
      "Data Structures",
      "Algorithms",
      "System Design",
      "Web Development",
      "Problem Solving",
      "Ownership",
      "Product Delivery",
      "Agile Methodology",
      "Team Management",
      "Mentorship",
      "Requirement Analysis"
    ]
  }
];


const journeyText = (
  <>
    <p className="text-lg text-muted-foreground mb-6">
      Hi there! I'm Ramya Dhandapani, a software engineer based in Los Angeles, California. My primary focus is backend development using Python, though I'm equally comfortable exploring new tools and adapting to different project needs. I also have hands-on experience in frontend development too.
    </p>
    <p className="text-lg text-muted-foreground">
      I'm currently seeking new opportunities that allow me to combine my passion for coding and continuous learning to tackle meaningful challenges. If you think I'd be a great fit, I'd love to connect and discuss further!
    </p>
  </>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              About
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Skills & Experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Journey Text */}
            <div className="animate-fade-in text-left">
              {journeyText}
            </div>
            {/* Right: Skills split by category, left-aligned */}
            <div className="flex flex-col gap-10 animate-fade-in">
              {skillCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={index} className="w-full md:w-auto">
                    <div className="flex items-center gap-2 mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-bold text-foreground">
                        {category.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-sm px-5 py-2.5 bg-secondary/50 hover:bg-secondary hover:scale-105 transition-all duration-200 cursor-default mb-2"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
