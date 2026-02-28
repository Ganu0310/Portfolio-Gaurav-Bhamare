import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X, FileText, ExternalLink } from "lucide-react";
import { certifications } from "@/data/portfolio";

const CertificationsSection = () => {
  const [selected, setSelected] = useState<typeof certifications[0] | null>(null);

  return (
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
              className="border border-border p-6 hover:border-accent transition-all cursor-pointer group"
              onClick={() => setSelected(c)}
            >
              <Award size={24} className="text-accent mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-1">{c.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{c.org}</p>
              <button className="text-sm text-accent font-medium group-hover:underline flex items-center gap-1">
                View Details <ExternalLink size={14} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Certificate Detail Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card border border-border w-full max-w-6xl max-h-[90vh] flex flex-col lg:flex-row shadow-2xl overflow-hidden relative"
              >
                {/* Close Button Mobile/Desktop */}
                <button 
                  onClick={() => setSelected(null)} 
                  className="absolute top-4 right-4 z-10 p-2 bg-secondary/80 hover:bg-secondary text-foreground rounded-full transition-colors lg:bg-transparent lg:hover:bg-secondary/50"
                  title="Close Modal"
                >
                  <X size={20} />
                </button>

                {/* Left Side: PDF Viewer */}
                <div className="lg:w-2/3 h-[50vh] lg:h-auto bg-foreground/5 border-b lg:border-b-0 lg:border-r border-border flex items-center justify-center p-4">
                  <iframe 
                     src={`${selected.link}#toolbar=0&navpanes=0`} 
                     className="w-full h-full shadow-lg border border-border/50 bg-white"
                     title={`${selected.title} Certificate`}
                  />
                </div>

                {/* Right Side: Details & Description */}
                <div className="lg:w-1/3 p-6 sm:p-8 flex flex-col h-full overflow-y-auto">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-accent/10 text-accent rounded-lg">
                      <Award size={28} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{selected.org}</p>
                      <h3 className="text-2xl font-bold text-foreground leading-tight mt-1">{selected.title}</h3>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-3 border-b border-border pb-2">
                       <FileText size={16} className="text-accent" /> Course Explanation
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {selected.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-6 border-t border-border">
                    <a 
                      href={selected.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full bg-foreground text-background py-3 font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} /> Open Standard PDF View
                    </a>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CertificationsSection;
