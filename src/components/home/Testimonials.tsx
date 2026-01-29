import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Πολύ επαγγελματικός γιατρός. Με ενημέρωσε διεξοδικά για τη θεραπεία. Άμεση ανάρρωση και τέλεια αποτελέσματα!",
    author: "Μαρία Κ.",
    service: "Laser Κιρσοί",
    source: "Google Reviews",
    rating: 5,
  },
  {
    quote:
      "Δεν μπορώ να πιστέψω τη διαφορά στα πόδια μου. Σύστησα τον γιατρό σε όλη την οικογένειά μου.",
    author: "Γιώργος Π.",
    service: "Φλεβική Ανεπάρκεια",
    source: "Doctoranytime",
    rating: 5,
  },
  {
    quote:
      "Ζω κανονικά πάλι! Πολύ ευχάριστος και ικανός γιατρός. Έκανα την επίσκεψή μου με ασφάλεια.",
    author: "Ελένη Μ.",
    service: "Αρτηριακή Παθήση",
    source: "Google Reviews",
    rating: 5,
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

export function Testimonials() {
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
            Κριτικές
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Τι Λένε οι Ασθενείς μας
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Η εμπιστοσύνη και η ικανοποίηση των ασθενών μας είναι η καλύτερη επιβράβευση.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="bg-card rounded-xl p-6 lg:p-8 shadow-card h-full flex flex-col relative">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground italic leading-relaxed flex-grow mb-6">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-muted-foreground text-sm">
                      {testimonial.service}
                    </span>
                    <span className="text-xs text-muted-foreground/70 bg-muted px-2 py-0.5 rounded">
                      {testimonial.source}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
