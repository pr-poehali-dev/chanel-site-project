import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'CHANEL N°5',
    category: 'Fragrance',
    image: 'https://cdn.poehali.dev/projects/cad37f19-77cf-45f8-a5fc-ba08dcf64d8b/files/2b0946c6-0b49-4053-85be-6ac17dfe21bf.jpg',
    description: 'The quintessential fragrance',
    link: 'https://www.chanel.com/us/fragrance/p/120450/n5-eau-de-parfum-spray/'
  },
  {
    id: 2,
    name: 'CLASSIC FLAP BAG',
    category: 'Handbags',
    image: 'https://cdn.poehali.dev/projects/cad37f19-77cf-45f8-a5fc-ba08dcf64d8b/files/b989565f-bcd5-40ee-8d7e-a9c52690882c.jpg',
    description: 'Iconic quilted leather design',
    link: 'https://www.chanel.com/us/fashion/handbags/'
  },
  {
    id: 3,
    name: 'COCO MADEMOISELLE',
    category: 'Fragrance',
    image: 'https://cdn.poehali.dev/projects/cad37f19-77cf-45f8-a5fc-ba08dcf64d8b/files/2b0946c6-0b49-4053-85be-6ac17dfe21bf.jpg',
    description: 'Fresh and modern essence',
    link: 'https://www.chanel.com/us/fragrance/p/122510/coco-mademoiselle-eau-de-parfum-spray/'
  },
  {
    id: 4,
    name: '2.55 REISSUE',
    category: 'Handbags',
    image: 'https://cdn.poehali.dev/projects/cad37f19-77cf-45f8-a5fc-ba08dcf64d8b/files/b989565f-bcd5-40ee-8d7e-a9c52690882c.jpg',
    description: 'The original shoulder bag',
    link: 'https://www.chanel.com/us/fashion/handbags/'
  },
  {
    id: 5,
    name: 'BLEU DE CHANEL',
    category: 'Fragrance',
    image: 'https://cdn.poehali.dev/projects/cad37f19-77cf-45f8-a5fc-ba08dcf64d8b/files/2b0946c6-0b49-4053-85be-6ac17dfe21bf.jpg',
    description: 'Masculine sophistication',
    link: 'https://www.chanel.com/us/fragrance/p/107960/bleu-de-chanel-eau-de-parfum-spray/'
  },
  {
    id: 6,
    name: 'BOY CHANEL',
    category: 'Handbags',
    image: 'https://cdn.poehali.dev/projects/cad37f19-77cf-45f8-a5fc-ba08dcf64d8b/files/b989565f-bcd5-40ee-8d7e-a9c52690882c.jpg',
    description: 'Contemporary elegance',
    link: 'https://www.chanel.com/us/fashion/handbags/'
  }
];

export default function Collection() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Header */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="font-cormorant text-6xl md:text-8xl font-bold mb-4 tracking-wider text-gold">
            Collection
          </h1>
          <p className="font-montserrat text-lg md:text-xl tracking-widest text-gold/80">
            TIMELESS MASTERPIECES
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden mb-6 bg-dark-gray">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                  <a 
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 font-montserrat font-semibold tracking-wider hover:bg-gold/90 transition-all duration-300"
                  >
                    VIEW DETAILS
                    <Icon name="ExternalLink" size={16} />
                  </a>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="font-montserrat text-sm tracking-widest text-gold/70">
                  {product.category}
                </p>
                <h3 className="font-cormorant text-2xl font-bold text-gold">
                  {product.name}
                </h3>
                <p className="font-montserrat text-gray-400">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-dark-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold mb-6 text-gold">
            Discover More
          </h2>
          <p className="font-montserrat text-lg text-gray-300 mb-10">
            Explore the complete CHANEL universe on the official website
          </p>
          <a 
            href="https://www.chanel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-2 border-gold text-gold px-8 py-4 text-lg font-montserrat font-semibold tracking-wider hover:bg-gold hover:text-black transition-all duration-300"
          >
            VISIT CHANEL.COM
            <Icon name="ExternalLink" size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
