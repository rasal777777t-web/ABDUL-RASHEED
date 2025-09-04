"use client";

import { motion } from "framer-motion";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "business", label: "Business" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  return (
    <div className="font-sans min-h-dvh w-full">
      {/* Nav */}
      <header className="sticky top-0 z-20">
        <nav className="mx-auto max-w-6xl px-4 py-3 mt-4 glass glow">
          <div className="flex items-center justify-between">
            <span className="text-sm tracking-widest text-gradient font-semibold">ABDUL RASHEED</span>
            <ul className="hidden md:flex items-center gap-1">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="px-3 py-2 rounded-md text-sm text-foreground/80 hover:text-foreground hover:bg-white/5 transition">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="mx-auto max-w-6xl px-4 pt-20 pb-28">
        <div className="grid md:grid-cols-12 items-center gap-8">
          <div className="md:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
            >
              <span className="block text-gradient">ABDUL RASHEED</span>
              <span className="block text-foreground/80 mt-2">Teacher | Entrepreneur | KMCC Wadi Aldavaser Secretary</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mt-6 text-foreground/70 max-w-[60ch]"
            >
              Passionate about teaching, building businesses, and crafting modern web experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="mt-8 flex gap-3"
            >
              <a href="#contact" className="glass glow px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-white/10 transition">
                Contact Me
              </a>
              <a href="#business" className="px-5 py-2.5 rounded-lg text-sm font-medium border border-white/15 hover:bg-white/5 transition">
                View Businesses
              </a>
            </motion.div>
          </div>
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="aspect-square rounded-2xl glass glow relative overflow-hidden"
            >
              <img
                src="/profile.png"
                alt="Abdul Rasheed"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0" style={{
                background:
                  "linear-gradient(to top, rgba(11,11,18,.35), rgba(11,11,18,0))",
              }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-7">
            <h2 className="text-3xl font-bold mb-3 text-gradient">About</h2>
            <p className="text-foreground/75 max-w-[65ch]">
              I am Abdul Rasheed, a dedicated teacher and entrepreneur with a B.Com from IIT Delhi.
              I love empowering students and running successful ventures across Saudi Arabia and India.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-5">
            <div className="glass p-6 glow">
              <div className="text-sm uppercase tracking-wider text-foreground/60">Qualification</div>
              <div className="mt-2 text-lg">B.Com (IIT Delhi)</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-bold mb-6 text-gradient">Skills</h2>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          className="flex flex-wrap gap-3"
        >
          {["Teaching", "Business", "Web Development"].map((skill) => (
            <motion.li
              key={skill}
              variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
              className="glass glow px-4 py-2 rounded-full text-sm"
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* Business */}
      <section id="business" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-bold mb-6 text-gradient">Businesses</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Leena Tex", location: "Saudi Arabia" },
            { name: "Arabi Grocery Shop", location: "Saudi Arabia" },
            { name: "Madeena Tex", location: "Saudi Arabia" },
            { name: "Chicken House", location: "Broaster Chicken Shop, Saudi Arabia" },
            { name: "RB Fruits", location: "India" },
          ].map((biz, idx) => (
            <motion.div
              key={biz.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass glow p-5 rounded-xl"
            >
              <div className="text-lg font-semibold">{biz.name}</div>
              <div className="text-foreground/60 text-sm mt-1">{biz.location}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-bold mb-6 text-gradient">Contact</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass glow p-5 rounded-xl">
            <div className="text-sm uppercase tracking-wider text-foreground/60">Reach me</div>
            <ul className="mt-3 space-y-2 text-foreground/80">
              <li>Email: <a className="underline hover:text-foreground" href="mailto:abdul@example.com">abdul@example.com</a></li>
              <li>Phone: <a className="underline hover:text-foreground" href="tel:+0000000000">+00 0000 00000</a></li>
            </ul>
          </div>
          <div className="glass glow p-5 rounded-xl">
            <div className="text-sm uppercase tracking-wider text-foreground/60">Social</div>
            <ul className="mt-3 space-y-2 text-foreground/80">
              <li><a className="underline hover:text-foreground" href="#" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a className="underline hover:text-foreground" href="#" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a className="underline hover:text-foreground" href="#" target="_blank" rel="noreferrer">X (Twitter)</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-4 py-12 text-center text-foreground/60">
        © {new Date().getFullYear()} Abdul Rasheed. All rights reserved.
      </footer>
    </div>
  );
}
