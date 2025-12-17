import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import summitLogo from "@/assets/summit-logo.png";

const navLinks = [
  { name: "Program", href: "/program" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/#faq" },
  { name: "Policies", href: "/policies" },
  { name: "Contact", href: "/#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // Handle hash links on same page
    if (href.startsWith("/#") && location.pathname === "/") {
      const element = document.querySelector(href.replace("/", ""));
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img 
            src={summitLogo} 
            alt="Summit Driving School" 
            className="h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.startsWith("/#") ? (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            )
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/pricing">
            <Button variant="hero" size="default">
              Enroll Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-strong border-t border-border/50 mt-3"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                link.href.startsWith("/#") ? (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavClick(link.href)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    {link.name}
                  </motion.a>
                ) : (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2 block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                )
              ))}
              <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="hero" size="lg" className="mt-4 w-full">
                  Enroll Now
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
