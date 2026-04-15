import { cn } from '@/lib/utils'

export default function Eyebrow({ children, tone = 'teal', className = '' }) {
  const toneClass = tone === 'gold'
    ? 'text-[#D4AE45]'
    : tone === 'muted'
      ? 'text-white/55'
      : 'text-[#00C4B4]'
  return (
    <div
      className={cn(
        'font-mono text-[11px] font-medium uppercase tracking-[0.18em]',
        toneClass,
        className,
      )}
    >
      {children}
    </div>
  )
}
