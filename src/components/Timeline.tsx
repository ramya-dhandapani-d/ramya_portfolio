import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, ChevronDown, MapPin } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const timelineData = [
  {
    type: "education",
    degree: "Master of Science, Computer Science",
    institution: "University of Southern California",
    location: "Los Angeles, California",
    period: "August 2025 - June 2027",
    courses: [
      "Analysis of Algorithms",
      "Agentic Information Retrieval and Web Search Engines"
    ],
    achievements: []
  },
  {
    type: "experience",
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
    type: "experience",
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
    type: "experience",
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
  },
  {
    type: "education",
    degree: "Bachelor of Technology, Information Technology",
    institution: "Bannari Amman Institute of Technology",
    location: "Tamil Nadu, India",
    period: "August 2018 - June 2022",
    gpa: "3.62/4.0",
    courses: [],
    achievements: [
      "Python Teaching Assistant",
      "IET Student Coordinator",
      "Member of Hackathon Lab"
    ]
  }
];

const Timeline = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="timeline" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional experience and academic background
            </p>
          </div>
          
          {/* Timeline */}
          <div className="relative space-y-8 md:space-y-12">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border hidden md:block" />
            
            {timelineData.map((item, index) => (
              <Collapsible
                key={index}
                open={openItems.includes(index)}
                onOpenChange={() => toggleItem(index)}
              >
                <div 
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Content - alternating sides */}
                  <div className="flex items-center gap-4 md:gap-8">
                    {/* Left side - Card (even) or Date (odd) */}
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                      {index % 2 === 0 ? (
                        <Card className="border-border shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 bg-card">
                          <CardContent className="p-5 md:p-6">
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1">
                                <h3 className="text-xl font-bold text-foreground mb-1">
                                  {item.type === 'experience' ? item.role : item.degree}
                                </h3>
                                <p className="text-sm font-semibold text-primary mb-1">
                                  {item.type === 'experience' ? item.company : item.institution}
                                </p>
                                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                  <MapPin className="w-3 h-3" />
                                  <span>{item.location}</span>
                                </div>
                              </div>
                              
                              <CollapsibleTrigger asChild>
                                <button className="p-2 hover:bg-accent rounded-full transition-colors">
                                  <ChevronDown 
                                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                                      openItems.includes(index) ? 'rotate-180' : ''
                                    }`} 
                                  />
                                </button>
                              </CollapsibleTrigger>
                            </div>
                            
                            <CollapsibleContent className="mt-5">
                              {item.type === 'experience' ? (
                                <div className="space-y-3">
                                  <div className="h-px bg-border my-3" />
                                  <h4 className="font-semibold text-foreground text-sm mb-3">Key Contributions:</h4>
                                  <ul className="space-y-2.5 text-sm text-card-foreground">
                                    {item.highlights?.map((highlight, idx) => (
                                      <li key={idx} className="flex gap-2.5 leading-relaxed">
                                        <span className="text-primary mt-1 font-bold">•</span>
                                        <span>{highlight}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ) : (
                                <div className="space-y-4">
                                  <div className="h-px bg-border my-3" />
                                  
                                  {'gpa' in item && item.gpa && (
                                    <p className="text-sm text-muted-foreground font-medium">
                                      GPA: {item.gpa}
                                    </p>
                                  )}
                                  
                                  {item.courses && item.courses.length > 0 && (
                                    <div>
                                      <h4 className="font-semibold text-foreground text-sm mb-2.5">Relevant Coursework:</h4>
                                      <div className="flex flex-wrap gap-2">
                                        {item.courses.map((course, idx) => (
                                          <Badge key={idx} variant="outline" className="border-primary text-primary text-xs">
                                            {course}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                  
                                  {item.achievements && item.achievements.length > 0 && (
                                    <div>
                                      <h4 className="font-semibold text-foreground text-sm mb-2.5">Activities:</h4>
                                      <ul className="space-y-2 text-sm">
                                        {item.achievements.map((achievement, idx) => (
                                          <li key={idx} className="flex gap-2.5 text-card-foreground leading-relaxed">
                                            <span className="text-primary mt-1 font-bold">•</span>
                                            <span>{achievement}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              )}
                            </CollapsibleContent>
                          </CardContent>
                        </Card>
                      ) : (
                        <Badge variant="secondary" className="text-sm whitespace-nowrap inline-block">
                          {item.period}
                        </Badge>
                      )}
                    </div>
                    
                    {/* Center - Icon on timeline */}
                    <div className="hidden md:flex justify-center items-center w-auto flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full ${
                        item.type === 'experience' 
                          ? 'bg-blue-500' 
                          : 'bg-gradient-to-br from-pink-500 to-red-500'
                      } flex items-center justify-center z-20 shadow-lg`}>
                        {item.type === 'experience' ? (
                          <Briefcase className="w-6 h-6 text-white" />
                        ) : (
                          <GraduationCap className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </div>
                    
                    {/* Right side - Date (even) or Card (odd) */}
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? '' : 'md:text-left'}`}>
                      {index % 2 === 0 ? (
                        <Badge variant="secondary" className="text-sm whitespace-nowrap inline-block">
                          {item.period}
                        </Badge>
                      ) : (
                        <Card className="border-border shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 bg-card">
                          <CardContent className="p-5 md:p-6">
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1">
                                <h3 className="text-xl font-bold text-foreground mb-1">
                                  {item.type === 'experience' ? item.role : item.degree}
                                </h3>
                                <p className="text-sm font-semibold text-primary mb-1">
                                  {item.type === 'experience' ? item.company : item.institution}
                                </p>
                                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                  <MapPin className="w-3 h-3" />
                                  <span>{item.location}</span>
                                </div>
                              </div>
                              
                              <CollapsibleTrigger asChild>
                                <button className="p-2 hover:bg-accent rounded-full transition-colors">
                                  <ChevronDown 
                                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                                      openItems.includes(index) ? 'rotate-180' : ''
                                    }`} 
                                  />
                                </button>
                              </CollapsibleTrigger>
                            </div>
                            
                            <CollapsibleContent className="mt-5">
                              {item.type === 'experience' ? (
                                <div className="space-y-3">
                                  <div className="h-px bg-border my-3" />
                                  <h4 className="font-semibold text-foreground text-sm mb-3">Key Contributions:</h4>
                                  <ul className="space-y-2.5 text-sm text-card-foreground">
                                    {item.highlights?.map((highlight, idx) => (
                                      <li key={idx} className="flex gap-2.5 leading-relaxed">
                                        <span className="text-primary mt-1 font-bold">•</span>
                                        <span>{highlight}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ) : (
                                <div className="space-y-4">
                                  <div className="h-px bg-border my-3" />
                                  
                                  {'gpa' in item && item.gpa && (
                                    <p className="text-sm text-muted-foreground font-medium">
                                      GPA: {item.gpa}
                                    </p>
                                  )}
                                  
                                  {item.courses && item.courses.length > 0 && (
                                    <div>
                                      <h4 className="font-semibold text-foreground text-sm mb-2.5">Relevant Coursework:</h4>
                                      <div className="flex flex-wrap gap-2">
                                        {item.courses.map((course, idx) => (
                                          <Badge key={idx} variant="outline" className="border-primary text-primary text-xs">
                                            {course}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                  
                                  {item.achievements && item.achievements.length > 0 && (
                                    <div>
                                      <h4 className="font-semibold text-foreground text-sm mb-2.5">Activities:</h4>
                                      <ul className="space-y-2 text-sm">
                                        {item.achievements.map((achievement, idx) => (
                                          <li key={idx} className="flex gap-2.5 text-card-foreground leading-relaxed">
                                            <span className="text-primary mt-1 font-bold">•</span>
                                            <span>{achievement}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              )}
                            </CollapsibleContent>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  </div>
                  
                  {/* Mobile view */}
                  <div className="md:hidden">
                    <div className="flex justify-center mb-4">
                      <div className={`w-12 h-12 rounded-full ${
                        item.type === 'experience' 
                          ? 'bg-blue-500' 
                          : 'bg-gradient-to-br from-pink-500 to-red-500'
                      } flex items-center justify-center shadow-lg`}>
                        {item.type === 'experience' ? (
                          <Briefcase className="w-6 h-6 text-white" />
                        ) : (
                          <GraduationCap className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </div>
                    
                    <div className="text-center mb-4">
                      <Badge variant="secondary" className="text-sm">
                        {item.period}
                      </Badge>
                    </div>
                    
                    <Card className="border-border shadow-soft bg-card">
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-foreground mb-1">
                              {item.type === 'experience' ? item.role : item.degree}
                            </h3>
                            <p className="text-sm font-semibold text-primary mb-1">
                              {item.type === 'experience' ? item.company : item.institution}
                            </p>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                              <MapPin className="w-3 h-3" />
                              <span>{item.location}</span>
                            </div>
                          </div>
                          
                          <CollapsibleTrigger asChild>
                            <button className="p-2 hover:bg-accent rounded-full transition-colors">
                              <ChevronDown 
                                className={`w-5 h-5 text-muted-foreground transition-transform ${
                                  openItems.includes(index) ? 'rotate-180' : ''
                                }`} 
                              />
                            </button>
                          </CollapsibleTrigger>
                        </div>
                        
                        <CollapsibleContent className="mt-5">
                          {item.type === 'experience' ? (
                            <div className="space-y-3">
                              <div className="h-px bg-border my-3" />
                              <h4 className="font-semibold text-foreground text-sm mb-3">Key Contributions:</h4>
                              <ul className="space-y-2.5 text-sm text-card-foreground">
                                {item.highlights?.map((highlight, idx) => (
                                  <li key={idx} className="flex gap-2.5 leading-relaxed">
                                    <span className="text-primary mt-1 font-bold">•</span>
                                    <span>{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <div className="space-y-4">
                              <div className="h-px bg-border my-3" />
                              
                              {'gpa' in item && item.gpa && (
                                <p className="text-sm text-muted-foreground font-medium">
                                  GPA: {item.gpa}
                                </p>
                              )}
                              
                              {item.courses && item.courses.length > 0 && (
                                <div>
                                  <h4 className="font-semibold text-foreground text-sm mb-2.5">Relevant Coursework:</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {item.courses.map((course, idx) => (
                                      <Badge key={idx} variant="outline" className="border-primary text-primary text-xs">
                                        {course}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              )}
                              
                              {item.achievements && item.achievements.length > 0 && (
                                <div>
                                  <h4 className="font-semibold text-foreground text-sm mb-2.5">Activities:</h4>
                                  <ul className="space-y-2 text-sm">
                                    {item.achievements.map((achievement, idx) => (
                                      <li key={idx} className="flex gap-2.5 text-card-foreground leading-relaxed">
                                        <span className="text-primary mt-1 font-bold">•</span>
                                        <span>{achievement}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          )}
                        </CollapsibleContent>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;