import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Stethoscope, Zap, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Stethoscope,
    title: "Triplex Αγγείων & Διάγνωση",
    description:
      "Υπερηχογραφικός έλεγχος Doppler για πλήρη αγγειακή αξιολόγηση και ακριβή διάγνωση.",
    color: "primary" as const,
  },
  {
    icon: Zap,
    title: "Laser Κιρσοί",
    description:
      "Ελάχιστα επεμβατική ενδαγγειακή θεραπεία laser χωρίς γενική αναισθησία, ελάχιστη ανάρρωση.",
    color: "secondary" as const,
  },
  {
    icon: Heart,
    title: "Αρτηριακές Παθήσεις",
    description:
      "Θεραπεία ανευρυσμάτων, στενώσεων και αγγειακών βλαβών με σύγχρονες τεχνικές.",
    color: "primary" as const,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Services() {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-accent text-accent-foreground text-sm font-medium">
            Υπηρεσίες
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Εξειδικευμένες Θεραπείες
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Σύγχρονες τεχνικές και εξειδίκευση για την αποτελεσματική αντιμετώπιση 
            αγγειακών παθήσεων.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-card rounded-xl p-6 lg:p-8 shadow-card card-hover h-full flex flex-col">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    service.color === "primary"
                      ? "bg-primary/10 text-primary"
                      : "bg-secondary/10 text-secondary"
                  }`}
                >
                  <service.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-6">
                  {service.description}
                </p>

                {/* Link */}
                <Link
                  to="/services"
                  className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all"
                >
                  Μάθετε Περισσότερα
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Δείτε Όλες τις Υπηρεσίες
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
