import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-white/10 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 select-none">
          <span className="text-showcase-accent1 text-3xl font-bold">Vista</span>
          <span className="text-white text-xl">Showcase</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "text-lg transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-showcase-accent1 after:origin-bottom-right after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100 hover:after:origin-bottom-left",
                  {
                    "text-white after:scale-x-100": isActive,
                    "text-showcase-muted": !isActive,
                  }
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button className="bg-showcase-accent1 hover:bg-showcase-accent1/90 button-glow transition-all">
            View Demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-[60px] bg-showcase-dark z-40 md:hidden">
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    cn("text-2xl font-medium", {
                      "text-showcase-accent1": isActive,
                      "text-showcase-text": !isActive,
                    })
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Button
                className="mt-4 bg-showcase-accent1 hover:bg-showcase-accent1/90 button-glow transition-all"
                size="lg"
              >
                View Demo
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
