import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { MapPin, Instagram, Facebook, ArrowUpRight } from 'lucide-react';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 mix-blend-difference">
    <div className="text-saffron-gold tracking-[0.3em] font-serif text-xl uppercase">The Saffron Tree</div>
    <div className="hidden md:flex gap-8 text-[10px] tracking-[0.4em] uppercase text-white/70">
      <a href="#about" className="hover:text-white transition-colors">Philosophy</a>
      <a href="#menu" className="hover:text-white transition-colors">Experience</a>
      <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
    </div>
  </nav>
);

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0a0a0a]">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80" 
          className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]"
          alt="Luxury dining ambiance"
        />
      </motion.div>
      
      <div className="relative z-20 text-center space-y-4">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-saffron-gold tracking-[0.5em] text-[10px] uppercase"
        >
          Kolkata • Michelin Standard
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-6xl md:text-9xl font-serif text-white leading-tight"
        >
          The Saffron <br /> Tree
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="text-white/50 italic font-serif text-lg md:text-xl pt-4"
        >
          A Contemporary Indian Fine Dining Experience
        </motion.p>
      </div>
    </section>
  );
};

const SignatureDish = ({ title, desc, img }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative aspect-[4/5] overflow-hidden bg-[#161616] cursor-pointer"
    >
      <img 
        src={img} 
        alt={title} 
        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-saffron-gold font-serif text-2xl mb-2">{title}</h3>
        <p className="text-white/60 text-sm leading-relaxed tracking-wide">{desc}</p>
        <div className="mt-4 flex items-center text-[10px] text-white tracking-[0.2em] uppercase">
          Explore Ingredients <ArrowUpRight size={14} className="ml-2" />
        </div>
      </div>
    </motion.div>
  );
};

const Footer = () => (
  <footer className="bg-[#050505] pt-24 pb-12 px-8 border-t border-white/5">
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-20">
      <div className="space-y-6">
        <h4 className="text-saffron-gold tracking-[0.3em] uppercase text-xs">The Location</h4>
        <p className="text-white/40 font-serif leading-loose">
          88 Luxury Lane, Park Street Area<br />
          Kolkata, West Bengal 700016
        </p>
      </div>
      <div className="space-y-6 flex flex-col items-center md:items-start">
        <h4 className="text-saffron-gold tracking-[0.3em] uppercase text-xs">Reservations</h4>
        <p className="text-white/40 font-serif">+91 33 2456 7890</p>
        <p className="text-white/40 font-serif italic">bookings@saffrontree.com</p>
      </div>
      <div className="space-y-6 flex flex-col md:items-end">
        <h4 className="text-saffron-gold tracking-[0.3em] uppercase text-xs">Social</h4>
        <div className="flex gap-6 text-white/40">
          <Instagram className="hover:text-saffron-gold transition-colors cursor-pointer" size={20} />
          <Facebook className="hover:text-saffron-gold transition-colors cursor-pointer" size={20} />
        </div>
      </div>
    </div>
    <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-[10px] text-white/20 tracking-[0.2em] uppercase">© 2024 The Saffron Tree Kolkata</p>
      <div className="h-[1px] w-24 bg-saffron-gold/30 hidden md:block" />
      <p className="text-[10px] text-white/20 tracking-[0.2em] uppercase">Curated Excellence</p>
    </div>
  </footer>
);

// --- Main Page ---

export default function SaffronTree() {
  return (
    <div className="bg-[#0a0a0a] text-white selection:bg-saffron-gold/30">
      <style>{`
        :root { --saffron: #D4AF37; }
        .text-saffron-gold { color: #D4AF37; }
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>

      <Navbar />
      <Hero />

      {/* Philosophy Section */}
      <section id="about" className="py-32 px-8 max-w-5xl mx-auto text-center space-y-12">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-saffron-gold tracking-[0.4em] uppercase text-[10px]"
        >
          Our Heritage
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-serif leading-relaxed"
        >
          An alchemy of ancient Indian spices <br /> and modern culinary precision.
        </motion.h2>
        <div className="w-px h-24 bg-gradient-to-b from-saffron-gold/50 to-transparent mx-auto" />
      </section>

      {/* Culinary Experience */}
      <section id="menu" className="py-20 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <SignatureDish 
            title="Saffron Lobster"
            desc="Kashmiri saffron infused butter, grilled bay lobster, gold leaf."
            img="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80"
          />
          <SignatureDish 
            title="Truffle Galouti"
            desc="Melt-in-mouth lamb kebabs with black truffle infusion."
            img="https://images.getrecipekit.com/20241018092616-blog-20templates-20-62.png?aspect_ratio=16:9&quality=90&"
          />
          <SignatureDish 
            title="The Golden Veil"
            desc="A dessert of cardamom milk skin, pistachio, and honey."
            img="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80"
          />
        </div>
      </section>

      {/* Immersive Gallery Section */}
      <section id="gallery" className="py-32 overflow-hidden">
        <motion.div 
          initial={{ x: 0 }}
          whileInView={{ x: -100 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
          className="flex gap-8 whitespace-nowrap opacity-40 hover:opacity-100 transition-opacity duration-1000"
        >
          {[1,2,3,4,5].map((i) => (
            <img 
              key={i} 
              src={`https://media.istockphoto.com/id/843610508/photo/interior-of-cozy-restaurant-loft-style.jpg?s=612x612&w=0&k=20&c=s_PVQJNzcilxKYpm3O-AxBMx4_om5G0TKuxUmiMl85Y=`} 
              className="w-[500px] h-[350px] object-cover flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-700"
              alt="Atmosphere"
            />
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}