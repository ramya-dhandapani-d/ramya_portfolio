import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ramyadvanitha@gmail.com",
    href: "mailto:ramyadvanitha@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(213) 843-7556",
    href: "tel:+12138437556"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Los Angeles, California",
    href: null
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ramyadhandapani",
    href: "https://linkedin.com/in/ramyadhandapani"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just connecting!
            </p>
          </div>
          
          <Card className="border-border shadow-elevated bg-gradient-hero">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-card/80 backdrop-blur-sm hover:bg-card hover:-translate-y-1 hover:shadow-soft transition-all duration-300 animate-slide-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground mb-1">
                          {info.label}
                        </h3>
                        <p className="text-sm text-muted-foreground break-words">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a 
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index}>
                      {content}
                    </div>
                  );
                })}
              </div>
              
              <div className="text-center">
                <Button 
                  size="lg"
                  className="bg-gradient-accent hover:opacity-90 transition-opacity shadow-soft"
                  asChild
                >
                  <a href="mailto:ramyadvanitha@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Send me an email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
