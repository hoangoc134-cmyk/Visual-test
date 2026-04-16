import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { artists } from '../data/artists';
import { ArrowLeft, Mail } from 'lucide-react';
import { useEffect } from 'react';

export default function ArtistProfile() {
  const { slug } = useParams();
  const artist = artists.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!artist) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-xl font-bold">Artist not found.</p>
      </div>
    );
  }

  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-gray-400 hover:text-black transition-colors mb-12"
        >
          <ArrowLeft size={14} />
          <span>Back to Artists</span>
        </Link>

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85] mb-8">
              {artist.name}
            </h1>
            <div className="flex flex-wrap gap-4 mb-12">
              <span className="px-4 py-2 bg-gray-100 text-[10px] uppercase tracking-widest font-bold">
                {artist.location}
              </span>
              <span className="px-4 py-2 bg-gray-100 text-[10px] uppercase tracking-widest font-bold">
                {artist.specialty}
              </span>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-xl">
              {artist.bio}
            </p>
            
            <button className="inline-flex items-center space-x-4 bg-black text-white px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-gray-800 transition-colors">
              <Mail size={16} />
              <span>Enquire about {artist.name.split(' ')[0]}</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="aspect-[4/5] bg-gray-100 overflow-hidden"
          >
            <img 
              src={artist.thumbnailUrl} 
              alt={artist.name} 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Gallery Section */}
        <section className="mb-32">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400 mb-12">Selected Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {artist.gallery.map((work, idx) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="overflow-hidden bg-gray-50">
                  <img 
                    src={work.imageUrl} 
                    alt={work.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-bold tracking-tight">{work.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Clients Section */}
        <section className="border-t border-gray-100 pt-20">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400 mb-12">Selected Clients</h2>
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            {artist.clients.map((client) => (
              <span key={client} className="text-2xl font-bold tracking-tight text-gray-300 hover:text-black transition-colors cursor-default">
                {client}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
