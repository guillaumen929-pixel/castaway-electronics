import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'

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
    <section className="py-20 bg-[#E3E7EE]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <MapPin size={18} className="text-[#00B4D8]" />
            <span className="text-[#00B4D8] font-body font-semibold text-sm uppercase tracking-widest">
              Service Area
            </span>
          </div>
          <h2 className="font-head font-bold text-3xl lg:text-4xl text-[#1B2A3B] mb-10">
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
              className="bg-white border border-[#00B4D8] text-[#1B2A3B] font-body font-medium text-sm px-5 py-2.5 rounded-[24px] hover:bg-[#00B4D8] hover:text-white transition-all duration-200 cursor-default"
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
            className="inline-flex items-center gap-2 bg-[#00B4D8] hover:bg-[#0099BB] text-white font-body font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
          >
            Get a Free Quote →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
