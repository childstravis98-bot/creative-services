import { Upload, Palette, Sparkles, ShoppingCart, Download, ShieldCheck, ImageIcon, Waves } from "lucide-react";
import "./styles.css";

export default function Home() {
  const styles = [
    "Surf & Coastal",
    "Racing & Speed",
    "Stealth Matte",
    "Retro Vintage",
    "Neon Cyber",
    "Camo Adventure",
    "Chrome Metallic",
    "Custom Theme",
  ];

  const plans = [
    { name: "Starter Pack", price: "$19", designs: "10 AI designs" },
    { name: "Pro Pack", price: "$29", designs: "25 AI designs", best: true },
    { name: "Ultimate Pack", price: "$49", designs: "50 AI designs" },
  ];

  return (
    <main>
      <nav className="nav">
        <div className="brand">
          <div className="brand-script">Beach House</div>
          <div className="brand-small">CREATIVES</div>
        </div>
        <div className="nav-links">
          <a href="#how">How It Works</a>
          <a href="#styles">Design Styles</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-button" href="#upload">Upload Your Bike</a>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">AI-Powered E-Bike Paint Designs</p>
          <h1>Your Bike. Your Style. Endless Possibilities.</h1>
          <p className="hero-text">
            Upload your e-bike, choose a style, and get custom AI-generated paint concepts.
            Buy your favorite design and download high-resolution files to bring your vision to life.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="#upload"><Upload size={19} /> Upload Your E-Bike</a>
            <a className="secondary-btn" href="#how">See How It Works</a>
          </div>
        </div>
        <div className="bike-card">
          <div className="sun"></div>
          <div className="bike-art">
            <div className="wheel left"></div>
            <div className="wheel right"></div>
            <div className="frame"></div>
            <div className="bar"></div>
            <div className="seat"></div>
            <div className="paint-panel">Beach House<br/>Creatives</div>
          </div>
        </div>
      </section>

      <section id="how" className="process">
        <p className="script">Simple Process. Awesome Results.</p>
        <div className="steps">
          {[
            ["Upload", "Upload a clear photo of your e-bike.", Upload],
            ["Choose Style", "Pick a theme that fits your vibe.", Palette],
            ["AI Generates", "Get unique paint design concepts.", Sparkles],
            ["Choose & Buy", "Select your favorite and purchase.", ShoppingCart],
            ["Download", "Receive files and color references.", Download],
          ].map(([title, text, Icon], index) => (
            <div className="step" key={title}>
              <div className="step-icon"><Icon size={27} /></div>
              <span>{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="styles" className="showcase">
        <div>
          <p className="eyebrow dark">Design Styles</p>
          <h2>Choose the look. Let AI create the concepts.</h2>
          <ul className="style-list">
            {styles.map((style) => <li key={style}>● {style}</li>)}
          </ul>
        </div>

        <div className="gallery">
          {Array.from({ length: 10 }).map((_, i) => (
            <div className={`design-card card-${i + 1}`} key={i}>
              <ImageIcon size={26} />
              <span>Design {i + 1}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div>
          <p className="eyebrow dark">Pricing</p>
          <h2>Sell digital paint designs without painting the bikes.</h2>
          <p>
            Beach House Creatives is built as a digital product business.
            Customers pay for the designs, not the paint job.
          </p>
        </div>
        <div className="plans">
          {plans.map((plan) => (
            <div className={plan.best ? "plan best" : "plan"} key={plan.name}>
              {plan.best && <div className="best-tag">Best Value</div>}
              <h3>{plan.name}</h3>
              <strong>{plan.price}</strong>
              <p>{plan.designs}</p>
              <a href="#upload">Get Started</a>
            </div>
          ))}
        </div>
      </section>

      <section className="trust">
        <div><Waves /> 100% Digital Downloads</div>
        <div><ShieldCheck /> Secure Payments</div>
        <div><Sparkles /> Unlimited Style Possibilities</div>
        <div><Download /> High-Resolution Files</div>
      </section>

      <section id="upload" className="upload-box">
        <div>
          <p className="eyebrow dark">Start Your Design</p>
          <h2>Upload your e-bike and request custom AI paint concepts.</h2>
          <p>
            This starter site is ready for your next upgrade: live photo upload, AI generation,
            Stripe checkout, and customer downloads.
          </p>
        </div>
        <form className="form">
          <input placeholder="Your name" />
          <input placeholder="Email address" />
          <input placeholder="E-bike make/model" />
          <textarea placeholder="Describe the style you want: surf, racing, stealth, neon, retro, camo, etc." />
          <button type="button">Request Design Preview</button>
        </form>
      </section>

      <footer id="contact">
        <div className="footer-brand">
          <div className="brand-script">Beach House</div>
          <div className="brand-small">CREATIVES</div>
          <p>Design it. Own it. Ride it.</p>
        </div>
        <div>
          <h3>Your Vision. Our Creativity. Endless Designs.</h3>
          <p>AI-generated custom e-bike paint designs for riders who want something original.</p>
        </div>
      </footer>
    </main>
  );
}
