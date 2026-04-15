import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, CheckCircle2, ArrowRight, Send } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import AreasServed from '../components/AreasServed'

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

  return (
    <>
      <PageBanner
        title="Get a Free Quote"
        subtitle="Fast, free, and no obligation — we come to you"
      />

      {/* ─── CONTACT SPLIT ─── */}
      <section className="py-20 bg-[#EDEEF3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-0 overflow-hidden rounded-md shadow-md">
            {/* Left: info panel */}
            <FadeUp className="lg:col-span-2">
              <div className="bg-[#1B2A3B] p-10 lg:p-12 h-full">
                <div className="text-[#00B4D8] font-body font-semibold text-sm uppercase tracking-widest mb-4">
                  Get In Touch
                </div>
                <h2 className="font-head font-bold text-2xl lg:text-3xl text-white mb-6">
                  Ready to Recycle Responsibly?
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
                    <div className="w-10 h-10 rounded-full bg-[#00B4D8]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00B4D8]/40 transition-colors">
                      <Phone size={16} className="text-[#00B4D8]" />
                    </div>
                    <div>
                      <div className="text-white/50 font-body text-xs uppercase tracking-wider mb-0.5">Call or Text</div>
                      <div className="text-white font-body font-medium group-hover:text-[#00B4D8] transition-colors">
                        954-366-1180
                      </div>
                    </div>
                  </a>

                  <a
                    href="mailto:Info@CastawayCleanouts.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#00B4D8]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00B4D8]/40 transition-colors">
                      <Mail size={16} className="text-[#00B4D8]" />
                    </div>
                    <div>
                      <div className="text-white/50 font-body text-xs uppercase tracking-wider mb-0.5">Email</div>
                      <div className="text-white font-body font-medium group-hover:text-[#00B4D8] transition-colors break-all">
                        Info@CastawayCleanouts.com
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#00B4D8]/20 flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-[#00B4D8]" />
                    </div>
                    <div>
                      <div className="text-white/50 font-body text-xs uppercase tracking-wider mb-0.5">Address</div>
                      <div className="text-white font-body font-medium">
                        226 Basin Dr, Lauderdale by the Sea, FL 33308
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10 space-y-2">
                  {['Serving South Florida since 2014', 'Fully Licensed & Insured'].map((badge) => (
                    <div key={badge} className="flex items-center gap-2 text-white/70 font-body text-sm">
                      <CheckCircle2 size={15} className="text-[#00B4D8]" />
                      {badge}
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Right: form */}
            <FadeUp className="lg:col-span-3" delay={0.15}>
              <div className="bg-[#F5F7FB] p-10 lg:p-12 h-full">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-20">
                    <div className="w-16 h-16 bg-[#00B4D8]/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={32} className="text-[#00B4D8]" />
                    </div>
                    <h3 className="font-head font-bold text-2xl text-[#1B2A3B] mb-3">
                      Thanks! We&apos;ll be in touch.
                    </h3>
                    <p className="text-[#4A5568] font-body">
                      Your message has been sent. We typically respond within one business day.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-[#00B4D8] font-body font-semibold text-sm hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[#1B2A3B] font-body text-sm font-medium mb-1.5">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="John"
                          className="w-full border border-[#E0E8F0] rounded-md px-4 py-3 font-body text-sm text-[#1A1A2A] placeholder-[#A0AEC0] focus:outline-none focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[#1B2A3B] font-body text-sm font-medium mb-1.5">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Smith"
                          className="w-full border border-[#E0E8F0] rounded-md px-4 py-3 font-body text-sm text-[#1A1A2A] placeholder-[#A0AEC0] focus:outline-none focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[#1B2A3B] font-body text-sm font-medium mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(954) 000-0000"
                          className="w-full border border-[#E0E8F0] rounded-md px-4 py-3 font-body text-sm text-[#1A1A2A] placeholder-[#A0AEC0] focus:outline-none focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[#1B2A3B] font-body text-sm font-medium mb-1.5">
                          Email Address <span className="text-[#00B4D8]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full border border-[#E0E8F0] rounded-md px-4 py-3 font-body text-sm text-[#1A1A2A] placeholder-[#A0AEC0] focus:outline-none focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#1B2A3B] font-body text-sm font-medium mb-1.5">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full border border-[#E0E8F0] rounded-md px-4 py-3 font-body text-sm text-[#1A1A2A] focus:outline-none focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 transition-all bg-[#F5F7FB] appearance-none cursor-pointer"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2300B4D8' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
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
                      <label className="block text-[#1B2A3B] font-body text-sm font-medium mb-1.5">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your electronics recycling needs…"
                        className="w-full border border-[#E0E8F0] rounded-md px-4 py-3 font-body text-sm text-[#1A1A2A] placeholder-[#A0AEC0] focus:outline-none focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#00B4D8] hover:bg-[#0099BB] text-white font-body font-semibold py-4 rounded-md transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
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

      {/* ─── AREAS SERVED ─── */}
      <AreasServed heading="We Come to You — Serving All of South Florida" />
    </>
  )
}
