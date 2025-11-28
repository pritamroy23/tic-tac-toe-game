import React from "react";
function Contact() {
  return (
    <section id="contact" className="py-16 border-t border-slate-800">

      <h2 className="font-bold text-3xl">Contact</h2>

      <p className="mt-3 text-slate-300">Email: <a className="text-indigo-400 hover:underline" href="mailto:roypritam3114@gmail.com">roypritam3114@gmail.com</a>
      </p>
      <p className="mt-3 text-slate-300">LinkedIn: <a className="text-indigo-400 hover:underline" href="https://www.linkedin.com/jobs/?mcid=7364684663652581377&src=go-pa&trk=sem-ga_campid.22935434840_asid._crid._kw._d.c_tid._n.x_mt._geo.9050502&cid=&gclsrc=aw.ds&gad_source=1&gad_campaignid=22929535599&gbraid=0AAAAADK8eFiGkR8iiV3WYpHLRqb-0m4Hc&gclid=Cj0KCQjwrJTGBhCbARIsANFBfgunCanNcnhAjseWJypObOs-ArkifuBKYLExi5UjYNhSpE6LOGm4Z5gaAhzqEALw_wcB">Pritam Roy</a>
      </p>

      <div className="mt-6 flex gap-4">
        <a  href="mailto:roypritam3114@gmail.com?subject=Hello%20Pritam&body=I%20just%20saw%20your%20portfolio..." className="rounded-lg bg-indigo-500 px-4 py-2 font-medium text-white hover:bg-indigo-600 transition-transform duration-200" >Say Hello
        </a>
        <a href="Pritam Roy_Resume.pdf" className="rounded-lg border border-slate-700 px-4 py-2 hover:bg-slate-900 transition-transform duration-200">View Resume
        </a>

      </div>

    </section>
  );
}

export default Contact;
