import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  TrendingUp,
  Shield,
  Zap,
  Users
} from "lucide-react";
import { getYearsOfExperience } from "@/lib/experience";

const ExperienceSection = () => {

  const achievements = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalable Microservices",
      description: "Built scalable microservices on cloud",
      impact: "30% enhancement in infra flexibility",
      color: "text-primary"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Unit-tested code implementation",
      impact: "15% improvement in quality",
      color: "text-success"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "API Optimization",
      description: "API integrations and optimization",
      impact: "20% reduced response time",
      color: "text-warning"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Leadership",
      description: "Led scrum contributions",
      impact: "25% boost in communication",
      color: "text-accent-purple"
    }
  ];

  const [experience, setExperience] = useState(0);

  useEffect(() => {
    const target = getYearsOfExperience(); // e.g., 2.9
    let start = 0;
    const duration = 1000;
    const increment = target / (duration / 30);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setExperience(target);
        clearInterval(counter);
      } else {
        setExperience(parseFloat(start.toFixed(1)));
      }
    }, 30);

    return () => clearInterval(counter);
  }, []);

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 fade-in-up">
            Professional <span className="hero-title">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground fade-in-up" style={{ animationDelay: '0.2s' }}>
            Building impactful solutions with measurable results
          </p>
        </div>

        {/* Company Info */}
        <Card className="tech-card p-8 mb-12 fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-primary mb-2">
                Lentra AI Pvt Ltd
              </h3>
              <div className="text-lg font-semibold text-foreground mb-2">
                Software Engineer
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Sep 2022 – Present</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Pune, Maharashtra</span>
                </div>
              </div>
            </div>
            <Badge variant="outline" className="text-sm px-3 py-1">
              {experience}+ Years
            </Badge>
          </div>

          <p className="text-muted-foreground mb-8 text-lg">
            Leading development of scalable fintech solutions, focusing on microservices architecture,
            cloud optimization, and high-performance applications that serve thousands of users.
          </p>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={achievement.title}
                className="p-6 border-l-4 border-l-primary/50 hover:border-l-primary transition-all duration-300 slide-in-left"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className={`${achievement.color} mb-3`}>
                  {achievement.icon}
                </div>
                <h4 className="font-semibold mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {achievement.description}
                </p>
                <div className="text-sm font-semibold text-primary">
                  {achievement.impact}
                </div>
              </Card>
            ))}
          </div>

          {/* Key Technologies Used */}
          <div className="text-center fade-in-up" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-bold mb-6 hero-title mt-10">Key Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-8 gap-4 max-w-6xl mx-auto mt-10">
              {["Java", "Spring Boot", "Angular", "MongoDB", "AWS", "Microservices", "REST APIs", "Git"].map((tech, index) => (
                <div
                  key={tech}
                  className="tech-card p-4 text-center hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="font-semibold text-foreground">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ExperienceSection;