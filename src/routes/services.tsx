import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock, Mail, MapPin, Palette, Phone, Plane, Truck } from "lucide-react";

import lobbyImage from "@/assets/lobby-ocean.png";
import brochureSpread from "@/assets/brochure-spread.png";
import { Button } from "@/components/ui/button";
import { CtaBand, PageHero, Reveal, SectionLabel, SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services | Turnkey Show Alamein 2027" },
      {
        name: "description",
        content: "Exhibitor services including special decoration, freight forwarding, and travel arrangements for Turnkey Show 2027.",
      },
      { property: "og:title", content: "Services | Turnkey Show Alamein 2027" },
      { property: "og:description", content: "Appointed official contractors and services for Turnkey Show exhibitors." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ServicesPage() {
  return (
    <SiteLayout>
      <main>
        <PageHero
          index="04"
          eyebrow="Exhibitor Services"
          title={"EVERYTHING YOU NEED\nTO MAKE YOUR MARK."}
          description="From custom stand design and decoration to logistics and travel, our appointed service partners ensure a seamless and high-impact exhibition presence at Turnkey Show 2027."
          image={lobbyImage}
          imageAlt="A bright, modern lobby overlooking the Mediterranean coast"
        />

        <section className="services-grid-section page-width">
          <Reveal className="section-heading">
            <div>
              <SectionLabel>Support for Exhibitors</SectionLabel>
              <h2>SERVICES THAT KEEP YOUR FOCUS<br />ON <em>WHAT MATTERS.</em></h2>
            </div>
            <p>Our appointed partners provide everything you need to prepare, build, and manage your presence at the show.</p>
          </Reveal>

          <div className="service-card-grid">
            {/* Special Decoration - EXPO TECH */}
            <Reveal className="service-card service-card-featured">
              <div className="service-card-header">
                <Palette aria-hidden="true" />
                <div>
                  <SectionLabel>Official Contractor</SectionLabel>
                  <h3>SPECIAL DECORATION</h3>
                </div>
              </div>
              <div className="service-contractor-badge">
                <strong>EXPO TECH</strong>
                <span>Official Stand Design &amp; Fit-Out Contractor</span>
              </div>
              <p>Contact EXPO TECH for bespoke stand design, custom shell enhancements, graphic production, audiovisual rentals, and full on-site project execution.</p>
              <div className="service-contact-info">
                <div className="service-contact-row">
                  <Phone aria-hidden="true" />
                  <div>
                    <strong>Eng. Yasser Ramadan — Mr. Amr Mahmoud</strong>
                    <span>Operation Managers</span>
                  </div>
                </div>
                <div className="service-contact-row">
                  <Mail aria-hidden="true" />
                  <a href="mailto:yasser@expotech-eg.com">yasser@expotech-eg.com</a>
                </div>
                <div className="service-contact-row">
                  <Phone aria-hidden="true" />
                  <div>
                    <span>Mobile: 002 0111 166 2345</span>
                    <span>Phone: 00202 23 868 555 – 23 868 999</span>
                  </div>
                </div>
                <div className="service-contact-row">
                  <MapPin aria-hidden="true" />
                  <span>60 Al Tayaran St., Nasr City, Cairo, Egypt.</span>
                </div>
              </div>
              <Button asChild size="lg" className="show-button">
                <a href="mailto:yasser@expotech-eg.com">
                  CONTACT CONTRACTOR <span className="btn-arrow">&gt;</span>
                </a>
              </Button>
            </Reveal>

            {/* Freight Forwarding */}
            <Reveal className="service-card service-card-pending">
              <div className="service-card-header">
                <Truck aria-hidden="true" />
                <div>
                  <SectionLabel>Logistics</SectionLabel>
                  <h3>FREIGHT FORWARDING</h3>
                </div>
              </div>
              <div className="service-coming-soon">
                <Clock aria-hidden="true" />
                <span>COMING SOON</span>
              </div>
              <p>Details of the appointed official freight forwarding and customs clearance partner will be announced shortly. Exhibitors will receive full door-to-stand handling guidelines.</p>
            </Reveal>

            {/* Travel */}
            <Reveal className="service-card service-card-pending">
              <div className="service-card-header">
                <Plane aria-hidden="true" />
                <div>
                  <SectionLabel>Hospitality &amp; Transit</SectionLabel>
                  <h3>TRAVEL &amp; ACCOMMODATION</h3>
                </div>
              </div>
              <div className="service-coming-soon">
                <Clock aria-hidden="true" />
                <span>COMING SOON</span>
              </div>
              <p>Special hotel rates, shuttle transfers between Cairo / Alexandria and New Alamein, and VIP travel arrangements will be available through our appointed travel agency.</p>
            </Reveal>
          </div>
        </section>

        <section className="services-image-break">
          <img
            src={brochureSpread}
            alt="Turnkey Show exhibition floor and coastal living solutions"
            width={1920}
            height={1024}
            loading="lazy"
          />
        </section>

        <CtaBand
          eyebrow="Need Assistance with Your Booth?"
          title="Our operational team is here to support every step of your preparation."
          href="/contact#exhibitor-enquiry"
          label="Contact Operations"
        />
      </main>
    </SiteLayout>
  );
}
