import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { projects } from "@/data/portfolio";

const allTechs = [...new Set(projects.flatMap((p) => p.tech))];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.tech.includes(filter));

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl font-bold mb-2 text-foreground">Projects</h2>
          <div className="w-16 h-1 bg-accent mb-8" />
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-10">
          {["All", ...allTechs].map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-4 py-1.5 text-xs font-medium border transition-colors ${filter === t ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"}`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <motion.div
              layoutId={`project-${p.id}`}
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
              className="border border-border bg-card p-6 hover:border-accent transition-colors cursor-pointer group hover:shadow-lg shadow-black/5 dark:shadow-white/5 relative overflow-hidden"
              onClick={() => setSelected(p)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground group-hover:bg-accent/10 transition-colors">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
                    <Github size={14} /> GitHub
                  </a>
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
                layoutId={`project-${selected.id}`}
                onClick={(e) => e.stopPropagation()}
                className="bg-card border border-border p-8 max-w-lg w-full relative z-10 shadow-2xl"
              >
                <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                  <X size={18} />
                </button>
                <h3 className="text-2xl font-bold text-foreground mb-3">{selected.title}</h3>
                <p className="text-muted-foreground mb-4">{selected.description}</p>
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
      </div>
    </section>
  );
};

export default ProjectsSection;
