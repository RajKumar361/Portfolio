import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Award, ExternalLink, Calendar, BadgeCheck, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    name: "Associate in IT Foundation Skills (Java)",
    platform: "Infosys SpringBoard",
    date: "July 2025",
    skills: ["Java", "Programming Fundamentals", "Problem Solving"],
    verification: "https://verify.onwingspan.com/",
    icon: "java",
  },
];

const additionalAchievements = [
  {
    title: "Continuous Learner",
    description: "Actively pursuing certifications in Spring Boot, React, and Cloud Technologies",
    icon: Sparkles,
  },
  {
    title: "Problem Solver",
    description: "Completed 100+ coding challenges on various competitive platforms",
    icon: Star,
  },
  {
    title: "Quick Adapter",
    description: "Rapidly learning new technologies and frameworks to stay industry-relevant",
    icon: BadgeCheck,
  },
];

export function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            <span className="gradient-text">Certifications & Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Main Certification Card - Featured */}
        <div className="max-w-4xl mx-auto mb-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card rounded-2xl p-8 group hover:glow transition-all duration-500 relative overflow-hidden"
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
                {/* Certificate Icon */}
                <div className="shrink-0">
                  <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Award className="w-14 h-14 text-primary-foreground" />
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <BadgeCheck className="w-5 h-5 text-accent" />
                    <span className="text-accent text-sm font-bold uppercase tracking-wider">Verified Certificate</span>
                  </div>
                  <h3 className="text-2xl font-extrabold mb-3 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-accent text-lg font-bold mb-4">{cert.platform}</p>

                  <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-6">
                    <Calendar className="w-4 h-4" />
                    <span className="font-semibold">{cert.date}</span>
                  </div>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-bold border border-primary/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary/50 hover:bg-primary/10 gap-2 font-bold"
                    onClick={() => window.open(cert.verification, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Verify Certificate
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {additionalAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
              className="glass-card rounded-xl p-6 group hover:glow transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <achievement.icon className="w-7 h-7 text-accent" />
              </div>
              <h4 className="text-lg font-extrabold mb-2 group-hover:text-primary transition-colors">
                {achievement.title}
              </h4>
              <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
