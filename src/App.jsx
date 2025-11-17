import React from 'react'
import Hero from './components/Hero'
import Offers from './components/Offers'
import FeaturedProducts from './components/FeaturedProducts'
import FeaturedManufacturers from './components/FeaturedManufacturers'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top nav */}
      <header className="sticky top-0 z-30 border-b border-slate-200/60 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2 font-extrabold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white">T</span>
            <span className="text-lg">Tradinta</span>
          </a>
          <nav className="hidden gap-6 text-sm font-medium text-slate-700 sm:flex">
            <a href="#offers" className="hover:text-slate-900">Offerings</a>
            <a href="#products" className="hover:text-slate-900">Products</a>
            <a href="#manufacturers" className="hover:text-slate-900">Manufacturers</a>
          </nav>
          <a href="#cta" className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-slate-800">Join</a>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <div id="offers"><Offers /></div>
        <div id="products"><FeaturedProducts /></div>
        <div id="manufacturers"><FeaturedManufacturers /></div>
        <CTA />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/60 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-600">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p>© {new Date().getFullYear()} Tradinta. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-slate-900">Privacy</a>
              <a href="#" className="hover:text-slate-900">Terms</a>
              <a href="/test" className="hover:text-slate-900">System Check</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
