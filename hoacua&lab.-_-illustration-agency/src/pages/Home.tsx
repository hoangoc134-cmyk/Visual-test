import { motion } from 'motion/react';
import { useState } from 'react';
import { artists } from '../data/artists';
import ArtistCard from '../components/ArtistCard';
import { Plus } from 'lucide-react';

export default function Home() {
  const INITIAL_COUNT = 6;
  const LOAD_MORE_COUNT = 9;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + LOAD_MORE_COUNT);
  };

  const visibleArtists = artists.slice(0, visibleCount);
  const hasMore = visibleCount < artists.length;

  return (
    <main className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8">
            REPRESENTING WORLD-CLASS <span className="text-gray-300">VISIONARIES.</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            We bridge the gap between exceptional artists and global brands, delivering bespoke visual storytelling that resonates across cultures.
          </p>
        </motion.div>
      </section>

      {/* Artist Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleArtists.map((artist, index) => (
            <ArtistCard key={artist.id} artist={artist} index={index} />
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 flex justify-center"
          >
            <button 
              onClick={handleLoadMore}
              className="group flex flex-col items-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-500">
                <Plus size={24} className="group-hover:text-white transition-colors duration-500" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 group-hover:text-black transition-colors duration-500">
                Xem thêm
              </span>
            </button>
          </motion.div>
        )}
      </section>
    </main>
  );
}
