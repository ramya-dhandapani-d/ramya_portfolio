import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin } from "lucide-react";

const education = [
  {
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

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic foundation in computer science and software engineering
            </p>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border hidden md:block" />
            
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="relative mb-16 last:mb-0 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center z-10 shadow-lg hidden md:flex">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Date */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <Badge variant="secondary" className="text-sm">
                      {edu.period}
                    </Badge>
                  </div>
                  
                  {/* Card */}
                  <div className="w-full md:w-5/12">
                    <Card className="border-border shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 bg-card">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-sm font-semibold text-primary mb-1">
                          {edu.institution}
                        </p>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                          <MapPin className="w-3 h-3" />
                          <span>{edu.location}</span>
                          {edu.gpa && (
                            <>
                              <span className="mx-2">•</span>
                              <span>GPA: {edu.gpa}</span>
                            </>
                          )}
                        </div>
                        
                        {edu.courses.length > 0 && (
                          <div className="mb-3">
                            <h4 className="font-semibold text-foreground text-sm mb-2">Relevant Coursework:</h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.courses.map((course, idx) => (
                                <Badge key={idx} variant="outline" className="border-primary text-primary text-xs">
                                  {course}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {edu.achievements.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-foreground text-sm mb-2">Activities:</h4>
                            <ul className="space-y-1.5 text-sm">
                              {edu.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex gap-2 text-card-foreground">
                                  <span className="text-primary mt-1">•</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
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

export default Education;
