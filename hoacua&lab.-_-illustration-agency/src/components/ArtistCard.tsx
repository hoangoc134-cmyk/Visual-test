import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Artist } from '../types';

interface ArtistCardProps {
  artist: Artist;
  index: number;
  key?: string | number;
}

export default function ArtistCard({ artist, index }: ArtistCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden bg-gray-100 aspect-[4/5]"
    >
      <Link to={`/artists/${artist.slug}`} className="block w-full h-full">
        <img
          src={artist.thumbnailUrl}
          alt={artist.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex flex-col justify-end p-8">
          <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <h3 className="text-white text-2xl font-bold tracking-tight">{artist.name}</h3>
            <p className="text-white/80 text-xs uppercase tracking-widest mt-1">{artist.specialty}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
