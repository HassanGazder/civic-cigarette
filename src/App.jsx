import { useRef, useState } from 'react'

import foundersImage from './assets/founders.webp'
import gallery1 from './assets/gallery/gallery-1.webp'
import gallery2 from './assets/gallery/gallery-2.webp'
import gallery3 from './assets/gallery/gallery-3.webp'
import gallery4 from './assets/gallery/gallery-4.webp'
import gallery5 from './assets/gallery/gallery-5.webp'
import gallery6 from './assets/gallery/gallery-6.jpg'
import cigaretteReclaimer from './assets/machines/cigarette-reclaimer.webp'
import hlp180 from './assets/machines/HLP-180.webp'
import hlp200 from './assets/machines/HLP-200.webp'
import hlp225 from './assets/machines/HLP-225.webp'
import kdf1 from './assets/machines/kdf-1.webp'
import kdf2 from './assets/machines/kdf-2.webp'
import mark8Post64 from './assets/machines/mark-8-post-64.webp'
import mark8dMax15 from './assets/machines/mark-8d-max-15.webp'
import mark95LenzeServo from './assets/machines/mark-9-5-lenze-servo-drives.webp'
import mark95TrayFiller from './assets/machines/mark-9-5-max-s-tray-filler.webp'
import mark9MaxS from './assets/machines/mark-9-max-s.webp'
import molinsBoxer from './assets/machines/molins-boxer.webp'
import molinsPm5 from './assets/machines/molins-pm-5.webp'
import nakedOverWrapper from './assets/machines/naked-over-wrapper.webp'
import protos70 from './assets/machines/protos-70.webp'
import protos80er from './assets/machines/protos-80-er.webp'
import regularWrapperCp1 from './assets/machines/regular-wrapper-cp1.webp'
import sasib3000 from './assets/machines/ssasib-3000.webp'
import sasib5000 from './assets/machines/ssasib-5000.webp'
import sasibBoxer from './assets/machines/sasib-boxer.webp'
import tobaccoFeeder from './assets/machines/tobacco-feeder.webp'
import tobaccoStemFlattener from './assets/machines/tobacco-stem-flattener.webp'
import tobaccoCutters from './assets/machines/tobacco-cutters.webp'

const topLinks = ['About', 'Cigarette Making', 'Cigarette Packing', 'Filter Machines', 'Wrappers & Boxers', 'Cutter/Feeder/Reclaimer', 'Contact Us']

const browseCards = [
  'Cigarette Packing Machines',
  'Cigarette Wrapping Machines',
  'Cigarette Manufacturing Machines',
  'Used Cigarette Machinery',
]

const aboutPoints = [
  'Multi-generation family business',
  'New & reconditioned machines',
  'Full line, maker to packer',
  'Demonstration & technician training',
]

const featuredMachines = [
  {
    title: 'Molins Mark 8 Post 64',
    details: [
      ['Machine Speed', '1,800 - 2,000 cigarettes per minute'],
      ['Cigarette Maker', 'Molins MK-8 Post 64 with double colour printer'],
      ['Cigarette Circumference', '17mm - 28.3mm'],
      ['Filter + Tobacco Rod Length', '65mm - 110mm'],
      ['Filter Attachment', 'Max Multiroll'],
      ['Default Setup Size', 'Standard 84mm / 100mm / slims / super slims / nano'],
      ['Weight', '3,500 kg (approx.)'],
    ],
  },
  {
    title: 'Molins Mark 8D MAX 15',
    details: [
      ['Machine Speed', '3,000 cigarettes per minute'],
      ['Cigarette Sizes', 'King / Demi / Slims / Super Slims / Nano'],
      ['Cigarette Circumference', '17mm - 28.3mm'],
      ['Filter + Tobacco Rod Length', '65mm - 110mm'],
      ['Machine Unit', 'MK-8D Cigarette Maker, MAX-15 with 117" infeed unit'],
      ['Total Power', '17 kW'],
      ['Total Weight', '5,000 kg'],
    ],
  },
]

const whyCards = [
  {
    title: 'Machines that keep running',
    text: 'We stick to well-proven brands with easy parts availability, so your line stays productive shift after shift.',
  },
  {
    title: 'Honest condition reports',
    text: 'Every used machine is inspected, serviced and tested. You get a straight account of its condition, no surprises.',
  },
  {
    title: 'Full line support',
    text: 'From maker to packer, we help you match a machine so nothing becomes a bottleneck, and we install and support them.',
  },
  {
    title: 'Local, on-the-ground help',
    text: 'We are based right here in Pakistan. When you need parts or a technician, help is close by, not overseas.',
  },
]

const carouselCategories = [
  {
    label: 'Cigarette Making Machines',
    description: 'High-output makers, feeders and line controls for dependable cigarette production.',
    machines: [
      { name: 'Molins Mark 8 Post 64', image: mark8Post64, note: 'Classic maker platform with consistent output.' },
      { name: 'Molins Mark 8D MAX 15', image: mark8dMax15, note: 'Fast, stable production for demanding lines.' },
      { name: 'Mark 9 MAX S', image: mark9MaxS, note: 'Modern cigarette-making line for larger output.' },
      { name: 'Mark 9.5 Tray Filler', image: mark95TrayFiller, note: 'Reliable support unit for line feeding.' },
    ],
  },
  {
    label: 'Cigarette Packing Machines',
    description: 'Packing systems and support machinery for hard pack and soft pack operations.',
    machines: [
      { name: 'HLP-180 Cigarette Packing Machine', image: hlp180, note: 'Compact packing line for stable production.' },
      { name: 'HLP-200 Cigarette Packing Machine', image: hlp200, note: 'Strong packing platform for scale-up lines.' },
      { name: 'HLP-225 Cigarette Packing Machine', image: hlp225, note: 'Higher-capacity option for busy factories.' },
      { name: 'SASIB 5000 Soft Pack Machine', image: sasib5000, note: 'Soft pack solution with proven performance.' },
    ],
  },
  {
    label: 'Cigarette Filter Making Machines',
    description: 'Filter and rod preparation equipment designed for clean, continuous processing.',
    machines: [
      { name: 'KDF-1 Filter Making Machine', image: kdf1, note: 'Dependable filter-making solution for steady output.' },
      { name: 'KDF-2 Filter Making Machine', image: kdf2, note: 'Improved throughput with smooth operation.' },
      { name: 'Tobacco Feeder', image: tobaccoFeeder, note: 'Keeps material feed stable and even.' },
      { name: 'Tobacco Stem Flattener', image: tobaccoStemFlattener, note: 'Prepares stem material for filter making.' },
    ],
  },
  {
    label: 'Cigarette Box Wrapping Machines',
    description: 'Wrapping and boxing machines for paper, film and carton finishing.',
    machines: [
      { name: 'SASIB Boxer', image: sasibBoxer, note: 'Robust boxer for dependable wrapping output.' },
      { name: 'Molins Boxer', image: molinsBoxer, note: 'Classic packaging support for line finishing.' },
      { name: 'Regular Wrapper CP1', image: regularWrapperCp1, note: 'Efficient wrapper for finishing cartons.' },
      { name: 'Naked Over Wrapper', image: nakedOverWrapper, note: 'Clean over-wrap solution for presentation packs.' },
    ],
  },
]

const galleryItems = [
  { image: gallery1, span: 'lg:col-span-2 lg:row-span-2' },
  { image: gallery2, span: '' },
  { image: gallery3, span: '' },
  { image: gallery4, span: '' },
  { image: gallery5, span: '' },
  { image: gallery6, span: 'lg:col-span-2' },
]

function App() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(1)
  const carouselRef = useRef(null)

  const activeCategory = carouselCategories[activeCategoryIndex]

  const moveCarousel = (direction) => {
    const element = carouselRef.current
    if (!element) {
      return
    }

    const slideWidth = element.querySelector('[data-carousel-card]')?.getBoundingClientRect().width ?? 320
    const gap = 16
    element.scrollBy({ left: direction * (slideWidth + gap), behavior: 'smooth' })
  }

  const setCategory = (index) => {
    setActiveCategoryIndex(index)
    requestAnimationFrame(() => {
      const element = carouselRef.current
      if (element) {
        element.scrollTo({ left: 0, behavior: 'smooth' })
      }
    })
  }

  return (
    <div className="min-h-screen bg-[#f4f5f7] text-slate-600 antialiased">
      <header className="bg-[#161a22] text-[11px] font-medium tracking-[0.18em] text-white/80">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
          <p className="truncate text-[10px] uppercase sm:text-[11px]">
            Cigarette & Tobacco Machinery Manufacturers in Pakistan
          </p>
          <div className="flex items-center gap-4 whitespace-nowrap text-[10px] sm:gap-6 sm:text-[11px]">
            <span>Call: +92 301 1111184</span>
            <span className="hidden h-3 w-px bg-white/20 sm:block" />
            <span>WhatsApp</span>
            <span className="hidden h-3 w-px bg-white/20 sm:block" />
            <span>Pakistan</span>
          </div>
        </div>
      </header>

      <div className="sticky top-0 z-40 border-b border-white/70 bg-white/95 shadow-[0_10px_30px_rgba(17,24,39,0.08)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center justify-between gap-4 lg:min-w-[260px]">
            <a href="#top" className="flex items-center gap-3 text-left">
              <img src="/logo.svg" alt="Civic Tobacco Machinery" className="h-12 w-auto sm:h-14" />
            </a>
          </div>

          <nav className="overflow-hidden rounded-[999px] border border-slate-200 bg-white px-2 py-2 shadow-[0_12px_40px_rgba(15,23,42,0.10)] lg:flex-1 lg:px-4">
            <ul className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1 text-[13px] font-semibold text-slate-600 sm:gap-x-2 lg:gap-x-3">
              {topLinks.map((link, index) => (
                <li key={link} className="flex items-center">
                  <a
                    href="#top"
                    className={`rounded-full px-3 py-2 transition hover:bg-slate-100 hover:text-[#5a2db5] ${
                      index >= 1 && index <= 5 ? 'inline-flex items-center gap-1' : ''
                    }`}
                  >
                    <span>{link}</span>
                    {index >= 1 && index <= 5 ? <span className="text-[10px]">▾</span> : null}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <main id="top" className="relative overflow-hidden">
        <section className="relative min-h-[calc(84svh-112px)] overflow-hidden text-white lg:min-h-[78svh]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/hero-bg.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,15,24,0.88)_0%,rgba(11,15,24,0.78)_42%,rgba(11,15,24,0.42)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_35%,rgba(120,90,255,0.24),transparent_28%),radial-gradient(circle_at_18%_15%,rgba(255,255,255,0.08),transparent_18%)]" />

          <div className="relative mx-auto grid min-h-[calc(84svh-112px)] max-w-[1500px] items-center gap-8 px-4 py-10 sm:px-6 md:py-14 lg:min-h-[78svh] lg:grid-cols-[1.05fr_0.95fr] lg:px-8 xl:gap-12">
            <div className="max-w-[680px] pt-6 md:pt-12 lg:pt-0">
              <h1
                className="max-w-[990px] font-extrabold leading-[0.98] tracking-[-0.05em] text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
                style={{ fontSize: 'clamp(2.15rem, 3.2vh, 4rem)' }}
              >
                Looking for Cigarette & Tobacco Machinery in Pakistan?
              </h1>
              <p className="mt-6 max-w-[560px] text-base leading-8 text-slate-200 sm:text-[1.08rem]">
                You&apos;re in the right place. From the first rod to the finished carton,
                Civic Tobacco Machinery sets you up with new and reconditioned making,
                filter, packing and wrapping lines, installed, tuned and backed by the spare
                parts and service you can count on.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center rounded-[12px] bg-[#5a2db5] px-6 py-4 text-[15px] font-semibold text-white shadow-[0_16px_30px_rgba(90,45,181,0.35)] transition hover:-translate-y-0.5 hover:bg-[#6b37d6]"
                >
                  Get a Quote
                </a>
                <a
                  href="https://wa.me/923011111184"
                  className="inline-flex items-center justify-center rounded-[12px] border border-white/25 bg-white/8 px-6 py-4 text-[15px] font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.12)] backdrop-blur-sm transition hover:border-white/40 hover:bg-white/12"
                >
                  WhatsApp +92 301 1111184
                </a>
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="rounded-[28px] border border-white/12 bg-white/10 p-4 shadow-[0_20px_60px_rgba(4,9,20,0.35)] backdrop-blur-xl sm:p-6">
                <p className="px-1 text-[0.92rem] font-bold uppercase tracking-[0.08em] text-slate-300">
                  Browse by Machine Type
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {browseCards.map((card) => (
                    <a
                      key={card}
                      href="#quote"
                      className="group rounded-[18px] border border-white/10 bg-slate-900/55 px-5 py-6 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-slate-900/70"
                    >
                      <span className="block text-[1rem] font-semibold leading-6 text-white sm:text-[1.04rem]">
                        {card}
                      </span>
                      <span className="mt-2 inline-flex items-center gap-1 text-sm text-slate-300 transition group-hover:text-white">
                        View range <span className="transition group-hover:translate-x-0.5">→</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="stock" className="mx-auto max-w-[1500px] px-4 py-8 sm:px-6 lg:px-8 lg:py-12 scroll-mt-28">
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.36em] text-[#5a2db5]">
              Our Stock
            </p>
            <h2 className="mt-2 text-[clamp(1.9rem,2.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.05em] text-slate-900">
              Cigarette Machinery for Sale
            </h2>
          </div>

          <div className="mx-auto mt-8 max-w-[900px] overflow-hidden rounded-[999px] border border-slate-200 bg-white p-1 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
            <div className="flex flex-wrap justify-center gap-1">
              {carouselCategories.map((category, index) => {
                const active = index === activeCategoryIndex
                return (
                  <button
                    key={category.label}
                    type="button"
                    onClick={() => setCategory(index)}
                    className={`rounded-full px-4 py-3 text-[0.82rem] font-semibold transition sm:px-5 sm:text-[0.92rem] ${
                      active
                        ? 'bg-[#5a2db5] text-white shadow-[0_10px_18px_rgba(90,45,181,0.25)]'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {category.label}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="relative mt-8">
            <button
              type="button"
              onClick={() => moveCarousel(-1)}
              className="absolute left-0 top-1/2 z-10 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white text-2xl text-slate-700 shadow-[0_8px_24px_rgba(15,23,42,0.12)] transition hover:bg-slate-50"
              aria-label="Previous machines"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => moveCarousel(1)}
              className="absolute right-0 top-1/2 z-10 grid h-11 w-11 translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white text-2xl text-slate-700 shadow-[0_8px_24px_rgba(15,23,42,0.12)] transition hover:bg-slate-50"
              aria-label="Next machines"
            >
              →
            </button>

            <div className="mb-5 text-center">
              <p className="mx-auto max-w-[780px] text-[0.98rem] leading-7 text-slate-600 sm:text-[1.02rem]">
                {activeCategory.description}
              </p>
            </div>

            <div
              ref={carouselRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {activeCategory.machines.map((machine) => (
                <article
                  key={machine.name}
                  data-carousel-card
                  className="group w-[82vw] shrink-0 snap-start overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_10px_28px_rgba(15,23,42,0.08)] sm:w-[360px] lg:w-[330px] xl:w-[350px]"
                >
                  <div className="relative h-[220px] overflow-hidden bg-[#eef1f6]">
                    <img
                      src={machine.image}
                      alt={machine.name}
                      className="h-full w-full object-contain p-3 transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-end justify-between gap-4 p-4">
                    <div>
                      <h3 className="text-[1rem] font-bold leading-6 text-slate-900">
                        {machine.name}
                      </h3>
                      <p className="mt-1 text-[0.82rem] leading-6 text-slate-600">
                        {machine.note}
                      </p>
                    </div>
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-slate-100 text-xl text-slate-600 transition group-hover:bg-[#5a2db5] group-hover:text-white">
                      →
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-7 text-center">
              <a href="#quote" className="text-[0.98rem] font-semibold text-[#5a2db5]">
                View all {activeCategory.label} →
              </a>
            </div>
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-[1500px] px-4 py-8 sm:px-6 lg:px-8 lg:py-12 scroll-mt-28">
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.36em] text-[#5a2db5]">
              Gallery
            </p>
            <h2 className="mt-2 text-[clamp(1.9rem,2.3vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.05em] text-slate-900">
              Civic Tobacco Machinery in Pictures
            </h2>
            <p className="mx-auto mt-3 max-w-[740px] text-[0.95rem] leading-7 text-slate-600">
              Moments from international tobacco exhibitions and meetings with our partners and customers around the world.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            {galleryItems.map((item, index) => (
              <div
                key={item.image}
                className={`overflow-hidden rounded-[16px] shadow-[0_12px_30px_rgba(15,23,42,0.10)] ${item.span}`}
                style={{ minHeight: index === 0 ? '420px' : '200px' }}
              >
                <img src={item.image} alt={`Gallery image ${index + 1}`} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1500px] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
          <div className="overflow-hidden rounded-[30px] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(248,247,255,0.98)_48%,rgba(241,240,255,0.96)_100%)] shadow-[0_18px_50px_rgba(18,24,40,0.08)]">
            <div className="grid gap-8 px-5 py-7 sm:px-8 sm:py-9 lg:grid-cols-[1fr_0.94fr] lg:gap-10 lg:px-10 lg:py-10">
              <div className="max-w-[640px]">
                <p className="text-[11px] font-bold uppercase tracking-[0.36em] text-[#5a2db5]">
                  About Us
                </p>
                <h2 className="mt-3 max-w-[600px] text-[clamp(2rem,2.6vw,3.45rem)] font-extrabold leading-[1.05] tracking-[-0.05em] text-slate-900">
                  Generations of Engineering Excellence in Tobacco Machinery
                </h2>

                <p className="mt-6 max-w-[620px] text-[1.03rem] leading-8 text-slate-900/90">
                  A proud father and son business, now into its third generation, with more than
                  35 years of hands-on experience in the tobacco industry.
                </p>

                <p className="mt-5 max-w-[620px] text-[0.98rem] leading-8 text-slate-600">
                  For decades our family has worked in one field of tobacco machinery. What
                  started as a small trading operation has grown into a trusted, multi-generation
                  name that new and established cigarette companies across Pakistan rely on to
                  build and run their lines.
                </p>

                <p className="mt-5 max-w-[620px] text-[0.98rem] leading-8 text-slate-600">
                  We are specialist tobacco machinery manufacturers offering a complete, one-stop
                  solution. From making and filter machines to packers and wrappers, we help you
                  source the right equipment, see it running before you buy, and get it installed
                  and tuned on your own floor. We also provide free demonstration and training for
                  your technicians, so your team is confident with the machine from day one.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {aboutPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3 text-[0.92rem] text-slate-700">
                      <span className="mt-0.5 text-[#5a2db5]">✓</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#quote"
                  className="mt-8 inline-flex items-center rounded-[8px] bg-[#5a2db5] px-5 py-3.5 text-[15px] font-semibold !text-white transition hover:bg-[#6b37d6]"
                >
                  More About Us
                </a>
              </div>

              <div className="flex items-center justify-center lg:justify-end">
                <div className="w-full max-w-[640px] overflow-hidden rounded-[18px] bg-[#131722] shadow-[0_18px_50px_rgba(18,24,40,0.28)]">
                  <img
                    src={foundersImage}
                    alt="Founders of Civic Tobacco Machinery"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1500px] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
          <div className="flex items-end justify-between gap-4 px-2 pb-6 sm:px-0">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.36em] text-[#5a2db5]">
                In stock & popular
              </p>
              <h2 className="mt-2 text-[clamp(1.9rem,2.2vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.05em] text-slate-900">
                Featured Machines
              </h2>
            </div>
            <a href="#quote" className="hidden text-[0.98rem] font-medium text-[#5a2db5] sm:inline-flex">
              View all machines →
            </a>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {featuredMachines.map((machine) => (
              <article
                key={machine.title}
                className="overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_10px_28px_rgba(15,23,42,0.08)]"
              >
                <div className="h-[260px] border-b border-slate-100 bg-[linear-gradient(135deg,#f7f4ff_0%,#ffffff_50%,#f4f0ff_100%)]" />
                <div className="p-4 sm:p-5">
                  <h3 className="text-[1.15rem] font-bold text-slate-900">{machine.title}</h3>
                  <div className="mt-4 space-y-3">
                    {machine.details.map(([label, value]) => (
                      <div key={label} className="text-[0.78rem] leading-5 text-slate-600">
                        <div className="font-semibold text-slate-900">{label}</div>
                        <div>{value}</div>
                      </div>
                    ))}
                  </div>
                  <a href="#quote" className="mt-4 inline-flex text-[0.95rem] font-semibold text-[#5a2db5]">
                    View details →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1500px] px-4 py-6 sm:px-6 lg:px-8 lg:py-12">
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.36em] text-[#5a2db5]">
              Why Civic Tobacco Machinery
            </p>
            <h2 className="mt-2 text-[clamp(1.9rem,2.3vw,3.1rem)] font-extrabold leading-[1.05] tracking-[-0.05em] text-slate-900">
              The Right Machine, Set Up to Last
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {whyCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[18px] border border-slate-200 bg-white px-6 py-6 shadow-[0_10px_28px_rgba(15,23,42,0.06)]"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3ecff] text-2xl text-[#5a2db5]">
                  •
                </div>
                <h3 className="text-[1.08rem] font-bold text-slate-900">{card.title}</h3>
                <p className="mt-3 text-[0.93rem] leading-7 text-slate-600">{card.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <a
        href="https://wa.me/923011111184"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25d366] px-5 py-4 text-[15px] font-semibold text-white shadow-[0_18px_40px_rgba(37,211,102,0.32)] transition hover:scale-[1.02] sm:bottom-6 sm:right-6"
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-xl leading-none">◉</span>
        <span className="hidden sm:inline">+92 301 1111184</span>
        <span className="sm:hidden">WhatsApp</span>
      </a>

      <section id="quote" className="sr-only" aria-label="Quote section" />
    </div>
  )
}

export default App
