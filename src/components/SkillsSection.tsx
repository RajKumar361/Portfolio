import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Server, 
  Database, 
  GitBranch, 
  Bot,
  FileCode,
  Palette,
  Braces
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Palette,
    skills: [
      { name: "HTML", icon: FileCode },
      { name: "CSS", icon: Palette },
      { name: "JavaScript", icon: Braces },
    ],
    color: "from-primary to-chart-1",
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Java", icon: Code2 },
      { name: "Spring Boot", icon: Server },
    ],
    color: "from-accent to-chart-3",
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MySQL", icon: Database },
    ],
    color: "from-chart-2 to-primary",
  },
  {
    title: "Tools",
    icon: GitBranch,
    skills: [
      { name: "Git", icon: GitBranch },
    ],
    color: "from-chart-4 to-accent",
  },
  {
    title: "AI Tools",
    icon: Bot,
    skills: [
      { name: "ChatGPT", icon: Bot },
      { name: "DeepSeek", icon: Bot },
      { name: "Google AI Studio", icon: Bot },
    ],
    color: "from-primary to-accent",
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card rounded-2xl p-6 group hover:glow transition-all duration-300"
            >
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${category.color} mb-6`}>
                <category.icon className="w-4 h-4 text-primary-foreground" />
                <h3 className="font-extrabold text-sm text-primary-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default group/skill"
                  >
                    <skill.icon className="w-4 h-4 text-primary group-hover/skill:scale-110 transition-transform" />
                    <span className="text-foreground text-sm font-bold">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
