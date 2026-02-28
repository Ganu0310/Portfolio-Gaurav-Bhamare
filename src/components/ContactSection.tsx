import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle } from "lucide-react";
import { contactInfo } from "@/data/portfolio";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl font-bold mb-2 text-foreground">Contact</h2>
          <div className="w-16 h-1 bg-accent mb-12" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
            />
            <textarea
              placeholder="Message"
              rows={5}
              required
              className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
            />
            <button
              type="submit"
              className="bg-foreground text-background px-6 py-3 text-sm font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              {submitted ? <><CheckCircle size={16} /> Sent!</> : <><Send size={16} /> Send Message</>}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
              <Mail size={18} /> {contactInfo.email}
            </a>
            <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
              <Phone size={18} /> {contactInfo.phone}
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={18} /> LinkedIn Profile
            </a>
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
              <Github size={18} /> GitHub Profile
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
