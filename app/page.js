export default function Home() {
  const services = [
    {
      title: "Full Custom Paint Jobs",
      text: "Complete custom paint for e-bike frames, panels, forks, and parts built to give your ride a bold, one-of-a-kind finish.",
    },
    {
      title: "Color Matching & Design",
      text: "From sleek factory-style colors to loud custom concepts, we help create a paint design that fits your style.",
    },
    {
      title: "Refresh & Repaint Work",
      text: "Restore faded, scratched, or worn parts with clean repaint work that brings your e-bike back to life.",
    },
  ];

  const highlights = [
    "Custom finishes",
    "Built for e-bikes",
    "Clean detail work",
    "Head-turning results",
  ];

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#111827",
        background: "#ffffff",
      }}
    >
      <section
        style={{
          background: "linear-gradient(135deg, #111827, #2563eb)",
          color: "white",
          padding: "72px 24px 64px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              padding: "8px 14px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.14)",
              marginBottom: 18,
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            Custom E-Bike Paint
          </div>

          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
              lineHeight: 1.05,
              margin: "0 0 16px",
              maxWidth: 850,
            }}
          >
            Custom paint jobs that make your e-bike stand out.
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: 760,
              color: "rgba(255,255,255,0.9)",
              marginBottom: 28,
            }}
          >
            We create clean, bold, custom finishes for e-bikes that turn heads
            and give your ride a more professional, personal look.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a
              href="#contact"
              style={{
                background: "#ffffff",
                color: "#111827",
                padding: "14px 22px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Get a Quote
            </a>
            <a
              href="#services"
              style={{
                border: "1px solid rgba(255,255,255,0.35)",
                color: "#ffffff",
                padding: "14px 22px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "26px 24px",
          borderBottom: "1px solid #e5e7eb",
          background: "#f8fafc",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 14,
          }}
        >
          {highlights.map((item) => (
            <div
              key={item}
              style={{
                background: "white",
                border: "1px solid #e5e7eb",
                borderRadius: 14,
                padding: "16px 18px",
                textAlign: "center",
                fontWeight: 700,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="services" style={{ padding: "72px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ color: "#2563eb", fontWeight: 700, marginBottom: 10 }}>
            What We Do
          </p>
          <h2 style={{ fontSize: "2.2rem", margin: "0 0 14px" }}>
            Custom paint services for e-bike owners who want something better
            than stock
          </h2>
          <p
            style={{
              color: "#4b5563",
              maxWidth: 760,
              lineHeight: 1.7,
              marginBottom: 30,
            }}
          >
            Whether you want a full color change, a cleaner custom look, or a
            refreshed finish on worn parts, we help bring your e-bike vision to
            life.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 20,
            }}
          >
            {services.map((service) => (
              <div
                key={service.title}
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 18,
                  padding: 24,
                  background: "#ffffff",
                  boxShadow: "0 10px 30px rgba(15, 23, 42, 0.05)",
                }}
              >
                <h3 style={{ marginTop: 0, fontSize: "1.2rem" }}>
                  {service.title}
                </h3>
                <p
                  style={{
                    color: "#4b5563",
                    lineHeight: 1.7,
                    marginBottom: 0,
                  }}
                >
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#111827",
          color: "white",
          padding: "72px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 28,
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ color: "#93c5fd", fontWeight: 700, marginBottom: 10 }}>
              Why Choose Us
            </p>
            <h2 style={{ fontSize: "2.2rem", margin: "0 0 14px" }}>
              Give your e-bike a finish that actually gets noticed
            </h2>
            <p style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.8 }}>
              A custom paint job changes the whole look of your bike. We help
              riders create a cleaner, more unique build with detail-focused
              paint work made for e-bikes.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 20,
              padding: 24,
            }}
          >
            <div style={{ display: "grid", gap: 16 }}>
              <div>
                <strong>Custom look</strong>
                <p
                  style={{
                    margin: "8px 0 0",
                    color: "rgba(255,255,255,0.82)",
                    lineHeight: 1.7,
                  }}
                >
                  Stand out with a paint finish designed around your ride and
                  your style.
                </p>
              </div>
              <div>
                <strong>Clean detail work</strong>
                <p
                  style={{
                    margin: "8px 0 0",
                    color: "rgba(255,255,255,0.82)",
                    lineHeight: 1.7,
                  }}
                >
                  We focus on a sharp, polished result that looks intentional
                  and professionally done.
                </p>
              </div>
              <div>
                <strong>Built for riders</strong>
                <p
                  style={{
                    margin: "8px 0 0",
                    color: "rgba(255,255,255,0.82)",
                    lineHeight: 1.7,
                  }}
                >
                  Whether you want subtle, aggressive, or full custom, we help
                  bring the idea to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" style={{ padding: "72px 24px", background: "#f8fafc" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          <div>
            <p style={{ color: "#2563eb", fontWeight: 700, marginBottom: 10 }}>
              Get Started
            </p>
            <h2 style={{ fontSize: "2.2rem", margin: "0 0 14px" }}>
              Ready to transform your e-bike?
            </h2>
            <p style={{ color: "#4b5563", lineHeight: 1.8 }}>
              Tell us what bike you have, what color or style you want, and what
              parts need work. We’ll help you create a custom finish that stands
              out.
            </p>
          </div>

          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: 18,
              padding: 24,
              boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
            }}
          >
            <p style={{ marginTop: 0, fontWeight: 700, fontSize: "1.1rem" }}>
              Contact
            </p>
            <p style={{ color: "#4b5563", lineHeight: 1.8 }}>
              Email: yourname@email.com
              <br />
              Phone: (555) 555-5555
            </p>
            <a
              href="mailto:yourname@email.com"
              style={{
                display: "inline-block",
                marginTop: 8,
                background: "#2563eb",
                color: "#ffffff",
                padding: "14px 22px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Email Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
