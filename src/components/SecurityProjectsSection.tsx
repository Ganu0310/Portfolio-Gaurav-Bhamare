import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { securityProjects, securityFilters } from "@/data/security";

const SecurityProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<typeof securityProjects[0] | null>(null);
  const [showArch, setShowArch] = useState(false);

  const filtered =
    filter === "All"
      ? securityProjects
      : securityProjects.filter((p) => p.tags.includes(filter));

  return (
    <section id="security-projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl font-bold mb-2 text-foreground">Security-Focused Projects</h2>
          <p className="text-muted-foreground mb-2">
            Practical implementations demonstrating secure backend architecture and authentication systems.
          </p>
          <div className="w-16 h-1 bg-accent mb-8" />
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {securityFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 text-xs font-medium border transition-colors ${
                filter === f
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
          <button
            onClick={() => setShowArch(true)}
            className="ml-auto px-4 py-1.5 text-xs font-medium border border-accent text-accent hover:bg-accent/10 transition-colors flex items-center gap-1"
          >
            <Shield size={12} /> View Architecture
          </button>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-border p-6 hover:border-accent transition-all duration-300 cursor-pointer group relative overflow-hidden"
              onClick={() => setSelected(p)}
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="flex items-center gap-2 mb-3">
                <Shield size={16} className="text-accent" />
                <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground">{t}</span>
                ))}
              </div>
              <ul className="space-y-1 mb-4">
                {p.features.slice(0, 2).map((f) => (
                  <li key={f} className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <CheckCircle size={10} className="text-accent" /> {f}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                <a href={p.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
                  <Github size={14} /> GitHub
                </a>
                <a href={p.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
                  <ExternalLink size={14} /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-6"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card border border-border p-8 max-w-lg w-full relative"
              >
                <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                  <X size={18} />
                </button>
                <div className="flex items-center gap-2 mb-3">
                  <Shield size={18} className="text-accent" />
                  <h3 className="text-2xl font-bold text-foreground">{selected.title}</h3>
                </div>
                <p className="text-sm text-accent mb-2 font-medium">Problem: {selected.problem}</p>
                <p className="text-muted-foreground mb-4">{selected.description}</p>
                <h4 className="text-sm font-semibold text-foreground mb-2">Security Features:</h4>
                <ul className="space-y-1.5 mb-4">
                  {selected.features.map((f) => (
                    <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                      <CheckCircle size={12} className="text-accent" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={selected.github} target="_blank" rel="noopener noreferrer" className="bg-foreground text-background px-4 py-2 text-sm flex items-center gap-2">
                    <Github size={14} /> GitHub
                  </a>
                  <a href={selected.demo} target="_blank" rel="noopener noreferrer" className="border border-foreground text-foreground px-4 py-2 text-sm flex items-center gap-2">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Architecture Modal */}
        <AnimatePresence>
          {showArch && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-6"
              onClick={() => setShowArch(false)}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card border border-border p-8 max-w-md w-full relative"
              >
                <button onClick={() => setShowArch(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                  <X size={18} />
                </button>
                <h3 className="text-xl font-bold text-foreground mb-6">Security Architecture</h3>
                <div className="space-y-4">
                  {["Frontend (React)", "API Gateway", "Auth Middleware", "Validation Layer", "Database (MongoDB)"].map((layer, i, arr) => (
                    <div key={layer}>
                      <div className="flex items-center gap-3 p-3 border border-border bg-secondary/50">
                        <Shield size={14} className="text-accent" />
                        <span className="text-sm font-medium text-foreground">{layer}</span>
                      </div>
                      {i < arr.length - 1 && (
                        <div className="flex justify-center py-1">
                          <ArrowRight size={14} className="text-accent rotate-90" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SecurityProjectsSection;
