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
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aggeio.eu/" />
        <meta property="og:title" content="Δημήτριος Χαϊδάρογλου | Αγγειοχειρουργός Αθήνα" />
        <meta property="og:description" content="Ειδικευμένος Αγγειοχειρουργός με 10+ χρόνια εμπειρίας. Θεραπεία κιρσών με laser, φλεβική ανεπάρκεια, αρτηριακές παθήσεις. Ιατρεία Χαλάνδρι & Πειραιάς." />
        <meta property="og:image" content="https://aggeio.eu/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="el_GR" />
        <meta property="og:site_name" content="Αγγειοχειρουργός Χαϊδάρογλου" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://aggeio.eu/" />
        <meta name="twitter:title" content="Δημήτριος Χαϊδάρογλου | Αγγειοχειρουργός Αθήνα" />
        <meta name="twitter:description" content="Ειδικευμένος Αγγειοχειρουργός με 10+ χρόνια εμπειρίας. Θεραπεία κιρσών με laser." />
        <meta name="twitter:image" content="https://aggeio.eu/og-image.jpg" />
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
