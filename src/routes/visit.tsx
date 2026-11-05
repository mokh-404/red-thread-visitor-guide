import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock,
  MapPin,
  MoveUpRight,
} from "lucide-react";

import livingRoom from "@/assets/living-room.png";
import terraceSunset from "@/assets/terrace-sunset.png";
import smartLiving from "@/assets/smart-living.png";
import kitchen from "@/assets/kitchen.png";
import villaShowcase from "@/assets/villa-showcase.png";
import lobbyOcean from "@/assets/lobby-ocean.png";
import chalet from "@/assets/chalet.png";
import venueImage from "@/assets/venue.png";
import { Button } from "@/components/ui/button";
import { PageHero, Reveal, SectionLabel, SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/visit")({
  component: VisitPage,
  head: () => ({
    meta: [
      { title: "Visit | Turnkey Show Alamein 2027" },
      {
        name: "description",
        content:
          "Plan your visit to Turnkey Show at Al Alamein International Conference & Exhibition Center, 06–09 May 2027. One destination for the complete coastal property fit-out.",
      },
      { property: "og:title", content: "Visit | Turnkey Show Alamein 2027" },
      {
        property: "og:description",
        content: "Meet the brands and solutions behind the next chapter of coastal property and hospitality.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function VisitPage() {
  const exhibitorProfiles = [
    {
      title: "Furniture & Interiors",
      desc: "Furnishing solutions for new handovers and existing coastal properties. Custom luxury millwork, bedroom suites, living spaces, and bespoke styling.",
      image: livingRoom,
    },
    {
      title: "Home Appliances",
      desc: "Essential, built-in, energy-efficient and lifestyle appliances engineered for coastal living and ready-to-operate rental units.",
      image: kitchen,
    },
    {
      title: "Outdoor Living",
      desc: "Weather-resistant outdoor furniture, pergolas, decking, sun loungers, and landscape enhancements designed for the Mediterranean lifestyle.",
      image: terraceSunset,
    },
    {
      title: "Smart Home",
      desc: "Technology for comfort, remote security, automated climate control, energy management and connected coastal living.",
      image: smartLiving,
    },
    {
      title: "Hospitality Fit-Out",
      desc: "Heavy-duty commercial solutions for hotels, boutique beach resorts, serviced apartments, and rental properties.",
      image: lobbyOcean,
    },
    {
      title: "Complete Property Solutions",
      desc: "Integrated end-to-end turnkey solutions taking properties seamlessly from developer handover to fully furnished and investment-ready.",
      image: villaShowcase,
    },
  ];

  const whyVisitPoints = [
    {
      num: "01",
      title: "One Stop for All Your Property Needs",
      desc: "Connect directly with 100+ vetted manufacturers, interior studios, and turnkey fit-out contractors in one convenient venue.",
    },
    {
      num: "02",
      title: "Exclusive Event-Only Packages",
      desc: "Take advantage of special launch discounts, bundled turnkey furnishing packages, and priority delivery schedules.",
    },
    {
      num: "03",
      title: "Touch, Feel & Experience Solutions Live",
      desc: "Test smart home automation, inspect material quality, explore full-scale mock-up rooms, and compare finishes side-by-side.",
    },
    {
      num: "04",
      title: "Expert Guidance on Rental Optimization",
      desc: "Learn how modern furnishing, durable materials, and smart tech directly boost summer rental yields and long-term asset value.",
    },
  ];

  return (
    <SiteLayout>
      <main>
        <PageHero
          index="03"
          eyebrow="Visit Turnkey Show"
          title={"ONE DESTINATION.\nTHE COMPLETE PROPERTY FIT-OUT."}
          description="Whether you're furnishing a new coastal villa, upgrading a rental portfolio, or sourcing hospitality fit-outs, discover everything under one roof at New Alamein."
          image={chalet}
          imageAlt="Sunlit coastal retreat showcasing high-end furnishings"
        />

        {/* Quick Event Summary Strip */}
        <section className="event-info-strip section-band">
          <div className="page-width event-strip-grid">
            <div className="strip-item">
              <CalendarDays aria-hidden="true" />
              <div>
                <strong>DATES</strong>
                <span>06 – 09 MAY 2027</span>
              </div>
            </div>
            <div className="strip-item">
              <Clock aria-hidden="true" />
              <div>
                <strong>OPENING HOURS</strong>
                <span>11:00 AM – 8:00 PM Daily</span>
              </div>
            </div>
            <div className="strip-item">
              <MapPin aria-hidden="true" />
              <div>
                <strong>VENUE</strong>
                <span>Al Alamein International Conference &amp; Exhibition Center</span>
              </div>
            </div>
            <div className="strip-item strip-cta">
              <Button asChild size="default" className="show-button">
                <a href="/contact#visitor-registration">
                  REGISTER TO ATTEND <span className="btn-arrow">&gt;</span>
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Visit Section */}
        <section className="visit-value page-width">
          <Reveal className="visit-value-copy">
            <SectionLabel>Why Visit</SectionLabel>
            <h2>Everything to complete a property, <em>all in one place.</em></h2>
            <p>
              Turnkey Show is the premier exhibition dedicated to transforming handed-over residential and hospitality spaces into vibrant, ready-to-live and high-yielding destinations.
            </p>
            <p>
              Gain direct access to premier manufacturers, turnkey contractors, lighting designers, appliance specialists, and smart automation innovators actively servicing the North Coast boom.
            </p>
            <div className="why-visit-highlights">
              {whyVisitPoints.map((item) => (
                <div key={item.num} className="highlight-row">
                  <span className="hl-num">{item.num}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="show-button mt-4">
              <a href="/contact#visitor-registration">
                REGISTER YOUR INTEREST <span className="btn-arrow">&gt;</span>
              </a>
            </Button>
          </Reveal>
          <Reveal className="visit-value-image">
            <img src={livingRoom} alt="A thoughtfully equipped coastal living space" width={1600} height={1024} loading="lazy" />
            <span className="image-caption-tag">Transform handed-over spaces into ready-to-live luxury</span>
          </Reveal>
        </section>

        {/* Exhibitor Profile Section */}
        <section className="exhibitor-profile-section section-band">
          <div className="page-width">
            <Reveal className="section-heading">
              <div>
                <SectionLabel>Exhibitor Profile</SectionLabel>
                <h2>The Show Connects the Entire<br /><em>Unit-Fitting Sectors</em></h2>
              </div>
              <p>Explore specialized halls and curated showcases covering every aspect of coastal fit-out.</p>
            </Reveal>

            <div className="exhibitor-profile-grid">
              {exhibitorProfiles.map((sector, index) => (
                <Reveal key={sector.title} className="exhibitor-profile-card">
                  <div className="profile-card-image">
                    <img src={sector.image} alt={sector.title} width={800} height={500} loading="lazy" />
                    <span className="profile-index">0{index + 1}</span>
                  </div>
                  <div className="profile-card-body">
                    <h3>{sector.title}</h3>
                    <p>{sector.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Who Should Attend */}
        <section className="visitor-profile visit-profile page-width">
          <Reveal className="section-heading text-center mx-auto max-w-2xl">
            <div>
              <SectionLabel>Who Should Attend</SectionLabel>
              <h2>A Meeting Point for the<br /><em>Property &amp; Hospitality Community</em></h2>
            </div>
            <p>Whether you're finishing a family chalet or managing a portfolio of hundreds of units, this event is designed for you.</p>
          </Reveal>
          <div className="visit-personas">
            {[
              { role: "Property Owners", note: "Furnishing new handovers or upgrading existing beach homes" },
              { role: "Real Estate Investors", note: "Optimizing unit appeal to maximize seasonal rental revenue" },
              { role: "Developers", note: "Sourcing turnkey fit-out partners for upcoming handovers" },
              { role: "Hospitality Operators", note: "Refurbishing resorts, chalets, and serviced residences" },
              { role: "Architects & Designers", note: "Selecting premium materials, fixtures, and modern interior lines" },
              { role: "Contractors & Procurement", note: "Securing bulk supply agreements and specialized installations" },
              { role: "Commercial Buyers", note: "Procuring commercial equipment, appliances, and smart solutions" },
            ].map((item, index) => (
              <Reveal className="visit-persona" key={item.role}>
                <span className="persona-num">0{index + 1}</span>
                <h3>{item.role}</h3>
                <p>{item.note}</p>
                <span className="persona-arrow">&gt;</span>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Venue Detail Section */}
        <section className="venue-detail page-width" id="venue">
          <Reveal className="venue-detail-copy">
            <SectionLabel>The Venue</SectionLabel>
            <h2>Al Alamein International<br />Conference &amp; Exhibition Center</h2>
            <p>
              The Show will be hosted at the New Alamein International Convention and Exhibition Center — a purpose-built venue equipped to support high-level international events.
            </p>
            <p>
              The facility offers modern exhibition and conference halls, fully equipped meeting rooms, and advanced audiovisual systems. On-site services include registration and accreditation areas, information desks, business and media facilities, and dedicated spaces for bilateral engagements.
            </p>
            <div className="venue-facts">
              <p><MapPin aria-hidden="true" /> New Alamein, Mediterranean Coast, Egypt</p>
              <p><CalendarDays aria-hidden="true" /> 06 – 09 MAY 2027</p>
            </div>
            <a
              className="text-link"
              href="https://www.google.com/maps/search/?api=1&query=New+Alamein+International+Convention+and+Exhibition+Center"
              target="_blank"
              rel="noreferrer"
            >
              Explore Location on Google Maps <MoveUpRight aria-hidden="true" />
            </a>
          </Reveal>
          <Reveal className="venue-detail-image">
            <img src={venueImage} alt="Al Alamein International Conference and Exhibition Center" width={1600} height={1024} loading="lazy" />
          </Reveal>
        </section>

        {/* Register Band */}
        <section className="visit-register-band">
          <div className="page-width">
            <Reveal className="register-band-inner">
              <SectionLabel>Visitor Registration</SectionLabel>
              <h2>Secure Your Free Visitor Pass<br /><em>for Turnkey Show 2027</em></h2>
              <p>Fast-track your entry, access full exhibitor directories, and schedule meetings in advance.</p>
              <Button asChild size="lg" className="show-button">
                <a href="/contact#visitor-registration">
                  REGISTER TO VISIT <span className="btn-arrow">&gt;</span>
                </a>
              </Button>
            </Reveal>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
