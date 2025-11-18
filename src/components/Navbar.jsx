import { useState } from 'react'
import { Menu, ShieldCheck, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Services', href: '#services' },
    { label: 'Insights', href: '#insights' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-slate-900/60 backdrop-blur-xl shadow-[0_0_0_1px_rgba(16,185,129,0.08),0_10px_30px_-10px_rgba(16,185,129,0.25)]">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="inline-flex items-center gap-2">
              <span className="relative grid place-items-center rounded-xl p-2 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-inner">
                <ShieldCheck className="h-6 w-6" />
                <span className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
              </span>
              <span className="text-white font-semibold tracking-tight text-lg">Sentinel Labs</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-slate-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/90 hover:bg-emerald-500 text-white px-4 py-2 transition-colors shadow-lg shadow-emerald-500/20">
                Get a demo
              </a>
            </nav>

            <button onClick={() => setOpen(true)} className="md:hidden text-white/90">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sheet */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-slate-900 border-l border-white/10 shadow-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="h-6 w-6 text-emerald-400" />
                <span className="text-white font-semibold">Sentinel Labs</span>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/80">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-slate-300 hover:text-white transition-colors" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="mt-2 inline-flex items-center gap-2 rounded-lg bg-emerald-500/90 hover:bg-emerald-500 text-white px-4 py-2 transition-colors shadow-lg shadow-emerald-500/20">
                Get a demo
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
