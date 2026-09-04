import React, { useState } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Premium Value Market',
    tagline: 'Global E-Commerce Shopping Destination',
    domain: 'premiumvaluemarket.com',
    url: 'https://www.premiumvaluemarket.com',
    badge: 'Live Store',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    accentColor: 'from-blue-600 to-indigo-600',
    description:
      'A full-featured modern e-commerce platform offering tech accessories, apparel, and lifestyle products. Engineered with fast client-side navigation, currency selector, Clerk authentication, and responsive shopping cart workflows.',
    technologies: ['Next.js', 'React', 'TailwindCSS', 'Clerk Auth', 'Turbopack'],
  },
  {
    id: 2,
    title: 'Three Brothers Stores',
    tagline: 'Worldwide Dropshipping & Retail Hub',
    domain: 'threebrotherstores.com',
    url: 'https://www.threebrotherstores.com',
    badge: 'Live Store',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    accentColor: 'from-emerald-600 to-teal-600',
    description:
      'High-conversion online retail store connected with international dropshipping networks. Features multi-department product catalogs, global shipping calculations, automated inventory displays, and optimized checkout.',
    technologies: ['Next.js', 'React', 'TailwindCSS', 'Clerk Auth', 'REST APIs'],
  },
  {
    id: 3,
    title: 'Top Finds Spot',
    tagline: 'Trending Deals & Curated Marketplace',
    domain: 'topfindsspot.com',
    url: 'https://www.topfindsspot.com',
    badge: 'Live Store',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
    accentColor: 'from-red-600 to-rose-600',
    description:
      'Dynamic flash-deals marketplace featuring promotional banners, category sliders, multi-currency support, newsletter marketing integrations, and mobile-first storefront browsing.',
    technologies: ['Next.js', 'React', 'TailwindCSS', 'Clerk Auth', 'UI/UX'],
  },
];

const Projects = () => {
  // Track which iframe has active pointer interaction (prevents page scroll trapping)
  const [activeIframeId, setActiveIframeId] = useState(null);
  const [loadedIframes, setLoadedIframes] = useState({});

  const handleIframeLoad = (id) => {
    setLoadedIframes((prev) => ({ ...prev, [id]: true }));
  };

  const toggleInteractive = (id) => {
    setActiveIframeId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Featured Client Work
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Websites I've Engineered
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Explore live, production-grade e-commerce applications built with Next.js, modern design systems, 
            and scalable web architectures. Test them directly below or visit them live.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10">
          {projectsData.map((project) => {
            const isInteractive = activeIframeId === project.id;
            const isLoaded = loadedIframes[project.id];

            return (
              <div
                key={project.id}
                className="flex flex-col bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-gray-200/90 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 group"
              >
                {/* macOS / Browser Header Window Bar */}
                <div className="bg-gray-100/95 border-b border-gray-200 px-4 py-2.5 flex items-center justify-between gap-2 select-none">
                  {/* Traffic light window controls */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400/90 border border-red-500/30 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400/90 border border-amber-500/30 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-400/90 border border-emerald-500/30 inline-block"></span>
                  </div>

                  {/* Browser Address Bar */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 max-w-[210px] sm:max-w-[240px] bg-white border border-gray-300/80 hover:border-blue-400 px-3 py-1 rounded-md text-[11px] text-gray-600 hover:text-blue-600 flex items-center justify-between gap-1 shadow-inner truncate transition-colors"
                    title={`Visit https://${project.domain}`}
                  >
                    <div className="flex items-center gap-1.5 truncate">
                      <svg className="w-3 h-3 text-emerald-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="truncate font-medium">{project.domain}</span>
                    </div>
                    <svg className="w-3 h-3 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>

                  {/* Live Status Beacon */}
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="hidden sm:inline">Live</span>
                  </div>
                </div>

                {/* Viewport Box / Iframe Container */}
                <div className="w-full h-80 sm:h-96 relative bg-gray-50 overflow-hidden border-b border-gray-100">
                  {/* Loading Skeleton */}
                  {!isLoaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100/90 text-gray-500 z-10 p-4 text-center">
                      <svg className="animate-spin h-7 w-7 text-blue-600 mb-3" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <p className="text-xs font-semibold text-gray-700">Connecting to live site...</p>
                      <p className="text-[11px] text-gray-400 mt-0.5">{project.domain}</p>
                    </div>
                  )}

                  {/* Live Iframe */}
                  <iframe
                    src={project.url}
                    title={project.title}
                    onLoad={() => handleIframeLoad(project.id)}
                    className={`absolute inset-0 w-full h-full bg-white transition-opacity duration-500 ${
                      isLoaded ? 'opacity-100' : 'opacity-0'
                    } ${isInteractive ? 'pointer-events-auto' : 'pointer-events-none'}`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerPolicy="no-referrer"
                  />

                  {/* Overlay for Non-interactive mode (prevents scroll hijack while exploring the resume) */}
                  {!isInteractive && (
                    <div
                      onClick={() => toggleInteractive(project.id)}
                      className="absolute inset-0 bg-transparent hover:bg-black/10 transition-colors flex items-end justify-center pb-4 cursor-pointer group/overlay"
                      title="Click to interact with the live website inside this card"
                    >
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleInteractive(project.id);
                        }}
                        className="opacity-0 group-hover/overlay:opacity-100 translate-y-2 group-hover/overlay:translate-y-0 transition-all duration-200 px-4 py-2 bg-gray-900/90 hover:bg-black text-white text-xs font-medium rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1.5"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                        </svg>
                        Click to Scroll & Interact
                      </button>
                    </div>
                  )}

                  {/* Interactive Active Notice Bar */}
                  {isInteractive && (
                    <div className="absolute top-2 right-2 z-20 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => toggleInteractive(project.id)}
                        className="px-2.5 py-1 bg-gray-900/90 hover:bg-black text-white text-[11px] font-medium rounded-md shadow-md backdrop-blur-sm flex items-center gap-1 transition-colors"
                        title="Lock scrolling to resume page"
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Lock Scroll
                      </button>
                    </div>
                  )}
                </div>

                {/* Card Information */}
                <div className="p-6 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    {/* Badge & Category */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        {project.tagline}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${project.badgeColor}`}>
                        {project.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        {project.title}
                      </a>
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-md transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2.5 px-4 bg-gray-900 hover:bg-blue-600 text-white text-sm font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Visit Live Website</span>
                      <svg className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>

                    <button
                      type="button"
                      onClick={() => toggleInteractive(project.id)}
                      className={`p-2.5 rounded-xl border text-sm transition-colors ${
                        isInteractive
                          ? 'bg-blue-50 border-blue-300 text-blue-600'
                          : 'border-gray-200 hover:border-gray-300 text-gray-600 hover:bg-gray-50'
                      }`}
                      title={isInteractive ? 'Lock site interaction' : 'Enable live interaction'}
                      aria-label="Toggle interaction"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner: Ready to Collaborate */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <span className="text-blue-300 text-xs font-bold uppercase tracking-wider block mb-2">
              Ready to Launch Your Next Project?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
              Need a full-stack platform built for your business?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              From high-converting e-commerce web applications to custom enterprise software, 
              let's turn your vision into high-performance reality.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:zitolink19@gmail.com"
              className="px-6 py-3.5 bg-white text-gray-900 hover:bg-blue-50 font-bold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Get in Touch
            </a>
            <a
              href="https://wa.me/2348119234081"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-green-500 hover:bg-green-600 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;