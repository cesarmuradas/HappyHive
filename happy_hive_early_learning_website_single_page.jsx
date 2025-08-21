export default function Website() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* SEO */}
      <head>
        <title>Happy Hive Early Learning</title>
        <meta name="description" content="Playful, safe, high quality childcare across Sydney, Melbourne, Brisbane, and Adelaide." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><circle cx='32' cy='32' r='32' fill='%23facc15'/><path d='M20 38c6 6 18 6 24 0' stroke='%230f172a' stroke-width='4' fill='none'/><circle cx='26' cy='28' r='3' fill='%230f172a'/><circle cx='38' cy='28' r='3' fill='%230f172a'/></svg>" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Happy Hive Early Learning",
          url: "https://happyhive.au",
          sameAs: [],
          logo: "",
          foundingDate: "2025",
          areaServed: ["Sydney", "Melbourne", "Brisbane", "Adelaide"]
        })}} />
      </head>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-yellow-300">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-slate-900" aria-hidden>
                <path fill="currentColor" d="M12 3l3 4 5 1-3 4 1 5-5-2-5 2 1-5-3-4 5-1z"/>
              </svg>
            </span>
            <span className="font-bold text-lg">Happy Hive</span>
            <span className="text-slate-500">Early Learning</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#programs" className="hover:text-yellow-600">Programs</a>
            <a href="#locations" className="hover:text-yellow-600">Locations</a>
            <a href="#about" className="hover:text-yellow-600">About</a>
            <a href="#contact" className="hover:text-yellow-600">Contact</a>
          </nav>
          <a href="#enrol" className="inline-flex items-center rounded-2xl bg-yellow-400 px-4 py-2 font-medium shadow hover:bg-yellow-300">Enrol</a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-4 pt-16 pb-12 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Happy children. Strong foundations.</h1>
            <p className="mt-4 text-slate-600">Play based learning with qualified educators. Healthy meals. Safe spaces. Centres in Sydney, Melbourne, Brisbane, and Adelaide.</p>
            <div className="mt-6 flex gap-3">
              <a href="#enrol" className="rounded-2xl bg-yellow-400 px-5 py-3 font-semibold shadow hover:bg-yellow-300">Start enrolment</a>
              <a href="#programs" className="rounded-2xl bg-slate-900 text-white px-5 py-3 font-semibold shadow hover:bg-slate-800">View programs</a>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-700">
              <li className="flex items-center gap-2"><span className="h-2 w-2 bg-yellow-400 rounded-full"/>Long day care</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 bg-yellow-400 rounded-full"/>Kindergarten and preschool</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 bg-yellow-400 rounded-full"/>NQS meeting or above</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 bg-yellow-400 rounded-full"/>Allergy aware kitchens</li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-yellow-100 shadow-inner flex items-center justify-center">
              <svg viewBox="0 0 120 120" className="h-40 w-40" role="img" aria-label="Happy Hive logo">
                <g>
                  <circle cx="60" cy="60" r="40" fill="#fde047" />
                  <path d="M40 65c12 12 36 12 48 0" stroke="#0f172a" strokeWidth="4" fill="none"/>
                  <circle cx="50" cy="50" r="4" fill="#0f172a"/>
                  <circle cx="74" cy="50" r="4" fill="#0f172a"/>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section aria-label="Highlights" className="py-10 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-6 text-center">
          {[
            {title: "Qualified educators", text: "Diploma and degree trained"},
            {title: "Family app", text: "Live updates and photos"},
            {title: "Healthy meals", text: "Nutritionist designed"},
            {title: "Extended hours", text: "Flexible for families"}
          ].map((b,i)=> (
            <div key={i} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="text-xl font-semibold">{b.title}</div>
              <div className="mt-2 text-slate-600 text-sm">{b.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Programs</h2>
          <p className="mt-2 text-slate-600">Guided by the Early Years Learning Framework.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {name: "Nursery", age: "6 weeks to 2 years", info: "Nurturing care, sensory play, and safe routines."},
              {name: "Toddlers", age: "2 to 3 years", info: "Language growth, movement, and social play."},
              {name: "Kindy and Preschool", age: "3 to 5 years", info: "School readiness, STEM, art, and music."}
            ].map((p,i)=> (
              <div key={i} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <span className="text-xs text-slate-500">{p.age}</span>
                </div>
                <p className="mt-3 text-slate-700 text-sm">{p.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Locations</h2>
          <p className="mt-2 text-slate-600">Now welcoming families in four cities. New centres launch soon.</p>
          <div className="mt-8 grid md:grid-cols-4 gap-6">
            {[
              {city: "Sydney", address: "Placeholder Street, NSW", phone: "02 0000 0000"},
              {city: "Melbourne", address: "Placeholder Street, VIC", phone: "03 0000 0000"},
              {city: "Brisbane", address: "Placeholder Street, QLD", phone: "07 0000 0000"},
              {city: "Adelaide", address: "Placeholder Street, SA", phone: "08 0000 0000"}
            ].map((l,i)=> (
              <div key={i} className="rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm">
                <div className="font-semibold">{l.city}</div>
                <div className="mt-1 text-sm text-slate-600">{l.address}</div>
                <div className="mt-2 text-sm">{l.phone}</div>
                <a href="#contact" className="mt-4 inline-block text-sm font-medium text-yellow-700 hover:underline">Book a tour</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold">About</h2>
          <p className="mt-3 text-slate-700">We support children to learn through play. Our program aligns with the National Quality Standard. We partner with families, and we share daily updates through our family app.</p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-slate-700 text-sm">
            <li className="flex items-center gap-2"><span className="h-2 w-2 bg-slate-900 rounded-full"/>Child safe policy and training for all staff</li>
            <li className="flex items-center gap-2"><span className="h-2 w-2 bg-slate-900 rounded-full"/>Regular health and safety audits</li>
            <li className="flex items-center gap-2"><span className="h-2 w-2 bg-slate-900 rounded-full"/>CCS guidance for families</li>
            <li className="flex items-center gap-2"><span className="h-2 w-2 bg-slate-900 rounded-full"/>Inclusive support for additional needs</li>
          </ul>
        </div>
      </section>

      {/* Enrol CTA */}
      <section id="enrol" className="py-16 bg-gradient-to-r from-yellow-100 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold">Start your enrolment</h2>
            <p className="mt-2 text-slate-700">Tell us your preferred centre and days. We reply within one business day.</p>
            <ul className="mt-4 text-sm text-slate-700 list-disc list-inside">
              <li>Waitlist option if places are full</li>
              <li>Fee schedule and tour times sent by email</li>
            </ul>
          </div>
          <form onSubmit={(e)=>{e.preventDefault(); alert('Thanks, we will be in touch.');}} className="rounded-2xl bg-white p-6 shadow border border-yellow-200">
            <div className="grid gap-4">
              <div>
                <label className="text-sm font-medium">Parent name</label>
                <input required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input type="email" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                </div>
                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <input type="tel" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Preferred location</label>
                <select className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                  <option>Sydney</option>
                  <option>Melbourne</option>
                  <option>Brisbane</option>
                  <option>Adelaide</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Child age</label>
                <select className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                  <option>Under 2</option>
                  <option>2 to 3</option>
                  <option>3 to 5</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea rows={3} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Tell us days and start date" />
              </div>
              <button type="submit" className="rounded-2xl bg-slate-900 text-white px-5 py-3 font-semibold shadow hover:bg-slate-800">Submit</button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold">Contact</h2>
            <p className="mt-2 text-slate-700">Email admin@happyhive.au or call 1300 000 000. We reply fast on business days.</p>
            <div className="mt-6 rounded-2xl border border-slate-200 p-6">
              <div className="font-semibold">Head office</div>
              <div className="text-sm text-slate-600">Placeholder Road, Sydney NSW</div>
              <div className="text-sm">Hours 7,00 to 18,00 Monday to Friday</div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200">
            <iframe title="Map" className="w-full h-80" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.openstreetmap.org/export/embed.html?bbox=150.9%2C-34.1%2C151.3%2C-33.7&layer=mapnik"></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-bold">Happy Hive Early Learning</div>
            <p className="mt-2 text-slate-600">ABN 00 000 000 000</p>
          </div>
          <div>
            <div className="font-semibold">Quick links</div>
            <ul className="mt-2 space-y-2">
              <li><a href="#programs" className="hover:underline">Programs</a></li>
              <li><a href="#locations" className="hover:underline">Locations</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Newsletter</div>
            <form onSubmit={(e)=>{e.preventDefault(); alert('Thanks for subscribing.');}} className="mt-2 flex gap-2">
              <input type="email" placeholder="Email" className="flex-1 rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              <button className="rounded-xl bg-yellow-400 px-4 py-2 font-medium hover:bg-yellow-300">Join</button>
            </form>
          </div>
        </div>
        <div className="text-center text-xs text-slate-500 pb-8">© {new Date().getFullYear()} Happy Hive Early Learning. All rights reserved.</div>
      </footer>
    </div>
  );
}
