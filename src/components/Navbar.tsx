import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  "Home", "About", "Skills", "Education", "Internship",
  "Projects", "Certifications", "Achievements", "Extra", "Resume", "Contact",
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const scrollTo = (id: string) => {
    setOpen(false);
    setActive(id);
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass border-b" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-lg font-bold tracking-tight text-foreground">
          Gaurav<span className="text-accent">.</span>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className={`text-sm transition-colors hover:text-foreground ${active === l ? "text-foreground font-semibold" : "text-muted-foreground"}`}
            >
              {l}
            </button>
          ))}
          <button onClick={() => setDark(!dark)} className="p-2 rounded-full hover:bg-secondary text-foreground">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <button onClick={() => setDark(!dark)} className="p-2 text-foreground">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => setOpen(!open)} className="p-2 text-foreground">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <button
                  key={l}
                  onClick={() => scrollTo(l)}
                  className={`text-sm text-left py-1 ${active === l ? "text-foreground font-semibold" : "text-muted-foreground"}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
