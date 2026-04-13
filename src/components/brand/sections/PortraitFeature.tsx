import Link from 'next/link'
import Image from 'next/image'

export function PortraitFeature() {
  return (
    <section className="w-full h-[80vh] flex flex-col lg:flex-row group">
      
      {/* Left 60%: Portrait */}
      <div className="w-full lg:w-[60%] h-[50vh] lg:h-full relative overflow-hidden bg-brand-black text-brand-white">
        <Image 
          src="/images/jokate-black-suit.png" 
          alt="Jokate Mwegelo" 
          fill 
          className="object-cover object-top opacity-90 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent z-10" />
        <div className="absolute inset-0 flex items-end p-8 md:p-16 z-20">
          <div>
            <p className="font-sans text-label text-brand-gold uppercase tracking-widest mb-2">
              Leadership · Focus
            </p>
            <p className="font-display text-display-sm text-brand-white">
              Jokate Mwegelo
            </p>
          </div>
        </div>
      </div>
      
      {/* Right 40%: Black Background Context */}
      <div className="w-full lg:w-[40%] h-auto lg:h-full bg-brand-black text-brand-white flex flex-col justify-center p-8 md:p-16 lg:px-24">
         <span className="font-sans text-label text-brand-gold uppercase tracking-widest mb-6 block">
           Forbes 30 Under 30 · ZIFF Best Actress · UN Speaker
         </span>
         
         <h2 className="font-display text-display-lg text-brand-white mb-8">
           A leader forged in three regions.
         </h2>
         
         <p className="font-sans text-body lg:text-body-lg text-brand-white/70 mb-12">
           Her governance record in Kisarawe, Temeke, and Korogwe proves that structural efficiency and deep community resonance can coexist. She built schools where there were none, and empowered thousands.
         </p>
         
         <Link href="/about" className="font-sans text-label text-brand-gold uppercase tracking-widest group-hover:text-brand-white transition-colors duration-300 flex items-center">
            Read her story <span className="text-[14px] leading-[0] ml-2">→</span>
         </Link>
      </div>

    </section>
  )
}
