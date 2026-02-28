import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const categories = [
  { key: "frontend" as const, label: "Frontend" },
  { key: "backend" as const, label: "Backend" },
  { key: "database" as const, label: "Database" },
  { key: "tools" as const, label: "Tools" },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 bg-card">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-2 text-foreground">Skills</h2>
        <div className="w-16 h-1 bg-accent mb-12" />
      </motion.div>
      <div className="grid md:grid-cols-2 gap-10">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1, duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-foreground">{cat.label}</h3>
            <div className="space-y-4">
              {skills[cat.key].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary overflow-hidden">
                    <motion.div
                      className="h-full bg-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
