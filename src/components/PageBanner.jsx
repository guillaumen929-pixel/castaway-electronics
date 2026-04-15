import { motion } from 'framer-motion'
import Eyebrow from './ui/Eyebrow'
import Breadcrumbs from './Breadcrumbs'

export default function PageBanner({ title, subtitle, bgImage, eyebrow }) {
  return (
    <section
      className="relative pt-32 min-h-[400px] lg:min-h-[480px] flex items-end pb-16"
      style={bgImage ? {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : { backgroundColor: '#0D1B2A' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0D1B2A]/80" />

      {/* Circuit pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Breadcrumbs className="mb-5" />
          {eyebrow && (
            <Eyebrow tone="gold" className="mb-4 flex justify-center">
              {eyebrow}
            </Eyebrow>
          )}
          <h1 className="font-head font-extrabold uppercase tracking-[0.02em] text-4xl lg:text-5xl xl:text-6xl text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/70 font-body text-lg lg:text-xl max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
