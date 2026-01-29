import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Shield, Cookie, Eye, Mail, UserCheck, Trash2 } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Eye,
      title: "Ποια Δεδομένα Συλλέγουμε",
      content: [
        "Δεδομένα επικοινωνίας (όνομα, email, τηλέφωνο) που παρέχετε εθελοντικά μέσω της φόρμας επικοινωνίας",
        "Τεχνικά δεδομένα (διεύθυνση IP, τύπος browser, συσκευή) για τη βελτίωση της εμπειρίας χρήστη",
        "Δεδομένα πλοήγησης (σελίδες που επισκέπτεστε, χρόνος παραμονής) μέσω Google Analytics",
      ],
    },
    {
      icon: Cookie,
      title: "Χρήση Cookies",
      content: [
        "Απαραίτητα cookies: Για τη βασική λειτουργία του ιστότοπου",
        "Cookies ανάλυσης (Google Analytics): Για την κατανόηση της χρήσης του ιστότοπου",
        "Cookies διαφήμισης (Google Ads): Για την προβολή σχετικών διαφημίσεων",
        "Μπορείτε να διαχειριστείτε τις προτιμήσεις σας μέσω του banner cookies ή των ρυθμίσεων του browser σας",
      ],
    },
    {
      icon: Shield,
      title: "Πώς Προστατεύουμε τα Δεδομένα σας",
      content: [
        "Χρησιμοποιούμε κρυπτογράφηση SSL για ασφαλή μετάδοση δεδομένων",
        "Τα δεδομένα σας αποθηκεύονται σε ασφαλείς servers",
        "Δεν πωλούμε ή μοιραζόμαστε τα προσωπικά σας δεδομένα με τρίτους για εμπορικούς σκοπούς",
        "Η πρόσβαση στα δεδομένα περιορίζεται μόνο σε εξουσιοδοτημένο προσωπικό",
      ],
    },
    {
      icon: UserCheck,
      title: "Τα Δικαιώματά σας (GDPR)",
      content: [
        "Δικαίωμα πρόσβασης: Μπορείτε να ζητήσετε αντίγραφο των δεδομένων σας",
        "Δικαίωμα διόρθωσης: Μπορείτε να ζητήσετε διόρθωση ανακριβών δεδομένων",
        "Δικαίωμα διαγραφής: Μπορείτε να ζητήσετε διαγραφή των δεδομένων σας",
        "Δικαίωμα εναντίωσης: Μπορείτε να αντιταχθείτε στην επεξεργασία των δεδομένων σας",
        "Δικαίωμα φορητότητας: Μπορείτε να ζητήσετε τα δεδομένα σας σε δομημένη μορφή",
      ],
    },
    {
      icon: Trash2,
      title: "Διατήρηση Δεδομένων",
      content: [
        "Τα δεδομένα επικοινωνίας διατηρούνται για όσο διάστημα είναι απαραίτητο για την εξυπηρέτησή σας",
        "Τα δεδομένα analytics διατηρούνται για 26 μήνες",
        "Μετά τη λήξη της περιόδου διατήρησης, τα δεδομένα διαγράφονται με ασφάλεια",
      ],
    },
    {
      icon: Mail,
      title: "Επικοινωνία",
      content: [
        "Για οποιαδήποτε ερώτηση σχετικά με την πολιτική απορρήτου ή τα δεδομένα σας:",
        "Email: info@aggeio.eu",
        "Τηλέφωνο: +30 697 848 0523",
        "Διεύθυνση: Σωκράτους 16, Χαλάνδρι 15232",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Πολιτική Απορρήτου
              </h1>
              <p className="text-lg text-muted-foreground">
                Η προστασία των προσωπικών σας δεδομένων είναι προτεραιότητά μας. 
                Διαβάστε πώς συλλέγουμε, χρησιμοποιούμε και προστατεύουμε τα δεδομένα σας.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Τελευταία ενημέρωση: Ιανουάριος 2025
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-2xl p-6 md:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                      <section.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                        {section.title}
                      </h2>
                      <ul className="space-y-3">
                        {section.content.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-muted-foreground leading-relaxed flex items-start gap-2"
                          >
                            <span className="text-primary mt-1.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Additional Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-muted/50 border border-border rounded-2xl p-6 md:p-8"
              >
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Τρίτα Μέρη & Εξωτερικοί Σύνδεσμοι
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ο ιστότοπός μας μπορεί να περιέχει συνδέσμους προς ιστότοπους τρίτων 
                  (π.χ. Doctoranytime). Δεν είμαστε υπεύθυνοι για τις πρακτικές απορρήτου 
                  αυτών των ιστότοπων. Σας συνιστούμε να διαβάσετε τις πολιτικές απορρήτου 
                  τους πριν παρέχετε οποιαδήποτε προσωπικά δεδομένα.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Χρησιμοποιούμε υπηρεσίες της Google (Analytics, Ads, Tag Manager) για 
                  την ανάλυση της επισκεψιμότητας και τη βελτιστοποίηση των διαφημίσεων. 
                  Για περισσότερες πληροφορίες σχετικά με τον τρόπο που η Google χειρίζεται 
                  τα δεδομένα, επισκεφθείτε την{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Πολιτική Απορρήτου της Google
                  </a>
                  .
                </p>
              </motion.div>

              {/* Changes Notice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center py-8"
              >
                <p className="text-sm text-muted-foreground">
                  Διατηρούμε το δικαίωμα να τροποποιήσουμε αυτήν την πολιτική απορρήτου ανά πάσα στιγμή. 
                  Οποιεσδήποτε αλλαγές θα δημοσιεύονται σε αυτήν τη σελίδα με ενημερωμένη ημερομηνία.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
