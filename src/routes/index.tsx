import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: LakshmiHome,
})

// ── SVG Icons ──────────────────────────────────────────────────────────────

function IconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.05 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  )
}

function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}

function IconMapPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  )
}

function IconX() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

function IconWhatsApp() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

function IconTwitterX() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function IconStar() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
}

function IconChevronDown() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  )
}

// ── Data ───────────────────────────────────────────────────────────────────

const menuSections = [
  {
    category: 'Starters',
    items: [
      { name: 'Chicken 65', desc: 'Crispy spiced chicken bites', price: '₹220' },
      { name: 'Paneer Tikka', desc: 'Tandoor-kissed cottage cheese', price: '₹190' },
      { name: 'Vegetable Soup', desc: 'Fresh garden vegetables, mild spice', price: '₹120' },
      { name: 'Mutton Kheema', desc: 'Minced lamb with spices', price: '₹260' },
    ],
  },
  {
    category: 'Main Course',
    items: [
      { name: 'Chicken Biryani', desc: 'Dum-cooked, saffron-infused', price: '₹350' },
      { name: 'Mutton Curry', desc: 'Slow-cooked bone-in mutton', price: '₹420' },
      { name: 'Chettinad Fish Curry', desc: 'Tangy tamarind base, fresh catch', price: '₹380' },
      { name: 'Kadai Paneer', desc: 'Bell peppers, tomato, house spice blend', price: '₹280' },
      { name: 'Dal Tadka', desc: 'Tempered yellow lentils, ghee', price: '₹160' },
      { name: 'Prawn Masala', desc: 'Tiger prawns, coastal spice', price: '₹460' },
    ],
  },
  {
    category: 'Breads & Rice',
    items: [
      { name: 'Butter Naan', desc: 'Tandoor-baked, brushed with butter', price: '₹60' },
      { name: 'Ghee Rice', desc: 'Basmati, whole spices, clarified butter', price: '₹140' },
      { name: 'Parotta', desc: 'Flaky layered South Indian bread', price: '₹45' },
    ],
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Gulab Jamun', desc: 'Milk solids in rose syrup', price: '₹90' },
      { name: 'Payasam', desc: 'Traditional kheer, cardamom', price: '₹110' },
      { name: 'Ice Cream', desc: 'Seasonal flavors', price: '₹80' },
    ],
  },
]

const cateringServices = [
  {
    title: 'Wedding Catering',
    desc: 'Grand banquets tailored for your most cherished day. Multi-cuisine spreads, live counters, and impeccable presentation for 100–2000 guests.',
    icon: '♦',
  },
  {
    title: 'Corporate Events',
    desc: 'Professional buffets, box lunches, and cocktail setups for conferences, product launches, and office celebrations.',
    icon: '◈',
  },
  {
    title: 'Family Functions',
    desc: 'Intimate gatherings — engagements, baby showers, anniversaries — served with home-style warmth and personal attention.',
    icon: '◇',
  },
  {
    title: 'Festival Catering',
    desc: 'Traditional festival menus crafted with authentic recipes for Pongal, Diwali, and other cultural celebrations.',
    icon: '✦',
  },
  {
    title: 'Birthday Parties',
    desc: 'Fun, vibrant menus for children and adult birthdays with customizable themes and live snack stations.',
    icon: '◉',
  },
  {
    title: 'Bulk Meal Service',
    desc: 'Daily bulk meals for hostels, colleges, and factories. Nutritious, hygienic, and consistently punctual delivery.',
    icon: '◎',
  },
]

// ── Components ─────────────────────────────────────────────────────────────

function OrnamentDivider({ light = false }: { light?: boolean }) {
  const color = light ? 'rgba(201,144,26,0.5)' : 'rgba(201,144,26,0.3)'
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '24px 0' }}>
      <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg, transparent, ${color})` }} />
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 1 L13 7 L19 7 L14 11 L16 18 L10 14 L4 18 L6 11 L1 7 L7 7 Z" fill={light ? 'rgba(201,144,26,0.6)' : 'rgba(201,144,26,0.4)'} />
      </svg>
      <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg, ${color}, transparent)` }} />
    </div>
  )
}

function MenuSection({ section }: { section: typeof menuSections[0] }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid rgba(201,144,26,0.2)', paddingBottom: '4px' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '18px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.1rem',
          fontWeight: 600,
          color: '#5C1010',
        }}
      >
        <span>{section.category}</span>
        <span style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: '0.3s', color: '#C9901A' }}>
          <IconChevronDown />
        </span>
      </button>
      {open && (
        <div style={{ paddingBottom: '8px' }}>
          {section.items.map((item) => (
            <div key={item.name} className="menu-item">
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1C1209' }}>{item.name}</div>
                <div style={{ fontSize: '0.78rem', color: '#6B5B4E', marginTop: '2px' }}>{item.desc}</div>
              </div>
              <div className="menu-item-dots" />
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#8B1A1A', whiteSpace: 'nowrap' }}>
                {item.price}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Main Component ─────────────────────────────────────────────────────────

function LakshmiHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div style={{ minHeight: '100vh' }}>

      {/* ── NAV ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(28,5,5,0.96)', backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(201,144,26,0.2)',
        padding: '0 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '68px',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span className="font-script" style={{ color: '#E8B84B', fontSize: '1.35rem', lineHeight: 1.1 }}>
            Lakshmi Bharathi Cafe
          </span>
          <span style={{ color: 'rgba(232,184,75,0.6)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            and Co
          </span>
        </div>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="desktop-nav">
          {['about', 'restaurant', 'catering', 'contact'].map((id) => (
            <a key={id} href={`#${id}`} className="nav-link">{id}</a>
          ))}
        </div>
        <button
          onClick={() => setMobileMenuOpen(true)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#E8B84B', display: 'none' }}
          className="mobile-toggle"
          aria-label="Open menu"
        >
          <IconMenu />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <button
          onClick={() => setMobileMenuOpen(false)}
          style={{ position: 'absolute', top: '20px', right: '24px', background: 'none', border: 'none', cursor: 'pointer', color: '#E8B84B' }}
        >
          <IconX />
        </button>
        {['about', 'restaurant', 'catering', 'contact'].map((id) => (
          <a key={id} href={`#${id}`} className="nav-link" onClick={() => setMobileMenuOpen(false)}>{id}</a>
        ))}
      </div>

      {/* ── HERO ── */}
      <section className="hero-section">
                   <section
          className="hero-section"
          style={{
            backgroundImage: "url('/images/back.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
                <div className="hero-pattern" />
        <div className="hero-mandala" />

        {/* decorative lines */}
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '1px', height: '100px', background: 'linear-gradient(180deg, transparent, rgba(201,144,26,0.3))' }} />
        <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '1px', height: '100px', background: 'linear-gradient(0deg, transparent, rgba(201,144,26,0.3))' }} />

        <div style={{ textAlign: 'center', position: 'relative', zIndex: 10, padding: '0 20px', maxWidth: '760px' }}>
          <div className="animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
            <span className="section-subtitle" style={{ color: '#E8B84B' }}>
              — Est. in Chennai —
            </span>
          </div>

          <OrnamentDivider light />

          <div className="animate-fade-up" style={{ animationDelay: '0.25s', opacity: 0, animationFillMode: 'forwards' }}>
            <h1 className="font-script" style={{
              fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
              color: '#fff',
              lineHeight: 1.1,
              marginBottom: '6px',
            }}>
             Lakshmi Bharathi Cafe
            </h1>
            <div className="font-display" style={{
              fontSize: 'clamp(1rem, 3vw, 1.6rem)',
              color: '#E8B84B',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              fontWeight: 400,
              fontStyle: 'italic',
            }}>
              and Co
            </div>
          </div>

          <OrnamentDivider light />

          <div className="animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
            <p style={{
              color: 'rgba(255,255,255,0.72)',
              fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
              lineHeight: 1.8,
              maxWidth: '540px',
              margin: '0 auto 36px',
              fontWeight: 300,
              letterSpacing: '0.02em',
            }}>
              Authentic flavors rooted in tradition. From our family kitchen to your table — dine-in, takeaway, and full-service catering across Tamil Nadu.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#restaurant" className="btn-gold">
                <span>View Menu</span>
              </a>
              <a href="#catering" className="btn-outline" style={{ borderColor: 'rgba(232,184,75,0.5)', color: '#E8B84B' }}>
                <span>lakshmibharathi caterers</span>
              </a>
            </div>
          </div>

          {/* star rating */}
          <div className="animate-fade-up" style={{ animationDelay: '0.55s', opacity: 0, animationFillMode: 'forwards', marginTop: '52px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#E8B84B' }}><IconStar /></span>
              ))}
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginLeft: '6px' }}>4.8 · Trusted by 1,200+ families</span>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', color: 'rgba(232,184,75,0.5)', animation: 'floatDot 2s ease-in-out infinite' }}>
          <IconChevronDown />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: '100px 24px', background: '#FAF6EE' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>

            {/* Text */}
            <div>
              <span className="section-subtitle">Our Story</span>
              <h2 className="section-title" style={{ marginTop: '12px', marginBottom: '24px' }}>
                A Legacy of<br />
                <em style={{ fontStyle: 'italic', color: '#C9901A' }}>Authentic Taste</em>
              </h2>
              <p style={{ color: '#6B5B4E', lineHeight: 1.9, marginBottom: '20px', fontSize: '0.97rem' }}>
                L&B Cafe and Co was born from a deep love of traditional South Indian cuisine and the belief that food is the purest form of hospitality. What began as a humble family kitchen has grown into one of Chennai's most trusted names in both restaurant dining and event catering.
              </p>
              <p style={{ color: '#6B5B4E', lineHeight: 1.9, marginBottom: '32px', fontSize: '0.97rem' }}>
                Our chefs honor age-old recipes passed down through generations — using fresh, locally sourced ingredients, hand-ground spices, and slow-cooking methods that cannot be rushed. Every dish that leaves our kitchen carries the warmth of home.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                {[
                  { num: '15+', label: 'Years of Service' },
                  { num: '1,200+', label: 'Events Catered' },
                  { num: '80+', label: 'Menu Items' },
                  { num: '4.8★', label: 'Customer Rating' },
                ].map((stat) => (
                  <div key={stat.label} style={{ borderLeft: '3px solid #C9901A', paddingLeft: '16px' }}>
                    <div className="font-display" style={{ fontSize: '2rem', fontWeight: 700, color: '#8B1A1A', lineHeight: 1 }}>
                      {stat.num}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#6B5B4E', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '4px' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual panel */}
            <div style={{ position: 'relative' }}>
              <div style={{
                background: 'linear-gradient(135deg, #8B1A1A 0%, #5C1010 100%)',
                padding: '48px 40px',
                borderRadius: '2px',
                color: '#fff',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* decorative corner */}
                <div style={{ position: 'absolute', top: '16px', left: '16px', width: '40px', height: '40px', borderTop: '2px solid rgba(232,184,75,0.4)', borderLeft: '2px solid rgba(232,184,75,0.4)' }} />
                <div style={{ position: 'absolute', bottom: '16px', right: '16px', width: '40px', height: '40px', borderBottom: '2px solid rgba(232,184,75,0.4)', borderRight: '2px solid rgba(232,184,75,0.4)' }} />

                <div className="font-script" style={{ fontSize: '1.2rem', color: '#E8B84B', marginBottom: '20px' }}>
                  Our Promise
                </div>
                <OrnamentDivider light />
                {[
                  'Freshly prepared every day — no shortcuts',
                  'Authentic recipes, no artificial flavors',
                  'Hygienic kitchen certified by FSSAI',
                  'Timely delivery for every event',
                  'Customizable menus to suit all budgets',
                ].map((point) => (
                  <div key={point} style={{ display: 'flex', gap: '12px', marginBottom: '14px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#E8B84B', marginTop: '3px', flexShrink: 0 }}>✦</span>
                    <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', lineHeight: 1.6 }}>{point}</span>
                  </div>
                ))}
              </div>

              {/* floating badge */}
              <div style={{
                position: 'absolute', bottom: '-20px', right: '-20px',
                background: '#C9901A', color: '#1C1209',
                width: '90px', height: '90px', borderRadius: '50%',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Playfair Display', serif", fontWeight: 700,
                boxShadow: '0 8px 24px rgba(201,144,26,0.4)',
              }}>
                <div style={{ fontSize: '1.5rem', lineHeight: 1 }}>15</div>
                <div style={{ fontSize: '0.55rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Years</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESTAURANT ── */}
      <section id="restaurant" style={{ padding: '100px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-subtitle">Dine With Us</span>
            <h2 className="section-title" style={{ marginTop: '12px' }}>L&B Restaurant</h2>
            <OrnamentDivider />
            <p style={{ color: '#6B5B4E', maxWidth: '560px', margin: '0 auto', lineHeight: 1.8, fontSize: '0.95rem' }}>
              Step into a warm, welcoming space where every meal is crafted with love. Open for breakfast, lunch, and dinner — all week long.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>

            {/* Menu card */}
            <div className="card-warm" style={{ padding: '36px' }}>
              <div className="section-subtitle" style={{ marginBottom: '8px' }}>Cuisine</div>
              <h3 className="font-display" style={{ fontSize: '1.5rem', color: '#5C1010', marginBottom: '24px' }}>
                Our Menu
              </h3>
              {menuSections.map((section) => (
                <MenuSection key={section.category} section={section} />
              ))}
              <div style={{ marginTop: '24px', textAlign: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: '#6B5B4E', fontStyle: 'italic' }}>
                  * Prices inclusive of taxes. Menu subject to seasonal availability.
                </span>
              </div>
            </div>

            {/* Info cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

              {/* Location */}
              <div className="card-warm" style={{ padding: '32px' }}>
                <div className="section-subtitle" style={{ marginBottom: '12px' }}>Find Us</div>
                <h3 className="font-display" style={{ fontSize: '1.3rem', color: '#5C1010', marginBottom: '16px' }}>Restaurant Location</h3>
                <div style={{ display: 'flex', gap: '10px', color: '#6B5B4E', marginBottom: '8px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#8B1A1A', marginTop: '3px', flexShrink: 0 }}><IconMapPin /></span>
                  <div>
                    <div style={{ fontWeight: 700, color: '#1C1209', marginBottom: '2px' }}>L&B Cafe and Co</div>
                    <div style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                      No. 42, Gandhi Road, Nungambakkam,<br />
                      Chennai — 600 034,<br />
                      Tamil Nadu, India
                    </div>
                  </div>
                </div>
                <OrnamentDivider />
                <div className="map-placeholder">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B1A1A" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span style={{ fontWeight: 700, color: '#8B1A1A', fontSize: '0.82rem' }}>Nungambakkam, Chennai</span>
                  <span style={{ fontSize: '0.72rem' }}>Mon – Sun · 7:00 AM – 10:30 PM</span>
                </div>
              </div>

              {/* Contact */}
              <div className="card-warm" style={{ padding: '32px' }}>
                <div className="section-subtitle" style={{ marginBottom: '12px' }}>Reach Us</div>
                <h3 className="font-display" style={{ fontSize: '1.3rem', color: '#5C1010', marginBottom: '20px' }}>Restaurant Contact</h3>
                {[
                  { icon: <IconPhone />, label: 'Reservations', value: '+91 63741 76397' },
                  { icon: <IconPhone />, label: 'Takeaway Orders', value: '+91 63741 76397' },
                  { icon: <IconMail />, label: 'Email', value: 'restaurant@lbco.in' },
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <div style={{ color: '#8B1A1A', marginTop: '2px', flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#6B5B4E', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{item.label}</div>
                      <div style={{ fontWeight: 700, color: '#1C1209', fontSize: '0.92rem' }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATERING ── */}
      <section id="catering" style={{ padding: '100px 24px', background: '#FAF6EE' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-subtitle">Full Service</span>
            <h2 className="section-title" style={{ marginTop: '12px' }}>Lakshmi Bharathi Catering Services</h2>
            <OrnamentDivider />
            <p style={{ color: '#6B5B4E', maxWidth: '580px', margin: '0 auto', lineHeight: 1.8, fontSize: '0.95rem' }}>
              From intimate family gatherings to grand weddings with thousands of guests — we bring the same warmth, quality, and precision to every event we serve.
            </p>
          </div>

          {/* Service cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '60px' }}>
            {cateringServices.map((service) => (
              <div key={service.title} className="catering-card">
                <div style={{ fontSize: '1.6rem', color: '#E8B84B', marginBottom: '12px', lineHeight: 1 }}>
                  {service.icon}
                </div>
                <h3 className="font-display" style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '10px', fontWeight: 600 }}>
                  {service.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Catering contact & location */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>

            <div className="card-warm" style={{ padding: '36px' }}>
              <div className="section-subtitle" style={{ marginBottom: '12px' }}>Office Location</div>
              <h3 className="font-display" style={{ fontSize: '1.3rem', color: '#5C1010', marginBottom: '20px' }}>Catering Office</h3>
              <div style={{ display: 'flex', gap: '10px', color: '#6B5B4E', marginBottom: '20px', alignItems: 'flex-start' }}>
                <span style={{ color: '#8B1A1A', marginTop: '3px', flexShrink: 0 }}><IconMapPin /></span>
                <div>
                  <div style={{ fontWeight: 700, color: '#1C1209', marginBottom: '2px' }}>Catering Division</div>
                  <div style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                     No. 7/A, Industrial Estate Road,<br />
                    Ambattur, Chennai — 600 058,<br />
                    Tamil Nadu, India
                  </div>
                </div>
              </div>
              <div className="map-placeholder">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B1A1A" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span style={{ fontWeight: 700, color: '#8B1A1A', fontSize: '0.82rem' }}>Ambattur, Chennai</span>
                <span style={{ fontSize: '0.72rem' }}>Mon – Sat · 9:00 AM – 6:00 PM</span>
              </div>
            </div>

            <div className="card-warm" style={{ padding: '36px' }}>
              <div className="section-subtitle" style={{ marginBottom: '12px' }}>Book an Event</div>
              <h3 className="font-display" style={{ fontSize: '1.3rem', color: '#5C1010', marginBottom: '20px' }}>Catering Contact</h3>
              {[
                { icon: <IconPhone />, label: 'Event Booking', value: '+91 63741 76397' },
                { icon: <IconPhone />, label: 'Bulk Orders', value: '+91 63741 76397' },
                { icon: <IconMail />, label: 'Email', value: 'catering@lbco.in' },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div style={{ color: '#8B1A1A', marginTop: '2px', flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#6B5B4E', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{item.label}</div>
                    <div style={{ fontWeight: 700, color: '#1C1209', fontSize: '0.92rem' }}>{item.value}</div>
                  </div>
                </div>
              ))}
              <OrnamentDivider />
              <a href="#contact" className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL MEDIA ── */}
      <section style={{ padding: '80px 24px', background: '#fff', borderTop: '1px solid rgba(201,144,26,0.15)', borderBottom: '1px solid rgba(201,144,26,0.15)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <span className="section-subtitle">Stay Connected</span>
          <h2 className="section-title" style={{ marginTop: '12px', marginBottom: '16px' }}>Follow Us Online</h2>
          <OrnamentDivider />
          <p style={{ color: '#6B5B4E', lineHeight: 1.8, marginBottom: '40px', fontSize: '0.95rem' }}>
            Get behind-the-scenes glimpses of our kitchen, daily specials, event recaps, and exclusive offers. Join our growing community of food lovers.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/916374176397"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              style={{ width: '64px', height: '64px' }}
            >
              <IconWhatsApp />
            </a>
            <a
              href="https://www.instagram.com/ravee_2324?igsh=cnJjZnRtYzJqajJq"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{ width: '64px', height: '64px' }}
            >
              <IconInstagram />
            </a>
            <a
              href="https://x.com/lbandco"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              style={{ width: '64px', height: '64px' }}
            >
              <IconTwitterX />
            </a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '32px', flexWrap: 'wrap' }}>
            {[
              { platform: 'WhatsApp', handle: 'Chat with us directly', color: '#25D366' },
              { platform: 'Instagram', handle: '@l&b Cafe ', color: '#E1306C' },
              { platform: 'X / Twitter', handle: '@lbandco', color: '#1DA1F2' },
            ].map((s) => (
              <div key={s.platform} style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: '0.8rem', color: '#1C1209' }}>{s.platform}</div>
                <div style={{ fontSize: '0.75rem', color: '#6B5B4E', marginTop: '2px' }}>{s.handle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: '100px 24px', background: '#FAF6EE' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-subtitle">Get in Touch</span>
            <h2 className="section-title" style={{ marginTop: '12px' }}>Contact Us</h2>
            <OrnamentDivider />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '48px' }}>
            {[
              {
                title: 'General Enquiry',
                items: [
                  { icon: <IconPhone />, value: '+91 63741 76397' },
                  { icon: <IconMail />, value: 'info@lbco.in' },
                ],
              },
              {
                title: 'Restaurant',
                items: [
                  { icon: <IconPhone />, value: '+91  63741 76397' },
                  { icon: <IconMapPin />, value: 'No. 42, Gandhi Road, Nungambakkam, Chennai — 600 034' },
                ],
              },
              {
                title: 'Catering Division',
                items: [
                  { icon: <IconPhone />, value: '+91  63741 76397' },
                  { icon: <IconMapPin />, value: 'No. 7/A, Industrial Estate Road, Ambattur, Chennai — 600 058' },
                ],
              },
            ].map((block) => (
              <div key={block.title} className="card-warm" style={{ padding: '32px' }}>
                <h3 className="font-display" style={{ color: '#5C1010', fontSize: '1.15rem', marginBottom: '20px' }}>
                  {block.title}
                </h3>
                {block.items.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '14px' }}>
                    <span style={{ color: '#8B1A1A', flexShrink: 0, marginTop: '3px' }}>{item.icon}</span>
                    <span style={{ fontSize: '0.88rem', color: '#1C1209', lineHeight: 1.6 }}>{item.value}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div className="card-warm" style={{ padding: '48px', maxWidth: '680px', margin: '0 auto' }}>
            <div className="section-subtitle" style={{ marginBottom: '8px' }}>Send a Message</div>
            <h3 className="font-display" style={{ fontSize: '1.5rem', color: '#5C1010', marginBottom: '28px' }}>
              We'd Love to Hear from You
            </h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                {['Your Name', 'Phone Number'].map((placeholder) => (
                  <div key={placeholder}>
                    <input
                      type={placeholder === 'Phone Number' ? 'tel' : 'text'}
                      placeholder={placeholder}
                      style={{
                        width: '100%', padding: '14px 16px',
                        border: '1.5px solid rgba(201,144,26,0.3)',
                        background: 'transparent',
                        fontFamily: "'Lato', sans-serif", fontSize: '0.9rem',
                        color: '#1C1209', outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#8B1A1A')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(201,144,26,0.3)')}
                    />
                  </div>
                ))}
              </div>
              <input
                type="email"
                placeholder="Email Address"
                style={{
                  width: '100%', padding: '14px 16px', marginBottom: '16px',
                  border: '1.5px solid rgba(201,144,26,0.3)',
                  background: 'transparent',
                  fontFamily: "'Lato', sans-serif", fontSize: '0.9rem',
                  color: '#1C1209', outline: 'none', display: 'block',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#8B1A1A')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(201,144,26,0.3)')}
              />
              <select
                style={{
                  width: '100%', padding: '14px 16px', marginBottom: '16px',
                  border: '1.5px solid rgba(201,144,26,0.3)',
                  background: '#fff',
                  fontFamily: "'Lato', sans-serif", fontSize: '0.9rem',
                  color: '#6B5B4E', outline: 'none', display: 'block', cursor: 'pointer',
                }}
              >
                <option value="">— Select Enquiry Type —</option>
                <option>Restaurant Reservation</option>
                <option>Wedding Catering</option>
                <option>Corporate Event</option>
                <option>Family Function</option>
                <option>Bulk Meal Service</option>
                <option>Other</option>
              </select>
              <textarea
                placeholder="Tell us about your event or enquiry..."
                rows={5}
                style={{
                  width: '100%', padding: '14px 16px', marginBottom: '24px',
                  border: '1.5px solid rgba(201,144,26,0.3)',
                  background: 'transparent',
                  fontFamily: "'Lato', sans-serif", fontSize: '0.9rem',
                  color: '#1C1209', outline: 'none', resize: 'vertical', display: 'block',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#8B1A1A')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(201,144,26,0.3)')}
              />
              <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center', fontSize: '0.82rem' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer-bg" style={{ padding: '64px 24px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', marginBottom: '48px' }}>

            <div>
              <div className="font-script" style={{ color: '#E8B84B', fontSize: '1.8rem', marginBottom: '4px' }}>
                L&B Cafe
              </div>
              <div style={{ color: 'rgba(232,184,75,0.5)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>
                and Co
              </div>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '240px' }}>
                Bringing the rich flavors of traditional South Indian cuisine to your table since 2009.
              </p>
              <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                <a href="https://wa.me/916374176397" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ width: '38px', height: '38px', background: 'transparent', borderColor: 'rgba(232,184,75,0.3)', color: '#E8B84B' }}>
                  <IconWhatsApp />
                </a>
                <a href="https://www.instagram.com/l&bcafeandco" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ width: '38px', height: '38px', background: 'transparent', borderColor: 'rgba(232,184,75,0.3)', color: '#E8B84B' }}>
                  <IconInstagram />
                </a>
                <a href="https://x.com/lbandco" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="X" style={{ width: '38px', height: '38px', background: 'transparent', borderColor: 'rgba(232,184,75,0.3)', color: '#E8B84B' }}>
                  <IconTwitterX />
                </a>
              </div>
            </div>

            <div>
              <div style={{ color: '#E8B84B', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '20px' }}>
                Quick Links
              </div>
              {[
                ['About Us', '#about'],
                ['Restaurant Menu', '#restaurant'],
                ['Catering Services', '#catering'],
                ['Contact Us', '#contact'],
              ].map(([label, href]) => (
                <a key={label} href={href} style={{ display: 'block', color: 'rgba(255,255,255,0.55)', fontSize: '0.87rem', marginBottom: '10px', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#E8B84B')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  {label}
                </a>
              ))}
            </div>

            <div>
              <div style={{ color: '#E8B84B', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '20px' }}>
                Restaurant
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span style={{ color: '#E8B84B', flexShrink: 0, marginTop: '2px' }}><IconMapPin /></span>
                <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                  No. 42, Gandhi Road,<br />Nungambakkam, Chennai — 600 034
                </span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ color: '#E8B84B' }}><IconPhone /></span>
                <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem' }}>+91 63741 76397</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ color: '#E8B84B' }}><IconMail /></span>
                <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem' }}>restaurant@lbco.in</span>
              </div>
            </div>

            <div>
              <div style={{ color: '#E8B84B', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '20px' }}>
                Catering Office
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span style={{ color: '#E8B84B', flexShrink: 0, marginTop: '2px' }}><IconMapPin /></span>
                <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                  No. 7/A, Industrial Estate Road,<br />Ambattur, Chennai — 600 058
                </span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ color: '#E8B84B' }}><IconPhone /></span>
                <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem' }}>+91 63741 76397</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ color: '#E8B84B' }}><IconMail /></span>
                <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem' }}>catering@lbco.in</span>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: '1px solid rgba(201,144,26,0.2)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem' }}>
              © 2024 L&B Cafe and Co. All rights reserved.
            </span>
            <span style={{ color: 'rgba(232,184,75,0.4)', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              FSSAI Licensed · Chennai, Tamil Nadu
            </span>
          </div>
        </div>
      </footer>

      {/* ── Mobile nav visibility ── */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </div>
  )
}
