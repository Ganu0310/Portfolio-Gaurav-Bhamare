import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/data/portfolio";

const CertificationsSection = () => (
  <section id="certifications" className="py-24 bg-card">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-4xl font-bold mb-2 text-foreground">Certifications</h2>
        <div className="w-16 h-1 bg-accent mb-12" />
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="border border-border p-6 hover:border-foreground transition-colors"
          >
            <Award size={24} className="text-accent mb-3" />
            <h3 className="font-semibold text-foreground mb-1">{c.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{c.org}</p>
            <a href={c.link} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">
              View Certificate →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
