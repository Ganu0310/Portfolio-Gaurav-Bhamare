import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";

const EducationSection = () => (
  <section id="education" className="py-24">
    <div className="container mx-auto px-6 max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-4xl font-bold mb-2 text-foreground">Education</h2>
        <div className="w-16 h-1 bg-accent mb-12" />
      </motion.div>
      <div className="relative border-l-2 border-border pl-8 space-y-10">
        {education.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative"
          >
            <div className="absolute -left-[2.6rem] top-1 w-8 h-8 bg-accent flex items-center justify-center rounded-full">
              <GraduationCap size={16} className="text-accent-foreground" />
            </div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">{e.status}</p>
            <h3 className="text-xl font-semibold text-foreground mt-1">{e.degree}</h3>
            <p className="text-sm text-muted-foreground">{e.institution}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
