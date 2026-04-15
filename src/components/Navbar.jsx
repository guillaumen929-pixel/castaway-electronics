import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Phone, Mail, ChevronRight } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon'
import { useScroll } from '@/components/ui/use-scroll'
import { cn } from '@/lib/utils'
import logo from '../assets/logo.png'

const NAV_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact#contact-card', label: 'Contact Us' },
]

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  const scrolled = useScroll(10)

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={cn(
        'fixed left-0 right-0 z-50 transition-all duration-300 ease-out',
        scrolled && !open ? 'top-0 md:top-4 md:px-6' : 'top-0',
      )}
    >
      {/* Bar */}
      <div
        className={cn(
          'border-b border-transparent bg-[#0D1B2A] transition-all duration-300 ease-out',
          scrolled && !open
            ? 'md:mx-auto md:max-w-5xl md:rounded-2xl md:border md:border-white/10 md:bg-[#0D1B2A]/95 md:shadow-xl md:backdrop-blur-md'
            : '',
          open && 'bg-[#0D1B2A]',
        )}
      >
        <nav
          aria-label="Primary"
          className="grid h-20 w-full max-w-7xl mx-auto grid-cols-3 items-center px-4 sm:px-6 lg:px-8"
        >
          {/* ── Zone 1: Logo (left) ── */}
          <Link
            to="/"
            className="flex items-center justify-self-start"
            aria-label="Cast Away Cleanouts — Home"
          >
            <img
              src={logo}
              alt="Cast Away Cleanouts — Electronics & Recycling"
              className="h-10 sm:h-12 md:h-14 w-auto max-w-[220px] sm:max-w-none"
            />
          </Link>

          {/* ── Zone 2: Desktop links (center) ── */}
          <div className="hidden items-center gap-1 justify-self-center md:flex">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  cn(
                    buttonVariants({ variant: 'ghost' }),
                    'h-9 px-3 font-body text-sm font-medium transition-colors duration-200 lg:px-4',
                    isActive
                      ? 'bg-white/5 text-[#00C4B4] hover:bg-white/10 hover:text-[#00C4B4]'
                      : 'text-white/80 hover:bg-white/10 hover:text-white',
                  )
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* ── Zone 3: Desktop actions (right) — hidden on mobile ── */}
          <div className="hidden items-center gap-2 justify-self-end md:flex lg:gap-3">
            {/* Phone — icon-only at md, full text at lg+ */}
            <a
              href="tel:9543661180"
              aria-label="Call 954-366-1180"
              className="flex h-9 items-center justify-center gap-1.5 rounded-full px-3 font-body text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Phone size={14} className="text-[#00C4B4]" />
              <span className="hidden lg:inline">954-366-1180</span>
            </a>
            <Button
              asChild
              className="h-9 rounded-full bg-[#00C4B4] px-4 font-head text-[13px] font-bold uppercase tracking-[0.08em] text-[#0D1B2A] transition-all hover:bg-[#17D4C2] hover:scale-[1.03] active:scale-[0.97] lg:px-5 lg:text-sm"
            >
              <Link to="/quote">Get a Free Quote →</Link>
            </Button>
          </div>

          {/* ── Mobile hamburger (right, replaces Zone 3 on mobile) ── */}
          <Button
            size="icon"
            variant="outline"
            onClick={() => setOpen(!open)}
            className="col-start-3 justify-self-end border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <MenuToggleIcon open={open} className="size-5" duration={300} />
          </Button>
        </nav>
      </div>

      {/* ── Mobile overlay ── */}
      <div
        className={cn(
          'fixed inset-x-0 top-20 bottom-0 z-50 flex flex-col overflow-y-auto border-t border-white/10 bg-[#0D1B2A]/80 backdrop-blur-2xl backdrop-saturate-150 shadow-2xl md:hidden',
          open ? 'block' : 'hidden',
        )}
        aria-hidden={!open}
      >
        <div className="flex h-full w-full flex-col gap-6 px-5 pt-6 pb-8">
          {/* Links */}
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'flex items-center justify-between rounded-lg border border-transparent px-4 py-4 font-head text-lg font-bold uppercase tracking-[0.04em] transition-colors',
                    isActive
                      ? 'border-white/10 bg-white/5 text-[#00C4B4]'
                      : 'text-white hover:bg-white/5',
                  )
                }
              >
                {label}
                <ChevronRight size={18} className="text-white/40" />
              </NavLink>
            ))}
          </div>

          {/* Contact rows */}
          <div className="flex flex-col gap-2 border-t border-white/10 pt-5">
            <a
              href="tel:9543661180"
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-white/80 transition-colors hover:bg-white/5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(0,196,180,0.15)]">
                <Phone size={15} className="text-[#00C4B4]" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/45">Call or Text</span>
                <span className="font-body text-sm font-medium">954-366-1180</span>
              </div>
            </a>
            <a
              href="mailto:support@castawaycleanoutsfl.com"
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-white/80 transition-colors hover:bg-white/5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(191,155,48,0.15)]">
                <Mail size={15} className="text-[#D4AE45]" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/45">Email</span>
                <span className="truncate font-body text-sm font-medium">support@castawaycleanoutsfl.com</span>
              </div>
            </a>
          </div>

          {/* Bottom CTAs */}
          <div className="mt-auto flex flex-col gap-3">
            <Button
              asChild
              className="h-12 w-full rounded-full bg-[#00C4B4] font-head text-base font-bold uppercase tracking-[0.08em] text-[#0D1B2A] hover:bg-[#17D4C2]"
            >
              <Link to="/quote" onClick={() => setOpen(false)}>
                Get a Free Quote →
              </Link>
            </Button>
            <a
              href="tel:9543661180"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/25 font-head text-base font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-white/10"
            >
              <Phone size={15} /> Call 954-366-1180
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
