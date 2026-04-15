import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Monitor, ShieldCheck, Building2, Home, Phone,
  CheckCircle2, Star, ArrowRight
} from 'lucide-react'
import AreasServed from '../components/AreasServed'
import Eyebrow from '../components/ui/Eyebrow'
import heroImg from '../assets/hero-circuit.webp'

/* ── Reusable fade-up wrapper ── */
function FadeUp({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

/* ── Animated counting stat ── */
function StatCard({ value, label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const observed = useRef(false)
  const target = parseInt(value)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !observed.current) {
        observed.current = true
        let start = 0
        const duration = 1400
        const step = Math.ceil(target / (duration / 16))
        const timer = setInterval(() => {
          start += step
          if (start >= target) { setCount(target); clearInterval(timer) }
          else setCount(start)
        }, 16)
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  const suffix = value.includes('+') ? '+' : '%'
  return (
    <div
      ref={ref}
      className="rounded-lg p-5 text-center border border-[rgba(0,196,180,0.30)]"
      style={{ background: 'linear-gradient(135deg,rgba(0,196,180,0.10),rgba(191,155,48,0.08))' }}
    >
      <div className="font-head font-extrabold text-4xl text-[#00C4B4] leading-none">
        {count}
        <span className="text-xl text-[#D4AE45] ml-0.5">{suffix}</span>
      </div>
      <div className="text-white/55 font-mono text-[10px] uppercase tracking-[0.12em] mt-2">
        {label}
      </div>
    </div>
  )
}

/* ── Service card data ── */
const SERVICES = [
  {
    icon: Monitor,
    title: 'Electronics Recycling',
    desc: 'Responsible recycling of computers, TVs, phones, and all e-waste through certified channels.',
  },
  {
    icon: ShieldCheck,
    title: 'Data Destruction',
    desc: 'Certified hard drive shredding and data wiping for businesses and individuals.',
    featured: true,
  },
  {
    icon: Building2,
    title: 'Business E-Waste Pickup',
    desc: 'Scheduled bulk pickup for offices, IT departments, and corporations.',
  },
  {
    icon: Home,
    title: 'Residential Pickup',
    desc: 'Easy curbside or in-home electronics collection across South Florida.',
  },
]

/* ── Testimonials ── */
const TESTIMONIALS = [
  {
    quote:
      'Chris and the team were professional, fast, and made recycling our office gear completely stress-free.',
    name: 'Eric M.',
    location: 'Pompano Beach, FL',
  },
  {
    quote:
      'Very understanding, great attitude, best price. I know exactly where to go for these services!',
    name: 'Sergio E.',
    location: 'Hollywood, FL',
  },
  {
    quote:
      'Professional, efficient, and easy to work with from start to finish.',
    name: 'Susan B.',
    location: 'Broward County, FL',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay — tuned to let the LEDs glow through */}
        <div className="absolute inset-0 bg-[#0D1B2A]/75" />
        {/* Circuit pattern */}
        <div className="absolute inset-0 circuit-pattern opacity-10" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Eyebrow tone="gold" className="flex justify-center">
              // Est. 2014
            </Eyebrow>
          </motion.div>

          <motion.h1
            className="font-head font-extrabold uppercase tracking-[0.02em] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.95] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            South Florida&apos;s
            <span className="block text-[#00C4B4]">E-Waste</span>
            <span className="text-[#D4AE45]">Experts</span>
          </motion.h1>

          <motion.p
            className="text-white/70 font-body text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We safely recycle, repurpose, and destroy electronic devices —
            protecting your data and the planet.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <Link
              to="/quote"
              className="bg-[#00C4B4] hover:bg-[#17D4C2] text-[#0D1B2A] font-head font-bold uppercase tracking-[0.08em] px-8 py-4 rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] inline-flex items-center justify-center gap-2"
            >
              Get a Free Quote <ArrowRight size={16} />
            </Link>
            <a
              href="tel:9543661180"
              className="border-2 border-white/30 text-white hover:bg-white hover:text-[#0D1B2A] font-head font-bold uppercase tracking-[0.08em] px-8 py-4 rounded-full transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              <Phone size={16} /> Call 954-366-1180
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-x-6 gap-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {[
              'Fully Licensed & Insured',
              'Certified Data Destruction',
              'Eco-Friendly Disposal',
              'Serving South Florida 10+ Years',
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-1.5 text-white/70 font-body text-sm">
                <CheckCircle2 size={14} className="text-[#00C4B4]" />
                {badge}
              </div>
            ))}
          </motion.div>
        </div>

      </section>

      {/* ─── SERVICES SNAPSHOT ─── */}
      <section className="py-20 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <Eyebrow tone="teal" className="mb-3 flex justify-center">
              // 01 — Our Services
            </Eyebrow>
            <h2 className="font-head font-extrabold uppercase tracking-[0.02em] text-3xl lg:text-5xl text-[#0D1B2A]">
              What We Do
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map(({ icon: Icon, title, desc, featured }, i) => (
              <FadeUp key={title} delay={i * 0.1}>
                <div
                  className={`bg-white border border-[#E0E8F0] ${featured ? 'border-l-4 border-l-[#00C4B4]' : ''} rounded-lg p-6 h-full flex flex-col hover:-translate-y-1 hover:shadow-md transition-all duration-200 group`}
                >
                  <div className="w-12 h-12 bg-[rgba(0,196,180,0.12)] rounded-md flex items-center justify-center mb-4">
                    <Icon size={24} className="text-[#00C4B4]" />
                  </div>
                  <h3 className="font-head font-bold uppercase tracking-[0.03em] text-[#0D1B2A] text-lg mb-2">{title}</h3>
                  <p className="text-[#4A5568] font-body text-sm leading-relaxed flex-1">{desc}</p>
                  <Link
                    to="/services"
                    className="text-[#00C4B4] font-body font-semibold text-sm mt-4 inline-flex items-center gap-1 hover:gap-2 transition-all duration-200"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-20 bg-[#0D1B2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: text + image */}
            <FadeUp>
              <Eyebrow tone="gold" className="mb-4">
                // 02 — Why Choose Us
              </Eyebrow>
              <h2 className="font-head font-extrabold uppercase tracking-[0.02em] text-3xl lg:text-5xl text-white mb-8 leading-[0.95]">
                Why South Florida<br/>
                <span className="text-[#00C4B4]">Trusts Cast Away</span>
              </h2>
              <ul className="space-y-4">
                {[
                  'Over 10 years serving South Florida',
                  'Certified, secure data destruction — your privacy guaranteed',
                  'Eco-conscious: we recycle, refurbish, and responsibly dispose',
                  'No job too big or too small — from a single laptop to an entire office',
                  'Fast, free quotes — call or text anytime',
                  'Fully licensed and insured',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#00C4B4] font-bold text-lg mt-0.5 flex-shrink-0">✦</span>
                    <span className="text-white/70 font-body leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>

            {/* Right: stat cards */}
            <FadeUp delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <StatCard value="10+" label="Years in South FL" />
                <StatCard value="100" label="Secure Destruction" />
                <StatCard value="100" label="Eco-Friendly" />
                <StatCard value="100" label="Free Quotes" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── AREAS SERVED ─── */}
      <AreasServed />

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <Eyebrow tone="teal" className="mb-3 flex justify-center">
              // 03 — Reviews
            </Eyebrow>
            <h2 className="font-head font-extrabold uppercase tracking-[0.02em] text-3xl lg:text-5xl text-[#0D1B2A]">
              What Our Customers Say
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ quote, name, location }, i) => (
              <FadeUp key={name} delay={i * 0.1}>
                <div className="bg-[#F4F6F8] border border-[#E0E8F0] border-l-4 border-l-[#00C4B4] rounded-lg p-8 h-full flex flex-col hover:shadow-md transition-shadow duration-200 relative">
                  <span className="absolute top-6 right-6 text-[#00C4B4] font-head font-extrabold text-6xl leading-none opacity-15 select-none">
                    &ldquo;
                  </span>
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-[#D4AE45] fill-[#D4AE45]" />
                    ))}
                  </div>
                  <p className="text-[#4A5568] font-body leading-relaxed flex-1 relative z-10">
                    &ldquo;{quote}&rdquo;
                  </p>
                  <div className="mt-6">
                    <div className="font-head font-bold uppercase tracking-[0.03em] text-[#0D1B2A]">{name}</div>
                    <div className="text-[#718096] font-mono text-[10px] uppercase tracking-[0.12em] mt-1">{location}</div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA BANNER ─── */}
      <section className="relative py-24 bg-[#0D1B2A] overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-5" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeUp>
            <Eyebrow tone="gold" className="mb-4 flex justify-center">
              // Ready When You Are
            </Eyebrow>
            <h2 className="font-head font-extrabold uppercase tracking-[0.02em] text-3xl lg:text-6xl text-white mb-4 leading-[0.95]">
              Ready to Recycle<br/>
              <span className="text-[#00C4B4]">Responsibly?</span>
            </h2>
            <p className="text-white/60 font-body text-lg mb-8">
              Call or text us today for a fast, free quote.
              <br />
              Serving South Florida since 2014.
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 bg-[#00C4B4] hover:bg-[#17D4C2] text-[#0D1B2A] font-head font-bold uppercase tracking-[0.08em] px-10 py-4 rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] text-lg"
            >
              Get a Free Quote <ArrowRight size={18} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
