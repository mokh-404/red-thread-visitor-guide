import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Building2, BriefcaseBusiness, Hotel, Sofa, UsersRound, Wrench } from "lucide-react";

import exhibitionImage from "@/assets/exhibition-hall.jpg";
import interiorImage from "@/assets/coastal-interior.jpg";
import { Button } from "@/components/ui/button";
import { CtaBand, PageHero, Reveal, SectionLabel, SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/exhibit")({
  component: ExhibitPage,
  head: () => ({
    meta: [
      { title: "Exhibit | Turnkey Show Alamein" },
      { name: "description", content: "Put your brand at the heart of the North Coast’s growing demand for furniture, interiors, appliances, smart home and hospitality fit-out." },
      { property: "og:title", content: "Exhibit | Turnkey Show Alamein" },
      { property: "og:description", content: "Meet the property and hospitality professionals shaping the next wave of coastal demand." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ExhibitPage() {
  const audiences = [
    { title: "Property owners & investors", icon: Building2 },
    { title: "Developers & project teams", icon: BriefcaseBusiness },
    { title: "Hospitality operators", icon: Hotel },
    { title: "Architects & interior designers", icon: Sofa },
    { title: "Contractors & procurement", icon: Wrench },
    { title: "Corporate & commercial buyers", icon: UsersRound },
  ];

  return (
    <SiteLayout>
      <main>
        <PageHero index="02" eyebrow="Exhibit at Turnkey Show" title={"Be where the next\ndecisions are made."} description="Meet a business audience with real projects and real needs, as the North Coast’s residential, tourism and hospitality markets continue to evolve." image={exhibitionImage} imageAlt="A contemporary furniture and home solutions exhibition" />
        <section className="exhibit-statement page-width">
          <Reveal><SectionLabel>Why exhibit</SectionLabel><h2>Position your brand at the heart of the North Coast’s next wave of demand.</h2></Reveal>
          <Reveal className="exhibit-statement-side"><p>From smart furniture to complete property solutions, Turnkey Show brings the sectors involved in finishing, furnishing and equipping spaces under one roof.</p><Button asChild size="lg" className="show-button"><a href="/contact#exhibitor-enquiry">Book your space <ArrowRight aria-hidden="true" /></a></Button></Reveal>
        </section>
        <section className="exhibitor-opportunity section-band">
          <div className="page-width exhibitor-opportunity-inner"><Reveal className="exhibitor-opportunity-photo"><img src={interiorImage} alt="A ready-to-live coastal property with a complete interior" width={1600} height={1024} loading="lazy" /><span>01 / From handover to ready for life</span></Reveal><Reveal className="exhibitor-opportunity-copy"><SectionLabel>One destination. Every solution.</SectionLabel><h2>Show up where<br />demand is <em>created.</em></h2><p>With New Alamein and the North Coast growing as residential, tourism and hospitality destinations, businesses are looking for the products and expertise that complete a property and keep it performing.</p><p>Meet the people involved in furnishing, equipping, operating and upgrading those spaces.</p><a className="text-link" href="/about#market-overview">Understand the market <ArrowUpRight aria-hidden="true" /></a></Reveal></div>
        </section>
        <section className="visitor-profile page-width">
          <Reveal className="visitor-profile-intro"><SectionLabel>A relevant audience</SectionLabel><h2>Real projects.<br /><em>Real purchasing potential.</em></h2><p>Turnkey Show brings together a high-value audience actively involved in ownership, investment, development, furnishing and project delivery.</p></Reveal>
          <div className="audience-list">{audiences.map(({ title, icon: Icon }, index) => <Reveal className="audience-item" key={title}><span>0{index + 1}</span><Icon aria-hidden="true" /><h3>{title}</h3><ArrowUpRight aria-hidden="true" /></Reveal>)}</div>
        </section>
        <section className="exhibit-sectors section-band"><div className="page-width"><Reveal className="section-heading"><div><SectionLabel>Show sectors</SectionLabel><h2>Every part of<br />the property journey.</h2></div><p>Specialised sectors and dedicated halls create a seamless visitor experience and connect exhibitors with the people their work is made for.</p></Reveal><div className="exhibit-sector-list">{["Furniture & interiors", "Home appliances", "Outdoor living", "Smart home technology", "Hospitality fit-out", "Complete property solutions"].map((sector, index) => <Reveal className="exhibit-sector" key={sector}><span>0{index + 1}</span><h3>{sector}</h3><ArrowRight aria-hidden="true" /></Reveal>)}</div></div></section>
        <CtaBand eyebrow="Join the show" title="Put your brand in the conversation." href="/contact#exhibitor-enquiry" label="Enquire about exhibiting" />
      </main>
    </SiteLayout>
  );
}