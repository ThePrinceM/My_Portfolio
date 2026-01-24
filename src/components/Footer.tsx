import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="text-xl font-bold gradient-text">
            P<span className="text-primary">M</span>
          </a>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center">
            Designed and Developed by <span className="text-primary font-medium">Prince Maurya</span>
          </p>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
