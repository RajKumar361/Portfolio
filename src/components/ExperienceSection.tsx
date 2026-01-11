import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Tap Academy",
    role: "Java Full Stack Intern",
    startDate: "December 2025",
    endDate: "Present",
    status: "Currently Ongoing",
    technologies: ["Java", "React", "Spring Boot"],
    responsibilities: [
      "Working as a Java Full Stack Intern, gaining practical experience in both front-end and back-end development",
      "Actively learning and applying real-world development practices",
      "Enhancing skills in building complete web applications, debugging, and understanding full project workflows",
      "Developing problem-solving abilities and understanding industry-level coding standards",
    ],
  },
  {
    company: "Six Phrase Training",
    role: "Java Intern",
    startDate: "May 2025",
    endDate: "June 2025",
    status: "Completed",
    technologies: ["Java", "OOP", "Data Structures"],
    responsibilities: [
      "Gained hands-on experience in Java programming, problem-solving, and debugging",
      "Implemented Object-Oriented Programming (OOP) concepts in real-world projects",
      "Developed Java-based applications including Employee Database System and LRU Cache with Expiry",
      "Improved data retrieval efficiency by up to 60% through optimized use of data structures and algorithms",
    ],
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent md:left-1/2 md:-translate-x-1/2" />
              )}

              <div className="glass-card rounded-2xl p-6 md:p-8 hover:glow transition-all duration-500">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                      <Briefcase className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold">{exp.role}</h3>
                      <p className="text-primary font-bold">{exp.company}</p>
                    </div>
                  </div>
                  <Badge
                    className={
                      exp.status === "Completed"
                        ? "bg-green-500/20 text-green-400 border-green-500/50"
                        : "bg-blue-500/20 text-blue-400 border-blue-500/50"
                    }
                  >
                    {exp.status === "Completed" ? (
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                    ) : (
                      <Clock className="w-3 h-3 mr-1" />
                    )}
                    {exp.status}
                  </Badge>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-semibold">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Responsibilities */}
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <motion.li
                      key={respIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.2 + respIndex * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2 shrink-0" />
                      <span className="text-muted-foreground text-sm font-medium leading-relaxed">
                        {resp}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
