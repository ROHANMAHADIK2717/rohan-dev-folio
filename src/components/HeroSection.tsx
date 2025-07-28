import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 dynamic-bg">
        <div className="absolute inset-0 gradient-wave"></div>
        <div className="absolute inset-0 floating-particles"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Animated Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up">
            <span className="hero-title">Rohan Ravindra Mahadik</span>
          </h1>

          {/* Typing Effect Tagline */}
          <div className="text-lg md:text-xl text-muted-foreground mb-4 fade-in-up min-h-[60px]" style={{ animationDelay: '0.2s' }}>
            <span className="typing-text">🚀 Crafting Code & Scalable Systems | Software Engineer @ Lentra AI | Java 8/17 Wizard 🧙‍♂️ | Spring Boot & Angular Alchemist | Kafka Whisperer | CI/CD Ninja | PostgreSQL, MongoDB, Redis | AWS Explorer | FinTech x BFSI</span>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8 fade-in-up" style={{ animationDelay: '0.4s' }}>
            <MapPin className="w-5 h-5" />
            <span>Pune, Maharashtra</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="gradient" 
              size="lg" 
              className="group"
              onClick={() => window.open('mailto:rohanm2717@gmail.com')}
            >
              <Mail className="w-5 h-5 group-hover:animate-bounce" />
              Get In Touch
            </Button>
            <Button 
              variant="tech" 
              size="lg"
              onClick={() => window.open('tel:7040902717')}
            >
              <Phone className="w-5 h-5" />
              Call Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary transition-colors pulse-glow rounded-full"
              onClick={() => window.open('https://linkedin.com/in/rohan-r-mahadik', '_blank')}
            >
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary transition-colors pulse-glow rounded-full"
              onClick={() => window.open('https://github.com/rohanmahadik', '_blank')}
            >
              <Github className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary transition-colors pulse-glow rounded-full"
            >
              <Download className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full floating" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent-purple/20 rounded-full floating" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-primary-glow/30 rounded-full floating" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;