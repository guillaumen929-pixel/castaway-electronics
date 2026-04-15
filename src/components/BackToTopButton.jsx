import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTopButton({ triggerId = 'back-to-top-trigger' }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = document.getElementById(triggerId)
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [triggerId])

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#00C4B4] text-[#0D1B2A] shadow-lg shadow-[rgba(0,196,180,0.35)] transition-all duration-300 hover:bg-[#17D4C2] hover:scale-110 active:scale-95 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp size={20} strokeWidth={2.5} />
    </button>
  )
}
