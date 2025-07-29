import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  Github, 
  Building, 
  TrendingUp, 
  Layers, 
  Zap,
  Shield,
  Globe
} from "lucide-react";

const ProjectsSection = () => {
  const projectFeatures = [
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Efficiency Boost",
      description: "Developed modules for client needs",
      impact: "15% efficiency boost"
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Full Stack Integration",
      description: "Integrated REST APIs with Angular + Spring Boot",
      impact: "Seamless data flow"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Performance Optimization",
      description: "Optimized frontend with lazy loading, observables",
      impact: "Faster load times"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Security Implementation",
      description: "Implemented auth guards and security measures",
      impact: "Enhanced security"
    }
  ];

  const technologies = [
    "Angular", "Spring Boot", "Java", "MongoDB", "REST APIs", 
    "TypeScript", "HTML/CSS", "Bootstrap", "JWT", "Git"
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 fade-in-up">
            Featured <span className="hero-title">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground fade-in-up" style={{ animationDelay: '0.2s' }}>
            Real-world applications with measurable business impact
          </p>
        </div>

        {/* Main Project Card */}
        <Card className="tech-card p-8 mb-8 fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Project Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    IndusInd Bank – Home Loan Platform
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    A comprehensive home loan processing platform built for one of India's leading banks, 
                    streamlining the entire loan application and approval workflow.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Project Highlights:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {projectFeatures.map((feature, index) => (
                    <div 
                      key={feature.title}
                      className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg slide-in-left"
                      style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                    >
                      <div className="text-primary mt-1">
                        {feature.icon}
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm mb-1">{feature.title}</h5>
                        <p className="text-xs text-muted-foreground mb-2">{feature.description}</p>
                        <Badge variant="outline" className="text-xs">
                          {feature.impact}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <Button variant="gradient" className="group">
                  <Globe className="w-4 h-4 group-hover:animate-pulse" />
                  View Project
                </Button>
                <Button variant="outline">
                  <Github className="w-4 h-4" />
                  Source Code
                </Button>
              </div>
            </div>

            {/* Technologies & Stats */}
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="skill-badge text-xs"
                      style={{ animationDelay: `${0.6 + index * 0.05}s` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Key Metrics</h4>
                <div className="space-y-3">
                  <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-l-primary">
                    <div className="text-2xl font-bold text-primary">15%</div>
                    <div className="text-sm text-muted-foreground">Efficiency Improvement</div>
                  </div>
                  <div className="p-4 bg-success/5 rounded-lg border-l-4 border-l-success">
                    <div className="text-2xl font-bold text-success">100%</div>
                    <div className="text-sm text-muted-foreground">API Integration Success</div>
                  </div>
                  <div className="p-4 bg-accent-purple/5 rounded-lg border-l-4 border-l-accent-purple">
                    <div className="text-2xl font-bold text-accent-purple">2022</div>
                    <div className="text-sm text-muted-foreground">Project Year</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Additional Projects Placeholder */}
        <div className="text-center fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-muted-foreground mb-4">
            More projects and open-source contributions available on
          </p>
          <Button variant="outline" size="lg">
            <Github className="w-5 h-5" />
            View GitHub Profile
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;