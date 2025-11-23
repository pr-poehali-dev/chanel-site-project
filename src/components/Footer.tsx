import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-dark-gray border-t border-gold/20 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 border-2 border-gold flex items-center justify-center">
                <span className="font-cormorant text-2xl font-bold text-gold">C</span>
              </div>
              <span className="font-cormorant text-2xl font-bold tracking-wider text-gold">
                CHANEL
              </span>
            </div>
            <p className="font-montserrat text-gray-400 leading-relaxed mb-6 max-w-md">
              Discover the world of CHANEL luxury. From timeless fragrances to iconic handbags, 
              experience elegance that transcends fashion.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/chanelofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300 group"
              >
                <Icon name="Instagram" size={20} className="text-gold group-hover:text-black" />
              </a>
              <a
                href="https://www.facebook.com/chanel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300 group"
              >
                <Icon name="Facebook" size={20} className="text-gold group-hover:text-black" />
              </a>
              <a
                href="https://twitter.com/chanel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300 group"
              >
                <Icon name="Twitter" size={20} className="text-gold group-hover:text-black" />
              </a>
              <a
                href="https://www.youtube.com/chanel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300 group"
              >
                <Icon name="Youtube" size={20} className="text-gold group-hover:text-black" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-gold tracking-wider mb-6">
              DISCOVER
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.chanel.com/us/fashion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-montserrat text-sm text-gray-400 hover:text-gold transition-colors duration-300"
                >
                  Fashion
                </a>
              </li>
              <li>
                <a
                  href="https://www.chanel.com/us/fragrance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-montserrat text-sm text-gray-400 hover:text-gold transition-colors duration-300"
                >
                  Fragrance
                </a>
              </li>
              <li>
                <a
                  href="https://www.chanel.com/us/makeup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-montserrat text-sm text-gray-400 hover:text-gold transition-colors duration-300"
                >
                  Makeup
                </a>
              </li>
              <li>
                <a
                  href="https://www.chanel.com/us/watches-jewelry/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-montserrat text-sm text-gray-400 hover:text-gold transition-colors duration-300"
                >
                  Watches & Jewelry
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-montserrat font-bold text-gold tracking-wider mb-6">
              CONTACT
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.chanel.com/us/store-locator/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-montserrat text-sm text-gray-400 hover:text-gold transition-colors duration-300 flex items-center gap-2"
                >
                  <Icon name="MapPin" size={16} />
                  Find a Boutique
                </a>
              </li>
              <li>
                <a
                  href="https://www.chanel.com/us/contact-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-montserrat text-sm text-gray-400 hover:text-gold transition-colors duration-300 flex items-center gap-2"
                >
                  <Icon name="Mail" size={16} />
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="tel:1-800-550-0005"
                  className="font-montserrat text-sm text-gray-400 hover:text-gold transition-colors duration-300 flex items-center gap-2"
                >
                  <Icon name="Phone" size={16} />
                  1-800-550-0005
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-montserrat text-sm text-gray-500">
            © 2025 CHANEL. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.chanel.com/us/legal-privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat text-sm text-gray-500 hover:text-gold transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.chanel.com/us/legal-terms/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat text-sm text-gray-500 hover:text-gold transition-colors duration-300"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
