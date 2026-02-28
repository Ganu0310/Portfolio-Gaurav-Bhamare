import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import portrait from "@/assets/portrait.png";
import { roles } from "@/data/portfolio";

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
              Computer Engineer & Full Stack Developer
            </p>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-6 text-foreground">
              BHAMARE
              <br />
              GAURAV
              <br />
              <span className="text-accent">ANIL</span>
            </h1>
            <div className="h-8 mb-6">
              <span className="text-lg text-muted-foreground font-mono">
                {text}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
              I build scalable web applications and solve real-world problems using Python and the MERN stack.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo("projects")} className="bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity">
                View Projects
              </button>
              <button onClick={() => scrollTo("contact")} className="border border-foreground text-foreground px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors">
                Contact Me
              </button>
              <button onClick={() => scrollTo("resume")} className="text-foreground text-sm font-medium flex items-center gap-2 hover:text-accent transition-colors">
                Resume <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-96 sm:w-80 sm:h-[28rem] lg:w-96 lg:h-[32rem] overflow-hidden rounded-[2rem] bg-secondary">
                <img src={portrait} alt="Bhamare Gaurav Anil" className="w-full h-full object-cover" />
              </div>
              {/* Floating skill badges like reference */}
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute -left-8 top-12 bg-[hsl(var(--highlight-cyan))] text-foreground px-4 py-2 text-xs font-bold uppercase rotate-[-6deg]">
                MERN Stack
              </motion.div>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 3.5 }} className="absolute -right-6 top-1/3 bg-[hsl(var(--highlight-pink))] text-foreground px-4 py-2 text-xs font-bold uppercase rotate-[4deg]">
                Python Dev
              </motion.div>
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2.8 }} className="absolute -left-4 bottom-24 bg-[hsl(var(--highlight-orange))] text-foreground px-4 py-2 text-xs font-bold uppercase rotate-[3deg]">
                Data Science
              </motion.div>
              <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 3.2 }} className="absolute -right-8 bottom-16 bg-[hsl(var(--highlight-yellow))] text-foreground px-4 py-2 text-xs font-bold uppercase rotate-[-3deg]">
                Full Stack
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
