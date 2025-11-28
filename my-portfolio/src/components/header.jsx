import React from "react";

function Header() {
    return (
        <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-md">
            <div className ="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
               <h1 className="tracking-tight font-bold text-xl">my portfolio</h1>
               <nav className="space-x-6">
                   <a href="#home" className="hover:text-indigo-400 transition">home</a>
                   <a href="#about" className="hover:text-indigo-400 transition">about</a>
                   <a href="projects"className="hover:text-indigo-400 transition">projects</a>
                   <a href="#skills"className="hover:text-indigo-400 transition">skills</a>
                   <a href="#contact"className="hover:text-indigo-400 transition">contact</a>
                </nav>
            </div>
            
        </header>
    );
}

export default Header;