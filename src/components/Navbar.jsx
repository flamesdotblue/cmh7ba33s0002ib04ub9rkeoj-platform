import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Shield, Zap } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-md blur-md bg-blue-500/40" />
            <div className="relative rounded-md bg-gradient-to-br from-blue-500 to-blue-300 p-1.5">
              <MessageSquare className="w-5 h-5 text-black" />
            </div>
          </div>
          <span className="text-lg font-semibold tracking-wide">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200">Nexus</span>
          </span>
        </motion.a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#preview" className="hover:text-white transition-colors">Preview</a>
          <a href="#download" className="hover:text-white transition-colors">Download</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex px-3 py-1.5 rounded-md border border-white/10 hover:border-white/20 text-white/90 hover:text-white transition-colors">Sign in</button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-[0_0_20px_rgba(0,150,255,0.35)] transition-all">
            <Zap className="w-4 h-4" />
            Get Nexus
          </button>
        </div>
      </div>
    </header>
  );
}
