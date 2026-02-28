import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const InternshipSection = () => (
  <section id="internship" className="py-24 bg-card">
    <div className="container mx-auto px-6 max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-4xl font-bold mb-2 text-foreground">Internship</h2>
        <div className="w-16 h-1 bg-accent mb-12" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border border-border p-8"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-accent flex items-center justify-center shrink-0">
            <Briefcase size={20} className="text-accent-foreground" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">V3 Data Solutions</h3>
            <p className="text-sm text-muted-foreground mb-3">45-Day Internship</p>
            <p className="text-muted-foreground leading-relaxed">
              Gained hands-on experience in data handling, web development, and real-world project workflows. Worked with Python, MySQL, and modern web technologies.
            </p>
            <p className="text-sm text-muted-foreground mt-4 italic">
              Project details will be updated soon.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default InternshipSection;
