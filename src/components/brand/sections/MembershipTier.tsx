import { cn } from '@/lib/utils'

interface TierProps {
  name: string
  price: string
  desc: string
  benefits: string[]
  cta: string
  highlighted?: boolean
}

export function MembershipTier({ name, price, desc, benefits, cta, highlighted = false }: TierProps) {
  return (
    <div className={cn(
      "flex flex-col p-8 border h-full",
      highlighted ? "border-brand-accent bg-brand-surface" : "border-brand-border bg-brand-white"
    )}>
      <h3 className="text-[24px] font-display text-brand-black mb-2">{name}</h3>
      <div className="text-body-sm font-sans text-brand-muted mb-6 h-12">{desc}</div>
      <div className="text-display-md font-display text-brand-black mb-8">{price}</div>
      
      <ul className="flex flex-col gap-4 mb-12 flex-grow">
        {benefits.map((b, i) => (
          <li key={i} className="flex items-start gap-3">
             <span className="text-brand-accent text-[12px] pt-1">✦</span>
             <span className="text-body-sm font-sans text-brand-black">{b}</span>
          </li>
        ))}
      </ul>
      
      <button className={cn(
        "w-full py-4 text-[12px] uppercase tracking-[0.1em] font-sans transition-colors mt-auto",
        highlighted 
          ? "bg-brand-black text-brand-white hover:bg-brand-plum" 
          : "border border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-white"
      )}>
        {cta}
      </button>
    </div>
  )
}
