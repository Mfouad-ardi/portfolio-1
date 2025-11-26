import { Icon } from "@iconify/react";
import { mySocials } from "../constants";

const Footer = () => {
  return (
    <footer className="c-space pb-3">
      {/* Decorative Line */}
      <div className="mb-6 h-px w-full bg-linear-to-r from-transparent via-neutral-700 to-transparent"></div>
      
      <section className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
        {/* Left Side - Legal Links */}
        <div className="flex gap-2 order-2 md:order-1">
          <a href="/terms" className="hover:text-white transition-colors">
            Terms & Conditions
          </a>
          <span>|</span>
          <a href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
        </div>
        
        {/* Center - Copyright */}
        <div className="text-center text-xs text-neutral-500 order-1 md:order-2">
          <p>&copy; {new Date().getFullYear()} FOUAD. All rights reserved.</p>
        </div>
        
        {/* Right Side - Social Links */}
        <div className="flex gap-3 order-3">
          {mySocials.map((social, index) => (
            <a 
              href={social.href} 
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label={`Visit ${social.name}`}
            >
              <Icon icon={`mdi:${social.name.toLowerCase()}`} />
            </a>
          ))}
        </div>
      </section>
    </footer>
  );
};

export default Footer;