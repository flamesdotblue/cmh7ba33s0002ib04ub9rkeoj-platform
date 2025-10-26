import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';

const demoMessages = [
  { id: 1, from: 'them', text: 'Welcome to Nexus. Ready to jump in?' },
  { id: 2, from: 'me', text: 'Absolutely. The interface looks slick!' },
  { id: 3, from: 'them', text: 'Blue-on-black, fluid, fast—built for flow.' },
  { id: 4, from: 'me', text: 'Let’s start a group and test reactions.' },
];

function Bubble({ from, children }) {
  const mine = from === 'me';
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className={`max-w-[78%] w-fit px-4 py-2 rounded-2xl text-sm shadow-md ${
        mine
          ? 'ml-auto bg-gradient-to-br from-blue-600 to-blue-500 text-white'
          : 'bg-white/5 text-white/90 border border-white/10'
      }`}
    >
      {children}
    </motion.div>
  );
}

export default function ChatPreview() {
  const [messages, setMessages] = useState(demoMessages.slice(0, 2));
  const [text, setText] = useState('This feels different.');
  const ref = useRef(null);

  useEffect(() => {
    const sequence = [demoMessages[2], demoMessages[3]];
    let i = 0;
    const t = setInterval(() => {
      if (i < sequence.length) {
        setMessages((m) => [...m, sequence[i]]);
        i += 1;
      } else {
        clearInterval(t);
      }
    }, 1200);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    ref.current?.scrollTo({ top: ref.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  return (
    <section id="preview" className="relative py-14">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">A fresh chat layout</h2>
          <p className="mt-2 text-white/70 max-w-xl">Focused content, subtle chrome. Layered animations make interactions feel alive while staying unobtrusive.</p>
          <ul className="mt-6 space-y-2 text-white/70 text-sm">
            <li>• Floating composer with glassy background</li>
            <li>• Adaptive bubble contrast for readability</li>
            <li>• Smooth presence and message transitions</li>
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 pointer-events-none bg-[radial-gradient(300px_200px_at_60%_0%,rgba(0,160,255,0.2),transparent)]" />
          <div className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden">
            <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-blue-400" />
                <div>
                  <div className="text-sm font-medium">Alexandra</div>
                  <div className="text-xs text-blue-300">online</div>
                </div>
              </div>
              <div className="text-xs text-white/60">Nexus Chat</div>
            </div>
            <div ref={ref} className="h-[360px] overflow-y-auto p-4 space-y-3">
              <AnimatePresence initial={false}>
                {messages.map((m) => (
                  <Bubble key={m.id} from={m.from}>{m.text}</Bubble>
                ))}
              </AnimatePresence>
            </div>
            <div className="p-3 border-t border-white/10">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/20 to-blue-400/10 blur-md" />
                <div className="relative flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                  <input
                    aria-label="Message"
                    className="flex-1 bg-transparent outline-none text-sm placeholder:text-white/40"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Message"
                  />
                  <button
                    disabled
                    className="inline-flex items-center gap-1 text-xs bg-gradient-to-r from-blue-600 to-blue-500 disabled:opacity-80 text-white px-3 py-1.5 rounded-md shadow-[0_0_15px_rgba(0,150,255,0.25)]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Send
                  </button>
                </div>
              </div>
              <p className="mt-2 text-[11px] text-white/40">Demo preview • Interactions are simulated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
