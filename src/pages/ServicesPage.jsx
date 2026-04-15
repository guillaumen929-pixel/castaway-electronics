import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Recycle, ShieldCheck, Building2, Home, Server, HardDrive,
  Phone, CalendarCheck, CheckCircle2, ArrowRight
} from 'lucide-react'
import PageBanner from '../components/PageBanner'
import AreasServed from '../components/AreasServed'
import Eyebrow from '../components/ui/Eyebrow'
import flatlayImg from '../assets/flatlay-electronics.webp'

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

const SERVICES = [
  {
    icon: Recycle,
    title: 'Electronics Recycling',
    desc: 'We responsibly recycle all types of consumer and commercial electronics. Every item is processed through certified channels to ensure maximum material recovery and minimal environmental impact.',
    slug: 'electronics-recycling',
  },
  {
    icon: ShieldCheck,
    title: 'Certified Data Destruction',
    desc: 'Protecting your sensitive data is our top priority. We offer certified hard drive shredding, degaussing, and data wiping services. We provide a certificate of destruction upon request.',
    slug: 'data-destruction',
  },
  {
    icon: Building2,
    title: 'Business & Corporate E-Waste Pickup',
    desc: 'Office upgrading equipment? We offer scheduled bulk pickups for businesses, IT departments, schools, hospitals, and government agencies. No fleet is too large.',
    slug: 'business-pickup',
  },
  {
    icon: Home,
    title: 'Residential Electronics Pickup',
    desc: 'Old TVs, computers, or phones piling up at home? We offer convenient residential pickup services throughout South Florida. Schedule a time and we\'ll come to you.',
    slug: 'residential-pickup',
  },
  {
    icon: Server,
    title: 'IT Asset Disposition (ITAD)',
    desc: 'We help businesses responsibly retire outdated IT assets: inventory, data sanitization, certified destruction, and eco-friendly recycling or remarketing — all documented for compliance.',
    slug: 'itad',
  },
  {
    icon: HardDrive,
    title: 'Hard Drive Shredding',
    desc: 'On-site or off-site hard drive shredding for complete data security. We destroy hard drives, SSDs, USB drives, tapes, and other storage media to DOD standards.',
    slug: 'hard-drive-shredding',
  },
]

const ACCEPTED = [
  'Desktop Computers',
  'Laptops & Tablets',
  'Monitors & Displays',
  'Servers & Networking Equipment',
  'Printers & Scanners',
  'Televisions (all sizes)',
  'Cell Phones & Smartphones',
  'Hard Drives & Storage Devices',
  'Audio/Visual Equipment',
  'Gaming Consoles',
  'Cables & Peripherals',
  'Batteries & UPS Units',
  'Medical Equipment (non-regulated)',
  'Office Electronics',
  'Kitchen Electronics',
  'And much more!',
]

const STEPS = [
  {
    icon: Phone,
    number: '01',
    title: 'Call or Request a Quote',
    desc: 'Contact us by phone, text, or online form. We\'ll get back to you quickly with a free, no-obligation estimate.',
  },
  {
    icon: CalendarCheck,
    number: '02',
    title: 'Schedule a Pickup',
    desc: 'We come to you at a time that works for your schedule — residential or commercial, any size job.',
  },
  {
    icon: CheckCircle2,
    number: '03',
    title: 'Responsible Recycling',
    desc: 'We handle everything. You get a receipt and peace of mind knowing your e-waste was processed responsibly.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="Everything you need for responsible electronics disposal"
        bgImage={flatlayImg}
        eyebrow="// Complete E-Waste Solutions"
      />

      {/* ─── 6 SERVICE CARDS ─── */}
      <section className="py-20 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <Eyebrow tone="teal" className="mb-3 flex justify-center">
              // 01 — What We Offer
            </Eyebrow>
            <h2 className="font-head font-extrabold uppercase tracking-[0.02em] text-3xl lg:text-5xl text-[#0D1B2A]">
              Complete E-Waste Solutions
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ icon: Icon, title, desc, slug }, i) => (
              <FadeUp key={title} delay={i * 0.08}>
                <div id={slug} className="bg-white rounded-lg p-7 h-full flex flex-col group hover:-translate-y-1 hover:shadow-md transition-all duration-200 border border-[#E0E8F0] border-l-4 border-l-[#00C4B4] scroll-mt-24">
                  <div className="w-12 h-12 bg-[rgba(0,196,180,0.12)] rounded-md flex items-center justify-center mb-4 group-hover:bg-[rgba(0,196,180,0.2)] transition-colors">
                    <Icon size={22} className="text-[#00C4B4]" />
                  </div>
                  <h3 className="font-head font-bold uppercase tracking-[0.03em] text-[#0D1B2A] text-lg mb-3">{title}</h3>
                  <p className="text-[#4A5568] font-body text-sm leading-relaxed flex-1">{desc}</p>
                  <Link
                    to="/quote"
                    className="inline-flex items-center gap-1.5 text-[#00C4B4] font-body font-semibold text-sm mt-5 hover:gap-2.5 transition-all duration-200"
                  >
                    Get a Quote <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ACCEPTED ITEMS ─── */}
      <section className="py-20 bg-[#112336] relative overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Flat-lay image */}
            <FadeUp>
              <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={flatlayImg}
                  alt="Top-down flat lay of disassembled electronics with teal edge lighting"
                  className="w-full h-auto"
                />
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00C4B4]" />
              </div>
            </FadeUp>

            {/* Checklist */}
            <FadeUp delay={0.2}>
              <Eyebrow tone="gold" className="mb-3">
                // 02 — Accepted Items
              </Eyebrow>
              <h2 className="font-head font-extrabold uppercase tracking-[0.02em] text-2xl lg:text-4xl text-white mb-8 leading-[0.95]">
                Full List of<br/>
                <span className="text-[#00C4B4]">Electronics We Accept</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ACCEPTED.map((item, i) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-3 text-white/75 font-body text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                  >
                    <CheckCircle2 size={15} className="text-[#00C4B4] flex-shrink-0" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <Eyebrow tone="teal" className="mb-3 flex justify-center">
              // 03 — The Process
            </Eyebrow>
            <h2 className="font-head font-extrabold uppercase tracking-[0.02em] text-3xl lg:text-5xl text-[#0D1B2A]">
              How It Works — 3 Simple Steps
            </h2>
          </FadeUp>

          <div className="relative">
            {/* Connecting line — desktop only */}
            <div className="hidden lg:block absolute top-[52px] left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-0.5 border-t-2 border-dashed border-[#00C4B4]/40" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
              {STEPS.map(({ icon: Icon, number, title, desc }, i) => (
                <FadeUp key={title} delay={i * 0.15}>
                  <div className="text-center flex flex-col items-center">
                    {/* Step circle */}
                    <div className="relative w-24 h-24 rounded-full bg-[#00C4B4] flex flex-col items-center justify-center mb-6 shadow-lg shadow-[rgba(0,196,180,0.3)]">
                      <span className="font-head font-extrabold text-[11px] uppercase tracking-[0.1em] text-[#0D1B2A]/60 leading-none">{number}</span>
                      <Icon size={24} className="text-[#0D1B2A] mt-1" />
                    </div>
                    <h3 className="font-head font-bold uppercase tracking-[0.03em] text-[#0D1B2A] text-xl mb-3">{title}</h3>
                    <p className="text-[#4A5568] font-body text-sm leading-relaxed max-w-xs">{desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          <FadeUp className="text-center mt-14" delay={0.4}>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 bg-[#00C4B4] hover:bg-[#17D4C2] text-[#0D1B2A] font-head font-bold uppercase tracking-[0.08em] px-10 py-4 rounded-full transition-all duration-200 hover:scale-[1.03]"
            >
              Schedule a Pickup <ArrowRight size={16} />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ─── AREAS SERVED ─── */}
      <AreasServed />
    </>
  )
}
