import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Globe, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'End-to-end Security',
    desc: 'Private by default with robust encryption and safety-first design.'
  },
  {
    icon: Lock,
    title: 'Advanced Privacy',
    desc: 'Disappearing chats, locked threads, and granular control.'
  },
  {
    icon: Globe,
    title: 'Fast and Global',
    desc: 'Near-instant delivery with multi-device sync and low data usage.'
  },
  {
    icon: Sparkles,
    title: 'Fluid UI',
    desc: 'Blue × black aesthetic with graceful animations and haptics.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold">Designed for flow</h2>
          <p className="mt-2 text-white/70">A modern interface that stays out of your way—focused on speed, clarity, and control.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5"
            >
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-blue-500/15 border border-blue-400/20 p-2">
                  <f.icon className="w-5 h-5 text-blue-300" />
                </div>
                <h3 className="font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{f.desc}</p>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
