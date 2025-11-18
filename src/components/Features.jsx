import { motion } from 'framer-motion'
import { Shield, Cpu, Radar, Fingerprint, Lock, KeyRound } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Zero-Trust by Design',
    desc: 'Continuous verification with adaptive policy enforcement and micro-segmentation at scale.',
  },
  {
    icon: Radar,
    title: 'XDR + Autonomous Response',
    desc: 'Correlate signals across endpoints, identity, cloud, and network—respond in seconds.',
  },
  {
    icon: Cpu,
    title: 'AI Threat Intelligence',
    desc: 'LLM-assisted investigations and predictive detections powered by behavioral analytics.',
  },
  {
    icon: Fingerprint,
    title: 'Identity-first Security',
    desc: 'Enforce least privilege using continuous authentication and anomaly-based access.',
  },
  {
    icon: Lock,
    title: 'Posture & Compliance',
    desc: 'Automated benchmarks, real-time drift alerts, and one-click audit reporting.',
  },
  {
    icon: KeyRound,
    title: 'Secrets Governance',
    desc: 'End-to-end key management with hardware-backed attestation and rotation.',
  },
]

export default function Features() {
  return (
    <section id="solutions" className="relative py-24 md:py-32">
      {/* subtle bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
            Secure every layer of your stack
          </motion.h2>
          <motion.p initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.1, duration:0.6}} className="mt-4 text-slate-300 text-lg">
            A unified platform to prevent, detect, and respond—built for scale, designed for teams.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.05, duration:0.55}} className="group relative rounded-2xl border border-emerald-400/20 bg-slate-900/50 p-6 backdrop-blur-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03),0_10px_40px_-15px_rgba(16,185,129,0.25)]">
              <div className="flex items-start gap-4">
                <div className="relative grid place-items-center rounded-xl p-3 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-inner">
                  <f.icon className="h-6 w-6" />
                  <span className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{f.title}</h3>
                  <p className="mt-1 text-slate-300">{f.desc}</p>
                </div>
              </div>
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-emerald-500/0 via-emerald-500/10 to-emerald-500/0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
