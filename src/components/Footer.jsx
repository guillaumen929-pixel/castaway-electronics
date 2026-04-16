import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="site-footer" className="bg-[#0D1B2A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1: Brand + Tagline */}
          <div>
            <div className="font-head text-2xl font-extrabold uppercase tracking-[0.04em] leading-none text-white">
              Cast Away <span className="text-[#00C4B4]">Cleanouts</span>
            </div>
            <div className="mt-2 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-[#D4AE45]">
              Electronics · Recycling
            </div>
            <p className="text-white/60 font-body text-sm mt-4 leading-relaxed">
              South Florida&apos;s Trusted E-Waste Recycling Partner
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-[#00C4B4] hover:border-[#00C4B4] transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-[#00C4B4] hover:border-[#00C4B4] transition-colors"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-mono font-medium text-white/55 text-[10px] uppercase tracking-[0.18em] mb-4">
              // Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { to: '/about', label: 'About' },
                { to: '/services', label: 'Services' },
                { to: '/contact#contact-card', label: 'Contact Us' },
                { to: '/quote', label: 'Get a Quote' },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-white/60 hover:text-[#00C4B4] font-body text-sm transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="font-mono font-medium text-white/55 text-[10px] uppercase tracking-[0.18em] mb-4">
              // Contact
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 text-white/60 font-body text-sm">
                <MapPin size={15} className="text-[#00C4B4] mt-0.5 flex-shrink-0" />
                <span>226 Basin Dr, Lauderdale by the Sea, FL 33308</span>
              </div>
              <a
                href="tel:9543661180"
                className="flex items-center gap-3 text-white/60 hover:text-[#00C4B4] font-body text-sm transition-colors"
              >
                <Phone size={15} className="text-[#00C4B4] flex-shrink-0" />
                954-366-1180
              </a>
              <a
                href="mailto:support@castawayelectronics.com"
                className="flex items-center gap-3 text-white/60 hover:text-[#D4AE45] font-body text-[13px] sm:text-sm transition-colors whitespace-nowrap"
              >
                <Mail size={15} className="text-[#D4AE45] flex-shrink-0" />
                support@castawayelectronics.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="order-1 text-white/40 font-mono text-[10px] tracking-[0.1em]">
            Powered by{' '}
            <a
              href="https://scryptera.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AE45] hover:text-white transition-colors"
            >
              Scryptera
            </a>
          </p>
          <p className="order-2 text-white/40 font-mono text-[10px] uppercase tracking-[0.14em]">
            © 2026 Cast Away Cleanouts · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
