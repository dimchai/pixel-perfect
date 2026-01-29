import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { About } from "@/components/home/About";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Δημήτριος Χαϊδάρογλου | Αγγειοχειρουργός Αθήνα - Χαλάνδρι & Πειραιάς</title>
        <meta name="description" content="Αγγειοχειρουργός στην Αθήνα. Εξειδίκευση σε κιρσούς, φλεβική ανεπάρκεια, αρτηριακές παθήσεις. Θεραπεία με laser (EVLA), triplex αγγείων. Ιατρεία Χαλάνδρι & Πειραιάς." />
        <meta name="keywords" content="αγγειοχειρουργός Αθήνα, αγγειολόγος Αθήνα, αγγειοχειρουργός Χαλάνδρι, αγγειοχειρουργός Πειραιάς, κιρσοί, φλεβική ανεπάρκεια, θεραπεία κιρσών, laser κιρσοί, EVLA, triplex αγγείων, Δημήτριος Χαϊδάρογλου, vascular surgeon Athens, varicose veins treatment Greece, θρόμβωση, DVT, ευρυαγγείες, ανεύρυσμα αορτής, καρωτιδική νόσος, περιφερική αρτηριοπάθεια, διαβητικό πόδι, σκληροθεραπεία, αγγειοπλαστική" />
        <link rel="canonical" href="https://aggeio.eu/" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
