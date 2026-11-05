import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  BriefcaseBusiness,
  Hotel,
  Sofa,
  UsersRound,
  Wrench,
  Download,
  CheckCircle2,
  CalendarDays,
  MapPin,
} from "lucide-react";

import livingRoom from "@/assets/living-room.png";
import terraceSunset from "@/assets/terrace-sunset.png";
import smartLiving from "@/assets/smart-living.png";
import kitchen from "@/assets/kitchen.png";
import villaShowcase from "@/assets/villa-showcase.png";
import oceanfrontTerrace from "@/assets/oceanfront-terrace.png";
import lobbyOcean from "@/assets/lobby-ocean.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CtaBand, PageHero, Reveal, SectionLabel, SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/exhibit")({
  component: ExhibitPage,
  head: () => ({
    meta: [
      { title: "Exhibit | Turnkey Show Alamein 2027" },
      {
        name: "description",
        content:
          "Position your brand at the heart of the North Coast's next wave of demand. Exhibit at Turnkey Show, 06–09 May 2027, New Alamein.",
      },
      { property: "og:title", content: "Exhibit | Turnkey Show Alamein 2027" },
      {
        property: "og:description",
        content: "Meet property owners, developers, and hospitality operators shaping the next wave of coastal demand.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ExhibitPage() {
  const [brochureSent, setBrochureSent] = useState(false);

  const audiences = [
    { title: "Property Owners", desc: "Private owners preparing and furnishing coastal villas & apartments", icon: Building2 },
    { title: "Investors", desc: "Individual and institutional real estate & rental portfolio investors", icon: BriefcaseBusiness },
    { title: "Developers", desc: "Leading coastal & national real estate developers and project leaders", icon: Building2 },
    { title: "Hospitality Operators", desc: "Hotel managers, boutique beach resorts, and serviced apartment operators", icon: Hotel },
    { title: "Architects & Interior Designers", desc: "Design studios and specifiers selecting furnishings and finishes", icon: Sofa },
    { title: "Contractors & Procurement Teams", desc: "Turnkey fit-out contractors, MEP and commercial procurement managers", icon: Wrench },
    { title: "Corporate & Commercial Buyers", desc: "Enterprise buyers seeking volume furnishing and fit-out contracts", icon: UsersRound },
  ];

  const sectors = [
    { name: "Furniture & Interiors", img: livingRoom, desc: "Furnishing solutions for new handovers and existing coastal properties." },
    { name: "Home Appliances", img: kitchen, desc: "Essential, built-in and lifestyle appliances for ready-to-operate units." },
    { name: "Outdoor Living", img: terraceSunset, desc: "Outdoor furniture and solutions designed for the coastal lifestyle." },
    { name: "Smart Home Technology", img: smartLiving, desc: "Technology for comfort, security, energy efficiency and connected living." },
    { name: "Hospitality Fit-Out", img: lobbyOcean, desc: "Solutions for hotels, serviced apartments and rental properties." },
    { name: "Complete Property Solutions", img: villaShowcase, desc: "Integrated solutions taking properties from handover to investment-ready." },
  ];

  return (
    <SiteLayout>
      <main>
        <PageHero
          index="02"
          eyebrow="Exhibit at Turnkey Show"
          title={"POSITION YOUR BRAND AT THE HEART OF\nTHE NORTH COAST'S NEXT WAVE OF DEMAND."}
          description="Alamein Turnkey Show comes at a pivotal moment for the residential, hospitality, and tourism market in New Alamein and the North Coast. Exhibit where demand is being created — and purchasing decisions are being made."
          image={oceanfrontTerrace}
          imageAlt="Luxury coastal living looking toward New Alamein"
        />

        {/* Highlight Banner */}
        <section className="page-width exhibit-key-stat">
          <Reveal className="exhibit-stat-card">
            <div className="stat-number">15,000+</div>
            <div className="stat-text">
              <h3>UNITS ENTERING FINISHING &amp; FURNISHING STAGE</h3>
              <p>
                With the 2027 delivery pipeline indicating more than 15,000 residential and tourism units entering delivery across New Alamein and the North Coast, a significant wave of demand is surging for furniture, interiors, technology, finishing, and turnkey solutions.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Why Exhibit Statement */}
        <section className="exhibit-statement page-width">
          <Reveal className="exhibit-statement-main">
            <SectionLabel>Why Exhibit</SectionLabel>
            <h2>ALL NEEDS UNDER ONE ROOF<br /><em>From Smart Technology to Interior Luxury.</em></h2>
            <p>
              The show brings together the complete fitting-out sectors required to transform a property into a fully furnished, finished, and ready-to-use space.
            </p>
            <p>
              Specialized sectors and dedicated halls create a seamless visitor experience while giving exhibitors direct access to a highly relevant target audience.
            </p>
            <div className="statement-punchline">
              <span>One destination.</span> <span>Every solution.</span> <span>One complete purchase journey.</span>
            </div>
          </Reveal>
          <Reveal className="exhibit-statement-side">
            <div className="side-card">
              <h3>Secure Your Exhibition Space</h3>
              <p>Connect with pre-qualified buyers and project leads actively sourcing for coastal developments.</p>
              <div className="side-card-dates">
                <p><CalendarDays aria-hidden="true" /> 06 – 09 MAY 2027</p>
                <p><MapPin aria-hidden="true" /> Al Alamein International Conference &amp; Exhibition Center</p>
              </div>
              <Button asChild size="lg" className="show-button w-full">
                <a href="/contact#exhibitor-enquiry">
                  BOOK YOUR SPACE <span className="btn-arrow">&gt;</span>
                </a>
              </Button>
            </div>
          </Reveal>
        </section>

        {/* Show Sectors */}
        <section className="exhibit-sectors section-band">
          <div className="page-width">
            <Reveal className="section-heading">
              <div>
                <SectionLabel>Show Sectors</SectionLabel>
                <h2>The Show Connects the Entire<br />Unit-Fitting Sectors</h2>
              </div>
              <p>Direct exposure to private buyers, commercial developers, and hospitality specifiers.</p>
            </Reveal>

            <div className="sector-grid">
              {sectors.map((sector, index) => (
                <Reveal key={sector.name} className={`sector-card sector-card-${index + 1}`}>
                  <img src={sector.img} alt={sector.name} width={1600} height={1024} loading="lazy" />
                  <div className="sector-card-copy">
                    <span>0{index + 1}</span>
                    <h3>{sector.name}</h3>
                    <p>{sector.desc}</p>
                    <span className="card-arrow">&gt;</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Visitor Profile */}
        <section className="visitor-profile page-width">
          <Reveal className="visitor-profile-intro">
            <SectionLabel>Visitor Profile</SectionLabel>
            <h2>A BUSINESS AUDIENCE WITH<br /><em>REAL PROJECTS, REAL NEEDS &amp; REAL PURCHASING POTENTIAL.</em></h2>
            <p>
              Alamein Turnkey Show brings together a high-value audience actively involved in property ownership, investment, development, furnishing, hospitality, and project execution across New Alamein and the North Coast.
            </p>
          </Reveal>
          <div className="audience-list">
            {audiences.map(({ title, desc, icon: Icon }, index) => (
              <Reveal className="audience-item" key={title}>
                <span className="audience-num">0{index + 1}</span>
                <div className="audience-icon-wrap">
                  <Icon aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Download Sales Brochure Form */}
        <section className="brochure-download-section section-band" id="brochure">
          <div className="page-width brochure-download-inner">
            <Reveal className="brochure-copy">
              <SectionLabel>Sales Brochure</SectionLabel>
              <h2>Download the Exhibitor<br /><em>Sales Brochure &amp; Rate Card</em></h2>
              <p>
                Get complete insight into floor plans, booth categories, sponsorship packages, audience demographics, and early-booking benefits for Turnkey Show 2027.
              </p>
              <ul className="brochure-highlights">
                <li><CheckCircle2 aria-hidden="true" /> Detailed floor plan &amp; hall zoning</li>
                <li><CheckCircle2 aria-hidden="true" /> Space-only vs shell scheme options &amp; pricing</li>
                <li><CheckCircle2 aria-hidden="true" /> Sponsorship &amp; marketing opportunities</li>
                <li><CheckCircle2 aria-hidden="true" /> Coastal market data &amp; visitor demographics</li>
              </ul>
            </Reveal>

            <Reveal className="brochure-form-card">
              {brochureSent ? (
                <div className="brochure-success">
                  <CheckCircle2 className="success-icon" aria-hidden="true" />
                  <h3>Brochure Request Received</h3>
                  <p>Thank you! We've dispatched the 2027 Exhibitor Sales Brochure to your email. Our sales team will also be in touch shortly.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setBrochureSent(true);
                  }}
                  className="brochure-form"
                >
                  <h3>Request Sales Brochure</h3>
                  <p>Fill out the form below to receive the official digital brochure.</p>
                  <div className="form-field">
                    <label htmlFor="b-name">Your Name</label>
                    <Input id="b-name" placeholder="Full name" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="b-company">Company Name</label>
                    <Input id="b-company" placeholder="Company name" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="b-email">Business Email</label>
                    <Input id="b-email" type="email" placeholder="you@company.com" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="b-phone">Phone Number</label>
                    <Input id="b-phone" type="tel" placeholder="+20 xxx xxx xxxx" required />
                  </div>
                  <Button type="submit" size="lg" className="show-button w-full">
                    <Download aria-hidden="true" /> DOWNLOAD SALES BROCHURE <span className="btn-arrow">&gt;</span>
                  </Button>
                </form>
              )}
            </Reveal>
          </div>
        </section>

        <CtaBand
          eyebrow="Exhibit at Turnkey Show 2027"
          title="Put your brand in front of active coastal buyers."
          href="/contact#exhibitor-enquiry"
          label="Book Your Space Now"
        />
      </main>
    </SiteLayout>
  );
}
