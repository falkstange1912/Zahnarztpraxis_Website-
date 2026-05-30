import { motion } from "motion/react";
import { Heart, Clock, Shield, Star, ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

const stagger = {
  animate: { transition: { staggerChildren: 0.15 } }
};

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-bg)] text-[var(--color-brand-green)] font-sans overflow-x-hidden selection:bg-[var(--color-brand-accent)] selection:text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="font-serif text-2xl font-semibold tracking-tight">Praxis Brucker.</div>
        <div className="hidden md:flex space-x-10 text-sm font-medium">
          <a href="#" className="hover:opacity-60 transition-opacity">Die Praxis</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Das Team</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Leistungen</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Kontakt</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-medium hover:opacity-60 transition-opacity">
            EN ⌵
          </button>
          <button className="px-6 py-2.5 bg-[var(--color-brand-accent)] text-white rounded-full text-sm font-medium hover:bg-[#d67b54] transition-colors">
            Termin buchen
          </button>
        </div>
      </nav>

      <main>
        {/* 1. HOOK & 2. PROMISE OF VALUE */}
        <section className="px-6 mt-20 md:mt-28 mb-16 max-w-5xl mx-auto text-center">
          <motion.div initial="initial" animate="animate" variants={stagger} className="space-y-8 flex flex-col items-center">
            <motion.h1
              variants={fadeUp}
              className="font-serif text-5xl md:text-[5.5rem] leading-[1.05] tracking-tight"
            >
              Exzellente Medizin. <br />Persönliche Fürsorge.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl opacity-80 max-w-3xl font-light mx-auto leading-relaxed"
            >
              Wir vereinen moderne Allgemeinmedizin mit echter, menschlicher Begleitung. 
              Entdecken Sie eine Hausarztpraxis in Cremlingen, bei der Ihr Wohlbefinden an erster Stelle steht.
            </motion.p>
            <motion.div variants={fadeUp} className="pt-6 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
               <button className="bg-[var(--color-brand-accent)] text-white px-8 py-3.5 rounded-full text-base font-medium hover:bg-[#d67b54] transition-colors">
                 Termin vereinbaren
               </button>
               <button className="border border-[var(--color-brand-green)] px-8 py-3.5 rounded-full text-base font-medium hover:bg-[var(--color-brand-green)] hover:text-white transition-colors">
                 Unser Leistungsspektrum
               </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Hero Image (Modern Practice Room) */}
        <section className="px-6 mb-32 max-w-[1200px] mx-auto">
           <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-sm relative group"
           >
              <img
                 src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000&auto=format&fit=crop"
                 alt="Moderne Hausarztpraxis Brucker in Cremlingen"
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
           </motion.div>
           <div className="text-center mt-6 text-sm font-medium opacity-60 flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-[var(--color-brand-accent)]" /> Dr. med. Klaus Peter Brucker · Ihr Hausarzt in Cremlingen
           </div>
        </section>

        {/* 3. DETAILS */}
        <section className="bg-white py-32 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-6">Fürsorge in jedem Detail</h2>
              <p className="opacity-70 max-w-2xl mx-auto text-lg font-light">
                 Ein erfahrenes Praxisteam, das hinter einer gemeinsamen Philosophie steht: Ihre langfristige Gesundheit, Ihr Vertrauen und Ihr absolutes Wohlbefinden.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
              <FeatureCard
                icon={<Heart className="w-6 h-6 text-[var(--color-brand-accent)]" />}
                title="Ganzheitliche Medizin"
                desc="Wir betrachten nicht nur isolierte Symptome, sondern Sie als gesamten Menschen. Unser Ziel ist eine nachhaltige Begleitung für Ihre Gesundheit und Lebensqualität."
              />
              <FeatureCard
                icon={<Clock className="w-6 h-6 text-[var(--color-brand-accent)]" />}
                title="Zeit für Ihre Fragen"
                desc="Gute Medizin braucht ein offenes Ohr. Wir nehmen uns die nötige Zeit für eine gründliche Diagnostik und erklären Ihnen Befunde verständlich und ohne Zeitdruck."
              />
              <ShieldCard />
            </div>
          </div>
        </section>

        {/* 4. PROOF (Social Proof & References) */}
        <section className="py-32 px-6 max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-end justify-between mb-16">
             <div className="max-w-xl">
               <h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-6">Das sagen unsere Patienten</h2>
               <p className="opacity-70 text-lg font-light">
                  Medizinisches Vertrauen ist die Basis unserer Arbeit. Viele zufriedene Patienten schätzen unsere persönliche und fachliche Betreuung seit Jahren.
               </p>
             </div>
             <div className="flex -space-x-4 mb-4">
                <img className="w-12 h-12 rounded-full border-2 border-[var(--color-brand-bg)] object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" alt="" />
                <img className="w-12 h-12 rounded-full border-2 border-[var(--color-brand-bg)] object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" alt="" />
                <img className="w-12 h-12 rounded-full border-2 border-[var(--color-brand-bg)] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" alt="" />
                <div className="w-12 h-12 rounded-full border-2 border-[var(--color-brand-bg)] bg-[var(--color-brand-green)] text-white flex items-center justify-center text-xs font-medium">4.9★</div>
             </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             <Testimonial
                text="Ich habe mich noch nie bei einem Arzt so gut aufgehoben gefühlt. Dr. Brucker nimmt sich unglaublich viel Zeit und erklärt alles verständlich. Das gesamte Team ist herzlich."
                author="Laura M."
                details="Patientin seit 2021"
             />
             <Testimonial
                text="Eine hervorragend organisierte Praxis mit minimalen Wartezeiten. Die medizinische Betreuung ist hochkompetent und man fühlt sich vom ersten Moment an ernst genommen."
                author="Markus T."
                details="Patient seit 2023"
             />
             <Testimonial
                text="Endlich ein eingespieltes Team, bei dem die Empathie nicht zu kurz kommt. Die Diagnostik war gründlich und die Behandlung hat mir sehr geholfen. Absolut empfehlenswert!"
                author="Sabine K."
                details="Patientin seit 2019"
             />
          </div>
        </section>

        {/* 5. CALL TO ACTION */}
        <section className="px-6 mb-12">
          <div className="bg-[var(--color-brand-green)] text-[#fdfbf7] py-32 px-8 rounded-[40px] md:rounded-[80px] max-w-[1300px] mx-auto text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            
            <div className="max-w-4xl mx-auto space-y-10 relative z-10">
              <h2 className="font-serif text-5xl md:text-[5rem] leading-[1.05] tracking-tight">Gemeinsam für Ihre Gesundheit.</h2>
              <p className="text-[#fdfbf7]/80 text-xl md:text-2xl font-light max-w-2xl mx-auto">
                 Planen Sie Ihren nächsten Vorsorgetermin oder besprechen Sie Ihr Anliegen persönlich mit uns. Wir sind für Sie da.
              </p>
              <div className="pt-6">
                <button className="bg-[var(--color-brand-accent)] hover:bg-[#d67b54] text-white px-10 py-5 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center mx-auto">
                  Termin online vereinbaren
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <p className="mt-6 text-sm text-[#fdfbf7]/50 font-medium">Bequeme Online-Terminierung · Alle Kassen & Privatpatienten</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 max-w-[1400px] mx-auto border-t border-[var(--color-brand-green)]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60">
        <p>© 2026 Praxis Brucker. Alle Rechte vorbehalten.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:opacity-100 transition-opacity">Impressum</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Datenschutz</a>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div
       variants={fadeUp}
       initial="initial"
       whileInView="animate"
       viewport={{ once: true, margin: "-100px" }}
       className="flex flex-col items-center text-center p-10 rounded-[40px] bg-[var(--color-brand-bg)] border border-[var(--color-brand-green)]/5 hover:border-[var(--color-brand-green)]/10 transition-colors duration-500"
    >
      <div className="w-16 h-16 rounded-full bg-[var(--color-brand-accent)]/10 flex items-center justify-center mb-8">
        {icon}
      </div>
      <h3 className="font-serif text-2xl font-medium mb-4">{title}</h3>
      <p className="opacity-70 leading-relaxed font-light">{desc}</p>
    </motion.div>
  );
}

function ShieldCard() {
  return (
    <motion.div
       variants={fadeUp}
       initial="initial"
       whileInView="animate"
       viewport={{ once: true, margin: "-100px" }}
       className="flex flex-col items-center text-center p-10 rounded-[40px] bg-[var(--color-brand-bg)] border border-[var(--color-brand-green)]/5 hover:border-[var(--color-brand-green)]/10 transition-colors duration-500"
    >
      <div className="w-16 h-16 rounded-full bg-[var(--color-brand-accent)]/10 flex items-center justify-center mb-8">
        <Shield className="w-6 h-6 text-[var(--color-brand-accent)]" />
      </div>
      <h3 className="font-serif text-2xl font-medium mb-4">Moderne Vorsorge</h3>
      <p className="opacity-70 leading-relaxed font-light">Durch kontinuierliche Weiterbildungen unseres gesamten Teams und den Einsatz moderner Diagnostikverfahren bieten wir Ihnen eine hausärztliche Betreuung auf Premium-Niveau.</p>
    </motion.div>
  );
}

function Testimonial({ text, author, details }: { text: string, author: string, details: string }) {
  return (
    <motion.div
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true, margin: "-50px" }}
       transition={{ duration: 0.6 }}
       className="bg-white p-10 rounded-[30px] border border-[var(--color-brand-green)]/5 flex flex-col justify-between h-full"
    >
       <div>
          <div className="flex gap-1 mb-8">
             {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[var(--color-brand-accent)] text-[var(--color-brand-accent)]" />
             ))}
          </div>
          <p className="text-xl leading-relaxed font-serif opacity-90">"{text}"</p>
       </div>
       <div className="mt-12 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[var(--color-brand-green)]/5 flex items-center justify-center font-bold text-sm">
            {author.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-sm">{author}</p>
            <p className="text-xs opacity-60 mt-0.5">{details}</p>
          </div>
       </div>
    </motion.div>
  );
}
