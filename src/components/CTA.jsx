import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-6">
        <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-slate-900/60 to-slate-900/40 p-10 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(16,185,129,0.35)]">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-3xl md:text-4xl font-semibold text-white">Ready to elevate your security posture?</h3>
            <p className="mt-3 text-slate-300">Schedule a personalized walkthrough with a security architect. Well map your environment and design a phased rollout that fits your team.</p>
          </div>
          <form className="mx-auto mt-8 max-w-xl grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input required type="email" placeholder="Work email" className="w-full rounded-xl border border-white/15 bg-white/5 pl-10 pr-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-medium text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition-colors">
              Request demo <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
