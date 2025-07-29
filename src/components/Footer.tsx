import { Button } from "@/components/ui/button";
import { Heart, Mail, Phone, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-bold text-2xl">
              <span className="hero-title">Rohan Mahadik</span>
            </div>
            <p className="text-muted-foreground">
              Software Engineer passionate about building scalable solutions 
              and creating meaningful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-left text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get In Touch</h3>
            <div className="space-y-3">
              <a 
                href="mailto:rohanm2717@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                rohanm2717@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <div className="flex items-center gap-2 text-muted-foreground mb-4 md:mb-0">
            Made with <Heart className="w-4 h-4 text-red-500" /> by Rohan Mahadik
          </div>
          
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open('https://linkedin.com/in/rohan-r-mahadik', '_blank')}
            >
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open('https://www.linkedin.com/in/rohan-r-mahadik', '_blank')}
            >
              <Github className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground mt-4">
          © 2024 Rohan Ravindra Mahadik. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;