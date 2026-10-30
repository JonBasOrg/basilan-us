import { awards, reviewMode, certifications } from "@/content/enterprise";

export function ReviewNotice() {
  return reviewMode ? <aside role="note" className="border-b border-accent/30 bg-accent/10 px-5 py-3 text-center text-sm text-chalk">Local content review · New project content is pending approval. Not for publication.</aside> : null;
}

export function AwardsSection() {
  return (
    <section className="section">
      <div className="container-x">
        <span className="eyebrow">Recognition</span>
        <h2 className="mt-4 font-display text-display-md">Awards &amp; recognition.</h2>
        {awards.length ? <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((award) => <article key={`${award.title}-${award.year}`} className="surface rounded-xl3 p-7">
            <p className="text-sm text-accent">{award.year}</p>
            <h3 className="mt-3 font-display text-xl">{award.title}</h3>
            {award.issuer && <p className="mt-2 text-sm text-chalk-faint">{award.issuer}</p>}
            <p className="mt-4 leading-relaxed text-chalk-muted">{award.description}</p>
          </article>)}
        </div> : <p className="mt-8 text-chalk-muted">No awards have been approved for publication yet.</p>}
        {certifications.length > 0 && <div className="mt-14"><h2 className="font-display text-2xl">Microsoft certification</h2><div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{certifications.map(cert => <article key={cert.title} className="surface rounded-xl3 p-7"><p className="text-sm text-accent">{cert.issuer}</p><h3 className="mt-3 font-display text-xl">{cert.title}</h3><p className="mt-4 leading-relaxed text-chalk-muted">{cert.description}</p></article>)}</div></div>}
      </div>
    </section>
  );
}
