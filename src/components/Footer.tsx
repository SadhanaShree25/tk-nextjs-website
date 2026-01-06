import { Heart, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-cream border-t border-border/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="techKoodaram Logo" width={230} height={50} className="w-[230px] h-auto" />
          </Link>

          {/* Links */}
          <div className="flex gap-4">
            <a href="https://www.instagram.com/techkoodaram/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/company/techkoodaram/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart size={14} className="text-accent fill-accent" />
            <span>by techKoodaram team</span>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-8 pt-8 border-t border-border/30">
          <p className="text-xs text-muted-foreground/70">
            © {currentYear} techKoodaram. A grassroots tech community from Sivakasi to Tenkasi. Open, inclusive, and always learning.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
