import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CalendarDays, MapPin } from "lucide-react";

import coastImage from "@/assets/alamein-coast.jpg";
import interiorImage from "@/assets/coastal-interior.jpg";
import exhibitionImage from "@/assets/exhibition-hall.jpg";
import venueImage from "@/assets/convention-venue.jpg";
import { Button } from "@/components/ui/button";
import { Reveal, SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Turnkey Show | Home Solutions for the North Coast" },
      {
        name: "description",
        content:
          "Discover Turnkey Show, the North Coast platform connecting furniture, interiors, appliances, outdoor living, smart home and hospitality solutions.",
      },
      { property: "og:title", content: "Turnkey Show | Home Solutions for the North Coast" },
      {
        property: "og:description",
        content: "One destination for the brands and ideas shaping coastal living.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <SiteLayout>
      <main>
        <section className="home-hero">
          <img
            className="home-hero-image"
            src={coastImage}
            alt="Mediterranean coastline and contemporary New Alamein waterfront"
            width={1920}
            height={1024}
            fetchPriority="high"
          />
          <div className="home-hero-shade" />
          <div className="home-hero-content page-width">
            <p className="eyebrow">The home solutions show</p>
            <h1>Turnkey Show<br />Alamein.</h1>
            <p className="home-hero-tagline">Design. Connect. Source. Grow.</p>
            <div className="home-event-details">
              <p><CalendarDays aria-hidden="true" /> 2027 · Dates to be confirmed</p>
              <p><MapPin aria-hidden="true" /> New Alamein International Convention &amp; Exhibition Center</p>
            </div>
            <Button asChild size="lg" className="show-button">
              <a href="/contact#visitor-registration">Register your interest <ArrowRight aria-hidden="true" /></a>
            </Button>
          </div>
          <div className="hero-side-note" aria-hidden="true">PEOPLE<br />SPACES<br />IDEAS<br />OPPORTUNITIES<span /></div>
          <div className="home-hero-caption page-width">
            <span>New Alamein · Egypt</span>
            <span>01 / A platform for what comes next</span>
          </div>
        </section>

        <section className="intro-section page-width" id="about">
          <Reveal className="intro-image-wrap">
            <img src={interiorImage} alt="Mediterranean home opening to a sunlit coast" width={1600} height={1024} loading="lazy" />
            <span className="image-index">A new chapter for coastal living</span>
          </Reveal>
          <Reveal className="intro-copy">
            <p className="eyebrow">Property, made ready for life</p>
            <h2>The coast is entering<br />a <em>new era.</em></h2>
            <p>As the North Coast grows into a year-round destination, more homes and hospitality spaces need to be furnished, equipped, connected and ready to welcome people.</p>
            <p>Turnkey Show brings the brands and solutions behind that next chapter together, in one place.</p>
            <a className="text-link" href="/about">Discover the show <ArrowUpRight aria-hidden="true" /></a>
          </Reveal>
        </section>

        <section className="sectors-section section-band" id="sectors">
          <div className="page-width">
            <Reveal className="section-heading">
              <div><p className="eyebrow">One destination. Every solution.</p><h2>Explore the sectors</h2><p>Everything that turns a delivered property into a place ready to live, stay and thrive.</p></div>
              <a className="text-link" href="/exhibit">Explore exhibiting <ArrowUpRight aria-hidden="true" /></a>
            </Reveal>
            <div className="sector-grid">
              {[
                { title: "Furniture & interiors", image: interiorImage, detail: "Spaces shaped around the way people live." },
                { title: "Home appliances", image: exhibitionImage, detail: "The essentials for a ready-to-use home." },
                { title: "Outdoor living", image: coastImage, detail: "Coastal living, beyond the front door." },
                { title: "Smart home", image: venueImage, detail: "Comfort, security and connected living." },
                { title: "Hospitality fit-out", image: exhibitionImage, detail: "Solutions for hotels and stays." },
                { title: "Complete solutions", image: interiorImage, detail: "From property handover to ready for life." },
              ].map((sector, index) => (
                <Reveal key={sector.title} className={`sector-card sector-card-${index + 1}`}>
                  <img src={sector.image} alt="" width={1600} height={1024} loading="lazy" />
                  <div className="sector-card-copy"><span>0{index + 1}</span><h3>{sector.title}</h3><p>{sector.detail}</p><ArrowUpRight aria-hidden="true" /></div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="opportunity-section page-width">
          <Reveal className="opportunity-copy">
            <p className="eyebrow">From property delivery to property value</p>
            <h2>One journey.<br /><em>Every detail.</em></h2>
            <p>A property’s story continues after handover. Furnishing, fit-out, technology and thoughtful upgrades make it ready to live in, rent, operate and invest in.</p>
            <a className="text-link" href="/about#market-overview">See the opportunity <ArrowUpRight aria-hidden="true" /></a>
          </Reveal>
          <Reveal className="opportunity-visual">
            <img src={exhibitionImage} alt="A home and hospitality solutions exhibition hall" width={1600} height={1024} loading="lazy" />
            <div className="opportunity-stamp"><span>One</span><span>complete</span><span>property journey</span><ArrowRight aria-hidden="true" /></div>
          </Reveal>
        </section>

        <section className="venue-section" id="venue">
          <div className="venue-image"><img src={venueImage} alt="Modern convention center on the Mediterranean coast" width={1600} height={1024} loading="lazy" /></div>
          <Reveal className="venue-copy">
            <p className="eyebrow">A place to meet</p>
            <h2>New Alamein,<br />within reach.</h2>
            <p>Meet the region’s growing property and hospitality community at the New Alamein International Convention &amp; Exhibition Center.</p>
            <a className="text-link" href="/visit#venue">Plan your visit <ArrowUpRight aria-hidden="true" /></a>
          </Reveal>
        </section>

        <section className="home-cta page-width">
          <div className="home-cta-content">
            <Reveal><p className="eyebrow">Be part of what’s next</p><h2>A brighter living<br />tomorrow starts here.</h2><p>Join the platform shaping the future of coastal homes and hospitality.</p>
              <div className="cta-actions">
                <Button asChild size="lg" className="show-button"><a href="/contact#exhibitor-enquiry">Enquire about exhibiting <ArrowRight aria-hidden="true" /></a></Button>
                <a className="text-link light-link" href="/contact#visitor-registration">Register to visit <ArrowUpRight aria-hidden="true" /></a>
              </div>
            </Reveal>
          </div>
          <img src={coastImage} alt="The Mediterranean coast at New Alamein" width={1920} height={1024} loading="lazy" />
        </section>
      </main>
    </SiteLayout>
  );
}
