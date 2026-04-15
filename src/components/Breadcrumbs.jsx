import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

const LABELS = {
  about: 'About',
  services: 'Services',
  contact: 'Contact Us',
  quote: 'Get a Quote',
}

export default function Breadcrumbs({ className = '' }) {
  const { pathname } = useLocation()
  const segments = pathname.split('/').filter(Boolean)
  if (segments.length === 0) return null

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center justify-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] ${className}`}
    >
      <Link
        to="/"
        className="flex items-center gap-1 text-white/55 hover:text-[#00C4B4] transition-colors"
      >
        <Home size={12} />
        Home
      </Link>
      {segments.map((seg, i) => {
        const to = '/' + segments.slice(0, i + 1).join('/')
        const isLast = i === segments.length - 1
        const label = LABELS[seg] || seg.replace(/-/g, ' ')
        return (
          <span key={to} className="flex items-center gap-1.5">
            <ChevronRight size={12} className="text-white/30" />
            {isLast ? (
              <span className="text-[#D4AE45]">{label}</span>
            ) : (
              <Link to={to} className="text-white/55 hover:text-[#00C4B4] transition-colors">
                {label}
              </Link>
            )}
          </span>
        )
      })}
    </nav>
  )
}
