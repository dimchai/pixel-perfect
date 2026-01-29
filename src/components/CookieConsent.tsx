import { useState, useEffect, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const COOKIE_CONSENT_KEY = "cookie-consent";

type ConsentStatus = "accepted" | "rejected" | null;

const CookieConsent = forwardRef<HTMLDivElement>((_, ref) => {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored === "accepted" || stored === "rejected") {
      setConsentStatus(stored);
      if (stored === "accepted") {
        enableTracking();
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  const enableTracking = () => {
    // Enable Google Analytics tracking
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      });
    }
  };

  const disableTracking = () => {
    // Disable Google Analytics tracking
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
  };

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setConsentStatus("accepted");
    setShowBanner(false);
    enableTracking();
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
    setConsentStatus("rejected");
    setShowBanner(false);
    disableTracking();
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        ref={ref}
        key="cookie-banner"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl shadow-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
              <Cookie className="w-6 h-6 text-primary" />
            </div>
            
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Χρησιμοποιούμε Cookies 🍪
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας στον ιστότοπό μας, 
                  να αναλύσουμε την επισκεψιμότητα και να προβάλλουμε εξατομικευμένες διαφημίσεις. 
                  Πατώντας "Αποδοχή", συναινείτε στη χρήση όλων των cookies.{" "}
                  <Link to="/privacy" className="text-primary hover:underline">
                    Πολιτική Απορρήτου
                  </Link>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleAccept}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Αποδοχή Όλων
                </Button>
                <Button
                  onClick={handleReject}
                  variant="outline"
                  className="border-border hover:bg-muted"
                >
                  Απόρριψη
                </Button>
              </div>
            </div>
            
            <button
              onClick={handleReject}
              className="p-2 hover:bg-muted rounded-full transition-colors flex-shrink-0"
              aria-label="Κλείσιμο"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
});

CookieConsent.displayName = "CookieConsent";

export default CookieConsent;
