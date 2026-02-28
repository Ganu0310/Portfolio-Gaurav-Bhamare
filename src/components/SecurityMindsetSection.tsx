import { motion } from "framer-motion";
import { securityPrinciples } from "@/data/security";

const SecurityMindsetSection = () => {
  return (
    <section id="security-mindset" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl font-bold mb-2 text-foreground">Security-First Engineering Approach</h2>
          <p className="text-muted-foreground mb-2">Building applications with security integrated from day one.</p>
          <div className="w-16 h-1 bg-accent mb-12" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="border border-border p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
              <p className="text-muted-foreground leading-relaxed text-lg">
                "I believe security is not an afterthought but a core architectural decision. Every system I design
                considers authentication, authorization, validation, and data protection from the beginning."
              </p>
            </div>
          </motion.div>

          {/* Right: Principle Cards */}
          <div className="grid sm:grid-cols-2 gap-3">
            {securityPrinciples.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group border border-border p-4 hover:border-accent transition-all duration-300 cursor-default"
                  title={p.description}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary rounded group-hover:bg-accent/20 transition-colors">
                      <Icon size={16} className="text-accent" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{p.title}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityMindsetSection;
