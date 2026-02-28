import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Calendar, Clock, X, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

const BlogSection = () => {
  const [selected, setSelected] = useState<typeof blogPosts[0] | null>(null);

  return (
    <section id="blog" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl font-bold mb-2 text-foreground">Insights & Roadmaps</h2>
          <p className="text-muted-foreground mb-2">
            Thoughts on software engineering, data structures, and the journey of web development.
          </p>
          <div className="w-16 h-1 bg-accent mb-12" />
        </motion.div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelected(post)}
              className="group cursor-pointer border border-border bg-background p-6 hover:border-accent transition-all duration-300 relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 flex-grow">
                {post.summary}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50 text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
                </div>
                <div className="flex items-center gap-1 text-foreground font-medium group-hover:text-accent transition-colors">
                  Read <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Blog Detail Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card border border-border max-w-3xl w-full relative my-8 overflow-hidden flex flex-col max-h-[90vh]"
              >
                {/* Modal Header (Sticky) */}
                <div className="sticky top-0 z-10 bg-card/95 backdrop-blur-sm border-b border-border p-6 sm:px-8 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">{selected.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5"><Calendar size={14} /> {selected.date}</span>
                      <span className="flex items-center gap-1.5"><Clock size={14} /> {selected.readTime}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelected(null)} 
                    className="p-2 bg-secondary/50 hover:bg-secondary text-foreground rounded-full transition-colors flex-shrink-0"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Modal Content (Scrollable) */}
                <div className="p-6 sm:p-8 overflow-y-auto prose prose-invert max-w-none prose-headings:text-foreground prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:border-b prose-h2:border-border/50 prose-h2:pb-2 prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
                  <div dangerouslySetInnerHTML={{ __html: selected.content }} />
                </div>
                
                {/* Modal Footer */}
                <div className="p-6 bg-secondary/20 border-t border-border mt-auto flex justify-end">
                   <button 
                    onClick={() => setSelected(null)} 
                    className="px-6 py-2 bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
                  >
                    Close Article
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BlogSection;
