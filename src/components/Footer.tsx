import { Link } from "react-router-dom";
import summitLogo from "@/assets/summit-logo.png";

const footerLinks = {
  program: [
    { name: "Program Overview", href: "/program" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/#faq" },
  ],
  legal: [
    { name: "School Policies", href: "/policies" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
  contact: [
    { name: "Contact Us", href: "/#contact" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img 
                src={summitLogo} 
                alt="Summit Driving School" 
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Maine state-approved driver education for teens and adults.
            </p>
            <p className="text-muted-foreground text-sm">
              Building safe, confident drivers.
            </p>
          </div>

          {/* Program */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Program</h4>
            <ul className="space-y-3">
              {footerLinks.program.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm mt-4">
              Mon-Fri: 8AM-7PM<br />
              Sat-Sun: 9AM-5PM
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Summit Driving School. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Serving Maine
          </p>
        </div>
      </div>
    </footer>
  );
};
