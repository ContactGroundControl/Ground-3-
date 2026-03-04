export default function HomePage() {
  return (
    <>
      <div className="hero">
        <div className="h1">Site Control & Land Acquisition for Energy Infrastructure</div>
        <div className="sub">
          Wind · Solar · BESS · Transmission · Pipeline<br />
          Fast, clean execution from first contact to recorded agreements.
        </div>

        <div className="kpiRow">
          <div className="kpi">Field-first execution</div>
          <div className="kpi">Clear documentation & tracking</div>
          <div className="kpi">Landowner communication that closes</div>
          <div className="kpi">Midwest coverage + national capability</div>
        </div>
      </div>

      <div className="grid">
        <div className="card">
          <div className="kicker">Core Services</div>
          <ul className="ul">
            <li>Landowner outreach, negotiation, and portfolio buildout</li>
            <li>Option/lease/easement execution & document control</li>
            <li>Title/ownership verification support & curative tracking</li>
            <li>Stakeholder coordination: survey, environmental, engineering</li>
            <li>Field coverage with rapid turnarounds across the Midwest</li>
          </ul>

          <div className="ctaRow">
            <a className="btn btnPrimary" href="mailto:contact@groundcontrol-llc.com">
              Email: contact@groundcontrol-llc.com
            </a>
            <a className="btn" href="tel:14026692419">Call: 402-669-2419</a>
          </div>

          <div style={{ marginTop: 10 }}>
            <small>Prefer text? Email works best and we’ll respond quickly.</small>
          </div>
        </div>

        <div className="card">
          <div className="kicker">Working With</div>
          <ul className="ul">
            <li>Developers, EPCs, and land teams</li>
            <li>Transmission & pipeline project groups</li>
            <li>BESS and renewable infrastructure sponsors</li>
          </ul>
          <div style={{ marginTop: 12 }}>
            <small>
              If you need a land team that can move fast without creating clean-up work later, we’re built for that.
            </small>
          </div>
        </div>
      </div>
    </>
  );
}
