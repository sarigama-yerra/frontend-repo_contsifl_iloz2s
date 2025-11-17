import React from 'react'

const manufacturers = [
  { id: 1, name: 'Axiom Industries', category: 'Precision Components', logo: 'https://dummyimage.com/120x120/1e293b/e2e8f0&text=AX' },
  { id: 2, name: 'SolarPeak', category: 'Renewable Energy', logo: 'https://dummyimage.com/120x120/0f172a/e2e8f0&text=SP' },
  { id: 3, name: 'FlowTech', category: 'Pipes & Fittings', logo: 'https://dummyimage.com/120x120/020617/e2e8f0&text=FT' },
  { id: 4, name: 'PackRight', category: 'Packaging', logo: 'https://dummyimage.com/120x120/111827/e2e8f0&text=PR' },
]

function FeaturedManufacturers() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Featured manufacturers</h2>
            <p className="mt-2 text-slate-600">Meet reliable producers with quality certifications.</p>
          </div>
          <a href="#" className="text-sm font-semibold text-blue-700 hover:text-blue-800">See partners</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {manufacturers.map((m) => (
            <div key={m.id} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center gap-4">
                <img src={m.logo} alt={m.name} className="h-12 w-12 rounded-lg object-cover" />
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{m.name}</h3>
                  <p className="text-sm text-slate-600">{m.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedManufacturers
