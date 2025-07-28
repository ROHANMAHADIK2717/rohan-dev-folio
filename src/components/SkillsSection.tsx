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
import { useState } from "react";

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "Java", logo: "☕", level: 90, description: "Enterprise-grade backend development" },
        { name: "Spring Boot", logo: "🍃", level: 85, description: "Microservices & REST APIs" },
        { name: "Hibernate", logo: "🔄", level: 80, description: "Object-relational mapping" },
        { name: "Angular", logo: "🅰️", level: 75, description: "Modern frontend framework" },
        { name: "HTML", logo: "📄", level: 95, description: "Semantic web structure" },
        { name: "CSS", logo: "🎨", level: 85, description: "Responsive design & animations" },
        { name: "JavaScript", logo: "🟨", level: 88, description: "Dynamic web interactions" },
        { name: "TypeScript", logo: "🔷", level: 82, description: "Type-safe development" }
      ],
      color: "text-primary"
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MongoDB", logo: "🍃", level: 85, description: "NoSQL document database" },
        { name: "MySQL", logo: "🐬", level: 80, description: "Relational database management" },
        { name: "Redis", logo: "🔴", level: 75, description: "In-memory data structure store" }
      ],
      color: "text-accent-purple"
    },
    {
      title: "Tools & Development",
      icon: <Settings className="w-6 h-6" />,
      skills: [
        { name: "Git", logo: "🌿", level: 90, description: "Version control & collaboration" },
        { name: "Bitbucket", logo: "📦", level: 85, description: "Git repository hosting" },
        { name: "Postman", logo: "📮", level: 88, description: "API testing & documentation" },
        { name: "IntelliJ", logo: "💡", level: 92, description: "Java IDE & productivity tools" },
        { name: "VS Code", logo: "💻", level: 90, description: "Lightweight code editor" },
        { name: "Jira", logo: "📊", level: 78, description: "Project management & tracking" }
      ],
      color: "text-success"
    },
    {
      title: "Cloud & Servers",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "AWS", logo: "☁️", level: 80, description: "Cloud computing platform" },
        { name: "NGINX", logo: "🌐", level: 75, description: "Web server & reverse proxy" },
        { name: "Apache Kafka", logo: "⚡", level: 78, description: "Distributed streaming platform" }
      ],
      color: "text-warning"
    }
  ];

  const handleSkillClick = (skillName: string) => {
    setSelectedSkill(selectedSkill === skillName ? null : skillName);
  };

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
              className={`tech-card p-6 h-full fade-in-up transition-all duration-300 ${
                hoveredCategory === category.title ? 'scale-105 shadow-lg' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCategory(category.title)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`${category.color} transition-transform duration-300 ${
                  hoveredCategory === category.title ? 'scale-110 rotate-12' : ''
                }`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className={`skill-item-interactive p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                      selectedSkill === skill.name 
                        ? 'bg-primary/20 scale-105 shadow-md' 
                        : 'bg-muted/50 hover:bg-primary/10 hover:scale-102'
                    }`}
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    onClick={() => handleSkillClick(skill.name)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`text-xl transition-transform duration-300 ${
                          selectedSkill === skill.name ? 'scale-125 rotate-12' : ''
                        }`}>
                          {skill.logo}
                        </span>
                        <span className="font-medium text-sm">{skill.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all duration-700 ${
                              selectedSkill === skill.name ? 'bg-primary' : 'bg-primary/70'
                            }`}
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${(index * 0.1) + (skillIndex * 0.1)}s`
                            }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                    </div>
                    
                    {selectedSkill === skill.name && (
                      <div className="mt-2 text-xs text-muted-foreground animate-fade-in">
                        {skill.description}
                      </div>
                    )}
                  </div>
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