
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-showcase-medium border-t border-white/10">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-showcase-accent1 text-2xl font-bold">Vista</span>
              <span className="text-white text-xl">Showcase</span>
            </Link>
            <p className="text-showcase-muted mt-4">
              Experience products in stunning 3D within our interactive virtual showroom. Proudly serving customers across India from our Hyderabad headquarters.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-showcase-muted hover:text-showcase-accent1 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-showcase-muted hover:text-showcase-accent1 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-showcase-muted hover:text-showcase-accent1 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-showcase-muted hover:text-showcase-accent1 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Products", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                    className="text-showcase-muted hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-6">Resources</h3>
            <ul className="space-y-3">
              {["FAQ", "Support", "Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-showcase-muted hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-6">Contact</h3>
            <p className="text-showcase-muted">Vista Showcase Tech Hub</p>
            <p className="text-showcase-muted">HITEC City, Hyderabad</p>
            <p className="text-showcase-muted">Telangana 500081, India</p>
            <p className="text-showcase-muted">info@vistashowcase.in</p>
            <p className="text-showcase-muted">+91 40 2345 6789</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-showcase-muted">
          <p>&copy; {new Date().getFullYear()} Vista Showcase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
