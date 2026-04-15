import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon'
import { useScroll } from '@/components/ui/use-scroll'
import { cn } from '@/lib/utils'
import logo from '../assets/logo.svg'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact Us' },
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
          'border-b border-transparent bg-[#1B2A3B] transition-all duration-300 ease-out',
          scrolled && !open
            ? 'md:mx-auto md:max-w-4xl md:rounded-xl md:border md:border-white/10 md:bg-[#1B2A3B]/95 md:shadow-xl md:backdrop-blur-sm'
            : '',
          open && 'bg-[#1B2A3B]',
        )}
      >
        <nav
          className={cn(
            'flex w-full items-center justify-between px-4 sm:px-6 transition-all duration-300 ease-out',
            scrolled && !open ? 'md:h-12 md:px-3' : 'h-14',
          )}
        >
          {/* Logo */}
          <Link to="/" className="flex flex-shrink-0 items-center gap-3">
            <img
              src={logo}
              alt="Cast Away Cleanouts Logo"
              className="h-9 w-auto"
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <div className="leading-tight">
              <div className="font-head text-base font-bold leading-none text-white">
                Cast Away Cleanouts
              </div>
              <div className="font-body text-xs font-medium tracking-wide text-[#00B4D8]">
                Electronics &amp; Recycling
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  cn(
                    buttonVariants({ variant: 'ghost' }),
                    'font-body text-sm font-medium transition-colors duration-200',
                    isActive
                      ? 'bg-white/5 text-[#00B4D8] hover:bg-white/10 hover:text-[#00B4D8]'
                      : 'text-white/80 hover:bg-white/10 hover:text-white',
                  )
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Desktop right: phone + CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:9543661180"
              className="flex items-center gap-1.5 font-body text-sm text-white/70 transition-colors hover:text-white"
            >
              <Phone size={13} className="text-[#00B4D8]" />
              954-366-1180
            </a>
            <Button
              asChild
              className="h-9 rounded-full bg-[#00B4D8] px-5 font-body font-semibold text-white transition-all hover:bg-[#0099BB] hover:scale-[1.03] active:scale-[0.97]"
            >
              <Link to="/quote">Get a Free Quote →</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <Button
            size="icon"
            variant="outline"
            onClick={() => setOpen(!open)}
            className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <MenuToggleIcon open={open} className="size-5" duration={300} />
          </Button>
        </nav>
      </div>

      {/* Mobile overlay */}
      <div
        className={cn(
          'fixed top-14 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-t border-white/10 bg-[#1B2A3B]/97 backdrop-blur-md md:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div
          data-slot={open ? 'open' : 'closed'}
          className={cn(
            'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 ease-out',
            'flex h-full w-full flex-col justify-between gap-y-2 p-4',
          )}
        >
          {/* Links */}
          <div className="grid gap-y-1">
            {NAV_LINKS.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    buttonVariants({ variant: 'ghost' }),
                    'justify-start font-body text-base font-medium',
                    isActive
                      ? 'bg-white/5 text-[#00B4D8]'
                      : 'text-white/80 hover:bg-white/10 hover:text-white',
                  )
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Bottom: phone + CTA */}
          <div className="flex flex-col gap-3 pb-4">
            <a
              href="tel:9543661180"
              className="flex items-center justify-center gap-2 font-body text-sm text-white/70"
            >
              <Phone size={14} className="text-[#00B4D8]" />
              954-366-1180
            </a>
            <Button
              asChild
              className="h-12 w-full rounded-full bg-[#00B4D8] font-body text-base font-semibold text-white hover:bg-[#0099BB]"
            >
              <Link to="/quote" onClick={() => setOpen(false)}>
                Get a Free Quote →
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
