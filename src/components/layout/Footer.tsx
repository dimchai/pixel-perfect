import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-heading font-bold text-xl">
                  ΔΧ
                </span>
              </div>
              <div>
                <p className="font-heading font-semibold text-lg">
                  Dr. Δημήτριος Χαϊδάρογλου
                </p>
                <p className="text-primary-foreground/80 text-sm">
                  Ειδικευμένος Αγγειοχειρουργός
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              10+ χρόνια εμπειρίας στη σύγχρονη αγγειοχειρουργική και ενδαγγειακές τεχνικές.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Σύνδεσμοι</h3>
            <ul className="space-y-2">
              {[
                { label: "Αρχική", path: "/" },
                { label: "Σχετικά με Εμάς", path: "/about" },
                { label: "Υπηρεσίες", path: "/services" },
                { label: "Ιατρικές Παθήσεις", path: "/conditions" },
                { label: "Κριτικές Ασθενών", path: "/reviews" },
                { label: "Κλείστε Ραντεβού", path: "/booking" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Επικοινωνία</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+306978480523"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +30 697 848 0523
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@aggeio.eu"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  info@aggeio.eu
                </a>
              </li>
              <li>
                <a
                  href="https://www.doctoranytime.gr/doctorcrmv2/Profile/Redesign?doctorAdminId=0&doctorid=75147"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Doctoranytime Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Clinics */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Ιατρεία</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.app.goo.gl/aSKSotJm89WoPdSe9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-primary-foreground">Χαλάνδρι</strong>
                    <br />
                    Σωκράτους 16, 15232
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/JHkQuWb6CWjq4PdZ9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-primary-foreground">Πειραιάς</strong>
                    <br />
                    Λ. Εθνικής Αντιστάσεως 91, 18534
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Dr. Δημήτριος Χαϊδάρογλου. Με επιφύλαξη παντός δικαιώματος.
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/privacy"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
              >
                Πολιτική Απορρήτου
              </Link>
              <Link
                to="/terms"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
              >
                Όροι Χρήσης
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
