import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FolderGit2, Calendar, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Conversational Data Visualization Tool",
    period: "October 2025 - Present",
    description: "A tool that lets anyone explore and visualize datasets using natural language - no coding or SQL required",
    details: [
      "The backend (API-based) handles query generation, SQL execution, and CSV/DB data retrieval, while the frontend-built with React and Tailwind-renders visualizations, manages dashboards, and maintains chat-based interaction",
    ],
    tags: ["AI/ML", "LLMs", "RAG", "Python", "Agentic AI"],
    demoLink: "",
    githubLink: ""
  },
  {
    title: "Semantic Segmentation Using Hybrid Deep Neural Network",
    period: "February 2022 - April 2022",
    description: "Implemented Deep CNN to achieve accurate building segmentation from aerial images",
    details: [
      "Optimized model to remain lightweight by minimizing parameter complexity",
      "Applied advanced computer vision techniques for image analysis"
    ],
    tags: ["Deep Learning", "CNN", "Computer Vision", "TensorFlow"],
    demoLink: "",
    githubLink: ""
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
              <FolderGit2 className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Weekend | Academic projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="border-border shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 bg-card animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-2 mb-3">
                    <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <Badge variant="secondary">{project.period}</Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-card-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-3 text-muted-foreground text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <Badge 
                        key={idx}
                        variant="outline"
                        className="border-primary text-primary"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {(project.demoLink || project.githubLink) && (
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                      {project.demoLink && (
                        <Button 
                          asChild 
                          variant="outline" 
                          size="sm"
                          className="gap-2 hover:scale-105 transition-transform"
                        >
                          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.githubLink && (
                        <Button 
                          asChild 
                          variant="outline" 
                          size="sm"
                          className="gap-2 hover:scale-105 transition-transform"
                        >
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                            GitHub
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
