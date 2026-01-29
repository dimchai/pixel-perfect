const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  service: string;
  clinic: string;
  message?: string;
}

const serviceLabels: Record<string, string> = {
  triplex: "Triplex Αγγείων",
  laser: "Laser Κιρσοί",
  arterial: "Αρτηριακές Παθήσεις",
  consultation: "Γενική Εξέταση",
};

const clinicLabels: Record<string, string> = {
  chalandri: "Χαλάνδρι",
  piraeus: "Πειραιάς",
};

Deno.serve(async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const { name, email, phone, service, clinic, message }: ContactRequest = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !service || !clinic) {
      throw new Error("Missing required fields");
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email format");
    }

    // Validate name length
    if (name.length > 100) {
      throw new Error("Name too long");
    }

    // Validate phone format (basic)
    if (phone.length < 10 || phone.length > 20) {
      throw new Error("Invalid phone format");
    }

    const serviceLabel = serviceLabels[service] || service;
    const clinicLabel = clinicLabels[clinic] || clinic;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Ιατρείο Χαϊδάρογλου <noreply@aggeio.eu>",
        to: ["info@aggeio.eu"],
        reply_to: email,
        subject: `Νέο Αίτημα Ραντεβού - ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #6B7280; border-bottom: 2px solid #6B7280; padding-bottom: 10px;">
              Νέο Αίτημα Ραντεβού
            </h1>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 150px;">
                  Ονοματεπώνυμο:
                </td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
                  ${name}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">
                  Email:
                </td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
                  <a href="mailto:${email}">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">
                  Τηλέφωνο:
                </td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
                  <a href="tel:${phone}">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">
                  Υπηρεσία:
                </td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
                  ${serviceLabel}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">
                  Ιατρείο:
                </td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
                  ${clinicLabel}
                </td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; vertical-align: top;">
                  Μήνυμα:
                </td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; white-space: pre-wrap;">
                  ${message}
                </td>
              </tr>
              ` : ''}
            </table>
            
            <p style="margin-top: 30px; color: #6b7280; font-size: 12px;">
              Αυτό το μήνυμα στάλθηκε αυτόματα από τη φόρμα επικοινωνίας του aggeio.eu
            </p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const errorData = await res.text();
      console.error("Resend API error:", errorData);
      throw new Error(`Failed to send email: ${errorData}`);
    }

    const data = await res.json();
    console.log("Contact email sent successfully:", data);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: unknown) {
    console.error("Error in send-contact-email function:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
