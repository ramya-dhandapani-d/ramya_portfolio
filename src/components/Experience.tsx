import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Senior Project Engineer",
    company: "Soliton Technologies Pvt Ltd.",
    location: "Bangalore, India",
    period: "May 2024 - June 2025",
    highlights: [
      "Led customer and user group meetings, delivering demos and gathering feedback to align solutions with client needs",
      "Mentored junior engineers, fostering technical growth and collaboration",
      "Standardized Git branching practices and PR labeling policies, improving team collaboration and code review efficiency",
      "Engineered custom solutions to overcome Dash and Plotly limitations, enhancing user experience",
      "Undertook organization-level initiatives, including audit readiness, DevOps challenges (Top 5 finish), and knowledge-sharing events"
    ]
  },
  {
    role: "Project Engineer",
    company: "Soliton Technologies Pvt Ltd.",
    location: "Bangalore, India",
    period: "June 2022 - May 2024",
    highlights: [
      "Developed interactive GUIs for Pre-Silicon validation (Package Mechanical Analysis Workflow Automation) process using Dash(Python Framework), HTML, and CSS, translating complex user requirements into user-friendly interfaces",
      "Proposed and implemented a callback-based optimization, reducing project loading time from 8 minutes to 1 minute",
      "Created scalable approaches to dynamically generate UI components, enabling reusability across new features",
      "Designed lightweight, innovative UI solutions (e.g., image swap, mirrored layouts), saving multiple days of developer effort"
    ]
  },
  {
    role: "Project Engineer - Intern",
    company: "Soliton Technologies Pvt Ltd.",
    location: "Bangalore, India",
    period: "July 2021 - June 2022",
    highlights: [
      "Developed dashboards and tools for hardware validation processes using Python",
      "Designed and delivered new save-and-retrieve logic for complex data workflows with minimal guidance",
      "Recognized with the Star Soliton Award for exceptional performance in taking on a managerial role during lead's absence",
      "Nominated for Rookie of the Year for strong frontend contributions and customer appreciation"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Work Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building innovative solutions and leading teams in software development
            </p>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border hidden md:block" />
            
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative mb-16 last:mb-0 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center z-10 shadow-lg hidden md:flex">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Date */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <Badge variant="secondary" className="text-sm">
                      {exp.period}
                    </Badge>
                  </div>
                  
                  {/* Card */}
                  <div className="w-full md:w-5/12">
                    <Card className="border-border shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 bg-blue-500 text-white">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-semibold mb-1 opacity-90">
                          {exp.company}
                        </p>
                        <p className="text-sm mb-4 opacity-80">
                          {exp.location}
                        </p>
                        
                        <ul className="space-y-2 text-sm">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex gap-2 opacity-90">
                              <span className="mt-1.5">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
