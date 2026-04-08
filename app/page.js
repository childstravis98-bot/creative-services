
export default function Home() { const services = [ { title: 'AI Website Creation', text: 'Fast, modern websites built to help your business look professional and get more customers.', }, { title: 'Brand Refresh', text: 'Clean visual updates for businesses that need a sharper, more trustworthy online presence.', }, { title: 'Lead-Ready Pages', text: 'Clear calls-to-action, contact sections, and service layouts designed to turn visitors into leads.', }, ];

const highlights = [ 'Mobile-friendly design', 'Fast turnaround', 'Simple pricing', 'Professional presentation', ];

return ( <main style={{ fontFamily: 'Arial, sans-serif', color: '#111827', background: '#ffffff' }}> <section style={{ background: 'linear-gradient(135deg, #0f172a, #1d4ed8)', color: 'white', padding: '72px 24px 64px', }} > <div style={{ maxWidth: 1100, margin: '0 auto' }}> <div style={{ display: 'inline-block', padding: '8px 14px', borderRadius: 999, background: 'rgba(255,255,255,0.14)', marginBottom: 18, fontSize: 14, fontWeight: 700, }} > Creative Services </div>

<h1
        style={{
          fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
          lineHeight: 1.05,
          margin: '0 0 16px',
          maxWidth: 800,
        }}
      >
        Modern websites that make your business look real, polished, and ready for customers.
      </h1>

      <p
        style={{
          fontSize: '1.1rem',
          lineHeight: 1.7,
          maxWidth: 700,
          color: 'rgba(255,255,255,0.9)',
          marginBottom: 28,
        }}
      >
        We help small businesses, side hustles, and local service brands launch clean, professional websites that build trust and bring in leads.
      </p>

      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        <a
          href="#contact"
          style={{
            background: '#ffffff',
            color: '#111827',
            padding: '14px 22px',
            borderRadius: 12,
            textDecoration: 'none',
            fontWeight: 700,
          }}
        >
          Get a Quote
        </a>
        <a
          href="#services"
          style={{
            border: '1px solid rgba(255,255,255,0.35)',
            color: '#ffffff',
            padding: '14px 22px',
            borderRadius: 12,
            textDecoration: 'none',
            fontWeight: 700,
          }}
        >
          View Services
        </a>
      </div>
    </div>
  </section>

  <section style={{ padding: '26px 24px', borderBottom: '1px solid #e5e7eb', background: '#f8fafc' }}>
    <div
      style={{
        maxWidth: 1100,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: 14,
      }}
    >
      {highlights.map((item) => (
        <div
          key={item}
          style={{
            background: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: 14,
            padding: '16px 18px',
            textAlign: 'center',
            fontWeight: 700,
          }}
        >
          {item}
        </div>
      ))}
    </div>
  </section>

  <section id="services" style={{ padding: '72px 24px' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <p style={{ color: '#2563eb', fontWeight: 700, marginBottom: 10 }}>What We Do</p>
      <h2 style={{ fontSize: '2.2rem', margin: '0 0 14px' }}>Services built for real-world businesses</h2>
      <p style={{ color: '#4b5563', maxWidth: 720, lineHeight: 1.7, marginBottom: 30 }}>
        Whether you need a clean one-page site or a stronger online presence for your company, we keep the process simple and focused on results.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 20,
        }}
      >
        {services.map((service) => (
          <div
            key={service.title}
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: 18,
              padding: 24,
              background: '#ffffff',
              boxShadow: '0 10px 30px rgba(15, 23, 42, 0.05)',
            }}
          >
            <h3 style={{ marginTop: 0, fontSize: '1.2rem' }}>{service.title}</h3>
            <p style={{ color: '#4b5563', lineHeight: 1.7, marginBottom: 0 }}>{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section style={{ background: '#0f172a', color: 'white', padding: '72px 24px' }}>
    <div
      style={{
        maxWidth: 1100,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 28,
        alignItems: 'center',
      }}
    >
      <div>
        <p style={{ color: '#93c5fd', fontWeight: 700, marginBottom: 10 }}>Why Choose Us</p>
        <h2 style={{ fontSize: '2.2rem', margin: '0 0 14px' }}>A cleaner image can change how customers see your business</h2>
        <p style={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.8 }}>
          Your website is often the first impression people get. We help you look established, trustworthy, and easy to contact.
        </p>
      </div>

      <div
        style={{
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 20,
          padding: 24,
        }}
      >
        <div style={{ display: 'grid', gap: 16 }}>
          <div>
            <strong>Clean layout</strong>
            <p style={{ margin: '8px 0 0', color: 'rgba(255,255,255,0.82)', lineHeight: 1.7 }}>
              Clear sections that help visitors understand who you are and what you offer.
            </p>
          </div>
          <div>
            <strong>Mobile-first feel</strong>
            <p style={{ margin: '8px 0 0', color: 'rgba(255,255,255,0.82)', lineHeight: 1.7 }}>
              Designed to look strong on phones, where most people will first find you.
            </p>
          </div>
          <div>
            <strong>Built to convert</strong>
            <p style={{ margin: '8px 0 0', color: 'rgba(255,255,255,0.82)', lineHeight: 1.7 }}>
              Contact buttons, strong headlines, and a layout that helps turn traffic into real inquiries.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" style={{ padding: '72px 24px', background: '#f8fafc' }}>
    <div
      style={{
        maxWidth: 1100,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 24,
      }}
    >
      <div>
        <p style={{ color: '#2563eb', fontWeight: 700, marginBottom: 10 }}>Get Started</p>
        <h2 style={{ fontSize: '2.2rem', margin: '0 0 14px' }}>Ready to upgrade your online presence?</h2>
        <p style={{ color: '#4b5563', lineHeight: 1.8 }}>
          Tell us what kind of business you have and what you want your website to do. We’ll help you get a polished site online fast.
        </p>
      </div>

      <div
        style={{
          background: '#ffffff',
          border: '1px solid #e5e7eb',
          borderRadius: 18,
          padding: 24,
          boxShadow: '0 10px 30px rgba(15, 23, 42, 0.06)',
        }}
      >
        <p style={{ marginTop: 0, fontWeight: 700, fontSize: '1.1rem' }}>Contact</p>
        <p style={{ color: '#4b5563', lineHeight: 1.8 }}>
          Email: yourname@email.com
          <br />
          Phone: (555) 555-5555
        </p>
        <a
          href="mailto:yourname@email.com"
          style={{
            display: 'inline-block',
            marginTop: 8,
            background: '#2563eb',
            color: '#ffffff',
            padding: '14px 22px',
            borderRadius: 12,
            textDecoration: 'none',
            fontWeight: 700,
          }}
        >
          Email Now
        </a>
      </div>
    </div>
  </section>
</main>

); }
