import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Phone, Mail, MapPin, ExternalLink, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const clinics = [
  {
    name: "Ιατρείο Χαλανδρίου",
    address: "Σωκράτους 16, 15232 Χαλάνδρι",
    mapUrl: "https://maps.app.goo.gl/aSKSotJm89WoPdSe9",
  },
  {
    name: "Ιατρείο Πειραιά",
    address: "Λεωφόρος Εθνικής Αντιστάσεως 91, 18534 Πειραιάς",
    mapUrl: "https://maps.app.goo.gl/JHkQuWb6CWjq4PdZ9",
  },
];

export default function BookingPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    clinic: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          service: formData.service,
          clinic: formData.clinic,
          message: formData.message.trim() || undefined,
        },
      });

      if (error) throw error;

      setIsSuccess(true);
      
      toast({
        title: "Επιτυχής Αποστολή!",
        description: "Θα επικοινωνήσουμε μαζί σας σύντομα για επιβεβαίωση του ραντεβού.",
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          clinic: "",
          message: "",
        });
      }, 3000);
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Σφάλμα",
        description: "Δεν ήταν δυνατή η αποστολή. Παρακαλώ δοκιμάστε ξανά ή καλέστε μας.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Κλείστε Ραντεβού | Δημήτριος Χαϊδάρογλου - Αγγειοχειρουργός</title>
        <meta name="description" content="Κλείστε ραντεβού με τον αγγειοχειρουργό Δημήτριο Χαϊδάρογλου. Ιατρεία σε Χαλάνδρι και Πειραιά. Online φόρμα ή τηλεφωνικά στο 697 848 0523." />
        <meta name="keywords" content="ραντεβού αγγειοχειρουργός, κλείσιμο ραντεβού, αγγειοχειρουργός Χαλάνδρι, αγγειοχειρουργός Πειραιάς, εξέταση κιρσών, triplex αγγείων ραντεβού" />
        <link rel="canonical" href="https://aggeio.eu/booking" />
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
              Κλείστε Ραντεβού
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Συμπληρώστε τη φόρμα ή επικοινωνήστε απευθείας μαζί μας.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Φόρμα Επικοινωνίας
                </h2>

                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-success" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                      Ευχαριστούμε!
                    </h3>
                    <p className="text-muted-foreground">
                      Θα επικοινωνήσουμε μαζί σας σύντομα.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <Label htmlFor="name">Ονοματεπώνυμο *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Το όνομά σας"
                        className="mt-1.5"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="email@example.com"
                          className="mt-1.5"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Τηλέφωνο *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+30 69x xxx xxxx"
                          className="mt-1.5"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="service">Υπηρεσία *</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) =>
                            setFormData({ ...formData, service: value })
                          }
                          required
                        >
                          <SelectTrigger className="mt-1.5">
                            <SelectValue placeholder="Επιλέξτε υπηρεσία" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="triplex">Triplex Αγγείων</SelectItem>
                            <SelectItem value="laser">Laser Κιρσοί</SelectItem>
                            <SelectItem value="arterial">Αρτηριακές Παθήσεις</SelectItem>
                            <SelectItem value="consultation">Γενική Εξέταση</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="clinic">Ιατρείο *</Label>
                        <Select
                          value={formData.clinic}
                          onValueChange={(value) =>
                            setFormData({ ...formData, clinic: value })
                          }
                          required
                        >
                          <SelectTrigger className="mt-1.5">
                            <SelectValue placeholder="Επιλέξτε ιατρείο" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="chalandri">Χαλάνδρι</SelectItem>
                            <SelectItem value="piraeus">Πειραιάς</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Μήνυμα (προαιρετικό)</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Περιγράψτε σύντομα τα συμπτώματά σας..."
                        rows={4}
                        className="mt-1.5"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Αποστολή..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Αποστολή Αιτήματος
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Quick Contact */}
              <div className="bg-card rounded-2xl p-6 shadow-card">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                  Άμεση Επικοινωνία
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:+306978480523"
                    className="flex items-center gap-4 p-4 rounded-xl bg-accent hover:bg-accent/80 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Τηλέφωνο</p>
                      <p className="text-muted-foreground">+30 697 848 0523</p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@aggeio.eu"
                    className="flex items-center gap-4 p-4 rounded-xl bg-accent hover:bg-accent/80 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground">info@aggeio.eu</p>
                    </div>
                  </a>
                  <a
                    href="https://www.doctoranytime.gr/d/Aggeiocheirourgos/xaidaroglou-dimitrios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-accent hover:bg-accent/80 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Doctoranytime</p>
                      <p className="text-muted-foreground">Online Κράτηση</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Clinics */}
              {clinics.map((clinic) => (
                <div key={clinic.name} className="bg-card rounded-2xl p-6 shadow-card">
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                    {clinic.name}
                  </h3>
                  <p className="flex items-start gap-2 text-muted-foreground mb-4">
                    <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                    {clinic.address}
                  </p>
                  <a href={clinic.mapUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Οδηγίες στο Google Maps
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
