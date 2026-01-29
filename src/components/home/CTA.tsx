import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Έτοιμοι για Αλλαγή;
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Κλείστε το ραντεβού σας σήμερα και ξεκινήστε το ταξίδι σας προς 
            καλύτερη υγεία. Είμαστε εδώ για εσάς.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-base px-8"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Κλείστε Ραντεβού
              </Button>
            </Link>
            <a
              href="https://www.doctoranytime.gr/doctorcrmv2/Profile/Redesign?doctorAdminId=0&doctorid=75147"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Doctoranytime
              </Button>
            </a>
          </div>

          {/* Trust Elements */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-primary-foreground/70 text-sm">
            <span>✓ Χωρίς αναμονή</span>
            <span>✓ Άμεση επιβεβαίωση</span>
            <span>✓ Εύκολη πρόσβαση</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
