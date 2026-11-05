import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import heroImage from "@/assets/hero-coast.png";
import livingRoom from "@/assets/living-room.png";
import terraceSunset from "@/assets/terrace-sunset.png";
import lobbyOcean from "@/assets/lobby-ocean.png";
import smartHome from "@/assets/smart-home.png";
import kitchen from "@/assets/kitchen.png";
import villaShowcase from "@/assets/villa-showcase.png";
import oceanfrontTerrace from "@/assets/oceanfront-terrace.png";
import smartLiving from "@/assets/smart-living.png";
import turquoiseSkyline from "@/assets/turquoise-skyline.png";
import venueImage from "@/assets/venue.png";
import { Reveal, SectionLabel, SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Turnkey Show Alamein | The Coast's Complete Property Solutions Platform" },
      {
        name: "description",
        content:
          "The coast's complete property solutions platform. Turnkey Show Alamein connects property owners, developers, and hospitality operators with complete furnishing, fit-out, appliances, and smart living solutions.",
      },
      { property: "og:title", content: "Turnkey Show Alamein | The Coast's Complete Property Solutions Platform" },
      {
        property: "og:description",
        content: "The coast's complete property solutions platform. Connecting the entire property fit-out ecosystem at New Alamein.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const sectors = [
  { title: "Furniture & Interiors", image: livingRoom, detail: "Furnishing solutions for new handovers and existing coastal properties." },
  { title: "Home Appliances", image: kitchen, detail: "Essential, built-in and lifestyle appliances for ready-to-operate units." },
  { title: "Outdoor Living", image: terraceSunset, detail: "Outdoor furniture and solutions designed for the Mediterranean coastal lifestyle." },
  { title: "Smart Home", image: smartHome, detail: "Technology for comfort, security, energy efficiency and connected living." },
  { title: "Hospitality Fit-Out", image: lobbyOcean, detail: "High-spec commercial solutions for hotels, serviced apartments and rental properties." },
  { title: "Complete Solutions", image: villaShowcase, detail: "Integrated turnkey solutions taking properties from handover to investment-ready." },
];

const stats = [
  { value: "1.2T EGP", label: "Real Estate Transactions", sub: "North Coast | 2024–2025" },
  { value: "185B EGP", label: "Targeted Investment", sub: "New Alamein" },
  { value: "46,189+", label: "Residential Units", sub: "New Alamein" },
];

const eventDates = "TO BE CONFIRMED";

function Index() {
  return (
    <SiteLayout>
      <main>
        {/* Redesigned Homepage Hero Section */}
        <section className="hero-section" aria-label="Introduction">
          <div className="hero-media">
            <img
              className="hero-bg-img"
              src={heroImage}
              alt="Aerial view of New Alamein turquoise Mediterranean coastline with modern residential and resort towers"
              width={2400}
              height={1350}
              fetchPriority="high"
            />
            <div className="hero-gradient-directional" aria-hidden="true" />
            <div className="hero-gradient-bottom" aria-hidden="true" />
          </div>

          <div className="page-width hero-container">
            {/* Left-aligned content stack */}
            <div className="hero-stack">
              <div className="hero-red-rule" aria-hidden="true" />
              <h1 className="hero-headline">
                <span className="hero-line">
                  <span className="hero-line-inner">Turnkey Show</span>
                </span>
                <span className="hero-line">
                  <span className="hero-line-inner">Alamein</span>
                </span>
              </h1>
              <p className="hero-subhead">
                The coast's complete property solutions platform.
              </p>
              <div className="hero-btn-row">
                <a href="/contact#visitor-registration" className="hero-btn hero-btn-primary">
                  Register to visit
                  <svg className="hero-btn-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M6 3.5L10.5 8L6 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="/contact#exhibitor-enquiry" className="hero-btn hero-btn-secondary">
                  Book your space
                  <svg className="hero-btn-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M6 3.5L10.5 8L6 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Anchored Info Strip (Subtle Dark Glass Bar) */}
            <div className="hero-info-strip liquid-glass-dark" role="region" aria-label="Event Key Information">
              <div className="info-strip-col">
                <span className="info-strip-label">Dates</span>
                <span className="info-strip-value">{eventDates}</span>
              </div>
              <div className="info-strip-col">
                <span className="info-strip-label">Venue</span>
                <span className="info-strip-value">New Alamein International Convention and Exhibition Center</span>
              </div>
              <div className="info-strip-col info-strip-focus">
                <span className="info-strip-label">Focus</span>
                <span className="info-strip-value">People · Spaces · Ideas · Opportunities</span>
              </div>
            </div>
          </div>
        </section>

        {/* Market Overview Section */}
        <section className="intro-section page-width" id="about">
          <Reveal className="intro-image-wrap">
            <img
              src={oceanfrontTerrace}
              alt="Luxury oceanfront terrace overlooking the Mediterranean coast"
              width={1600}
              height={1024}
              loading="lazy"
            />
            <span className="image-index liquid-glass-dark">From Handover to Ready-to-Live</span>
          </Reveal>
          <Reveal className="intro-copy">
            <p className="eyebrow">Market Insights</p>
            <h2>
              The North Coast is entering<br />
              <em>a new era.</em>
            </h2>
            <p>
              From seasonal destinations to a growing year-round investment, hospitality, and lifestyle economy.
              The North Coast and the city of New Alamein are experiencing unprecedented real estate expansion, creating a surge in demand for properties ready for immediate occupancy, rental, and investment.
            </p>
            <div className="home-stats">
              {stats.map((stat) => (
                <div className="home-stat" key={stat.value}>
                  <strong>{stat.value}</strong>
                  <span>
                    {stat.label}<br />
                    {stat.sub}
                  </span>
                </div>
              ))}
            </div>
            <a className="text-link" href="/about">
              Discover the Show Concept <ArrowRight className="w-4 h-4 ml-1 inline" aria-hidden="true" />
            </a>
          </Reveal>
        </section>

        {/* Sectors Section */}
        <section className="sectors-section section-band" id="sectors">
          <div className="page-width">
            <Reveal className="section-heading">
              <div>
                <p className="eyebrow">All Needs Under One Roof</p>
                <h2>Explore the Sectors</h2>
                <p>Complete fitting-out sectors required to transform a property into a fully furnished, finished space.</p>
              </div>
              <a className="text-link" href="/exhibit">
                Exhibitor Opportunities <ArrowUpRight className="w-4 h-4 ml-1 inline" aria-hidden="true" />
              </a>
            </Reveal>
            <div className="sector-grid">
              {sectors.map((sector, index) => (
                <Reveal key={sector.title} className={`sector-card sector-card-${index + 1}`}>
                  <img src={sector.image} alt={sector.title} width={1600} height={1024} loading="lazy" />
                  <div className="sector-card-copy">
                    <span>0{index + 1}</span>
                    <h3>{sector.title}</h3>
                    <p>{sector.detail}</p>
                    <ArrowUpRight className="w-5 h-5 card-arrow" aria-hidden="true" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem / Opportunity Section */}
        <section className="opportunity-section page-width">
          <Reveal className="opportunity-copy">
            <p className="eyebrow">The Demand Engine</p>
            <h2>
              From Property Delivery<br />
              <em>to Property Value.</em>
            </h2>
            <p>
              A property's journey doesn't end at handover. It needs to be furnished, equipped, connected, and continuously upgraded.
              Turnkey Show connects the entire ecosystem — manufacturers, suppliers, developers, operators, and property buyers — under one roof.
            </p>
            <div className="sector-pill-list">
              <span>Furniture</span>
              <span>Appliances</span>
              <span>Outdoor</span>
              <span>Smart Home</span>
              <span>Hospitality Fit-Out</span>
              <span>Complete Solutions</span>
            </div>
            <a className="text-link" href="/about#market-overview">
              Explore the Market Insights <ArrowRight className="w-4 h-4 ml-1 inline" aria-hidden="true" />
            </a>
          </Reveal>
          <Reveal className="opportunity-visual">
            <img
              src={smartLiving}
              alt="Smart coastal living space with modern furnishings"
              width={1600}
              height={1024}
              loading="lazy"
            />
            <div className="opportunity-stamp liquid-glass-dark">
              <span>ONE DESTINATION</span>
              <span>EVERY SOLUTION</span>
              <span className="stamp-sub">COMPLETE PURCHASE JOURNEY</span>
            </div>
          </Reveal>
        </section>

        {/* Venue Section */}
        <section className="venue-section" id="venue">
          <div className="venue-image">
            <img
              src={venueImage}
              alt="Al Alamein International Conference & Exhibition Center"
              width={1600}
              height={1024}
              loading="lazy"
            />
          </div>
          <Reveal className="venue-copy">
            <p className="eyebrow">The Venue</p>
            <h2>
              Al Alamein International<br />
              Conference &amp; Exhibition Center
            </h2>
            <p>
              A purpose-built venue equipped to support high-level international trade fairs. Featuring modern exhibition halls, advanced audiovisual technology, fully equipped conference suites, and integrated visitor facilities.
            </p>
            <div className="venue-badge-strip">
              <span>Modern Halls</span>
              <span>Advanced Tech</span>
              <span>Integrated Services</span>
            </div>
            <a className="text-link light-link" href="/visit#venue">
              Plan Your Visit <ArrowUpRight className="w-4 h-4 ml-1 inline" aria-hidden="true" />
            </a>
          </Reveal>
        </section>

        {/* Organized by Section (Ample Margins & Full Responsive Breathing Room) */}
        <section className="organizer-section" aria-label="Organizer Profile">
          <div className="page-width organizer-inner">
            <Reveal className="organizer-heading-block">
              <SectionLabel>Organized by</SectionLabel>
              <h2>BUILT ON A DEEP UNDERSTANDING OF MARKETS.</h2>
            </Reveal>
            <Reveal className="organizer-details">
              <strong>APEX</strong>
              <p>
                Apex Conventions and Trade Fairs L.L.C is a trade-fair organizer with more than 15 years of experience in developing and delivering specialized exhibitions. Our work is built around a simple principle: a successful trade fair starts with understanding the market. We identify the industry, understand its business environment, define the right audience, and develop an exhibition platform that brings the relevant companies and professionals together.
              </p>
              <div className="organizer-link-wrap">
                <a href="mailto:info@turnkeyshow.com" className="organizer-email-link">
                  info@turnkeyshow.com
                </a>
              </div>
            </Reveal>
            <img
              src={turquoiseSkyline}
              alt=""
              className="organizer-bg-img"
              width={1920}
              height={1024}
              loading="lazy"
              aria-hidden="true"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="home-cta page-width">
          <div className="home-cta-content">
            <Reveal>
              <p className="eyebrow">Move Forward</p>
              <h2>
                A Brighter Living<br />
                Tomorrow Starts Here.
              </h2>
              <p>Position your brand at the heart of the North Coast's next wave of demand.</p>
              <div className="cta-actions">
                <a href="/contact#exhibitor-enquiry" className="hero-btn hero-btn-primary">
                  Book your space
                  <svg className="hero-btn-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M6 3.5L10.5 8L6 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a className="text-link light-link" href="/contact#visitor-registration">
                  Register to visit <ArrowUpRight className="w-4 h-4 ml-1 inline" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>
          <img
            src={turquoiseSkyline}
            alt="Sunset over the turquoise Mediterranean coast at New Alamein"
            width={1920}
            height={1024}
            loading="lazy"
          />
        </section>
      </main>
    </SiteLayout>
  );
}
