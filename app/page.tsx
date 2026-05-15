import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

const siteUrl = "https://www.legacy-mobile-detailing.com";
const businessName = "Legacy Mobile Detailing";
const phoneDisplay = "(505) 643-2170";
const phoneHref = "tel:15056432170";
const smsHref = "sms:15056432170";
const phoneRaw = "+15056432170";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Legacy Mobile Detailing | Mobile Car Detailing in Farmington, NM",
  description:
    "Legacy Mobile Detailing provides mobile interior and exterior car detailing in Farmington, NM and surrounding areas. Call or text to book interior packages, exterior washes, shampoo service, stain removal, pet hair removal, and add-on detailing services.",
  keywords: [
    "mobile car detailing Farmington NM",
    "mobile detailing Farmington NM",
    "car detailing Farmington NM",
    "interior car detailing Farmington",
    "exterior car wash Farmington NM",
    "mobile auto detailing Farmington",
    "vehicle shampoo service Farmington NM",
    "pet hair removal car detailing Farmington",
    "seat shampoo Farmington NM",
    "car shampoo Farmington NM",
    "Legacy Mobile Detailing",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Legacy Mobile Detailing | Mobile Car Detailing in Farmington, NM",
    description:
      "Professional mobile detailing that comes to your home, workplace, or driveway in Farmington, NM and surrounding areas.",
    url: siteUrl,
    siteName: businessName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1600,
        height: 900,
        alt: "Legacy Mobile Detailing mobile car detailing in Farmington, NM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legacy Mobile Detailing | Farmington, NM",
    description:
      "Mobile interior and exterior detailing serving Farmington, NM and surrounding areas.",
    images: ["/images/hero-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const packages = [
  {
    name: "Basic Interior",
    price: "$79",
    label: "Quick Interior Refresh",
    bestFor: "Best for routine upkeep and a clean interior reset.",
    items: ["Vacuum interior", "Wipe down surfaces", "Clean windows", "Floor mats cleaned"],
  },
  {
    name: "Full Interior",
    price: "$129",
    label: "Deep Interior Cleaning",
    bestFor: "Best for daily drivers, family vehicles, and work vehicles.",
    items: [
      "Everything in Basic",
      "Shampoo seats & carpets",
      "Steam clean upholstery",
      "Deep clean vents, cracks & crevices",
      "Door jamb wipe down",
    ],
  },
  {
    name: "Premium Interior",
    price: "$179",
    label: "Most Complete Interior Package",
    bestFor: "Best for vehicles needing a deeper interior restoration experience.",
    featured: true,
    items: [
      "Everything in Full Interior",
      "Odor removal",
      "Pet hair removal",
      "Deep stain extraction",
      "Interior protection",
    ],
  },
  {
    name: "Exterior Wash",
    price: "$69",
    label: "Exterior Hand Wash",
    bestFor: "Best for a clean, sharp exterior finish without the drive-through wash look.",
    items: ["Foam pre-soak + hand wash", "Wheels & tires deep cleaned", "Tire shine", "Streak-free dry"],
  },
];

const addOns = [
  {
    title: "Interior Add-Ons",
    items: [
      ["Pet Hair Removal (Deep)", "$25–$50"],
      ["Heavy Stain Treatment", "$30 per area"],
      ["Seat + Carpet Shampoo", "$60–$80"],
      ["Odor Removal Treatment", "$40–$60"],
    ],
  },
  {
    title: "Exterior Add-Ons",
    items: [
      ["Engine Bay Detail", "$40–$60"],
      ["Bug & Tar Removal", "$25–$50"],
    ],
  },
  {
    title: "Protection & Wheels",
    items: [
      ["6 Month Paint Sealant", "$40–$60"],
      ["Tire Coating", "$20"],
      ["Wheel Barrel Detail", "$25–$40"],
    ],
  },
];

const serviceAreas = [
  "Farmington",
  "Aztec",
  "Bloomfield",
  "Kirtland",
  "Shiprock",
  "Flora Vista",
  "Fruitland",
  "Waterflow",
  "La Plata",
  "Four Corners Area",
];

const heroFeatures = [
  {
    title: "Mobile Service",
    icon: "M12 2C8.7 2 6 4.7 6 8v8c0 3.3 2.7 6 6 6s6-2.7 6-6V8c0-3.3-2.7-6-6-6Zm-2 3h4m-4 14h4",
  },
  {
    title: "Interior Packages",
    icon: "M4 13h16l-1.5-5h-13L4 13Zm1 0v5h14v-5M8 18v2m8-2v2M7 8l1-3h8l1 3",
  },
  {
    title: "Exterior Wash",
    icon: "M12 3s5 5.4 5 9a5 5 0 0 1-10 0c0-3.6 5-9 5-9Zm-3 10a3 3 0 0 0 6 0",
  },
  {
    title: "Add-Ons",
    icon: "M12 2v20M2 12h20M5 5l14 14M19 5 5 19",
  },
  {
    title: "Farmington Based",
    icon: "M12 21s7-5.2 7-11a7 7 0 0 0-14 0c0 5.8 7 11 7 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  },
];

const showcaseCards = [
  {
    title: "Interior Reset",
    subtitle: "Deep interior detailing",
    text: "Seats, carpets, vents, cracks, crevices, and everyday buildup cleaned with detail-focused care.",
    image: "/images/interior-reset.png",
  },
  {
    title: "Wheel Detail",
    subtitle: "Wheels, tires, and finish",
    text: "Focused wheel, tire, barrel, and finish cleaning for a sharper, cleaner vehicle appearance.",
    image: "/images/wheel-detail.png",
  },
  {
    title: "Exterior Wash",
    subtitle: "Foam pre-soak and hand wash",
    text: "Foam pre-soak, hand wash, tire shine, and streak-free dry with a clean premium finish.",
    image: "/images/exterior-wash.png",
  },
];

const faqs = [
  {
    question: "Does Legacy Mobile Detailing come to me?",
    answer:
      "Yes. Legacy Mobile Detailing is a mobile detailing service based in Farmington, NM that comes to your home, workplace, or driveway depending on schedule and service location.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Legacy Mobile Detailing serves Farmington, NM and surrounding areas including Aztec, Bloomfield, Kirtland, Shiprock, and the Four Corners area.",
  },
  {
    question: "Do final prices vary?",
    answer:
      "Yes. Final pricing may vary depending on vehicle size, vehicle condition, selected add-ons, stains, pet hair, and service location.",
  },
  {
    question: "Can I book by text?",
    answer:
      "Yes. Customers can call or text Legacy Mobile Detailing at (505) 643-2170 to request a detail appointment.",
  },
];

const delayClasses = ["delay-0", "delay-100", "delay-200", "delay-300", "delay-[400ms]", "delay-[500ms]"];

const formspreeEndpoint = "https://formspree.io/f/mpqbgjkg";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoWash",
  name: businessName,
  url: siteUrl,
  telephone: phoneRaw,
  image: `${siteUrl}/images/logo.png`,
  logo: `${siteUrl}/images/logo.png`,
  description:
    "Mobile interior and exterior car detailing service based in Farmington, NM and serving surrounding areas.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Farmington",
    addressRegion: "NM",
    addressCountry: "US",
  },
  areaServed: serviceAreas.map((area) => ({
    "@type": "Place",
    name: area,
  })),
  priceRange: "$69-$179+",
  makesOffer: packages.map((pkg) => ({
    "@type": "Offer",
    name: pkg.name,
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
      price: pkg.price.replace("$", ""),
      description: `Starting at ${pkg.price}`,
    },
    itemOffered: {
      "@type": "Service",
      name: pkg.name,
      description: pkg.bestFor,
    },
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function LegacyMobileDetailingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black pb-20 text-white md:pb-0">
      <Script
        id="legacy-local-business-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="legacy-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Static Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Legacy Mobile Detailing mobile car detailing background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.38),transparent_42%),linear-gradient(180deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.92)_100%)]" />
        <div className="absolute inset-0 opacity-25 bg-[linear-gradient(115deg,transparent_0%,transparent_38%,rgba(239,68,68,0.55)_39%,transparent_41%,transparent_60%,rgba(239,68,68,0.4)_61%,transparent_63%)]" />
      </div>

      <div className="relative z-10">
        <Header />

        {/* Hero */}
        <section id="home" className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 md:pb-28 md:pt-40">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <div>
                <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-red-400 sm:text-sm sm:tracking-[0.32em]">
                  Farmington, NM Mobile Auto Detailing
                </p>
                <h1 className="max-w-4xl text-[2.65rem] font-black uppercase leading-[0.95] tracking-tight text-white min-[420px]:text-5xl sm:text-6xl md:text-7xl">
                  Mobile Car Detailing in Farmington, NM
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg md:text-xl">
                  Legacy Mobile Detailing brings professional interior and exterior detailing directly to your home, workplace, or driveway in Farmington and surrounding areas.
                </p>

<div className="mt-8 flex w-full max-w-full flex-col gap-4 sm:w-auto sm:flex-row">
  <a
    href="#contact"
    className="w-full rounded-full bg-red-600 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_0_35px_rgba(220,38,38,0.5)] transition hover:bg-red-500 sm:w-auto"
  >
    Request a Detail
  </a>

  <a
    href={smsHref}
    className="w-full rounded-full border border-white/20 bg-white/10 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-white backdrop-blur transition hover:border-red-400 hover:text-red-300 sm:w-auto"
  >
    Send Text
  </a>
</div>

                <div className="mt-8 grid max-w-full grid-cols-1 gap-3 text-sm font-semibold text-white/80 min-[420px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
                  {heroFeatures.map((item, index) => (
                    <Reveal key={item.title} delay={delayClasses[index] ?? "delay-0"}>
                      <div className="group relative min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-red-500/60 hover:bg-red-950/30 hover:shadow-[0_0_30px_rgba(220,38,38,0.22)] md:min-h-[130px]">
                        <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.28),transparent_55%)]" />
                        <div className="relative flex h-full items-center gap-3 md:block">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-500/35 bg-red-600/15 text-red-400 shadow-[0_0_20px_rgba(220,38,38,0.2)] transition group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                              <path d={item.icon} />
                            </svg>
                          </div>
                          <p className="min-w-0 text-sm font-black leading-5 text-white/85 transition group-hover:text-white md:mt-4">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay="delay-200">
              <div className="rounded-[2rem] border border-red-500/30 bg-black/65 p-5 shadow-[0_0_60px_rgba(220,38,38,0.22)] backdrop-blur-md sm:p-6">
                <div className="rounded-[1.5rem] border border-white/10 bg-black/70 p-6 text-center sm:p-8">
                  <div className="relative mx-auto mb-2 h-44 w-64 sm:h-56 sm:w-80">
                    <Image
                      src="/images/logo.png"
                      alt="Legacy Mobile Detailing logo"
                      fill
                      sizes="320px"
                      className="scale-[1.28] object-contain drop-shadow-[0_0_35px_rgba(220,38,38,0.65)]"
                      priority
                    />
                  </div>
                  <div className="mx-auto my-3 h-px w-32 bg-red-500" />
                  <p className="text-xl font-black uppercase tracking-[0.18em] text-red-400 sm:text-2xl">Above and Beyond</p>
                  <p className="mt-5 text-white/65">Call or text to book</p>
                  <a href={phoneHref} className="mt-2 block text-2xl font-black text-white hover:text-red-400 sm:text-3xl">
                    {phoneDisplay}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Contact Strip */}
        <section className="border-y border-red-500/30 bg-red-700/95 px-4 py-6 backdrop-blur sm:px-5">
          <Reveal>
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-white/75">Call or text to book</p>
                <p className="text-2xl font-black text-white md:text-3xl">Mobile detailing delivered to your driveway.</p>
              </div>
              <a href={phoneHref} className="rounded-full bg-black px-7 py-4 text-xl font-black text-white transition hover:bg-zinc-900">
                {phoneDisplay}
              </a>
            </div>
          </Reveal>
        </section>

        {/* Packages */}
        <section id="packages" className="bg-black/88 px-4 py-20 backdrop-blur-sm sm:px-5 md:py-28">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-black uppercase tracking-[0.32em] text-red-400">Detail Packages</p>
                <h2 className="mt-4 text-4xl font-black uppercase tracking-tight md:text-6xl">Choose Your Clean</h2>
                <p className="mt-5 text-lg leading-8 text-white/65">
                  Choose the level of clean your vehicle needs. Final pricing may vary depending on vehicle size and condition.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {packages.map((pkg, index) => (
                <Reveal key={pkg.name} delay={delayClasses[index] ?? "delay-0"}>
                  <article
                    className={`relative flex h-full flex-col rounded-[1.75rem] border p-6 transition hover:-translate-y-1 ${
                      pkg.featured
                        ? "border-red-500 bg-red-950/30 shadow-[0_0_45px_rgba(220,38,38,0.22)]"
                        : "border-white/10 bg-zinc-950"
                    }`}
                  >
                    {pkg.featured && (
                      <div className="mb-5 inline-flex w-fit rounded-full bg-red-600 px-3 py-1 text-xs font-black uppercase tracking-wider text-white">
                        Most Complete
                      </div>
                    )}
                    <p className="text-sm font-black uppercase tracking-[0.22em] text-red-400">{pkg.label}</p>
                    <h3 className="mt-4 text-3xl font-black text-white">{pkg.name}</h3>
                    <p className="mt-3 text-white/55">Starting at</p>
                    <p className="text-5xl font-black text-red-500">{pkg.price}</p>
                    <ul className="mt-6 space-y-3 text-white/75">
                      {pkg.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-1 text-red-500">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 flex-1 text-sm leading-6 text-white/55">{pkg.bestFor}</p>
<a
  href="#contact"
  className="mt-7 block rounded-full border border-red-500/50 px-5 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-red-600"
>
  Request This Package
</a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Showcase Images */}
        <section id="showcase" className="border-y border-white/10 bg-zinc-950/92 px-4 py-20 backdrop-blur-sm sm:px-5 md:py-28">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-black uppercase tracking-[0.32em] text-red-400">Mobile Detailing Services</p>
                <h2 className="mt-4 text-4xl font-black uppercase tracking-tight md:text-6xl">Built Around The Details</h2>
                <p className="mt-5 text-lg leading-8 text-white/65">
                  From deep interior resets to wheel detailing and exterior hand washing, Legacy Mobile Detailing helps vehicles look clean, sharp, and refreshed.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {showcaseCards.map((card, index) => (
                <Reveal key={card.title} delay={delayClasses[index] ?? "delay-0"}>
                  <article className="group h-full overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-[0_0_45px_rgba(220,38,38,0.12)] transition hover:-translate-y-1 hover:border-red-500/50">
                    <div className="relative h-[420px] overflow-hidden sm:h-[500px] lg:h-[560px]">
                      <Image
                        src={card.image}
                        alt={`${card.title} by Legacy Mobile Detailing in Farmington, NM`}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-400">{card.subtitle}</p>
                        <h3 className="mt-2 text-3xl font-black uppercase text-white">{card.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-white/72">{card.text}</p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section id="addons" className="border-b border-white/10 bg-black/88 px-4 py-20 backdrop-blur-sm sm:px-5 md:py-28">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-black uppercase tracking-[0.32em] text-red-400">Upgrade Your Detail</p>
                <h2 className="mt-4 text-4xl font-black uppercase tracking-tight md:text-6xl">Add-On Services</h2>
                <p className="mt-5 text-lg leading-8 text-white/65">Go above and beyond with targeted upgrades for interior, exterior, protection, and wheels.</p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {addOns.map((group, index) => (
                <Reveal key={group.title} delay={delayClasses[index] ?? "delay-0"}>
                  <article className="h-full rounded-[1.75rem] border border-white/10 bg-black p-7">
                    <h3 className="border-b border-red-500/40 pb-4 text-2xl font-black uppercase text-white">{group.title}</h3>
                    <div className="mt-6 space-y-5">
                      {group.items.map(([name, price]) => (
                        <div key={name} className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                          <p className="font-semibold text-white/80">{name}</p>
                          <p className="whitespace-nowrap text-xl font-black text-red-500">{price}</p>
                        </div>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <p className="mt-8 text-center text-sm italic text-white/50">Final price may vary depending on vehicle size and condition.</p>
            </Reveal>
          </div>
        </section>

        {/* Why */}
        <section className="bg-black/88 px-4 py-20 backdrop-blur-sm sm:px-5 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <Reveal>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.32em] text-red-400">Why Legacy</p>
                <h2 className="mt-4 text-4xl font-black uppercase tracking-tight md:text-6xl">Mobile Convenience. Professional Results.</h2>
                <p className="mt-6 text-lg leading-8 text-white/65">
                  Legacy Mobile Detailing brings professional cleaning, convenience, and attention to detail directly to your location. Whether your vehicle needs a quick refresh or a full interior reset, the goal is simple: deliver clean results that go above and beyond.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "We Come To You",
                "Interior Deep Cleaning",
                "Exterior Hand Wash",
                "Add-On Upgrades",
                "Local Farmington Service",
                "Call/Text Booking",
              ].map((item, index) => (
                <Reveal key={item} delay={delayClasses[index] ?? "delay-0"}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                    <div className="mb-4 h-1 w-12 rounded-full bg-red-500" />
                    <h3 className="text-xl font-black text-white">{item}</h3>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-black/95 px-4 py-20 backdrop-blur-sm sm:px-5 md:py-28">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-black uppercase tracking-[0.32em] text-red-400">Simple Booking</p>
                <h2 className="mt-4 text-4xl font-black uppercase tracking-tight md:text-6xl">How It Works</h2>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-4">
              {[
                ["01", "Call or text to choose your package."],
                ["02", "Schedule a time and location."],
                ["03", "Legacy arrives with mobile detailing service."],
                ["04", "Enjoy a cleaner, refreshed vehicle."],
              ].map(([step, text], index) => (
                <Reveal key={step} delay={delayClasses[index] ?? "delay-0"}>
                  <div className="h-full rounded-[1.5rem] border border-white/10 bg-zinc-950 p-6">
                    <p className="text-4xl font-black text-red-500">{step}</p>
                    <p className="mt-5 text-lg font-bold text-white/80">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section id="area" className="bg-black/88 px-4 py-20 backdrop-blur-sm sm:px-5 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.32em] text-red-400">Service Area</p>
                <h2 className="mt-4 text-4xl font-black uppercase tracking-tight md:text-6xl">Serving Farmington & Surrounding Areas</h2>
                <p className="mt-6 text-lg leading-8 text-white/65">
                  Based in Farmington, NM, Legacy Mobile Detailing provides mobile car detailing service throughout the surrounding area.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {serviceAreas.map((area, index) => (
                <Reveal key={area} delay={delayClasses[index] ?? "delay-0"}>
                  <div className="group h-full rounded-2xl border border-red-500/20 bg-red-950/20 p-6 transition duration-300 hover:-translate-y-1 hover:border-red-500/60 hover:bg-red-900/25 hover:shadow-[0_0_30px_rgba(220,38,38,0.18)]">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-red-500/35 bg-black/60 text-red-400 shadow-[0_0_20px_rgba(220,38,38,0.22)] transition group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                          <path d="M12 21s7-5.2 7-11a7 7 0 0 0-14 0c0 5.8 7 11 7 11Z" />
                          <circle cx="12" cy="10" r="2.5" />
                        </svg>
                      </div>

                      <div>
                        <p className="text-xl font-black text-white">{area}</p>
                        <p className="mt-1 text-sm text-white/45">Mobile Service Area</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-y border-white/10 bg-zinc-950/92 px-4 py-20 backdrop-blur-sm sm:px-5 md:py-28">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-black uppercase tracking-[0.32em] text-red-400">Questions</p>
                <h2 className="mt-4 text-4xl font-black uppercase tracking-tight md:text-6xl">Mobile Detailing FAQ</h2>
                <p className="mt-5 text-lg leading-8 text-white/65">
                  Quick answers for customers looking for mobile detailing in Farmington, NM.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 space-y-4">
              {faqs.map((faq, index) => (
                <Reveal key={faq.question} delay={delayClasses[index] ?? "delay-0"}>
                  <details className="group rounded-2xl border border-white/10 bg-black/70 p-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-black text-white marker:hidden">
                      {faq.question}
                      <span className="text-red-400 transition group-open:rotate-180">⌄</span>
                    </summary>
                    <p className="mt-4 leading-7 text-white/65">{faq.answer}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="relative overflow-hidden bg-black/80 px-4 py-20 backdrop-blur-sm sm:px-5 md:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.32),transparent_45%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.32em] text-red-400">Book Your Detail</p>
                <h2 className="mt-4 text-4xl font-black uppercase tracking-tight md:text-6xl">
                  Ready To Refresh Your Ride?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/65">
                  Send Legacy Mobile Detailing your vehicle information and preferred service. They will follow up to confirm pricing, availability, and location.
                </p>

                <div className="mt-8 rounded-[1.5rem] border border-red-500/25 bg-black/70 p-6">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-white/50">Prefer direct booking?</p>
                  <a href={phoneHref} className="mt-3 block text-3xl font-black text-white hover:text-red-400">
                    {phoneDisplay}
                  </a>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <a href={phoneHref} className="rounded-full bg-red-600 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-red-500">
                      Call Now
                    </a>
                    <a href={smsHref} className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:border-red-400 hover:text-red-300">
                      Text to Book
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay="delay-200">
              <form
                action={formspreeEndpoint}
                method="POST"
                className="rounded-[2rem] border border-white/10 bg-zinc-950/95 p-6 shadow-[0_0_45px_rgba(220,38,38,0.18)] md:p-8"
              >
                <input type="hidden" name="_subject" value="New Legacy Mobile Detailing Website Lead" />
                <input type="hidden" name="business" value="Legacy Mobile Detailing" />

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-white/75">Name</span>
                    <input required name="name" type="text" placeholder="Your name" className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-red-500" />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-white/75">Phone</span>
                    <input required name="phone" type="tel" placeholder="Your phone number" className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-red-500" />
                  </label>
                </div>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-white/75">Email</span>
                    <input name="email" type="email" placeholder="Optional email" className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-red-500" />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-white/75">Vehicle Type</span>
                    <input name="vehicle" type="text" placeholder="Car, truck, SUV, etc." className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-red-500" />
                  </label>
                </div>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-white/75">Package</span>
                    <select required name="package" defaultValue="" className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-red-500">
                      <option value="" disabled>Select a package</option>
                      <option>Basic Interior - Starting at $79</option>
                      <option>Full Interior - Starting at $129</option>
                      <option>Premium Interior - Starting at $179</option>
                      <option>Exterior Wash - Starting at $69</option>
                      <option>Not sure yet</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-white/75">Preferred Date</span>
                    <input name="preferred_date" type="text" placeholder="Example: Friday afternoon" className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-red-500" />
                  </label>
                </div>

                <label className="mt-5 block">
                  <span className="mb-2 block text-sm font-bold text-white/75">Location / Area</span>
                  <input name="location" type="text" placeholder="Farmington, Aztec, Bloomfield, etc." className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-red-500" />
                </label>

                <label className="mt-5 block">
                  <span className="mb-2 block text-sm font-bold text-white/75">Message</span>
                  <textarea name="message" rows={5} placeholder="Tell us about the vehicle condition, stains, pet hair, add-ons, or special requests." className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-red-500" />
                </label>

                <button type="submit" className="mt-6 w-full rounded-full bg-red-600 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_0_30px_rgba(220,38,38,0.35)] transition hover:bg-red-500">
                  Send Detail Request
                </button>

                <p className="mt-4 text-center text-xs leading-5 text-white/45">
                  Final pricing may vary by vehicle size, condition, selected add-ons, and service location.
                </p>
              </form>
            </Reveal>
          </div>
        </section>

        <Footer />
      </div>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-red-500/30 bg-black/95 p-3 shadow-[0_-10px_35px_rgba(220,38,38,0.2)] backdrop-blur-xl md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
<a
  href="#contact"
  className="rounded-full bg-red-600 px-4 py-3 text-center text-xs font-black uppercase tracking-[0.16em] text-white shadow-[0_0_24px_rgba(220,38,38,0.45)]"
>
  Request Detail
</a>

<a
  href={phoneHref}
  className="rounded-full border border-white/15 bg-white/10 px-4 py-3 text-center text-xs font-black uppercase tracking-[0.16em] text-white"
>
  Call Now
</a>
        </div>
      </div>
    </main>
  );
}
