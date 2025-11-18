import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] isolate overflow-hidden">
      {/* Background grid + glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.25),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" style={{backgroundImage:'linear-gradient(transparent 0.9px, rgba(16,185,129,0.15) 1px), linear-gradient(90deg, transparent 0.9px, rgba(16,185,129,0.15) 1px)', backgroundSize:'50px 50px'}} />
      </div>

      {/* Spline Scene */}
      <div className="relative mx-auto max-w-7xl px-6 pt-28 md:pt-36">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <motion.span initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.1, duration:0.6}} className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-emerald-300 text-xs">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" /> Verified Security
            </motion.span>
            <motion.h1 initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{delay:0.2, duration:0.6}} className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-white">
              Enterprise Cyber Defense, reimagined
            </motion.h1>
            <motion.p initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{delay:0.3, duration:0.6}} className="mt-5 text-lg md:text-xl text-slate-300">
              Prevent, detect and respond with AI-driven analytics, zero-trust architecture and autonomous remediation across your cloud and endpoints.
            </motion.p>
            <motion.div initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{delay:0.4, duration:0.6}} className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center rounded-xl bg-emerald-500 text-white px-5 py-3 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition-colors">Request a demo</a>
              <a href="#solutions" className="inline-flex items-center rounded-xl border border-emerald-400/30 bg-white/5 text-white px-5 py-3 hover:bg-white/10 transition-colors">Explore platform</a>
            </motion.div>

            {/* Trust bar */}
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.6}} className="mt-10 flex items-center gap-6 text-slate-400 text-sm">
              <span>Trusted by teams at</span>
              <div className="flex items-center gap-6 opacity-80">
                <span className="font-semibold text-white/90">Aurora</span>
                <span className="font-semibold text-white/90">Corelytics</span>
                <span className="font-semibold text-white/90">Vertex</span>
                <span className="font-semibold text-white/90">Nebula</span>
              </div>
            </motion.div>
          </div>

          <div className="relative h-[420px] md:h-[520px] lg:h-[620px] rounded-[2rem] border border-emerald-400/20 bg-slate-900/40 backdrop-blur-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03),0_20px_60px_-20px_rgba(16,185,129,0.35)]">
            <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-white/10" />
          </div>
        </div>
      </div>

      {/* Gradient veil */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  )
}
