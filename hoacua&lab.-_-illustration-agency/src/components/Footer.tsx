import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link to="/" className="text-2xl font-bold tracking-tighter mb-6 block">
            HOACUA<span className="text-gray-400">&</span>LAB.
          </Link>
          <p className="text-gray-500 max-w-sm leading-relaxed">
            A global illustration agency representing world-class talent for standout visual storytelling. Based in London, New York, and Tokyo.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Offices</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li>London — info@canvasco.uk</li>
            <li>New York — nyc@canvasco.uk</li>
            <li>Tokyo — jpn@canvasco.uk</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Social</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-black transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-50 flex flex-col md:row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-gray-400">
        <p>© {currentYear} HOACUA&LAB. Agency. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
