import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Τι είναι η ενδοφλεβική θεραπεία laser (EVLA) για κιρσούς;",
    answer:
      "Η ενδοφλεβική θεραπεία laser (EVLA) είναι μια ελάχιστα επεμβατική τεχνική αντιμετώπισης κιρσών. Χρησιμοποιεί ενέργεια laser για να κλείσει την πάσχουσα φλέβα, επιτρέποντας στον ασθενή να επιστρέψει στις δραστηριότητές του την ίδια μέρα.",
  },
  {
    question: "Τι είναι οι κιρσοί και ποια είναι τα συμπτώματά τους;",
    answer:
      "Οι κιρσοί είναι διευρυμένες, ελικοειδείς φλέβες που εμφανίζονται κυρίως στα πόδια. Τα συμπτώματα περιλαμβάνουν πόνο, βάρος στα πόδια, πρήξιμο, κράμπες, φαγούρα και αλλαγές στο χρώμα του δέρματος.",
  },
  {
    question: "Πόσο διαρκεί η ανάρρωση μετά από θεραπεία κιρσών με laser;",
    answer:
      "Η ανάρρωση μετά από EVLA είναι ταχεία. Οι περισσότεροι ασθενείς επιστρέφουν στις καθημερινές δραστηριότητές τους την ίδια ή την επόμενη μέρα. Συνιστάται η χρήση ελαστικής κάλτσας για 1-2 εβδομάδες.",
  },
  {
    question: "Τι είναι το triplex αγγείων;",
    answer:
      "Το triplex αγγείων είναι μια εξέταση υπερήχων που αξιολογεί τη ροή του αίματος στις αρτηρίες και τις φλέβες. Χρησιμοποιείται για τη διάγνωση φλεβικής ανεπάρκειας, θρομβώσεων και αρτηριακών στενώσεων.",
  },
  {
    question: "Τι είναι η φλεβική ανεπάρκεια;",
    answer:
      "Η φλεβική ανεπάρκεια είναι μια πάθηση όπου οι φλέβες δεν μπορούν να μεταφέρουν αποτελεσματικά το αίμα πίσω στην καρδιά. Προκαλείται από βλάβη στις βαλβίδες των φλεβών και οδηγεί σε συσσώρευση αίματος στα κάτω άκρα.",
  },
  {
    question: "Πώς μπορώ να κλείσω ραντεβού;",
    answer:
      "Μπορείτε να κλείσετε ραντεβού online μέσω της ιστοσελίδας μας, τηλεφωνικά στο 697 848 0523, ή μέσω της πλατφόρμας Doctoranytime. Δεχόμαστε ασθενείς στα ιατρεία μας σε Χαλάνδρι και Πειραιά.",
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

export const FAQ = () => {
  return (
    <section className="section-padding bg-muted/30" id="faq">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Συχνές Ερωτήσεις</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Έχετε Απορίες;
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Βρείτε απαντήσεις στις πιο συχνές ερωτήσεις σχετικά με τις υπηρεσίες
            και τις θεραπείες μας.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5 [&[data-state=open]]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
