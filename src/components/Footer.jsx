import React from "react";
import { animateScroll as scroll } from "react-scroll";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 600,
      smooth: "easeInOutQuad",
    });
  };

  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-800/80 relative overflow-hidden">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Brand & Bio (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://i.postimg.cc/7LbjzNyh/20220627-131245-0000-removebg-preview.png"
                alt="Zitolink Logo"
                className="h-10 w-auto object-contain brightness-110"
              />
              <div>
                <h3 className="text-xl font-extrabold text-white tracking-tight">Kizito Okeke</h3>
                <p className="text-xs font-semibold text-blue-400">Full-Stack Software Engineer</p>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed pr-4 max-w-sm">
              Crafting high-performance web applications, scalable e-commerce systems, 
              and intuitive digital solutions. Proficient in React, Next.js, TailwindCSS, C# / ASP.NET, Python, and modern cloud stacks.
            </p>

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for new projects & roles
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/rikiz03"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-700 hover:bg-gray-800 text-gray-300 hover:text-white flex items-center justify-center transition-all shadow-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com/in/zitolink?trk=contact-info"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-500/50 hover:bg-blue-600/10 text-gray-300 hover:text-blue-400 flex items-center justify-center transition-all shadow-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href="https://twitter.com/kizito234"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
                className="w-9 h-9 rounded-xl bg-gray-900 border border-gray-800 hover:border-sky-500/50 hover:bg-sky-600/10 text-gray-300 hover:text-sky-400 flex items-center justify-center transition-all shadow-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="https://wa.me/2348119234081"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-9 h-9 rounded-xl bg-gray-900 border border-gray-800 hover:border-emerald-500/50 hover:bg-emerald-600/10 text-gray-300 hover:text-emerald-400 flex items-center justify-center transition-all shadow-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors duration-150">
                  About Me
                </a>
              </li>
              <li>
                <a href="#abilities" className="hover:text-white transition-colors duration-150">
                  Skills & Abilities
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors duration-150">
                  Work Experience
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-white transition-colors duration-150">
                  Education
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors duration-150">
                  Featured Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Live Web Projects */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Live Stores</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://www.premiumvaluemarket.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors duration-150 flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform"></span>
                  Premium Value Market
                </a>
              </li>
              <li>
                <a
                  href="https://www.threebrotherstores.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors duration-150 flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform"></span>
                  Three Brothers Stores
                </a>
              </li>
              <li>
                <a
                  href="https://www.topfindsspot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose-400 transition-colors duration-150 flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 group-hover:scale-125 transition-transform"></span>
                  Top Finds Spot
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:zitolink19@gmail.com"
                  className="hover:text-white transition-colors duration-150 flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="truncate">zitolink19@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2348119234081"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-150 flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+234 811 923 4081</span>
                </a>
              </li>
              <li className="text-xs text-gray-500 pt-1">
                Remote Worldwide / Hybrid
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Divider */}
        <div className="border-t border-gray-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {currentYear} Kizito Okeke (Zitolink). All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="hidden md:inline text-gray-600">
              Engineered with React & TailwindCSS
            </span>

            {/* Back to Top button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors duration-150 cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
