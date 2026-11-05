import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import coastImage from "@/assets/alamein-coast.jpg";
import interiorImage from "@/assets/coastal-interior.jpg";
import venueImage from "@/assets/convention-venue.jpg";
import { Button } from "@/components/ui/button";
import { ArrowLink, PageHero, Reveal, SectionLabel, SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Turnkey Show | From Property Delivery to Property Value" },
      { name: "description", content: "Learn how Turnkey Show connects the North Coast property market with furnishing, fit-out, hospitality and smart-living solutions." },
      { property: "og:title", content: "About Turnkey Show | From Property Delivery to Property Value" },
      { property: "og:description", content: "One platform connecting the solutions behind coastal property and hospitality." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function AboutPage() {
  return (
    <SiteLayout>
      <main>
        <PageHero index="01" eyebrow="About the show" title={"From property delivery\nto property value."} description="Turnkey Show connects the people, products and ideas that make a coastal property ready to live, rent, operate and invest in." image={interiorImage} imageAlt="A considered Mediterranean home, furnished and ready to enjoy" />
        <section className="editorial-section page-width" id="market-overview">
          <Reveal className="editorial-heading"><SectionLabel>The market is moving</SectionLabel><h2>The next chapter begins <em>after handover.</em></h2></Reveal>
          <Reveal className="editorial-body"><p>The North Coast and New Alamein are growing as residential, tourism and hospitality destinations. As more spaces enter the market, demand follows for the furniture, appliances, lighting, outdoor living and technology that bring them to life.</p><p>At the same time, existing homes and hospitality spaces create ongoing opportunities for renovation, refresh and smarter operation.</p><ArrowLink href="/visit">Explore the opportunity</ArrowLink></Reveal>
        </section>
        <section className="why-now-section section-band">
          <div className="page-width">
            <Reveal className="section-heading"><div><SectionLabel>Why now</SectionLabel><h2>New places.<br />New possibilities.</h2></div><p>Growth creates a bigger journey than construction alone: homes to complete, stays to prepare and spaces to keep improving.</p></Reveal>
            <div className="market-signals">
              {[
                ["01", "More development", "More properties entering the market."],
                ["02", "More handovers", "More homes entering the furnishing and fit-out cycle."],
                ["03", "More tourism", "A growing hospitality and year-round destination."],
                ["04", "More upgrades", "Continuous demand for refresh, technology and improvement."],
              ].map(([num, title, text]) => <Reveal key={num} className="signal"><span className="signal-number">{num}</span><div><h3>{title}</h3><p>{text}</p></div><Check aria-hidden="true" /></Reveal>)}
            </div>
          </div>
        </section>
        <section className="two-market-section page-width">
          <Reveal className="two-market-heading"><SectionLabel>Two markets. One opportunity.</SectionLabel><h2>Make more of<br /><em>every space.</em></h2></Reveal>
          <div className="market-columns">
            <Reveal className="market-column"><span className="column-index">01 / New supply</span><h3>Ready for what’s next.</h3><p>New handovers bring immediate demand for the pieces and services that turn an empty unit into a complete property.</p><ul><li>Furniture &amp; interiors</li><li>Appliances &amp; lighting</li><li>Outdoor &amp; smart-home solutions</li><li>Complete fit-out</li></ul><p className="market-outcome">The outcome <ArrowRight aria-hidden="true" /> Ready to live or ready to rent</p></Reveal>
            <Reveal className="market-column market-column-second"><span className="column-index">02 / Existing supply</span><h3>Value that keeps growing.</h3><p>Existing properties create recurring opportunities to renew, improve the experience and make a stay more appealing.</p><ul><li>Renovation &amp; replacement</li><li>Interior and outdoor upgrades</li><li>Smarter property technology</li><li>Rental optimisation</li></ul><p className="market-outcome">The outcome <ArrowRight aria-hidden="true" /> Renewed appeal and value</p></Reveal>
          </div>
        </section>
        <section className="organizer-section">
          <div className="page-width organizer-inner"><Reveal><SectionLabel>Organised by</SectionLabel><h2>Built on a deep<br />understanding of markets.</h2></Reveal><Reveal className="organizer-details"><strong>APEX</strong><p>Apex Conventions &amp; Trade Fairs has more than 15 years of experience developing specialised exhibitions. The work starts with understanding an industry, its business environment and the people it needs to bring together.</p><a href="mailto:info@apextradefairs.com">info@apextradefairs.com</a></Reveal><img src={coastImage} alt="The growing Mediterranean coastline around New Alamein" width={1920} height={1024} loading="lazy" /></div>
        </section>
        <div className="page-width about-next"><Button asChild variant="outline" size="lg"><a href="/exhibit">Discover how to exhibit <ArrowRight aria-hidden="true" /></a></Button><img src={venueImage} alt="" width={1600} height={1024} loading="lazy" /></div>
      </main>
    </SiteLayout>
  );
}