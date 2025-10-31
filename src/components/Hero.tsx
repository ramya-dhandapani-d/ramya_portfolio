import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="py-20 md:py-32 flex items-center bg-background dark:bg-[#1a1f2e] relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,116,139,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center max-w-5xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in lg:pr-8">
            {/* Social Icons */}
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/in/ramyadhandapani" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-lg bg-card hover:bg-accent flex items-center justify-center transition-colors border border-border"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-foreground" />
              </a>
              <a 
                href="https://github.com/ramya-dhandapani-d" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-lg bg-card hover:bg-accent flex items-center justify-center transition-colors border border-border"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-foreground" />
              </a>
              <a 
                href="mailto:ramyadvanitha@gmail.com" 
                className="w-12 h-12 rounded-lg bg-card hover:bg-accent flex items-center justify-center transition-colors border border-border"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-foreground" />
              </a>
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
                Hi, I'm <span className="text-primary">Ramya</span>.
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground mb-6">
                I'm a <span className="text-primary font-semibold">Software Engineer</span>
              </p>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                A person who is always on the lookout for new technologies and be responsible to master them when required.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:opacity-90 transition-opacity shadow-soft text-lg px-8" 
                asChild
              >
                <a href="#contact">
                  GET IN TOUCH <span className="ml-2">→</span>
                </a>
              </Button>
              
              <Button 
                size="lg" 
                className="bg-primary hover:opacity-90 transition-opacity shadow-soft text-lg px-8" 
                asChild
              >
                <a href="/RD_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  VIEW RESUME
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-center animate-fade-in">
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full shadow-elevated animate-float ring-4 ring-primary/20 overflow-hidden">
                <img 
                  src="/images/ramya_profile.png" 
                  alt="Ramya Dhandapani"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;