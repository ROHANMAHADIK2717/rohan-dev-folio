import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg-new.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Animated Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up">
            <span className="hero-title">Rohan Ravindra Mahadik</span>
          </h1>

          {/* Tagline */}
          <div className="text-xl md:text-2xl text-muted-foreground mb-4 fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="block">Software Engineer</span>
            <span className="text-primary">•</span>
            <span className="mx-2">Full Stack Developer</span>
            <span className="text-accent-purple">•</span>
            <span className="ml-2">Cloud Enthusiast</span>
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