import { motion } from 'framer-motion'

const logos = ['Aurora', 'Helix', 'Vertex', 'Nebula', 'Corelytics', 'Atlas']

export default function Showcase() {
  return (
    <section id="insights" className="relative py-20">
      <div className="absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" style={{backgroundImage:'radial-gradient(circle at 20% 50%, rgba(16,185,129,0.15), transparent 25%), radial-gradient(circle at 80% 50%, rgba(16,185,129,0.15), transparent 25%)'}} />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <motion.div initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="rounded-2xl border border-emerald-400/20 bg-slate-900/50 p-8 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-white">Operational confidence</h3>
            <p className="mt-2 text-slate-300">Gain complete visibility across identities, workloads, and data flows. Streamline incident response with automated runbooks and enrichments.</p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
              {['99.99% uptime','<2s MTTR','SOC2 + ISO27001','24/7 monitoring'].map((k)=> (
                <div key={k} className="rounded-xl border border-white/10 bg-white/5 px-4 py-6 text-white">
                  <div className="text-lg font-semibold">{k}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.1, duration:0.6}} className="rounded-2xl border border-emerald-400/20 bg-slate-900/50 p-8 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-white">Trusted by innovators</h3>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {logos.map((l, i) => (
                <div key={l} className="rounded-xl border border-white/10 bg-white/5 px-4 py-8 text-center text-white/80 font-semibold">
                  <motion.span initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:i*0.05}}>{l}</motion.span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
