import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/events", label: "Events" },
  { to: "/corporate", label: "Corporate" },
  { to: "/community", label: "Community" },
  { to: "/government", label: "Government" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const moreLinks = [
  { to: "/media", label: "Media" },
  { to: "/careers", label: "Careers" },
  { to: "/blog", label: "Blog" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-6 py-3">
        <Link to="/" className="flex items-center gap-2 font-heading text-2xl font-bold tracking-wider shrink-0" style={{ perspective: "1000px" }}>
          <img src="/logo.png" alt="Force Sports United Logo" className="h-8 w-8 rounded-full object-cover shadow-sm animate-coin border-2 border-[#F2C94C]" />
          <span className="bg-gradient-to-b from-[#F2C94C] via-[#F2D675] to-[#B8902E] bg-clip-text text-transparent">FORCE</span> SPORTS UNITED
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-heading text-xs tracking-widest uppercase transition-colors hover:text-primary ${
                isActive(link.to) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* More dropdown */}
          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              onBlur={() => setTimeout(() => setMoreOpen(false), 200)}
              className="font-heading text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              More <ChevronDown size={12} />
            </button>
            {moreOpen && (
              <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg py-2 min-w-[180px] shadow-xl">
                {moreLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/quote"
            className="bg-gradient-brand px-5 py-2.5 rounded font-heading text-xs tracking-wider uppercase text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-b border-border px-6 pb-6 space-y-3 max-h-[80vh] overflow-y-auto">
          {[...navLinks, ...moreLinks].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block font-heading text-sm tracking-widest uppercase transition-colors hover:text-primary ${
                isActive(link.to) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/quote"
            onClick={() => setOpen(false)}
            className="block text-center bg-gradient-brand px-5 py-3 rounded font-heading text-sm tracking-wider uppercase text-primary-foreground mt-4"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
