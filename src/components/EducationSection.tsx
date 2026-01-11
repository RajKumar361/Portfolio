import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology",
    institute: "G. Pulla Reddy Engineering College",
    location: "Kurnool, India",
    status: "2026",
    description: "Computer Science and Data Science specialization with CGPA of 8.69. Actively involved in technical and extracurricular activities including AI workshops, coding events, and sports. Earned certifications from NPTEL on IoT and Smart Manufacturing, Infosys Certified Associate in IT Foundation Skills (Java), and Google verification in AI, Python, and Industry Challenges.",
  },
];

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-accent hidden md:block" />

              <div className="glass-card rounded-2xl p-8 md:ml-20 relative group hover:glow transition-all duration-300">
                {/* Timeline Dot */}
                <div className="absolute -left-[52px] top-8 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent hidden md:block animate-pulse-glow" />

                <div className="flex flex-wrap items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-accent font-medium mb-4">{edu.institute}</p>

                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4" />
                        Expected: {edu.status}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
