import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Lottie from "lottie-react";
import devAnimation from "@/assets/animations/Coder by Sandeep Ram in blue.json";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-muted dark:from-background dark:to-muted/30 mt-10">
      {/* Background Blobs */}
      <motion.div
        className="absolute top-10 left-10 w-56 h-56 bg-primary/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 bg-accent-purple/20 rounded-full blur-2xl"
        animate={{ scale: [1, 0.9, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      ></motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Animated Developer Illustration */}
            <div className="hidden md:block">
              <Lottie animationData={devAnimation} loop={true} className="max-w-md mx-auto" />
            </div>

            {/* Text Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-purple">
                Rohan Mahadik
              </h1>

              {/* Animated Typewriter Tagline */}
              <div className="text-lg md:text-xl mb-6 text-muted-foreground h-[60px]">
                <Typewriter
                  options={{
                    strings: [
                      "Crafting Code & Scalable Systems",
                      "Java 8/17 Wizard | Spring Boot Alchemist",
                      "Kafka Whisperer | MongoDB PostgSQL Sorcerer",
                      "AWS Explorer | CI/CD Automator"
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    deleteSpeed: 20,
                  }}
                />
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Button
                  size="lg"
                  className="gap-2 group"
                  onClick={() => window.open("mailto:rohanm2717@gmail.com")}
                >
                  <Mail className="w-5 h-5 group-hover:animate-bounce" />
                  Get In Touch
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2"
                  onClick={() => window.open("https://drive.google.com/file/d/1ZvcnSTLTevgEYT733TWdng-jUx1CsJbQ/view?usp=sharing", "_blank")}
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Download Resume
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-6 mb-10">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary transition-colors pulse-glow rounded-full"
                  onClick={() => window.open("https://linkedin.com/in/rohan-r-mahadik", "_blank")}
                >
                  <Linkedin className="w-6 h-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary transition-colors pulse-glow rounded-full"
                  onClick={() => window.open("https://www.linkedin.com/in/rohan-r-mahadik", "_blank")}
                >
                  <Github className="w-6 h-6" />
                </Button>
              </div>

              {/* Scroll Down Indicator */}
              <motion.div
                className="mt-2 flex justify-center md:justify-start"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
              >
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-muted-foreground hover:text-primary transition-all"
                  aria-label="Scroll down"
                >
                  <ChevronDown className="w-8 h-8 animate-bounce" />
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
