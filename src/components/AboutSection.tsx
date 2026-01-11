import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Target, Lightbulb, TrendingUp } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Clean Code", description: "Writing efficient, maintainable code" },
  { icon: Target, label: "Problem Solver", description: "Finding optimal solutions" },
  { icon: Lightbulb, label: "Quick Learner", description: "Adapting to new technologies" },
  { icon: TrendingUp, label: "Growth Mindset", description: "Continuous improvement" },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4 text-accent">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am a passionate developer with strong hands-on experience in Core Java, MySQL, HTML, CSS, and JavaScript. I have worked on a mini project, Password Generator, built using Core Java concepts, which helped me strengthen my understanding of object-oriented programming and practical application development.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4 text-accent">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I am a motivated and enthusiastic B.Tech student in Computer Science and Data Science at G Pulla Reddy Engineering College, with a strong interest in software development and problem-solving. I am actively working toward my goal of becoming a skilled Java Developer.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                During my internship at Six Phrase Training, I sharpened my Java skills through hands-on project development. I worked on an Employee Database System and an LRU Cache with Expiry, which improved data retrieval efficiency by up to 60%. Additionally, I built a Secure Password Generator featuring advanced randomization techniques and password strength analysis.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4 text-accent">My Goal</h3>
              <p className="text-muted-foreground leading-relaxed">
                My career goal is to grow as a Java Developer and contribute to building reliable, scalable, and impactful software solutions while learning from industry professionals and real-world challenges. I am a motivated problem solver, eager to begin my career in the IT industry where I can apply my technical skills and continuously learn.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center group hover:glow transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{item.label}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
