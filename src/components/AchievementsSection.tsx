import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Trophy, Code, Briefcase } from "lucide-react";

const Counter = ({ target }: { target: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, target, { duration: 2 });
    return controls.stop;
  }, [inView, target, count]);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = String(v);
    });
    return unsub;
  }, [rounded]);

  return (
    <motion.span
      ref={ref}
      onViewportEnter={() => setInView(true)}
      className="text-4xl font-bold text-foreground"
    >
      0
    </motion.span>
  );
};

const AchievementsSection = () => (
  <section id="achievements" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-4xl font-bold mb-2 text-foreground">Achievements</h2>
        <div className="w-16 h-1 bg-accent mb-12" />
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-8 mb-12">
        {[
          { icon: Code, label: "Projects Completed", value: 5 },
          { icon: Trophy, label: "Technologies Learned", value: 10 },
          { icon: Briefcase, label: "Internship Experience", value: 1 },
        ].map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center border border-border p-8"
          >
            <a.icon size={28} className="mx-auto text-accent mb-4" />
            <Counter target={a.value} />
            <span className="text-foreground">+</span>
            <p className="text-sm text-muted-foreground mt-2">{a.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        {["Academic Achievements", "Technical Achievements", "Hackathon Participation"].map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="border border-border p-6"
          >
            <h3 className="font-semibold text-foreground mb-2">{t}</h3>
            <p className="text-sm text-muted-foreground">Details coming soon.</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
