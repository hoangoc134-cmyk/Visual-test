import { motion } from 'motion/react';

export default function About() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <section className="max-w-3xl mb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85] mb-12"
          >
            WE NURTURE <span className="text-gray-300">EXCELLENCE.</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8 text-xl text-gray-600 leading-relaxed"
          >
            <p>
              Established in 2010, HOACUA&LAB. is an international illustration & animation agency with offices in London, New York and Tokyo.
            </p>
            <p>
              We represent a curated roster of world-class talent, managing high-end commissions for editorial, advertising, and motion projects. Our expertise lies in bridging the gap between artistic vision and commercial objectives.
            </p>
            <p>
              From iconic magazine covers to global brand campaigns, our artists define the visual landscape of the modern world.
            </p>
          </motion.div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-100 pt-20">
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400 mb-6">Strategy</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              We work closely with clients to identify the perfect visual voice for their brand, ensuring every commission is strategically aligned.
            </p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400 mb-6">Production</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Our dedicated production team manages projects from concept to final delivery, ensuring seamless execution across all mediums.
            </p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400 mb-6">Licensing</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              We handle complex image licensing and rights management, protecting our artists' intellectual property while serving client needs.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
