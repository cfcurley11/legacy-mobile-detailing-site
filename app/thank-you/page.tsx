import Link from "next/link";

export const metadata = {
  title: "Request Received | Legacy Mobile Detailing",
  description:
    "Thank you for contacting Legacy Mobile Detailing. Your detail request has been received.",
};

const phoneDisplay = "(505) 643-2170";
const phoneHref = "tel:15056432170";
const smsHref = "sms:15056432170";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-black px-5 py-20 text-white">
      <section className="mx-auto flex min-h-[80vh] max-w-4xl items-center justify-center text-center">
        <div className="rounded-[2rem] border border-red-500/30 bg-zinc-950 p-8 shadow-[0_0_60px_rgba(220,38,38,0.22)] md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.32em] text-red-400">
            Request Received
          </p>

          <h1 className="mt-5 text-4xl font-black uppercase tracking-tight md:text-6xl">
            Thank You
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Your detail request has been sent to Legacy Mobile Detailing. They will follow up to confirm your vehicle details, service package, pricing, location, and availability.
          </p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black p-6">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-white/45">
              Need faster confirmation?
            </p>

            <a
              href={phoneHref}
              className="mt-3 block text-3xl font-black text-white hover:text-red-400"
            >
              {phoneDisplay}
            </a>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={phoneHref}
                className="rounded-full bg-red-600 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-red-500"
              >
                Call Now
              </a>

              <a
                href={smsHref}
                className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:border-red-400 hover:text-red-300"
              >
                Text to Book
              </a>
            </div>
          </div>

          <Link
            href="/"
            className="mt-8 inline-block text-sm font-black uppercase tracking-[0.18em] text-red-400 hover:text-red-300"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}