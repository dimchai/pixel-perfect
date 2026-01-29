import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Stethoscope, Zap, Heart, CheckCircle, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    id: "triplex",
    icon: Stethoscope,
    title: "Triplex Αγγείων & Διάγνωση",
    description: "Υπερηχογραφικός έλεγχος Doppler για πλήρη αγγειακή αξιολόγηση και ακριβή διάγνωση.",
    color: "primary" as const,
    details: [
      "Πλήρης αγγειακός έλεγχος",
      "Έγχρωμο Doppler υπερηχογράφημα",
      "Αξιολόγηση φλεβικής και αρτηριακής κυκλοφορίας",
      "Έγκαιρη ανίχνευση θρομβώσεων",
      "Χαρτογράφηση κιρσών",
      "Παρακολούθηση θεραπείας",
    ],
    process: "Η εξέταση διαρκεί περίπου 20-30 λεπτά και είναι εντελώς ανώδυνη. Με τη χρήση υπερήχων, αξιολογούμε τη ροή του αίματος στα αγγεία σας και εντοπίζουμε τυχόν προβλήματα.",
    recovery: "Δεν απαιτείται ανάρρωση. Μπορείτε να επιστρέψετε αμέσως στις καθημερινές σας δραστηριότητες.",
  },
  {
    id: "laser",
    icon: Zap,
    title: "Laser Θεραπεία Κιρσών",
    description: "Ελάχιστα επεμβατική ενδαγγειακή θεραπεία laser (EVLA) χωρίς γενική αναισθησία.",
    color: "secondary" as const,
    details: [
      "Τοπική αναισθησία μόνο",
      "Διάρκεια επέμβασης ~30 λεπτά",
      "Άμεση επιστροφή στο σπίτι",
      "Ελάχιστος πόνος",
      "Χωρίς ουλές",
      "Υψηλό ποσοστό επιτυχίας",
    ],
    process: "Η θεραπεία EVLA (Endovascular Laser Ablation) χρησιμοποιεί ενέργεια laser για να κλείσει τη βλαμμένη φλέβα από μέσα. Η διαδικασία γίνεται με τοπική αναισθησία και καθοδήγηση υπερήχων.",
    recovery: "Επιστροφή στις καθημερινές δραστηριότητες εντός 24-48 ωρών. Χρήση ελαστικών καλτσών για 1-2 εβδομάδες. Πλήρης ανάρρωση σε 2-4 εβδομάδες.",
  },
  {
    id: "arterial",
    icon: Heart,
    title: "Αρτηριακές Παθήσεις",
    description: "Θεραπεία ανευρυσμάτων, στενώσεων και αγγειακών βλαβών με σύγχρονες τεχνικές.",
    color: "primary" as const,
    details: [
      "Διάγνωση και παρακολούθηση ανευρυσμάτων",
      "Θεραπεία περιφερικής αρτηριακής νόσου",
      "Αντιμετώπιση καρωτιδικής νόσου",
      "Ενδαγγειακές επεμβάσεις",
      "Βαλλσαλμική αγγειοπλαστική",
      "Τοποθέτηση stent",
    ],
    process: "Η θεραπεία εξαρτάται από τη φύση και τη σοβαρότητα της πάθησης. Χρησιμοποιούμε τόσο συντηρητικές όσο και ενδαγγειακές τεχνικές για βέλτιστα αποτελέσματα.",
    recovery: "Η ανάρρωση ποικίλλει ανάλογα με τη θεραπεία. Οι ενδαγγειακές επεμβάσεις απαιτούν μικρότερο χρόνο ανάρρωσης σε σχέση με τις ανοιχτές.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
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
              Οι Υπηρεσίες μας
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Σύγχρονες τεχνικές και εξειδίκευση για την αποτελεσματική αντιμετώπιση αγγειακών παθήσεων.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="section-container">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                      service.color === "primary"
                        ? "bg-primary/10 text-primary"
                        : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    <service.icon className="w-8 h-8" />
                  </div>
                  
                  <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-success shrink-0" />
                        <span className="text-foreground text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/booking">
                    <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      Κλείστε Ραντεβού
                    </Button>
                  </Link>
                </div>

                {/* Info Cards */}
                <div className={`space-y-4 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="bg-card rounded-xl p-6 shadow-card">
                    <h3 className="font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
                      <ArrowRight className="w-5 h-5 text-primary" />
                      Διαδικασία
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.process}
                    </p>
                  </div>
                  <div className="bg-accent rounded-xl p-6">
                    <h3 className="font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-success" />
                      Ανάρρωση
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.recovery}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Έχετε Ερωτήσεις;
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Επικοινωνήστε μαζί μας για να συζητήσουμε τις ανάγκες σας και να προγραμματίσουμε μια εξέταση.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Κλείστε Ραντεβού
                </Button>
              </Link>
              <a href="tel:+306978480523">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Καλέστε: +30 697 848 0523
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
