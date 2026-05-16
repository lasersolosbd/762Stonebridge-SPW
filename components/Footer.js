"use client";

import { Mountain } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1120] text-stone-400 border-t border-white/[0.05] py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Column 1: Brand & Brokerage Compliance */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Mountain size={24} className="text-[#c9a84c]" strokeWidth={1.5} />
            <div className="flex flex-col leading-none">
              <span className="text-white font-semibold text-base tracking-wide">Solomon</span>
              <span className="text-[#c9a84c] text-[9px] tracking-[0.2em] uppercase font-medium">Home Services</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed max-w-sm text-stone-400/80">
            Professional residential real estate consulting across the Colorado front range. Brokered by REAL Broker, LLC. Active licenses held in Missouri, Kansas, and Colorado.
          </p>
          <div className="mt-2">
            <img src="/real-broker-logo-light.png" alt="REAL Broker LLC" className="h-5 w-auto opacity-60 object-contain" />
          </div>
        </div>

        {/* Column 2: Quick Property Navigation Links */}
        <div>
          <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">Navigation</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li><a href="#" className="hover:text-[#c9a84c] transition-colors">Top of Page</a></li>
            <li><a href="#strategy" className="hover:text-[#c9a84c] transition-colors">Marketing Strategy</a></li>
            <li><a href="#about" className="hover:text-[#c9a84c] transition-colors">About Property</a></li>
            <li><a href="#contact" className="hover:text-[#c9a84c] transition-colors">Schedule Showing</a></li>
          </ul>
        </div>

        {/* Column 3: Main Business Engine Routing Links */}
        <div>
          <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">About Mark</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li><a href="https://www.solomonhomeservices.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a84c] transition-colors">Solomon Home Services</a></li>
            <li><a href="https://www.solomonhomeservices.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a84c] transition-colors">Meet the Team</a></li>
            <li><a href="https://www.solomonhomeservices.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a84c] transition-colors">Free Home Evaluation</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-stone-500">
        <div>
          &copy; {currentYear} Solomon Home Services. All rights reserved.
        </div>
        
        {/* Compliance and Live Site Links */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
          <a href="https://www.solomonhomeservices.com/" target="_blank" rel="noopener noreferrer" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
          <a href="https://www.solomonhomeservices.com/" target="_blank" rel="noopener noreferrer" className="hover:text-stone-300 transition-colors">Terms of Service</a>
          <span className="text-stone-600">|</span>
          <span className="flex items-center gap-1">Equal Housing Opportunity</span>
          <span className="flex items-center gap-1">REALTOR&reg;</span>
        </div>
      </div>
    </footer>
  );
}
