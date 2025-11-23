import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Heritage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
        <img 
          src="https://cdn.poehali.dev/projects/cad37f19-77cf-45f8-a5fc-ba08dcf64d8b/files/33b0f7c2-7a15-40c4-8420-fcda57285f60.jpg"
          alt="Coco Chanel"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl animate-fade-in">
          <h1 className="font-cormorant text-6xl md:text-8xl font-bold mb-6 tracking-wider text-gold">
            Heritage
          </h1>
          <p className="font-montserrat text-xl md:text-2xl tracking-wide text-gold/90 leading-relaxed">
            A legacy of elegance that revolutionized fashion
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <div className="space-y-20">
          {/* 1910 */}
          <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <span className="font-cormorant text-4xl font-bold text-gold">1910</span>
              </div>
              <h3 className="font-cormorant text-3xl font-bold mb-4 text-gold">
                The Beginning
              </h3>
              <p className="font-montserrat text-gray-300 leading-relaxed">
                Gabrielle "Coco" Chanel opens her first boutique at 21 rue Cambon in Paris. 
                She begins her journey to revolutionize women's fashion, liberating them from 
                the constraints of corsets and introducing a new era of comfortable elegance.
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/cad37f19-77cf-45f8-a5fc-ba08dcf64d8b/files/33b0f7c2-7a15-40c4-8420-fcda57285f60.jpg"
                alt="Coco Chanel vintage"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 1921 */}
          <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
            <div className="md:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <span className="font-cormorant text-4xl font-bold text-gold">1921</span>
              </div>
              <h3 className="font-cormorant text-3xl font-bold mb-4 text-gold">
                CHANEL N°5
              </h3>
              <p className="font-montserrat text-gray-300 leading-relaxed">
                The launch of the iconic CHANEL N°5 perfume. The first fragrance to bear 
                a designer's name, it becomes the world's most famous perfume and remains 
                an enduring symbol of luxury and femininity.
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden md:order-1">
              <img 
                src="https://cdn.poehali.dev/projects/cad37f19-77cf-45f8-a5fc-ba08dcf64d8b/files/2b0946c6-0b49-4053-85be-6ac17dfe21bf.jpg"
                alt="Chanel No.5"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 1955 */}
          <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <span className="font-cormorant text-4xl font-bold text-gold">1955</span>
              </div>
              <h3 className="font-cormorant text-3xl font-bold mb-4 text-gold">
                The 2.55 Bag
              </h3>
              <p className="font-montserrat text-gray-300 leading-relaxed">
                Coco Chanel creates the 2.55 handbag, named after its creation date (February 1955). 
                The quilted leather bag with chain strap revolutionizes handbag design and becomes 
                one of the most iconic accessories in fashion history.
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/cad37f19-77cf-45f8-a5fc-ba08dcf64d8b/files/b989565f-bcd5-40ee-8d7e-a9c52690882c.jpg"
                alt="Chanel Handbag"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-dark-gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-center mb-16 text-gold">
            Philosophy
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Icon name="Sparkles" size={48} className="text-gold mx-auto" />
              <h3 className="font-cormorant text-2xl font-bold text-gold">Simplicity</h3>
              <p className="font-montserrat text-gray-300">
                Elegance through refined minimalism and timeless design
              </p>
            </div>
            
            <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Icon name="Crown" size={48} className="text-gold mx-auto" />
              <h3 className="font-cormorant text-2xl font-bold text-gold">Luxury</h3>
              <p className="font-montserrat text-gray-300">
                Uncompromising quality and craftsmanship in every detail
              </p>
            </div>
            
            <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Icon name="Heart" size={48} className="text-gold mx-auto" />
              <h3 className="font-cormorant text-2xl font-bold text-gold">Audacity</h3>
              <p className="font-montserrat text-gray-300">
                Bold innovation while honoring tradition and heritage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Icon name="Quote" size={48} className="text-gold mx-auto mb-8" />
          <blockquote className="font-cormorant text-3xl md:text-5xl italic mb-8 text-gold leading-relaxed">
            "In order to be irreplaceable, one must always be different."
          </blockquote>
          <p className="font-montserrat text-xl text-gray-400 tracking-wider">— COCO CHANEL</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-dark-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold mb-8 text-gold">
            Continue Your Journey
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/collection"
              className="inline-flex items-center justify-center gap-3 bg-gold text-black px-8 py-4 text-lg font-montserrat font-semibold tracking-wider hover:bg-gold/90 transition-all duration-300"
            >
              VIEW COLLECTION
              <Icon name="ArrowRight" size={20} />
            </Link>
            <a 
              href="https://www.chanel.com/us/about-chanel/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border-2 border-gold text-gold px-8 py-4 text-lg font-montserrat font-semibold tracking-wider hover:bg-gold hover:text-black transition-all duration-300"
            >
              LEARN MORE
              <Icon name="ExternalLink" size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
