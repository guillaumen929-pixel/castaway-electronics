import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, ArrowRight } from 'lucide-react'
import Eyebrow from './ui/Eyebrow'

const AREAS = [
  'Fort Lauderdale',
  'Pompano Beach',
  'Lauderdale-by-the-Sea',
  'Deerfield Beach',
  'Boca Raton',
  'Oakland Park',
  'Wilton Manors',
  'Coral Springs',
  'Broward County',
]

export default function AreasServed({ heading = 'Proudly Serving South Florida' }) {
  return (
    <section className="py-20 bg-[#F4F6F8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow tone="teal" className="mb-3 flex items-center justify-center gap-2">
            <MapPin size={14} className="text-[#00C4B4]" />
            // Service Area
          </Eyebrow>
          <h2 className="font-head font-extrabold uppercase tracking-[0.02em] text-3xl lg:text-4xl text-[#0D1B2A] mb-10">
            {heading}
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {AREAS.map((area, i) => (
            <motion.span
              key={area}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white border border-[#00C4B4] text-[#0D1B2A] font-body font-medium text-sm px-5 py-2.5 rounded-full hover:bg-[#00C4B4] hover:text-white transition-all duration-200 cursor-default"
            >
              {area}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 bg-[#00C4B4] hover:bg-[#17D4C2] text-[#0D1B2A] font-head font-bold uppercase tracking-[0.08em] px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
          >
            Get a Free Quote <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
