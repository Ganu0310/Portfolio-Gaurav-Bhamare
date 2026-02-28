import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-2 text-foreground">About Me</h2>
        <div className="w-16 h-1 bg-accent mb-8" />
        <p className="text-muted-foreground leading-relaxed text-lg">
          Ever since I began my journey in computer engineering, I've been fascinated by the 'why' and 'how' behind technology. My curiosity naturally led me to explore Python and the MERN stack, where I discovered a passion for building and problem-solving. I enjoy taking complex challenges and breaking them down into meaningful solutions.
        </p>
        <p className="text-muted-foreground leading-relaxed text-lg mt-4">
          Looking ahead, I aspire to become a Data Science Specialist or Business Analyst, using data to tell stories and drive decisions. What sets me apart is my constant curiosity—it keeps me learning, experimenting, and innovating every single day.
        </p>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { label: "Projects", value: "5+" },
            { label: "Technologies", value: "10+" },
            { label: "Internships", value: "1" },
            { label: "Certifications", value: "3+" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-foreground">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
