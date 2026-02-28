import { motion } from "framer-motion";
import { Zap, Users, Heart, Calendar, Award } from "lucide-react";

const items = [
  { icon: Zap, title: "Coding Competitions" },
  { icon: Award, title: "Hackathons" },
  { icon: Heart, title: "Volunteering" },
  { icon: Calendar, title: "Technical Events" },
  { icon: Users, title: "Clubs" },
];

const ExtraSection = () => (
  <section id="extra" className="py-24 bg-card">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-4xl font-bold mb-2 text-foreground">Extra-Curricular</h2>
        <div className="w-16 h-1 bg-accent mb-12" />
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="border border-border p-6 hover:border-foreground transition-colors"
          >
            <item.icon size={24} className="text-accent mb-3" />
            <h3 className="font-semibold text-foreground">{item.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">Details coming soon.</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExtraSection;
