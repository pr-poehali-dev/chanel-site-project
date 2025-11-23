import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
        <img 
          src="https://cdn.poehali.dev/projects/cad37f19-77cf-45f8-a5fc-ba08dcf64d8b/files/2b0946c6-0b49-4053-85be-6ac17dfe21bf.jpg"
          alt="Chanel No.5"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4 animate-fade-in">
          <h1 className="font-cormorant text-7xl md:text-9xl font-bold mb-6 tracking-wider text-gold">
            CHANEL
          </h1>
          <p className="text-xl md:text-2xl font-montserrat tracking-widest mb-12 text-gold/90">
            LUXURY • ELEGANCE • TIMELESS
          </p>
          <Link 
            to="/collection"
            className="inline-flex items-center gap-3 bg-gold text-black px-8 py-4 text-lg font-montserrat font-semibold tracking-wider hover:bg-gold/90 transition-all duration-300 hover:scale-105"
          >
            DISCOVER COLLECTION
            <Icon name="ChevronRight" size={20} />
          </Link>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-gold" />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-center mb-16 text-gold">
          Iconic Collection
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="group cursor-pointer animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative overflow-hidden mb-6">
              <img 
                src="https://cdn.poehali.dev/projects/cad37f19-77cf-45f8-a5fc-ba08dcf64d8b/files/2b0946c6-0b49-4053-85be-6ac17dfe21bf.jpg"
                alt="Chanel No.5"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <h3 className="font-cormorant text-3xl font-bold mb-3 text-gold">CHANEL N°5</h3>
            <p className="font-montserrat text-gray-300 leading-relaxed">
              The world's most iconic fragrance. A timeless floral bouquet that embodies the essence of femininity.
            </p>
          </div>

          <div className="group cursor-pointer animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative overflow-hidden mb-6">
              <img 
                src="https://cdn.poehali.dev/projects/cad37f19-77cf-45f8-a5fc-ba08dcf64d8b/files/b989565f-bcd5-40ee-8d7e-a9c52690882c.jpg"
                alt="Chanel Handbag"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <h3 className="font-cormorant text-3xl font-bold mb-3 text-gold">CLASSIC HANDBAG</h3>
            <p className="font-montserrat text-gray-300 leading-relaxed">
              The quilted leather bag with signature chain. An eternal symbol of sophistication and style.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-dark-gray">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Icon name="Quote" size={48} className="text-gold mx-auto mb-8" />
          <blockquote className="font-cormorant text-3xl md:text-4xl italic mb-8 text-gold leading-relaxed">
            "Fashion fades, only style remains the same."
          </blockquote>
          <p className="font-montserrat text-xl text-gray-400 tracking-wider">— COCO CHANEL</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cormorant text-5xl md:text-6xl font-bold mb-8 text-gold">
            Experience Luxury
          </h2>
          <p className="font-montserrat text-xl text-gray-300 mb-12 leading-relaxed">
            Discover the heritage and timeless elegance of the CHANEL brand
          </p>
          <Link 
            to="/heritage"
            className="inline-flex items-center gap-3 border-2 border-gold text-gold px-8 py-4 text-lg font-montserrat font-semibold tracking-wider hover:bg-gold hover:text-black transition-all duration-300"
          >
            EXPLORE HERITAGE
            <Icon name="ArrowRight" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
