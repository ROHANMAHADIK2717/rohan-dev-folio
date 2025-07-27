import { Card } from "@/components/ui/card";
import developerIllustration from "@/assets/developer-illustration.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-6 slide-in-left">
              About <span className="hero-title">Me</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground slide-in-left" style={{ animationDelay: '0.2s' }}>
              <p>
                I'm a highly skilled and innovative <span className="text-primary font-semibold">Software Engineer</span> with extensive experience in Java, Angular, Spring Boot, and MongoDB.
              </p>
              <p>
                I build scalable, resilient applications that improve performance and solve real business problems. My passion lies in creating efficient solutions that make a measurable impact.
              </p>
              <p>
                With a strong foundation in <span className="text-accent-purple font-semibold">cloud technologies</span> and modern development practices, I continuously strive to deliver high-quality software that exceeds expectations.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8 slide-in-left" style={{ animationDelay: '0.4s' }}>
              <Card className="tech-card p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
              <Card className="tech-card p-6 text-center">
                <div className="text-3xl font-bold text-accent-purple mb-2">30%</div>
                <div className="text-sm text-muted-foreground">Performance Boost</div>
              </Card>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex justify-center slide-in-right">
            <div className="relative">
              <img 
                src={developerIllustration} 
                alt="Developer Illustration" 
                className="w-full max-w-md floating"
              />
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full floating" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent-purple/20 rounded-full floating" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;