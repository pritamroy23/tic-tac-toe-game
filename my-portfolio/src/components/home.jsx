import React from "react";
function Home () {
    return(
        <section id="home" className="py-20">
            <p  className ="text-sm uppercase tracking-widest text-indigo-400" >
              Welcome!
            </p>
            <h1 className="mt-2 text-4xl md:text-6xl fot-extrabold leading-tight">
               I’m <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
                Pritam Roy</span></h1>
            <p className="m-4 max-w-2xl text-slate-300">
              I’m a web developer and AI enthusiast. I enjoy building projects in web development and AI
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center rounded-full bg-indigo-500 px-4 py-2 font-medium text-white shadow hover:bg-indigo-600 transition">
                  View Project
                </a>
                <a href="#contact" className="inline-flex items-center rounded-full border border-slate-700 px-4 py-2 text-slate-100 hover:bg-slate-900 transition">
                  Contact
                </a>
            </div>
        </section>
    );
}
export default Home;