export const metadata = { title: "About | Ground Control LLC" };

export default function AboutPage() {
  return (
    <>
      <div className="hero">
        <div className="h1">About</div>
        <div className="sub">
          Ground Control LLC provides field-driven site control and land acquisition support for energy infrastructure across the Midwest and beyond.
        </div>
      </div>

      <div className="twoCol" style={{ marginTop: 18 }}>
        <div className="card">
          <div className="kicker">How We Work</div>
          <ul className="ul">
            <li>Simple reporting, clean documents, clear next steps</li>
            <li>Landowner communication that is professional and direct</li>
            <li>Fast movement without cutting corners</li>
          </ul>
        </div>

        <div className="card">
          <div className="kicker">Service Area</div>
          <ul className="ul">
            <li>Iowa</li>
            <li>Nebraska</li>
            <li>Kansas</li>
            <li>Missouri</li>
            <li>South Dakota</li>
            <li>Colorado</li>
          </ul>
        </div>
      </div>
    </>
  );
}
