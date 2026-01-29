import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { LazyImage } from "@/components/ui/lazy-image";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

const credentials = [
  {
    icon: GraduationCap,
    title: "Πτυχίο Ιατρικής",
    description: "Δημοκρίτειο Πανεπιστήμιο Θράκης",
  },
  {
    icon: Award,
    title: "Εξειδίκευση Oxford",
    description: "Oxford University Hospitals (2015-2016)",
  },
  {
    icon: MapPin,
    title: "2 Ιατρεία",
    description: "Χαλάνδρι & Πειραιάς",
  },
];

export function About() {
  return (
    <section className="section-padding bg-muted/50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-hero">
              <LazyImage
                src={doctorPortrait}
                alt="Δημήτριος Χαϊδάρογλου"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 md:right-8 bg-card rounded-xl p-4 shadow-card-hover"
            >
              <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">
                  10+
                  </span>
                </div>
                <div>
                  <p className="text-foreground font-semibold">Χρόνια</p>
                  <p className="text-muted-foreground text-sm">Εμπειρίας</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-accent text-accent-foreground text-sm font-medium">
              Σχετικά με Εμάς
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Εμπειρία & Εξειδίκευση στην Αγγειοχειρουργική
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ο Δημήτριος Χαϊδάρογλου είναι ειδικευμένος αγγειοχειρουργός με 
              περισσότερα από 10 χρόνια εμπειρίας στη σύγχρονη αγγειοχειρουργική
              και τις ενδαγγειακές τεχνικές.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Με σπουδές στο εξωτερικό, μεταπτυχιακό δίπλωμα ενδαγγειακών τεχνικών 
              και συνεχή επιμόρφωση, προσφέρει στους ασθενείς του τις πιο σύγχρονες 
              θεραπευτικές επιλογές.
            </p>

            {/* Credentials */}
            <div className="space-y-4 mb-8">
              {credentials.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link to="/about">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Περισσότερα για τον Ιατρό
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
