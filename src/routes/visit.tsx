import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CalendarDays, MapPin, MoveUpRight } from "lucide-react";

import interiorImage from "@/assets/coastal-interior.jpg";
import venueImage from "@/assets/convention-venue.jpg";
import { Button } from "@/components/ui/button";
import { PageHero, Reveal, SectionLabel, SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/visit")({
  component: VisitPage,
  head: () => ({
    meta: [
      { title: "Visit | Turnkey Show Alamein" },
      { name: "description", content: "Plan your visit to Turnkey Show at the New Alamein International Convention & Exhibition Center. Dates for 2027 will be confirmed." },
      { property: "og:title", content: "Visit | Turnkey Show Alamein" },
      { property: "og:description", content: "Meet the people and solutions behind the next chapter of coastal property and hospitality." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function VisitPage() {
  return (
    <SiteLayout>
      <main>
        <PageHero index="03" eyebrow="Visit Turnkey Show" title={"See what’s next\nfor coastal living."} description="Meet the brands, products and professionals helping make North Coast homes, stays and hospitality spaces ready for what comes next." image={venueImage} imageAlt="The New Alamein Convention and Exhibition Center" />
        <section className="visit-value page-width">
          <Reveal className="visit-value-copy"><SectionLabel>Why visit</SectionLabel><h2>Everything to complete a property, <em>all in one place.</em></h2><p>Explore furniture, appliances, lighting, outdoor living, smart-home technology and fit-out solutions. Discover ideas for new handovers and fresh possibilities for existing spaces.</p><a className="text-link" href="/contact#visitor-registration">Register your interest <ArrowUpRight aria-hidden="true" /></a></Reveal>
          <Reveal className="visit-value-image"><img src={interiorImage} alt="A thoughtfully equipped coastal home" width={1600} height={1024} loading="lazy" /><span>Discover the complete property journey</span></Reveal>
        </section>
        <section className="visitor-profile visit-profile section-band"><div className="page-width"><Reveal className="section-heading"><div><SectionLabel>Made for people with plans</SectionLabel><h2>A meeting point for<br />the property community.</h2></div><p>Whether you are preparing a new home, planning a project or sourcing for a hospitality business, find the people and solutions relevant to your next step.</p></Reveal><div className="visit-personas">{["Property owners", "Investors", "Developers", "Hospitality operators", "Architects & designers", "Contractors & procurement teams", "Corporate & commercial buyers"].map((item, index) => <Reveal className="visit-persona" key={item}><span>0{index + 1}</span><h3>{item}</h3><ArrowUpRight aria-hidden="true" /></Reveal>)}</div></div></section>
        <section className="venue-detail page-width" id="venue">
          <Reveal className="venue-detail-copy"><SectionLabel>The venue</SectionLabel><h2>New Alamein International Convention &amp; Exhibition Center</h2><p>A purpose-built venue for international events, with modern conference halls, meeting rooms, advanced audiovisual systems and integrated visitor services.</p><div className="venue-facts"><p><MapPin aria-hidden="true" /> New Alamein, Egypt</p><p><CalendarDays aria-hidden="true" /> 2027 · Dates to be confirmed</p></div><a className="text-link" href="https://www.google.com/maps/search/?api=1&query=New+Alamein+International+Convention+and+Exhibition+Center" target="_blank" rel="noreferrer">Explore the location <MoveUpRight aria-hidden="true" /></a></Reveal>
          <Reveal className="venue-detail-image"><img src={venueImage} alt="Contemporary glass convention center set among palms" width={1600} height={1024} loading="lazy" /></Reveal>
        </section>
        <section className="visit-register-band"><div className="page-width"><Reveal><SectionLabel>Stay in the loop</SectionLabel><h2>Be the first to hear<br />when registration opens.</h2><p>Share your interest and our team can follow up with show updates.</p><Button asChild size="lg" className="show-button"><a href="/contact#visitor-registration">Register your interest <ArrowRight aria-hidden="true" /></a></Button></Reveal></div></section>
      </main>
    </SiteLayout>
  );
}