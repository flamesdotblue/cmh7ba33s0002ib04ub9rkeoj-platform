import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ChatPreview from './components/ChatPreview';

export default function App() {
  return (
    <div className="min-h-screen bg-[#07080c] text-white selection:bg-blue-500/30 selection:text-white">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(0,110,255,0.2),transparent),radial-gradient(900px_400px_at_100%_0%,rgba(0,170,255,0.12),transparent)]" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <ChatPreview />
      </main>
      <footer className="relative z-10 border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Nexus. All rights reserved.</p>
          <div className="text-sm text-white/60">Built with a modern blue × black aesthetic.</div>
        </div>
      </footer>
    </div>
  );
}
