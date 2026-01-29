import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GraduationCap, Award, MapPin, Phone, Mail, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

const education = [
  {
    year: "2006-2012",
    title: "Πτυχίο Ιατρικής",
    institution: "Δημοκρίτειο Πανεπιστήμιο Θράκης",
  },
  {
    year: "2015-2016",
    title: "Εξειδίκευση Αγγειοχειρουργικής",
    institution: "Oxford University Hospitals, UK",
  },
  {
    year: "2018-2021",
    title: "Εξειδίκευση Αγγειοχειρουργικής",
    institution: "ΓΝΑ Σισμανογλείο",
  },
];

const clinics = [
  {
    name: "Ιατρείο Χαλανδρίου",
    address: "Σωκράτους 16, 15232 Χαλάνδρι",
    mapUrl: "https://maps.app.goo.gl/aSKSotJm89WoPdSe9",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.5!2d23.8!3d38.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDAx&output=embed",
  },
  {
    name: "Ιατρείο Πειραιά",
    address: "Λεωφόρος Εθνικής Αντιστάσεως 91, 18534 Πειραιάς",
    mapUrl: "https://maps.app.goo.gl/JHkQuWb6CWjq4PdZ9",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.5!2d23.65!3d37.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDU3&output=embed",
  },
];

export default function AboutPage() {
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
              Σχετικά με Εμάς
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Γνωρίστε τον Dr. Δημήτριο Χαϊδάρογλου και το όραμά του για τη σύγχρονη αγγειοχειρουργική.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctor Bio */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="sticky top-24">
                <div className="rounded-2xl overflow-hidden shadow-hero">
                  <img
                    src={doctorPortrait}
                    alt="Dr. Δημήτριος Χαϊδάρογλου"
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Contact Card */}
                <div className="mt-6 bg-card rounded-xl p-6 shadow-card">
                  <h3 className="font-heading font-semibold text-foreground mb-4">
                    Επικοινωνία
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+306978480523"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      +30 697 848 0523
                    </a>
                    <a
                      href="mailto:info@aggeio.eu"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      info@aggeio.eu
                    </a>
                    <a
                      href="https://www.doctoranytime.gr/doctorcrmv2/Profile/Redesign?doctorAdminId=0&doctorid=75147"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Doctoranytime Profile
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Dr. Δημήτριος Χαϊδάρογλου
              </h2>
              <p className="text-lg text-primary font-medium mb-4">
                Ειδικευμένος Αγγειοχειρουργός
              </p>
              
              <div className="prose prose-lg text-muted-foreground space-y-4 mb-8">
                <p>
                  Ο Dr. Δημήτριος Χαϊδάρογλου είναι ειδικευμένος αγγειοχειρουργός με περισσότερα 
                  από 10 χρόνια εμπειρίας στη σύγχρονη αγγειοχειρουργική και τις ενδαγγειακές τεχνικές.
                </p>
                <p>
                  Αποφοίτησε από την Ιατρική Σχολή του Δημοκριτείου Πανεπιστημίου Θράκης (2006-2012) και 
                  εξειδικεύτηκε στα Oxford University Hospitals στο Ηνωμένο Βασίλειο (2015-2016). Ολοκλήρωσε 
                  την ειδικότητά του στην Αγγειοχειρουργική στο ΓΝΑ Σισμανογλείο (2018-2021).
                </p>
                <p>
                  Συνεχίζει να επιμορφώνεται σε νέες τεχνικές και θεραπείες, προσφέροντας στους ασθενείς 
                  του τις πιο σύγχρονες θεραπευτικές επιλογές.
                </p>
              </div>

              {/* Education Timeline */}
              <div className="mb-8">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-6 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  Εκπαίδευση & Εξειδίκευση
                </h3>
                <div className="space-y-4">
                  {education.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4 items-start pl-4 border-l-2 border-primary/30"
                    >
                      <div>
                        <span className="text-sm font-medium text-primary">
                          {item.year}
                        </span>
                        <h4 className="font-semibold text-foreground">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.institution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-accent rounded-xl p-4 text-center">
                  <p className="text-2xl font-heading font-bold text-primary">10+</p>
                  <p className="text-sm text-muted-foreground">Χρόνια Εμπειρίας</p>
                </div>
                <div className="bg-accent rounded-xl p-4 text-center">
                  <p className="text-2xl font-heading font-bold text-primary">1000+</p>
                  <p className="text-sm text-muted-foreground">Ασθενείς</p>
                </div>
                <div className="bg-accent rounded-xl p-4 text-center">
                  <p className="text-2xl font-heading font-bold text-primary">98%</p>
                  <p className="text-sm text-muted-foreground">Επιτυχία</p>
                </div>
              </div>

              <Link to="/booking">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <Calendar className="w-5 h-5 mr-2" />
                  Κλείστε Ραντεβού
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clinics Section */}
      <section className="section-padding bg-muted/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Τα Ιατρεία μας
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Δύο σύγχρονα ιατρεία σε Χαλάνδρι και Πειραιά για εύκολη πρόσβαση.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clinics.map((clinic, index) => (
              <motion.div
                key={clinic.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-xl overflow-hidden shadow-card"
              >
                <div className="aspect-video bg-muted">
                  <iframe
                    src={clinic.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={clinic.name}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {clinic.name}
                  </h3>
                  <p className="flex items-start gap-2 text-muted-foreground mb-4">
                    <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                    {clinic.address}
                  </p>
                  <a
                    href={clinic.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Οδηγίες στο Google Maps
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
