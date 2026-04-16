import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85] mb-12"
            >
              LET'S <span className="text-gray-300">TALK.</span>
            </motion.h1>
            
            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold mb-2">General Inquiries</h3>
                  <p className="text-xl font-bold tracking-tight">hello@canvasco.agency</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold mb-2">Call Us</h3>
                  <p className="text-xl font-bold tracking-tight">+44 (0) 20 7336 7696</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold mb-2">London Studio</h3>
                  <p className="text-gray-500 leading-relaxed">
                    13 Camden Passage, Angel<br />
                    Islington, London, N1 8EA
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-50 p-12"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-black outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-black outline-none transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Subject</label>
                <input type="text" className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-black outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-black outline-none transition-colors resize-none"></textarea>
              </div>
              <button className="w-full bg-black text-white py-6 text-xs uppercase tracking-[0.3em] font-bold hover:bg-gray-800 transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
