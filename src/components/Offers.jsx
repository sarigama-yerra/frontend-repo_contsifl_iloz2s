import React from 'react'
import { Factory, ShieldCheck, Truck, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Factory,
    title: 'Verified Manufacturers',
    desc: 'Work only with vetted factories and trusted suppliers across multiple industries.'
  },
  {
    icon: Truck,
    title: 'Reliable Distribution',
    desc: 'Connect with logistics-ready distributors to get products where they need to be, fast.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure Deals',
    desc: 'Contracts, escrow support, and compliance checks built for B2B transactions.'
  },
  {
    icon: Sparkles,
    title: 'Product Discovery',
    desc: 'Advanced search and curation to surface high-demand products and partners.'
  }
]

function Offers() {
  return (
    <section id="offers" className="relative bg-white">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-blue-50" />
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">What we offer</h2>
          <p className="mt-3 text-slate-600">Everything you need to source, verify, and distribute at scale.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offers
