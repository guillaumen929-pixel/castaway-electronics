import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, CheckCircle2, Send } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import Eyebrow from '../components/ui/Eyebrow'
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

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Quote Request — ${formData.service || 'Electronics Recycling'}`)
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Service: ${formData.service}\n\n` +
      `Message:\n${formData.message}`
    )
    window.location.href = `mailto:Info@CastawayCleanouts.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const inputClasses = 'w-full border border-[#E0E8F0] rounded-md px-4 py-3 font-body text-sm text-[#1A1A2A] placeholder-[#A0AEC0] focus:outline-none focus:border-[#00C4B4] focus:ring-2 focus:ring-[rgba(0,196,180,0.2)] transition-all bg-white'

  return (
    <>
      <PageBanner
        title="Get a Free Quote"
        subtitle="Fast, free, and no obligation — we come to you"
        bgImage={vanImg}
        eyebrow="// 24/7 Response"
      />

      {/* ─── CONTACT SPLIT ─── */}
      <section className="py-20 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-0 overflow-hidden rounded-lg shadow-md">
            {/* Left: info panel */}
            <FadeUp className="lg:col-span-2 order-2" delay={0.15}>
              <div className="bg-[#112336] p-10 lg:p-12 h-full relative overflow-hidden">
                <div className="absolute inset-0 circuit-pattern opacity-5" />
                <div className="relative z-10">
                  <Eyebrow tone="gold" className="mb-4">
                    // 24/7 Response
                  </Eyebrow>
                  <h2 className="font-head font-extrabold uppercase tracking-[0.02em] text-2xl lg:text-4xl text-white mb-6 leading-[0.95]">
                    Ready to Recycle<br/>
                    <span className="text-[#00C4B4]">Responsibly?</span>
                  </h2>
                  <p className="text-white/60 font-body leading-relaxed mb-8">
                    Contact us today for a fast, free, no-obligation quote. We serve all of South Florida
                    and offer flexible scheduling.
                  </p>

                  <div className="space-y-5">
                    <a
                      href="tel:9543661180"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-[rgba(0,196,180,0.15)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(0,196,180,0.3)] transition-colors">
                        <Phone size={16} className="text-[#00C4B4]" />
                      </div>
                      <div>
                        <div className="text-white/45 font-mono text-[10px] uppercase tracking-[0.12em] mb-0.5">Call or Text</div>
                        <div className="text-white font-body font-medium group-hover:text-[#00C4B4] transition-colors">
                          954-366-1180
                        </div>
                      </div>
                    </a>

                    <a
                      href="mailto:Info@CastawayCleanouts.com"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-[rgba(191,155,48,0.15)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(191,155,48,0.3)] transition-colors">
                        <Mail size={16} className="text-[#D4AE45]" />
                      </div>
                      <div>
                        <div className="text-white/45 font-mono text-[10px] uppercase tracking-[0.12em] mb-0.5">Email</div>
                        <div className="text-white font-body font-medium group-hover:text-[#D4AE45] transition-colors break-all">
                          Info@CastawayCleanouts.com
                        </div>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[rgba(0,196,180,0.15)] flex items-center justify-center flex-shrink-0">
                        <MapPin size={16} className="text-[#00C4B4]" />
                      </div>
                      <div>
                        <div className="text-white/45 font-mono text-[10px] uppercase tracking-[0.12em] mb-0.5">Address</div>
                        <div className="text-white font-body font-medium">
                          226 Basin Dr, Lauderdale by the Sea, FL 33308
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-2">
                    {[
                      { label: 'Licensed & Insured', tone: 'teal' },
                      { label: 'Certified', tone: 'teal' },
                      { label: 'Est. 2014', tone: 'gold' },
                    ].map(({ label, tone }) => (
                      <span
                        key={label}
                        className={
                          tone === 'gold'
                            ? 'bg-[rgba(191,155,48,0.12)] text-[#D4AE45] border border-[rgba(191,155,48,0.32)] rounded-full font-mono text-[10px] tracking-[0.06em] uppercase px-3 py-1'
                            : 'bg-[rgba(0,196,180,0.12)] text-[#00C4B4] border border-[rgba(0,196,180,0.30)] rounded-full font-mono text-[10px] tracking-[0.06em] uppercase px-3 py-1'
                        }
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Right: form */}
            <FadeUp className="lg:col-span-3 order-1">
              <div className="bg-white p-10 lg:p-12 h-full">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-20">
                    <div className="w-16 h-16 bg-[rgba(0,196,180,0.12)] rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={32} className="text-[#00C4B4]" />
                    </div>
                    <h3 className="font-head font-extrabold uppercase tracking-[0.02em] text-2xl text-[#0D1B2A] mb-3">
                      Thanks! We&apos;ll be in touch.
                    </h3>
                    <p className="text-[#4A5568] font-body">
                      Your message has been sent. We typically respond within one business day.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-[#00C4B4] font-body font-semibold text-sm hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[#0D1B2A] font-body text-sm font-semibold uppercase tracking-[0.06em] mb-1.5">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="John"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label className="block text-[#0D1B2A] font-body text-sm font-semibold uppercase tracking-[0.06em] mb-1.5">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Smith"
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[#0D1B2A] font-body text-sm font-semibold uppercase tracking-[0.06em] mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(954) 000-0000"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label className="block text-[#0D1B2A] font-body text-sm font-semibold uppercase tracking-[0.06em] mb-1.5">
                          Email Address <span className="text-[#00C4B4]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#0D1B2A] font-body text-sm font-semibold uppercase tracking-[0.06em] mb-1.5">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`${inputClasses} appearance-none cursor-pointer`}
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2300C4B4' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                      >
                        <option value="">Select a service…</option>
                        <option value="Electronics Recycling">Electronics Recycling</option>
                        <option value="Data Destruction">Data Destruction</option>
                        <option value="Business Pickup">Business Pickup</option>
                        <option value="Residential Pickup">Residential Pickup</option>
                        <option value="Hard Drive Shredding">Hard Drive Shredding</option>
                        <option value="IT Asset Disposition (ITAD)">IT Asset Disposition (ITAD)</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[#0D1B2A] font-body text-sm font-semibold uppercase tracking-[0.06em] mb-1.5">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your electronics recycling needs…"
                        className={`${inputClasses} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#00C4B4] hover:bg-[#17D4C2] text-[#0D1B2A] font-head font-bold uppercase tracking-[0.08em] py-4 rounded-full transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                    >
                      <Send size={16} />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

    </>
  )
}
