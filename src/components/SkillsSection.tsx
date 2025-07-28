import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Code2, 
  Database, 
  Cloud, 
  Settings,
  Globe,
  Server,
  GitBranch,
  Zap
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "Java", logo: "☕" },
        { name: "Spring Boot", logo: "🍃" },
        { name: "Hibernate", logo: "🔄" },
        { name: "Angular", logo: "🅰️" },
        { name: "HTML", logo: "📄" },
        { name: "CSS", logo: "🎨" },
        { name: "JavaScript", logo: "🟨" },
        { name: "TypeScript", logo: "🔷" }
      ],
      color: "text-primary"
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MongoDB", logo: "🍃" },
        { name: "MySQL", logo: "🐬" },
        { name: "Redis", logo: "🔴" }
      ],
      color: "text-accent-purple"
    },
    {
      title: "Tools & Development",
      icon: <Settings className="w-6 h-6" />,
      skills: [
        { name: "Git", logo: "🌿" },
        { name: "Bitbucket", logo: "📦" },
        { name: "Postman", logo: "📮" },
        { name: "IntelliJ", logo: "💡" },
        { name: "VS Code", logo: "💻" },
        { name: "Jira", logo: "📊" }
      ],
      color: "text-success"
    },
    {
      title: "Cloud & Servers",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "AWS", logo: "☁️" },
        { name: "NGINX", logo: "🌐" },
        { name: "Apache Kafka", logo: "⚡" }
      ],
      color: "text-warning"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 fade-in-up">
            Skills & <span className="hero-title">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="tech-card p-6 h-full fade-in-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skill.name} 
                    variant="secondary"
                    className="skill-badge-animated text-xs fade-in-up"
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <span className="mr-2 text-sm">{skill.logo}</span>
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Animated Tech Icons */}
        <div className="flex justify-center items-center gap-8 mt-16 flex-wrap">
          {[Globe, Server, GitBranch, Zap].map((Icon, index) => (
            <div 
              key={index}
              className="p-4 rounded-full bg-primary/10 text-primary floating"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <Icon className="w-8 h-8" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;