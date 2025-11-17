import React from 'react'

const products = [
  { id: 1, name: 'Industrial Bearings', price: 'From $4.20/unit', image: 'https://images.unsplash.com/photo-1758873263527-ca53b938fbd4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbmR1c3RyaWFsJTIwQmVhcmluZ3N8ZW58MHwwfHx8MTc2MzQwMTE4Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 2, name: 'PVC Pipes', price: 'From $1.05/m', image: 'https://images.unsplash.com/photo-1758873263527-ca53b938fbd4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbmR1c3RyaWFsJTIwQmVhcmluZ3N8ZW58MHwwfHx8MTc2MzQwMTE4Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 3, name: 'Solar Panels', price: 'From $62/panel', image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, name: 'Packaging Boxes', price: 'From $0.12/box', image: 'https://images.unsplash.com/photo-1758873263527-ca53b938fbd4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbmR1c3RyaWFsJTIwQmVhcmluZ3N8ZW58MHwwfHx8MTc2MzQwMTE4Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
]

function FeaturedProducts() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Featured products</h2>
            <p className="mt-2 text-slate-600">Curated items trending across our network.</p>
          </div>
          <a href="#" className="text-sm font-semibold text-blue-700 hover:text-blue-800">Browse all</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div key={p.id} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-slate-900">{p.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
