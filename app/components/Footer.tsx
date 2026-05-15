const phoneDisplay = "(505) 643-2170";
const phoneHref = "tel:15056432170";
const smsHref = "sms:15056432170";

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
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-10 sm:px-5">
      <div className="mx-auto grid max-w-7xl gap-10 text-center md:grid-cols-3 md:text-left">
        <div>
          <p className="text-xl font-black uppercase tracking-[0.18em] text-white">
            Legacy Mobile Detailing
          </p>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
            Above and Beyond
          </p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/45">
            Mobile interior and exterior car detailing serving Farmington, NM and surrounding areas.
          </p>
        </div>

        <div className="md:text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-white/45">
            Contact
          </p>
          <a
            href={phoneHref}
            className="mt-2 block text-lg font-black text-white hover:text-red-400"
          >
            {phoneDisplay}
          </a>
          <a
            href={smsHref}
            className="mt-1 block text-sm font-semibold text-white/55 hover:text-red-300"
          >
            Text to Book
          </a>
        </div>

        <div className="md:text-right">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-white/45">
            Service Area
          </p>
          <p className="mt-2 text-sm leading-6 text-white/60">
            Mobile detailing in Farmington, NM, Aztec, Bloomfield, Kirtland,
            Shiprock, Flora Vista, Fruitland, Waterflow, La Plata, and nearby
            Four Corners communities.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-end">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-red-500/20 bg-red-950/20 px-3 py-1 text-xs font-bold text-white/55"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-white/35">
        © {new Date().getFullYear()} Legacy Mobile Detailing. All rights reserved.
      </div>
    </footer>
  );
}