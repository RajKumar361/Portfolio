import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import passwordGeneratorImg from "@/assets/password-generator.png";
import churnPredictionImg from "@/assets/churn-prediction.png";

const projects = [
  {
    title: "Password Generator",
    status: "Completed",
    category: "Java Utility Application",
    description: "Java-based Password Generator utility application that creates strong and secure passwords using Core Java concepts. The project focuses on generating random and customizable passwords by combining uppercase letters, lowercase letters, numbers, and special characters.",
    techStack: ["Core Java"],
    liveDemo: null,
    github: "https://github.com/RajKumar361/Password_Generator",
    image: passwordGeneratorImg,
  },
  {
    title: "Customer Churn Prediction App",
    status: "In Progress",
    category: "Web App",
    description: "This project focuses on predicting bank customer churn using machine learning techniques. It analyzes customer demographic, financial, and behavioral data to identify patterns that indicate a high risk of customers leaving the bank.",
    techStack: ["Machine Learning", "Python", "Flask"],
    liveDemo: null,
    github: null,
    image: churnPredictionImg,
  },
];

const categories = ["All", "Java Utility Application", "Web App"];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? "bg-gradient-to-r from-primary to-accent hover:opacity-90 font-bold"
                    : "border-primary/50 hover:bg-primary/10 font-bold"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card rounded-2xl overflow-hidden group hover:glow transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <Badge
                  className={`absolute top-4 right-4 ${
                    project.status === "Completed"
                      ? "bg-green-500/20 text-green-400 border-green-500/50"
                      : "bg-yellow-500/20 text-yellow-400 border-yellow-500/50"
                  }`}
                >
                  {project.status}
                </Badge>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-extrabold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-accent font-bold mb-4">{project.category}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-secondary/50 text-xs font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-bold"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-bold"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {!project.github && !project.liveDemo && (
                    <span className="text-muted-foreground text-sm italic font-medium">
                      Links coming soon...
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
