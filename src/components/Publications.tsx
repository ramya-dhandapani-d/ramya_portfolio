import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";

const publications = [
  {
    title: "Rotated Object Recognition Using Moment Features by Artificial Neural Network",
    journal: "International Journal of Engineering Science and Technology (IJEST)",
    details: "ISSN: 0973-6255 Volume 13 Number 2",
    date: "October 2019"
  }
];

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Research Publications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Contributing to the advancement of computer science research
            </p>
          </div>
          
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card 
                key={index}
                className="border-border shadow-soft hover:shadow-elevated transition-shadow duration-300 bg-card animate-slide-in"
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-bold text-foreground flex-1">
                      {pub.title}
                    </h3>
                    <Badge variant="secondary">{pub.date}</Badge>
                  </div>
                  
                  <p className="text-primary font-semibold mb-2">
                    {pub.journal}
                  </p>
                  
                  <p className="text-muted-foreground">
                    {pub.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
