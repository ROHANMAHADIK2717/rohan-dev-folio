import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Calendar, 
  ExternalLink,
  Cloud,
  Code2,
  GraduationCap
} from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "AWS Technical Essentials",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: <Cloud className="w-6 h-6" />,
      color: "text-warning",
      bgColor: "bg-warning/10",
      description: "Cloud computing fundamentals and AWS core services"
    },
    {
      title: "Full Stack Java Developer",
      issuer: "Spark IT",
      year: "2022",
      icon: <Code2 className="w-6 h-6" />,
      color: "text-primary",
      bgColor: "bg-primary/10",
      description: "Comprehensive Java development and modern frameworks"
    }
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Suryadatta Institute",
      year: "2024",
      grade: "8.1 CGPA",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "text-accent-purple"
    },
    {
      degree: "BSc Computer Applications",
      institution: "Savitribai Phule Pune University",
      year: "2021",
      grade: "9.23 CGPA",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "text-success"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 fade-in-up">
            Certifications & <span className="hero-title">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground fade-in-up" style={{ animationDelay: '0.2s' }}>
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 slide-in-left">
              <Award className="w-6 h-6 text-primary" />
              Professional Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card 
                  key={cert.title}
                  className="tech-card p-6 slide-in-left"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 ${cert.bgColor} rounded-lg`}>
                      <div className={cert.color}>
                        {cert.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1">{cert.title}</h4>
                      <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          {cert.year}
                        </Badge>
                        <button className="text-primary hover:text-primary/80 transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 slide-in-right">
              <GraduationCap className="w-6 h-6 text-accent-purple" />
              Education
            </h3>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card 
                  key={edu.degree}
                  className="tech-card p-6 slide-in-right"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <div className={edu.color}>
                        {edu.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1">{edu.degree}</h4>
                      <p className="text-muted-foreground mb-2">{edu.institution}</p>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          {edu.year}
                        </Badge>
                        <Badge className={`text-xs ${edu.color} bg-transparent border-current`}>
                          {edu.grade}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Achievement Highlight */}
            <Card className="p-6 bg-gradient-to-r from-primary/5 to-accent-purple/5 border-primary/20 slide-in-right" style={{ animationDelay: '0.6s' }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">9.23</div>
                <div className="text-sm text-muted-foreground mb-2">Highest CGPA</div>
                <div className="text-xs text-muted-foreground">
                  Graduated with distinction in Computer Applications
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;