import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import oceanfrontTerrace from "@/assets/oceanfront-terrace.png";
import terraceSunset from "@/assets/terrace-sunset.png";
import turquoiseSkyline from "@/assets/turquoise-skyline.png";
import venueImage from "@/assets/venue.png";
import { ArrowLink, PageHero, Reveal, SectionLabel, SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About | Turnkey Show Alamein 2027" },
      {
        name: "description",
        content:
          "Turnkey Show connects property owners, investors, developers and hospitality professionals with leading brands for furniture, fit-out, appliances, outdoor living and smart technology.",
      },
      { property: "og:title", content: "About | Turnkey Show Alamein 2027" },
      { property: "og:description", content: "From property delivery to property value. The complete coastal property solutions platform." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function AboutPage() {
  return (
    <SiteLayout>
      <main>
        <PageHero
          index="01"
          eyebrow="About the Show"
          title={"TURNKEY SHOW…\nTHE COAST'S COMPLETE PROPERTY SOLUTIONS PLATFORM"}
          description="A premium show dedicated to furniture, fit-out, appliances, outdoor living and smart technology for coastal and hospitality properties. Turnkey Show connects property owners, investors, developers and hospitality professionals with leading brands and solution providers."
          image={oceanfrontTerrace}
          imageAlt="Luxury oceanfront terrace overlooking the Mediterranean coast"
        />

        {/* The Concept */}
        <section className="editorial-section page-width" id="concept">
          <Reveal className="editorial-heading">
            <SectionLabel>The Concept</SectionLabel>
            <h2>FROM PROPERTY DELIVERY<br /><em>TO PROPERTY VALUE.</em></h2>
          </Reveal>
          <Reveal className="editorial-body">
            <p>
              A property's journey doesn't end at handover. It needs to be furnished, equipped, connected, and continuously upgraded.
            </p>
            <p>
              Turnkey Show brings these complete sectors together — connecting the growing coastal property market with the brands and solutions that shape its next stage.
            </p>
            <ArrowLink href="/exhibit">Explore Exhibitor Opportunities</ArrowLink>
          </Reveal>
        </section>

        {/* The Show Promise */}
        <section className="editorial-section page-width" id="promise">
          <Reveal className="editorial-heading">
            <SectionLabel>The Show Promise</SectionLabel>
            <h2>ONE DESTINATION.<br /><em>THE COMPLETE PROPERTY FIT-OUT.</em></h2>
          </Reveal>
          <Reveal className="editorial-body">
            <p>
              From the first furniture piece to the latest smart-home solution, the show is designed to showcase everything required to create a complete, functional, and attractive coastal property.
            </p>
            <p>
              It connects <strong>Furniture &amp; Interiors, Home Appliances, Outdoor Living, Smart Home Technology, Lighting &amp; Accessories, Hospitality Fit-Out, Property Solutions</strong> under one roof.
            </p>
          </Reveal>
        </section>

        {/* The Vision */}
        <section className="editorial-section page-width" id="vision">
          <Reveal className="editorial-heading">
            <SectionLabel>The Vision</SectionLabel>
            <h2>THE DESTINATION FOR<br /><em>COASTAL PROPERTY SOLUTIONS.</em></h2>
          </Reveal>
          <Reveal className="editorial-body">
            <p>
              To create the leading platform connecting real estate, design, technology, and hospitality — transforming coastal properties into furnished, connected, functional, and investment-ready experiences.
            </p>
          </Reveal>
        </section>

        {/* Market Overview */}
        <section className="editorial-section page-width" id="market-overview">
          <Reveal className="editorial-heading">
            <SectionLabel>Market Overview</SectionLabel>
            <h2>THE NORTH COAST IS ENTERING<br /><em>A NEW ERA.</em></h2>
          </Reveal>
          <Reveal className="editorial-body">
            <p>
              From seasonal destinations to a growing year-round investment, hospitality, and lifestyle economy. The North Coast and the city of New Alamein are experiencing a new phase of growth, driven by real estate expansion, increased hotel and residential capacity, and a surge in tourism activity.
            </p>
            <p>
              This growth is generating not only new real estate units but also a burgeoning market for properties ready for occupancy, rental, operation, and investment — as well as the associated Furniture, Home Appliances, Lighting &amp; Accessories, fixtures, outdoor living solutions, Smart Home Solutions, and Complete Fit-Out.
            </p>
          </Reveal>
        </section>

        {/* Why Now */}
        <section className="why-now-section section-band">
          <div className="page-width">
            <Reveal className="section-heading">
              <div>
                <SectionLabel>Why Now?</SectionLabel>
                <h2>A market moving from property delivery<br />to <em>property value creation.</em></h2>
              </div>
              <p>Growth creates a bigger journey than construction alone.</p>
            </Reveal>
            <div className="market-signals">
              {[
                ["01", "MORE DEVELOPMENT", "More properties entering the market."],
                ["02", "MORE HANDOVERS", "More units entering the furnishing and fit-out cycle."],
                ["03", "MORE TOURISM", "Growing seasonal and hospitality activity."],
                ["04", "MORE RENTAL ACTIVITY", "Greater demand for attractive, ready-to-operate properties."],
                ["05", "MORE UPGRADES", "Continuous demand for renovation, technology and property enhancement."],
              ].map(([num, title, text]) => (
                <Reveal key={num} className="signal">
                  <span className="signal-number">{num}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  <Check aria-hidden="true" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Two Markets One Opportunity */}
        <section className="two-market-section page-width">
          <Reveal className="two-market-heading">
            <SectionLabel>Two Markets. One Opportunity.</SectionLabel>
            <h2>From property delivery...<br /><em>to property value.</em></h2>
          </Reveal>
          <div className="market-columns">
            <Reveal className="market-column">
              <span className="column-index">01 / NEW SUPPLY</span>
              <h3>New handovers create immediate demand.</h3>
              <ul>
                <li>Furniture</li>
                <li>Home Appliances</li>
                <li>Lighting &amp; Accessories</li>
                <li>Outdoor Furniture</li>
                <li>Smart Home Solutions</li>
                <li>Complete Fit-Out</li>
              </ul>
              <p className="market-outcome">
                The opportunity: Converting the unit from a "delivered property" to a "ready-to-live" or "ready-to-rent" property.
              </p>
            </Reveal>
            <Reveal className="market-column market-column-second">
              <span className="column-index">02 / EXISTING SUPPLY</span>
              <h3>Existing units create recurring demand.</h3>
              <ul>
                <li>Renovation</li>
                <li>Furniture Replacement</li>
                <li>Interior Upgrades</li>
                <li>Smart Technology</li>
                <li>Outdoor Upgrades</li>
                <li>Rental Optimization</li>
              </ul>
              <p className="market-outcome">
                The opportunity: Enhancing the unit's appeal, improving the user experience, and revitalizing its operational and investment value.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Venue */}
        <section className="venue-highlight section-band">
          <div className="page-width venue-highlight-inner">
            <Reveal className="venue-highlight-copy">
              <SectionLabel>The Venue</SectionLabel>
              <h2>Al Alamein International<br />Conference &amp; Exhibition Center</h2>
              <p>
                The Show will be hosted at the New Alamein International Convention and Exhibition Center — a purpose-built venue equipped to support high-level international events. The facility offers modern conference halls, fully equipped meeting rooms, and advanced audiovisual and interpretation systems.
              </p>
              <p>
                On-site services include registration and accreditation areas, information desks, business and media facilities, and dedicated spaces for bilateral engagements.
              </p>
              <ArrowLink href="/visit#venue">Plan Your Visit</ArrowLink>
            </Reveal>
            <Reveal className="venue-highlight-image">
              <img
                src={venueImage}
                alt="Al Alamein International Conference & Exhibition Center"
                width={1600}
                height={1024}
                loading="lazy"
              />
            </Reveal>
          </div>
        </section>

        {/* Organizer */}
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

        {/* Discover How to Exhibit Section (Rich Editorial Layout) */}
        <section className="about-next-section" aria-label="Exhibitor Opportunities">
          <div className="page-width about-next-inner">
            <Reveal className="about-next-copy">
              <SectionLabel>Exhibitor Opportunities</SectionLabel>
              <h2>Showcase Your Solutions to the Coast's Largest Handover Market</h2>
              <p>
                Connect directly with property owners, real estate developers, interior designers, and hospitality project managers in Egypt's premier coastal investment destination. With more than 46,000 residential units and hospitality resorts entering completion in New Alamein, Turnkey Show delivers targeted buyers actively seeking complete turnkey furnishing and fit-out solutions.
              </p>
              <div className="about-next-highlights">
                <div className="about-next-item">
                  <strong>15,000+ Attendees</strong>
                  <span>Unit owners, architects, hospitality procurement managers & developers</span>
                </div>
                <div className="about-next-item">
                  <strong>6 Core Sectors</strong>
                  <span>Furniture, appliances, outdoor living, smart living & hospitality fit-out</span>
                </div>
              </div>
              <div className="about-next-action">
                <a href="/exhibit" className="hero-btn hero-btn-primary">
                  Discover How to Exhibit
                  <svg className="hero-btn-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M6 3.5L10.5 8L6 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </Reveal>
            <Reveal className="about-next-media">
              <img
                src={terraceSunset}
                alt="Luxury coastal resort living with Mediterranean view"
                width={1600}
                height={1024}
                loading="lazy"
              />
              <div className="about-next-badge liquid-glass-dark">
                <span>Prime Commercial Presence</span>
                <p>New Alamein International Exhibition Center</p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
