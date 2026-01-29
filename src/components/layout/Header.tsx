import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.webp";

const navItems = [
  { label: "Αρχική", path: "/" },
  { label: "Σχετικά", path: "/about" },
  { label: "Υπηρεσίες", path: "/services" },
  { label: "Παθήσεις", path: "/conditions" },
  { label: "Βιογραφικό", path: "/cv" },
  { label: "Κριτικές", path: "/reviews" },
  { label: "Επικοινωνία", path: "/booking" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img 
              src={logo} 
              alt="Χαϊδάρογλου Logo" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
              loading="eager"
            />
            <div className="hidden lg:block">
              <p
                className={`font-heading font-semibold text-sm leading-tight ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                Δημήτριος Χαϊδάρογλου
              </p>
              <p
                className={`text-xs ${
                  isScrolled ? "text-muted-foreground" : "text-primary-foreground/80"
                }`}
              >
                Αγγειοχειρουργός
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  location.pathname === item.path
                    ? isScrolled
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary-foreground/20 text-primary-foreground"
                    : isScrolled
                    ? "text-foreground hover:bg-accent"
                    : "text-primary-foreground/90 hover:bg-primary-foreground/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+306978480523" className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className={
                  isScrolled
                    ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    : "border-primary-foreground text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20"
                }
              >
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">+30 697 848 0523</span>
              </Button>
            </a>
            <Link to="/booking">
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Κλείστε Ραντεβού
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border"
          >
            <nav className="section-container py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-accent"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
                <a href="tel:+306978480523">
                  <Button variant="outline" className="w-full justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    +30 697 848 0523
                  </Button>
                </a>
                <Link to="/booking">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    Κλείστε Ραντεβού
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
