import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Leaf, ShieldCheck, Users, CheckCircle2, ArrowRight } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import AreasServed from '../components/AreasServed'
// Replace hero-electronics.svg with hero-electronics.jpg once your photo is ready
import heroImg from '../assets/hero-electronics.svg'

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

const VALUES = [
  {
    icon: Leaf,
    title: 'Eco-Responsibility',
    desc: 'We divert e-waste from landfills through certified recycling and responsible disposal, protecting South Florida\'s environment.',
  },
  {
    icon: ShieldCheck,
    title: 'Data Security',
    desc: 'Your privacy is our priority. Certified destruction means your data is gone — permanently. No exceptions.',
  },
  {
    icon: Users,
    title: 'Community Trust',
    desc: 'South Florida has trusted the Cast Away name since 2014. We\'re your neighbors, and we take that seriously.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="Cast Away Cleanouts — Electronics & Recycling"
        bgImage={heroImg}
      />

      {/* ─── MAIN ABOUT ─── */}
      <section className="py-20 bg-[#EDEEF3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <FadeUp>
              <div className="relative rounded-md overflow-hidden aspect-[3/4] max-h-[520px]">
                <img
                  src={heroImg}
                  alt="Electronics recycling — glowing devices"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#1B2A3B]/20" />
                {/* Teal accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00B4D8]" />
              </div>
            </FadeUp>

            {/* Text */}
            <FadeUp delay={0.2}>
              <div className="text-[#00B4D8] font-body font-semibold text-sm uppercase tracking-widest mb-3">
                Our Story
              </div>
              <h2 className="font-head font-bold text-3xl lg:text-4xl text-[#1B2A3B] mb-6">
                Cast Away Cleanouts<br />
                <span className="text-2xl font-semibold">— Electronics &amp; Recycling</span>
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
                className="inline-flex items-center gap-2 text-[#00B4D8] font-body font-semibold mt-6 hover:gap-3 transition-all duration-200"
              >
                Learn About Our Services <ArrowRight size={16} />
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE ACCEPT ─── */}
      <section className="py-20 bg-[#1B2A3B] relative overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-8" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <div className="text-[#00B4D8] font-body font-semibold text-sm uppercase tracking-widest mb-3">
              Accepted Items
            </div>
            <h2 className="font-head font-bold text-3xl lg:text-4xl text-white">
              Electronics We Accept
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ACCEPTED.map((item, i) => (
              <motion.div
                key={item}
                className="flex items-center gap-3 text-white/80 font-body"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <CheckCircle2 size={16} className="text-[#00B4D8] flex-shrink-0" />
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MISSION & VALUES ─── */}
      <section className="py-20 bg-[#E3E7EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <div className="text-[#00B4D8] font-body font-semibold text-sm uppercase tracking-widest mb-3">
              Who We Are
            </div>
            <h2 className="font-head font-bold text-3xl lg:text-4xl text-[#1B2A3B]">
              Our Mission &amp; Values
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <FadeUp key={title} delay={i * 0.1}>
                <div className="bg-[#F5F7FB] rounded-md p-8 h-full flex flex-col hover:-translate-y-1 hover:shadow-md transition-all duration-200 border-t-[3px] border-[#00B4D8]">
                  <div className="w-14 h-14 bg-[#E9EDF4] rounded-md flex items-center justify-center mb-5">
                    <Icon size={28} className="text-[#00B4D8]" />
                  </div>
                  <h3 className="font-head font-bold text-[#1B2A3B] text-xl mb-3">{title}</h3>
                  <p className="text-[#4A5568] font-body leading-relaxed flex-1">{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AREAS SERVED ─── */}
      <AreasServed />
    </>
  )
}
