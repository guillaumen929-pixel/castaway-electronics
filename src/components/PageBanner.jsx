import { motion } from 'framer-motion'

export default function PageBanner({ title, subtitle, bgImage }) {
  return (
    <section
      className="relative pt-16 min-h-[320px] lg:min-h-[400px] flex items-end pb-16"
      style={bgImage ? {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : { backgroundColor: '#1B2A3B' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1B2A3B]/75" />

      {/* Circuit pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-head font-bold text-4xl lg:text-5xl xl:text-6xl text-white mb-4">
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
