import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const navItems = [{
  label: "Home",
  href: "#hero"
}, {
  label: "Skills",
  href: "#skills"
}, {
  label: "Timeline",
  href: "#timeline"
}, {
  label: "Projects",
  href: "#projects"
}, {
  label: "Contact",
  href: "#contact"
}];
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-card/95 backdrop-blur-md shadow-soft border-b border-border" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-colors">
            RD
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(item => <a key={item.label} href={item.href} className="px-4 py-2 text-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors">
                {item.label}
              </a>)}
          </div>
          
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden py-4 bg-card rounded-lg shadow-elevated mt-2 animate-fade-in">
            {navItems.map(item => <a key={item.label} href={item.href} className="block px-4 py-3 text-foreground hover:text-primary hover:bg-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                {item.label}
              </a>)}
          </div>}
      </div>
    </nav>;
};
export default Navbar;