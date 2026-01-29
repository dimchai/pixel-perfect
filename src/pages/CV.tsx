import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  BookOpen, 
  Globe, 
  Heart,
  Calendar,
  Building,
  FileText,
  Presentation
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const education = [
  {
    period: "Οκτώβριος 2006 - Οκτώβριος 2013",
    title: "Πτυχίο Ιατρικής",
    institution: "Ιατρική Σχολή Δημοκριτείου Πανεπιστημίου Θράκης",
  },
  {
    period: "Φεβρουάριος 2022",
    title: "Τίτλος Ειδικότητας Αγγειοχειρουργικής",
    institution: "Εξεταστική περίοδος Φεβρουαρίου 2022",
  },
  {
    period: "Φεβρουάριος 2019 - Σήμερα",
    title: "ΚΠΜΣ \"Ενδαγγειακές Τεχνικές\"",
    institution: "Ιατρική Σχολή ΕΚΠΑ",
  },
  {
    period: "Ιούνιος 2024",
    title: "Άδεια Υπερήχων Αγγειοχειρουργικής",
    institution: "Υπουργείο Υγείας",
  },
];

const specialty = [
  {
    period: "Δεκέμβριος 2013 - Ιανουάριος 2015",
    title: "Γενική Χειρουργική Ειδικευόμενος",
    institution: "Β' Χειρουργική Κλινική ΑΠΘ, ΓΝ \"Γ. ΓΕΝΝΗΜΑΤΑΣ\"",
  },
  {
    period: "Φεβρουάριος 2015 - Αύγουστος 2016",
    title: "Specialty Registrar Core Trainee",
    institution: "Oxford University Hospitals NHS Foundation Trust",
    details: [
      "Μονάδα μεταμοσχεύσεων Οξφόρδης (Oxford Transplant Unit)",
      "Μονάδα Επείγουσας Χειρουργικής (Surgical Emergency Unit)",
      "Μονάδα Χειρουργικής Ήπατος Παγκρέατος Χοληφόρων (Oxford HPB Unit)",
    ],
  },
  {
    period: "Δεκέμβριος 2016 - Ιούνιος 2021",
    title: "Ειδικευόμενος Αγγειοχειρουργικού Τμήματος",
    institution: "ΓΝΑ \"ΣΙΣΜΑΝΟΓΛΕΙΟ - ΑΜ. ΦΛΕΜΙΓΚ\"",
  },
];

const workExperience = [
  {
    period: "Ιούνιος 2022 - Μάρτιος 2023",
    title: "Ειδικός Αγγειοχειρουργός (Σύμβαση COVID-19)",
    institution: "ΓΝΑ \"ΣΙΣΜΑΝΟΓΛΕΙΟ - ΑΜ. ΦΛΕΜΙΓΚ\"",
  },
  {
    period: "Απρίλιος 2023 - Νοέμβριος 2023",
    title: "Επιμελητής - Επιστημονικά Υπεύθυνος Α' Αγγειοχειρουργικής Κλινικής",
    institution: "ΔΘΚΑ ΥΓΕΙΑ Α.Ε.",
  },
  {
    period: "Ιούνιος 2023 - Σήμερα",
    title: "Ιδιωτικό Ιατρείο",
    institution: "Σωκράτους 16, Χαλάνδρι (Συστέγαση)",
  },
  {
    period: "Μάιος 2024 - Σήμερα",
    title: "Ιδιωτικό Ιατρείο",
    institution: "Λεωφ. Γρηγορίου Λαμπράκη 91, Πειραιάς (Πολυϊατρείο Medicall)",
  },
];

const publications = [
  {
    conference: "29ο Πανελλήνιο Συνέδριο Χειρουργικής",
    papers: [
      "Τυχαία διάγνωση θυρεοειδικού καρκίνου μετά από επέμβαση για καλοήθη πάθηση",
    ],
  },
  {
    conference: "16ο Πανελλήνιο Συνέδριο Αγγειολογίας - Αγγειακής & Ενδαγγειακής Χειρουργικής",
    papers: [
      "Σύγκριση της εμπειρίας μας με δύο διαφορετικές συσκευές αγγειακής σύγκλεισης",
      "Περίπτωση συνδρόμου κοιλιακού διαμερίσματος μετά από ενδαγγειακή αποκατάσταση",
      "Ιδιαίτερη περίπτωση ενδαγγειακής αποκατάστασης ανευρύσματος κοιλιακής αορτής",
      "Παραπάρεση κάτω άκρων - Σπάνια νευρολογική επιπλοκή",
      "Χρήση ανεστραμμένου σκέλους λαγονίου ενδομοσχεύματος",
      "Ενδαγγειακή αντιμετώπιση αορτολαγόνιων αποφρακτικών βλαβών τύπου TASC IId",
    ],
  },
  {
    conference: "17ο Πανελλήνιο Συνέδριο Αγγειολογίας - Αγγειακής & Ενδαγγειακής Χειρουργικής",
    papers: [
      "Ιατρογενείς κακώσεις κάτω κοίλης και λαγονίων φλεβών",
      "Ενδαγγειακή αποκατάσταση στένωσης δεξιάς έσω καρωτίδας",
      "Ενδαγγειακή αντιμετώπιση πρωτογενούς αορτοβρογχικού συριγγίου",
      "Ιατρογενές ανεύρυσμα της περονιαίας αρτηρίας",
      "Σύνδρομο παγίδευσης ιγνυακής αρτηρίας σε έφηβο",
      "Χειρουργική αποκατάσταση παγίδευσης αριστερής νεφρικής φλέβας (Nutcracker Syndrome)",
      "Συγκριτική μελέτη βιομιμητικού ενδονάρθηκα SUPERA vs μηροϊγνυακής παράκαμψης",
    ],
  },
  {
    conference: "18ο Πανελλήνιο Συνέδριο Αγγειολογίας - Αγγειακής & Ενδαγγειακής Χειρουργικής",
    papers: [
      "Ιατρογενής αρτηριοφλεβική επικοινωνία μετά στεφανιογραφίας",
      "Αντιμετώπιση ιατρογενούς ανευρύσματος σπληνικής αρτηρίας",
      "Καρωτιδοϋποκλείδια παράκαμψη σε ανήλικο ασθενή",
      "Ενδομόσχευμα Lombard Altura - Εμπειρία τμήματος",
    ],
  },
  {
    conference: "19ο Πανελλήνιο Συνέδριο Αγγειολογίας - Αγγειακής & Ενδαγγειακής Χειρουργικής",
    papers: [
      "Δόση ακτινοβολίας: επηρεάζει ο χειριστής;",
      "Αγγειακά τραύματα άνω άκρων σε παιδιατρικούς ασθενείς",
      "Μεμονωμένο ανεύρυσμα έξω λαγονίου αρτηρίας",
      "Ερυθρομελαλγία: Διαφορική διάγνωση και αντιμετώπιση",
      "Οι επενδεδυμένοι με φάρμακο αεροθάλαμοι (DCBs) σε CTOs μηροϊγνυακής νόσου",
    ],
  },
  {
    conference: "20ο Πανελλήνιο Συνέδριο Αγγειολογίας - Αγγειακής & Ενδαγγειακής Χειρουργικής",
    papers: [
      "Αντιμετώπιση νευροπαθητικού πόνου στην επώδυνη διαβητική νευροπάθεια",
      "Ενδομόσχευμα Altura - Αποτελέσματα και εμπειρία",
      "Ενημέρωση για το EVST του ESVS (προσκεκλημένος ομιλητής)",
      "Ενδαγγειακή αποκατάσταση ανευρύσματος με ευθύ ενδομόσχευμα",
      "Ρήξη ευμεγέθους ανευρύσματος με αορτοκοιλική επικοινωνία",
    ],
  },
  {
    conference: "21ο Πανελλήνιο Συνέδριο Αγγειολογίας - Αγγειακής & Ενδαγγειακής Χειρουργικής",
    papers: [
      "Λαγονο-ουρητηρική επικοινωνία - Εμπειρία τμήματος",
      "Πολλαπλές αρτηριακές θρομβώσεις σε ασθενή με COVID-19",
    ],
  },
  {
    conference: "22ο Πανελλήνιο Συνέδριο Αγγειολογίας - Αγγειακής & Ενδαγγειακής Χειρουργικής",
    papers: [
      "Ο ρόλος της ενδαγγειακής λιθοτριψίας στα ασβεστωμένα αθηρώματα (24 ασθενείς)",
      "Συντηρητική αντιμετώπιση ρήξης ανευρύσματος από endotension",
      "Ενδαρτηρεκτομή καρωτίδας και αφαίρεση ενδαγγειακών υλικών",
    ],
  },
];

const internationalPublications = [
  {
    conference: "LIVE 2021",
    papers: ["Endograft Torsion. A Rare Cause of Graft Occlusion"],
  },
  {
    conference: "Charing Cross Symposium 2021",
    papers: ["Emergent Type B Aortic Dissection in a kyphoscoliotic female patient"],
  },
  {
    conference: "Paris Vascular Insights 2021",
    papers: [
      "Carotid-subclavian bypass for Shone's syndrome in a 17 years old patient",
      "Endovascular repair of Infrarenal aorta aneurysm with tubed aortic endoprosthesis",
    ],
  },
  {
    conference: "ESVS Annual Meeting 2022",
    papers: ["Προεδρείο – Κριτής σε Fast track session"],
  },
  {
    conference: "Meet the ESVS in Serbia 2022",
    papers: [
      "Abroad fellowship is still a fantastic experience! (προσκεκλημένος ομιλητής)",
      "Biobanks and tissue database in vascular surgery (προσκεκλημένος ομιλητής)",
    ],
  },
  {
    conference: "Paris Vascular Insights 2022",
    papers: ["Iliac-ureteral fistula. A life threatening condition"],
  },
  {
    conference: "5ο Σχολείο Φλεβολογικής Εταιρείας 2022",
    papers: ["Παρουσίαση περιστατικών"],
  },
];

const activities = [
  {
    period: "Νοέμβριος 2017 - Νοέμβριος 2019",
    title: "Αναπληρωματικό μέλος Επιστημονικού Συμβουλίου",
    institution: "ΓΝΑ \"ΣΙΣΜΑΝΟΓΛΕΙΟ\"",
  },
  {
    period: "Φεβρουάριος 2018 - Ιανουάριος 2020",
    title: "Μέλος Επιτροπής Εκπαίδευσης Επιστημονικού Συμβουλίου",
    institution: "ΓΝΑ \"ΣΙΣΜΑΝΟΓΛΕΙΟ\"",
  },
  {
    period: "Σεπτέμβριος 2020 - Σεπτέμβριος 2023",
    title: "Εκλεγμένος Εκπρόσωπος Ελλάδας στο EVST",
    institution: "European Society of Vascular Surgery (ESVS)",
  },
  {
    period: "Δεκέμβριος 2021 - Σήμερα",
    title: "Διαθεσιμότητα Αγγειοχειρουργικών Υπηρεσιών",
    institution: "Ελληνικός Ερυθρός Σταυρός",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function CVPage() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Βιογραφικό | Δημήτριος Χαϊδάρογλου - Αγγειοχειρουργός</title>
        <meta name="description" content="Αναλυτικό βιογραφικό του Δημήτριου Χαϊδάρογλου: εκπαίδευση, εξειδίκευση στο Oxford, επιστημονικές δημοσιεύσεις και συνέδρια αγγειοχειρουργικής." />
        <meta name="keywords" content="βιογραφικό αγγειοχειρουργού, Δημήτριος Χαϊδάρογλου CV, εξειδίκευση αγγειοχειρουργική, Oxford University Hospitals, δημοσιεύσεις αγγειοχειρουργική, συνέδρια αγγειολογίας" />
        <link rel="canonical" href="https://aggeio.eu/cv" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://aggeio.eu/cv" />
        <meta property="og:title" content="Βιογραφικό | Δημήτριος Χαϊδάρογλου - Αγγειοχειρουργός" />
        <meta property="og:description" content="Εκπαίδευση στο Oxford University Hospitals, επιστημονικές δημοσιεύσεις, διεθνή συνέδρια. Αναλυτικό CV αγγειοχειρουργού." />
        <meta property="og:image" content="https://aggeio.eu/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="el_GR" />
        <meta property="og:site_name" content="Αγγειοχειρουργός Χαϊδάρογλου" />
        <meta property="profile:first_name" content="Δημήτριος" />
        <meta property="profile:last_name" content="Χαϊδάρογλου" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://aggeio.eu/cv" />
        <meta name="twitter:title" content="Βιογραφικό | Δημήτριος Χαϊδάρογλου" />
        <meta name="twitter:description" content="Εκπαίδευση στο Oxford, επιστημονικές δημοσιεύσεις, διεθνή συνέδρια." />
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
              Βιογραφικό Σημείωμα
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-2">
              <span className="font-semibold text-primary-foreground">Δημήτριος Ν. Χαϊδάρογλου</span>
            </p>
            <p className="text-primary-foreground/70 text-base">
              Ειδικευμένος Αγγειοχειρουργός
            </p>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                Εκπαίδευση
              </h2>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card rounded-xl p-5 shadow-card border-l-4 border-primary"
                >
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-primary font-medium">{item.period}</p>
                      <h3 className="font-semibold text-foreground mt-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.institution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Specialty Training Section */}
      <section className="section-padding bg-muted/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Building className="w-6 h-6 text-secondary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                Αγγειοχειρουργική Ειδικότητα
              </h2>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {specialty.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card rounded-xl p-5 shadow-card border-l-4 border-secondary"
                >
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-secondary font-medium">{item.period}</p>
                      <h3 className="font-semibold text-foreground mt-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.institution}</p>
                      {item.details && (
                        <ul className="mt-2 space-y-1">
                          {item.details.map((detail, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-secondary/50" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                Εργασία ως Αγγειοχειρουργός
              </h2>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {workExperience.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card rounded-xl p-5 shadow-card border-l-4 border-primary"
                >
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-primary font-medium">{item.period}</p>
                      <h3 className="font-semibold text-foreground mt-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.institution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="section-padding bg-muted/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                Δημοσιεύσεις & Ανακοινώσεις
              </h2>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card rounded-xl p-5 shadow-card"
                >
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Presentation className="w-5 h-5 text-primary" />
                    {pub.conference}
                  </h3>
                  <ul className="space-y-2">
                    {pub.papers.map((paper, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0 mt-1.5" />
                        {paper}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* International Publications Section */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Globe className="w-6 h-6 text-secondary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                Διεθνείς Ανακοινώσεις
              </h2>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {internationalPublications.map((pub, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card rounded-xl p-5 shadow-card border-l-4 border-secondary"
                >
                  <h3 className="font-semibold text-foreground mb-3 text-sm">
                    {pub.conference}
                  </h3>
                  <ul className="space-y-1">
                    {pub.papers.map((paper, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary/50 shrink-0 mt-1.5" />
                        {paper}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="section-padding bg-muted/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                Επιστημονικές & Διεθνείς Δραστηριότητες
              </h2>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {activities.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card rounded-xl p-5 shadow-card border-l-4 border-primary"
                >
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-primary font-medium">{item.period}</p>
                      <h3 className="font-semibold text-foreground mt-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.institution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                Ιατρική Εθελοντική Εμπειρία
              </h2>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card border-l-4 border-destructive">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-destructive font-medium">Δεκέμβριος 2021 - Σήμερα</p>
                  <h3 className="font-semibold text-foreground mt-1">Διαθεσιμότητα Αγγειοχειρουργικών Υπηρεσιών</h3>
                  <p className="text-muted-foreground text-sm">Ελληνικός Ερυθρός Σταυρός</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              Κλείστε Ραντεβού
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Επικοινωνήστε μαζί μας για να προγραμματίσουμε μια συνάντηση.
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
                  className="w-full sm:w-auto border-primary-foreground/50 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 hover:text-primary-foreground"
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
