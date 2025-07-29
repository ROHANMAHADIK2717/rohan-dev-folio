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
  Zap,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

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
        { name: "TypeScript", logo: "🔷" },
      ],
      color: "text-primary",
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MongoDB", logo: "🍃" },
        { name: "MySQL", logo: "🐬" },
        { name: "Redis", logo: "🔴" },
      ],
      color: "text-accent-purple",
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
        { name: "Jira", logo: "📊" },
      ],
      color: "text-success",
    },
    {
      title: "Cloud & Servers",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "AWS", logo: "☁️" },
        { name: "NGINX", logo: "🌐" },
        { name: "Apache Kafka", logo: "⚡" },
      ],
      color: "text-warning",
    },
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 fade-in-up">
            Skills & <span className="hero-title">Tech Stack</span>
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Card className="tech-card p-6 h-full rounded-2xl shadow-lg backdrop-blur-md bg-white/80 dark:bg-slate-800/60 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center gap-4 mb-5">
                  <div className={`text-3xl ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-xl tracking-tight text-gray-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      custom={skillIndex}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={badgeVariants}
                    >
                      <Badge
                        variant="secondary"
                        className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-slate-700 dark:text-white hover:bg-blue-100 hover:scale-105 transition transform duration-200 cursor-default"
                      >
                        <span className="mr-2 text-base">{skill.logo}</span>
                        {skill.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
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
