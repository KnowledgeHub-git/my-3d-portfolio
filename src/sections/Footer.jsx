const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-10 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 mt-20">
      {/* Copyright text */}
      <div className="text-white-600 flex gap-2 font-mono text-sm">
        <p>© 2026 Mohamad Bouzi.</p>
        <p className="sm:inline hidden">|</p>
        <p className="sm:inline hidden">All rights reserved.</p>
      </div>

      {/* Social profile mapping anchors */}
      <div className="flex gap-3">
        {/* GitHub link */}
        <a 
          href="https://github.com/biwaro" 
          target="_blank" 
          rel="noreferrer"
          className="w-10 h-10 rounded-full bg-black-200 border border-black-300 flex justify-center items-center hover:border-white-600 transition-colors shadow-lg"
          aria-label="GitHub Profile"
        >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2 object-contain filter invert opacity-80" />
        </a>

        {/* LinkedIn link */}
        <a 
          href="https://linkedin.com/in/mohamad-b-43b924a3" 
          target="_blank" 
          rel="noreferrer"
          className="w-10 h-10 rounded-full bg-black-200 border border-black-300 flex justify-center items-center hover:border-white-600 transition-colors shadow-lg"
          aria-label="LinkedIn Profile"
        >
          {/* Custom inline SVG for LinkedIn to match the look perfectly */}
          <svg className="w-5 h-5 fill-white-600 group-hover:fill-white text-white-600 opacity-80" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9H7.12v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z"/>
          </svg>
        </a>
      </div>

      {/* Footer shortcut tags */}
      <div className="text-white-600 font-mono text-sm flex gap-4">
        <p className="hover:text-white transition-colors cursor-pointer">Terms</p>
        <p className="hover:text-white transition-colors cursor-pointer">Security</p>
      </div>
    </footer>
  );
};

export default Footer;
