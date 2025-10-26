import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center pt-12 md:pt-16">
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Nexus
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300">Futuristic private messaging</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="mt-5 text-base md:text-lg text-white/70"
          >
            A sleek, blue-on-black messenger that blends the speed of Telegram with the simplicity of WhatsApp—reimagined with a modern, animated interface.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#download"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium shadow-[0_0_30px_rgba(0,150,255,0.35)] transition-all"
            >
              Download for Desktop
            </a>
            <a
              href="#preview"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/10 text-white/90 hover:text-white hover:border-white/20 transition-colors"
            >
              Live Preview
            </a>
          </motion.div>
        </div>
        <div className="relative h-[420px] sm:h-[520px] md:h-[560px]">
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(400px_200px_at_70%_20%,rgba(0,170,255,0.25),transparent)]" />
        </div>
      </div>
    </section>
  );
}
