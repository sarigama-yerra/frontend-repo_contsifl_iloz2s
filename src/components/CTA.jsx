import React from 'react'

function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-400/30 to-cyan-300/30 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.08),rgba(255,255,255,0))]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl rounded-2xl border border-blue-200/60 bg-white/60 p-10 backdrop-blur supports-[backdrop-filter]:bg-white/40">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Join Tradinta</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">Whether you manufacture at scale or distribute across regions, become part of a trusted B2B network.</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#" className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 transition-colors">Join as Manufacturer</a>
            <a href="#" className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-700 ring-1 ring-blue-200 hover:ring-blue-300 transition-all">Join as Distributor</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
