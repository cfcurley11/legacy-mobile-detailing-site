import Image from "next/image";

const phoneHref = "tel:15056432170";
const smsHref = "sms:15056432170";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-red-500/20 bg-black/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-5">
        <a
          href="#home"
          className="flex min-w-0 items-center gap-3"
          aria-label="Legacy Mobile Detailing home"
        >
          <div className="relative h-12 w-20 shrink-0 sm:h-14 sm:w-24">
            <Image
              src="/images/logo.png"
              alt="Legacy Mobile Detailing logo"
              fill
              sizes="96px"
              className="object-contain drop-shadow-[0_0_18px_rgba(220,38,38,0.45)]"
              priority
            />
          </div>

          <div className="hidden min-w-0 sm:block">
            <div className="truncate text-base font-black uppercase tracking-[0.18em] text-white lg:text-lg">
              Legacy <span className="text-red-500">Mobile</span>
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
              Above and Beyond
            </div>
          </div>
        </a>

        <nav
          className="hidden items-center gap-7 text-sm font-semibold text-white/75 lg:flex"
          aria-label="Main navigation"
        >
          <a className="hover:text-red-400" href="#packages">
            Packages
          </a>
          <a className="hover:text-red-400" href="#showcase">
            Services
          </a>
          <a className="hover:text-red-400" href="#addons">
            Add-Ons
          </a>
          <a className="hover:text-red-400" href="#area">
            Service Area
          </a>
          <a className="hover:text-red-400" href="#contact">
            Contact
          </a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={phoneHref}
            className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-wide text-white transition hover:border-red-400 hover:text-red-300"
          >
            Call
          </a>

          <a
            href="#contact"
            className="rounded-full bg-red-600 px-4 py-2 text-sm font-black uppercase tracking-wide text-white shadow-[0_0_25px_rgba(220,38,38,0.45)] transition hover:bg-red-500"
          >
            Request Detail
          </a>
        </div>

        <details className="group relative md:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-3 rounded-full border border-red-500/30 bg-black/70 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white shadow-[0_0_20px_rgba(220,38,38,0.18)] transition hover:border-red-400 hover:bg-red-950/30 marker:hidden [&::-webkit-details-marker]:hidden">
            <span>Menu</span>

            <span className="relative flex h-4 w-5 flex-col items-center justify-center">
              <span className="block h-[2px] w-5 rounded-full bg-red-400 transition duration-300 group-open:translate-y-[6px] group-open:rotate-45" />
              <span className="mt-[4px] block h-[2px] w-5 rounded-full bg-red-400 transition duration-300 group-open:opacity-0" />
              <span className="mt-[4px] block h-[2px] w-5 rounded-full bg-red-400 transition duration-300 group-open:-translate-y-[6px] group-open:-rotate-45" />
            </span>
          </summary>

          <div className="absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl border border-red-500/25 bg-black/95 p-3 shadow-[0_0_35px_rgba(220,38,38,0.28)] backdrop-blur-xl">
            <a
              className="block rounded-xl px-4 py-3 text-sm font-bold text-white/80 hover:bg-red-600/20 hover:text-white"
              href="#packages"
            >
              Packages
            </a>
            <a
              className="block rounded-xl px-4 py-3 text-sm font-bold text-white/80 hover:bg-red-600/20 hover:text-white"
              href="#showcase"
            >
              Services
            </a>
            <a
              className="block rounded-xl px-4 py-3 text-sm font-bold text-white/80 hover:bg-red-600/20 hover:text-white"
              href="#addons"
            >
              Add-Ons
            </a>
            <a
              className="block rounded-xl px-4 py-3 text-sm font-bold text-white/80 hover:bg-red-600/20 hover:text-white"
              href="#area"
            >
              Service Area
            </a>
            <a
              className="block rounded-xl px-4 py-3 text-sm font-bold text-white/80 hover:bg-red-600/20 hover:text-white"
              href="#contact"
            >
              Contact
            </a>

            <div className="my-2 h-px bg-white/10" />

            <a
              className="block rounded-xl bg-red-600 px-4 py-3 text-center text-sm font-black uppercase tracking-wide text-white hover:bg-red-500"
              href="#contact"
            >
              Request Detail
            </a>

            <a
              className="mt-2 block rounded-xl border border-white/15 px-4 py-3 text-center text-sm font-black uppercase tracking-wide text-white/85 hover:border-red-400 hover:text-red-300"
              href={phoneHref}
            >
              Call Now
            </a>

            <a
              className="mt-2 block rounded-xl border border-white/15 px-4 py-3 text-center text-sm font-black uppercase tracking-wide text-white/85 hover:border-red-400 hover:text-red-300"
              href={smsHref}
            >
              Text to Book
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}