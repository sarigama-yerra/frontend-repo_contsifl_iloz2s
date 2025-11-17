import React from 'react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-blue-400/30 to-cyan-300/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-indigo-400/30 to-purple-300/30 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.6),rgba(255,255,255,0))]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 text-center sm:py-32">
        <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-200">
          B2B Marketplace
        </span>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Welcome to Tradinta
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
          Connect with verified manufacturers and distributors. Discover products, build relationships, and grow your supply chain with confidence.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#offers" className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 transition-colors">
            Explore what we offer
          </a>
          <a href="#cta" className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-700 ring-1 ring-blue-200 hover:ring-blue-300 transition-all">
            Join Tradinta
          </a>
        </div>
      </div>

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
    </section>
  )
}

export default Hero
