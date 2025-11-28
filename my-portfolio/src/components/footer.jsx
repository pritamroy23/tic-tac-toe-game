import React from 'react';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-800 text-center text-sm text-slate-400">
      © {new Date().getFullYear()} Pritam Roy • Built with React & Tailwind
    </footer>
  );
}

