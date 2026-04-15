import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Leaf, ShieldCheck, Users, CheckCircle2, ArrowRight, Truck, Phone } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import Eyebrow from '../components/ui/Eyebrow'
import heroImg from '../assets/hero-circuit.webp'
import vanImg from '../assets/van.webp'

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

const ACCEPTED = [
  { label: 'Desktop Computers' },
  { label: 'Laptops & Tablets' },
  { label: 'Monitors & Displays' },
  { label: 'Servers & Networking Equipment', highlight: true },
  { label: 'Printers & Scanners' },
  { label: 'Televisions (all sizes)' },
  { label: 'Cell Phones & Smartphones' },
  { label: 'Hard Drives & Storage Devices', highlight: true },
  { label: 'Audio/Visual Equipment' },
  { label: 'Gaming Consoles' },
  { label: 'Cables & Peripherals' },
  { label: 'Batteries & UPS Units' },
  { label: 'Medical Equipment (non-regulated)' },
  { label: 'Office Electronics' },
  { label: 'Kitchen Electronics' },
  { label: 'And much more!' },
]

const VALUES = [
  {
    icon: Leaf,
    title: 'Eco-Responsibility',
    desc: 'We divert e-waste from landfills through certified recycling and responsible disposal, protecting South Florida\'s environment.',
    accent: 'teal',
  },
  {
    icon: ShieldCheck,
    title: 'Data Security',
    desc: 'Your privacy is our priority. Certified destruction means your data is gone — permanently. No exceptions.',
    accent: 'gold',
  },
  {
    icon: Users,
    title: 'Community Trust',
    desc: 'South Florida has trusted the Cast Away name since 2014. We\'re your neighbors, and we take that seriously.',
    accent: 'plain',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="Cast Away Cleanouts — Electronics & Recycling"
        bgImage={heroImg}
        eyebrow="// Est. 2014 · Lauderdale by the Sea"
      />

      {/* ─── MAIN ABOUT ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <Eyebrow tone="teal" className="mb-3">
              // 01 — Our Story
            </Eyebrow>
            <h2 className="font-head font-extrabold uppercase tracking-[0.02em] text-3xl lg:text-5xl text-[#0D1B2A] mb-6 leading-[0.95]">
              Cast Away Cleanouts<br />
              <span className="text-[#00C4B4]">Electronics & Recycling</span>
            </h2>
            <div className="space-y-4 text-[#4A5568] font-body leading-[1.8] text-base">
              <p>
                Cast Away Cleanouts — Electronics &amp; Recycling is a professional e-waste
                recycling and certified data destruction company serving South Florida since
                2014. As a sister company to Cast Away Cleanouts Estate &amp; Property
                Cleanouts, we bring the same trusted, reliable service to the world of
                electronics disposal.
              </p>
              <p>
                We help homeowners, businesses, IT departments, schools, and property managers
                safely and responsibly dispose of electronics — from single devices to full
                office cleanouts. Our certified data destruction services ensure your sensitive
                information is permanently and securely eliminated before any device leaves
                our hands.
              </p>
              <p>
                We are committed to keeping South Florida&apos;s environment clean by recycling
                and repurposing as much electronic material as possible, and disposing of the
                rest through certified eco-friendly channels.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[#00C4B4] font-body font-semibold mt-6 hover:gap-3 transition-all duration-200"
            >
              Learn About Our Services <ArrowRight size={16} />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ─── WHAT WE ACCEPT ─── */}
      <section className="py-20 bg-[#112336] relative overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-10" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <Eyebrow tone="gold" className="mb-3 flex justify-center">
              // 02 — Accepted Items
            </Eyebrow>
            <h2 className="font-head font-extrabold uppercase tracking-[0.02em] text-3xl lg:text-5xl text-white">
              Electronics We Accept
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ACCEPTED.map(({ label, highlight }, i) => (
              <motion.div
                key={label}
                className="flex items-center gap-3 text-white/80 font-body"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <CheckCircle2
                  size={16}
                  className={highlight ? 'text-[#D4AE45] flex-shrink-0' : 'text-[#00C4B4] flex-shrink-0'}
                />
                <span className={highlight ? 'text-white font-medium' : ''}>{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WE COME TO YOU ─── */}
      <section className="py-20 bg-[#0D1B2A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={vanImg}
                  alt="Cast Away Electronics branded service van"
                  className="w-full h-auto"
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <Eyebrow tone="gold" className="mb-3 flex items-center gap-2">
                <Truck size={14} className="text-[#D4AE45]" />
                // 03 — We Come To You
              </Eyebrow>
              <h2 className="font-head font-extrabold uppercase tracking-[0.02em] text-3xl lg:text-5xl text-white mb-6 leading-[0.95]">
                Doorstep Pickup<br />
                <span className="text-[#00C4B4]">Across South Florida</span>
              </h2>
              <p className="text-white/70 font-body text-lg leading-relaxed mb-4">
                Schedule a
                pickup that fits your day — we show up on time, load fast, and leave you
                with a receipt and peace of mind.
              </p>
              <p className="text-white/55 font-body leading-relaxed mb-8">
                No job is too large or too small — from a single laptop to a full office
                teardown.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 bg-[#00C4B4] hover:bg-[#17D4C2] text-[#0D1B2A] font-head font-bold uppercase tracking-[0.08em] px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
                >
                  Schedule a Pickup <ArrowRight size={16} />
                </Link>
                <a
                  href="tel:9543661180"
                  className="inline-flex items-center justify-center gap-2 border border-white/25 text-white hover:bg-white/10 font-head font-bold uppercase tracking-[0.08em] px-8 py-3.5 rounded-full transition-all duration-200"
                >
                  <Phone size={15} /> 954-366-1180
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── MISSION & VALUES ─── */}
      <section className="py-20 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <Eyebrow tone="teal" className="mb-3 flex justify-center">
              // 04 — Who We Are
            </Eyebrow>
            <h2 className="font-head font-extrabold uppercase tracking-[0.02em] text-3xl lg:text-5xl text-[#0D1B2A]">
              Our Mission &amp; Values
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map(({ icon: Icon, title, desc, accent }, i) => {
              const borderClass = accent === 'teal'
                ? 'border-l-4 border-l-[#00C4B4]'
                : accent === 'gold'
                  ? 'border-l-4 border-l-[#D4AE45]'
                  : ''
              const iconColor = accent === 'gold' ? 'text-[#D4AE45]' : 'text-[#00C4B4]'
              const iconBg = accent === 'gold' ? 'bg-[rgba(191,155,48,0.12)]' : 'bg-[rgba(0,196,180,0.12)]'
              return (
                <FadeUp key={title} delay={i * 0.1}>
                  <div className={`bg-white rounded-lg p-8 h-full flex flex-col hover:-translate-y-1 hover:shadow-md transition-all duration-200 border border-[#E0E8F0] ${borderClass}`}>
                    <div className={`w-14 h-14 ${iconBg} rounded-md flex items-center justify-center mb-5`}>
                      <Icon size={28} className={iconColor} />
                    </div>
                    <h3 className="font-head font-bold uppercase tracking-[0.03em] text-[#0D1B2A] text-xl mb-3">{title}</h3>
                    <p className="text-[#4A5568] font-body leading-relaxed flex-1">{desc}</p>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

    </>
  )
}
