import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Building2, Mail, MapPin, Phone, Send, User } from "lucide-react";

import coastImage from "@/assets/turquoise-skyline.png";
import venueImage from "@/assets/venue.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageHero, Reveal, SectionLabel, SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us | Turnkey Show Alamein 2027" },
      {
        name: "description",
        content: "Get in touch with the Turnkey Show team for space booking, visitor registration, sponsorship, and media partnerships.",
      },
      { property: "og:title", content: "Contact Us | Turnkey Show Alamein 2027" },
      { property: "og:description", content: "Direct contact with organizers Apex Conventions & Trade Fairs L.L.C." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ContactPage() {
  return (
    <SiteLayout>
      <main>
        <PageHero
          index="05"
          eyebrow="Get in Touch"
          title={"LET'S START A\nCONVERSATION."}
          description="Whether you're interested in exhibiting, visiting, or exploring sponsorship packages for Turnkey Show 2027, our dedicated event management team is ready to assist."
          image={coastImage}
          imageAlt="Turquoise coastline of New Alamein"
        />

        {/* Exhibitor Enquiry */}
        <section className="contact-form-section page-width" id="exhibitor-enquiry">
          <Reveal className="contact-form-section-intro">
            <SectionLabel>Book Your Space</SectionLabel>
            <h2>INTERESTED IN EXHIBITING?</h2>
            <p>Tell us about your brand and required booth space. Our sales representatives will respond with available floor plans, stand options, and custom packages.</p>
          </Reveal>
          <Reveal className="contact-grid">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="exhibitor-company"><Building2 aria-hidden="true" /> Company Name</label>
                  <Input id="exhibitor-company" name="company" placeholder="Your company name" required />
                </div>
                <div className="form-field">
                  <label htmlFor="exhibitor-contact"><User aria-hidden="true" /> Contact Person</label>
                  <Input id="exhibitor-contact" name="contact" placeholder="Full name" required />
                </div>
              </div>
              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="exhibitor-email"><Mail aria-hidden="true" /> Business Email</label>
                  <Input id="exhibitor-email" name="email" type="email" placeholder="you@company.com" required />
                </div>
                <div className="form-field">
                  <label htmlFor="exhibitor-phone"><Phone aria-hidden="true" /> Phone / WhatsApp</label>
                  <Input id="exhibitor-phone" name="phone" type="tel" placeholder="+20 xxx xxx xxxx" required />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="exhibitor-message"><Send aria-hidden="true" /> Space Requirements / Inquiries</label>
                <Textarea id="exhibitor-message" name="message" placeholder="Estimated space (sqm), product categories, or specific booth requirements..." rows={5} />
              </div>
              <Button type="submit" size="lg" className="show-button">
                SUBMIT EXHIBITOR ENQUIRY <span className="btn-arrow">&gt;</span>
              </Button>
            </form>
            <div className="contact-form-image">
              <img src={venueImage} alt="Al Alamein International Conference & Exhibition Center" width={1600} height={1024} loading="lazy" />
            </div>
          </Reveal>
        </section>

        {/* Visitor Registration */}
        <section className="contact-form-section contact-visitor-section section-band" id="visitor-registration">
          <div className="page-width">
            <Reveal className="contact-form-section-intro">
              <SectionLabel>Visitor Pass</SectionLabel>
              <h2>REGISTER TO VISIT</h2>
              <p>Sign up now to receive your free entry badge, access the digital exhibitor directory, and get event updates.</p>
            </Reveal>
            <Reveal className="contact-grid">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <div className="form-field">
                    <label htmlFor="visitor-name"><User aria-hidden="true" /> Full Name</label>
                    <Input id="visitor-name" name="name" placeholder="Your full name" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="visitor-email"><Mail aria-hidden="true" /> Email Address</label>
                    <Input id="visitor-email" name="email" type="email" placeholder="you@example.com" required />
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-field">
                    <label htmlFor="visitor-company"><Building2 aria-hidden="true" /> Company / Organization <span className="optional">(optional)</span></label>
                    <Input id="visitor-company" name="company" placeholder="Company or studio" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="visitor-interest"><MapPin aria-hidden="true" /> Primary Interest</label>
                    <Input id="visitor-interest" name="interest" placeholder="e.g. Furniture, Smart Home, Hospitality Fit-Out" />
                  </div>
                </div>
                <Button type="submit" size="lg" className="show-button">
                  CONFIRM VISITOR REGISTRATION <span className="btn-arrow">&gt;</span>
                </Button>
              </form>
            </Reveal>
          </div>
        </section>

        {/* Contact Info */}
        <section className="contact-info-section page-width">
          <Reveal className="contact-info-grid">
            <div className="organized-by">
              <SectionLabel>Organized By</SectionLabel>
              <h3>Apex Conventions &amp; Trade Fairs L.L.C</h3>
              <ul>
                <li><Phone aria-hidden="true" /> <a href="tel:+20236971091">Phone: 02 369 71 091</a></li>
                <li><Phone aria-hidden="true" /> <a href="tel:+201017575757">GSM: +2 010 17 57 57 57</a></li>
                <li><Phone aria-hidden="true" /> <a href="tel:+201041555455">GSM: +2 010 41 55 54 55</a></li>
                <li><Mail aria-hidden="true" /> <a href="mailto:info@turnkeyshow.com">info@turnkeyshow.com</a></li>
              </ul>
            </div>
            <div className="organized-by">
              <SectionLabel>Exhibition Venue</SectionLabel>
              <h3>Al Alamein International Center</h3>
              <ul>
                <li><MapPin aria-hidden="true" /> Al Alamein International Conference &amp; Exhibition Center</li>
                <li><MapPin aria-hidden="true" /> New Alamein City, Matrouh Governorate, Egypt</li>
                <li><Mail aria-hidden="true" /> <a href="mailto:info@turnkeyshow.com">info@turnkeyshow.com</a></li>
              </ul>
            </div>
            <div className="organized-by">
              <SectionLabel>Follow the Show</SectionLabel>
              <h3>Connect Online</h3>
              <ul className="social-links">
                <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a></li>
              </ul>
            </div>
          </Reveal>
        </section>
      </main>
    </SiteLayout>
  );
}
