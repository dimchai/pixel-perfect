import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Star, Quote, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const reviews = [
  {
    quote: "Πολύ επαγγελματικός γιατρός. Με ενημέρωσε διεξοδικά για τη θεραπεία. Άμεση ανάρρωση και τέλεια αποτελέσματα!",
    author: "Μαρία Κ.",
    service: "Laser Κιρσοί",
    source: "Google Reviews",
    rating: 5,
  },
  {
    quote: "Δεν μπορώ να πιστέψω τη διαφορά στα πόδια μου. Σύστησα τον γιατρό σε όλη την οικογένειά μου.",
    author: "Γιώργος Π.",
    service: "Φλεβική Ανεπάρκεια",
    source: "Doctoranytime",
    rating: 5,
  },
  {
    quote: "Ζω κανονικά πάλι! Πολύ ευχάριστος και ικανός γιατρός. Έκανα την επίσκεψή μου με ασφάλεια.",
    author: "Ελένη Μ.",
    service: "Αρτηριακή Παθήση",
    source: "Google Reviews",
    rating: 5,
  },
  {
    quote: "Εξαιρετική εμπειρία από την αρχή μέχρι το τέλος. Ο γιατρός εξήγησε τα πάντα με υπομονή.",
    author: "Νίκος Α.",
    service: "Triplex Αγγείων",
    source: "Doctoranytime",
    rating: 5,
  },
  {
    quote: "Μετά από χρόνια ταλαιπωρίας, επιτέλους βρήκα λύση. Ευχαριστώ πολύ για την άριστη φροντίδα.",
    author: "Σοφία Τ.",
    service: "Laser Κιρσοί",
    source: "Google Reviews",
    rating: 5,
  },
  {
    quote: "Σύγχρονο ιατρείο, άμεση εξυπηρέτηση και κυρίως αποτελέσματα. Τον συνιστώ ανεπιφύλακτα.",
    author: "Δημήτρης Λ.",
    service: "Φλεβική Ανεπάρκεια",
    source: "Doctoranytime",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Κριτικές Ασθενών | Δημήτριος Χαϊδάρογλου - Αγγειοχειρουργός</title>
        <meta name="description" content="Διαβάστε τις κριτικές και εμπειρίες ασθενών για τον αγγειοχειρουργό Δημήτριο Χαϊδάρογλου. 5/5 βαθμολογία σε Google Reviews και Doctoranytime." />
        <meta name="keywords" content="κριτικές αγγειοχειρουργός, γνώμες ασθενών, αξιολογήσεις γιατρού, θεραπεία κιρσών εμπειρίες, αγγειοχειρουργός Αθήνα κριτικές, Doctoranytime κριτικές" />
        <link rel="canonical" href="https://aggeio.eu/reviews" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aggeio.eu/reviews" />
        <meta property="og:title" content="Κριτικές Ασθενών | Αγγειοχειρουργός Χαϊδάρογλου" />
        <meta property="og:description" content="5/5 βαθμολογία σε Google Reviews και Doctoranytime. Διαβάστε τις εμπειρίες ασθενών για θεραπεία κιρσών και αγγειακών παθήσεων." />
        <meta property="og:image" content="https://aggeio.eu/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="el_GR" />
        <meta property="og:site_name" content="Αγγειοχειρουργός Χαϊδάρογλου" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://aggeio.eu/reviews" />
        <meta name="twitter:title" content="Κριτικές Ασθενών | Αγγειοχειρουργός" />
        <meta name="twitter:description" content="5/5 βαθμολογία. Διαβάστε τις εμπειρίες ασθενών." />
        <meta name="twitter:image" content="https://aggeio.eu/og-image.jpg" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
              Κριτικές Ασθενών
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              Διαβάστε τι λένε οι ασθενείς μας για την εμπειρία τους.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-primary-foreground font-semibold">5.0</span>
                <span className="text-primary-foreground/70">Doctoranytime</span>
              </div>
              <div className="px-6 py-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm">
                <span className="text-primary-foreground font-semibold">1000+</span>
                <span className="text-primary-foreground/70 ml-2">Ασθενείς</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {reviews.map((review, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="bg-card rounded-xl p-6 shadow-card h-full flex flex-col relative">
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-foreground italic leading-relaxed flex-grow mb-6">
                    "{review.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{review.author}</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-muted-foreground text-sm">
                        {review.service}
                      </span>
                      <span className="text-xs text-muted-foreground/70 bg-muted px-2 py-0.5 rounded">
                        {review.source}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* External Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-6">
              Δείτε περισσότερες κριτικές στα προφίλ μας:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.doctoranytime.gr/d/Aggeiocheirourgos/xaidaroglou-dimitrios"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Doctoranytime
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
