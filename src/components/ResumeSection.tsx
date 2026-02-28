import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

const ResumeSection = () => (
  <section id="resume" className="py-24">
    <div className="container mx-auto px-6 max-w-xl text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-4xl font-bold mb-2 text-foreground">Resume</h2>
        <div className="w-16 h-1 bg-accent mb-12 mx-auto" />
        <div className="border border-border p-10">
          <FileText size={48} className="mx-auto text-accent mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">Professional Resume</h3>
          <p className="text-muted-foreground mb-6 text-sm">
            View or download my latest resume to learn more about my experience and qualifications.
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Download size={16} /> Download Resume
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ResumeSection;
