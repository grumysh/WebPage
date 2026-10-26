import { useEffect, useRef, useState } from 'react';
import { useLang } from './i18n';
import {
  about,
  awardsByDate,
  awardsIntro,
  badges,
  badgesByDate,
  badgeCategories,
  badgesIntro,
  career,
  careerIntro,
  contact,
  footer,
  hero,
  links,
  projects,
  projectsIntro,
  stats,
  ui,
  type T,
} from './content';
import AvatarStage from './components/AvatarStage';
import { BeadArt } from './components/BeadArt';
import { Pegboard } from './components/Pegboard';
import { BadgesModal, type Badge } from './components/BadgesModal';

const SECTIONS = ['hero', 'about', 'projects', 'career', 'badges', 'awards', 'contact', 'footer'];

function Eyebrow({ children, color = 'pink' }: { children: string; color?: string }) {
  return (
    <p className={`eyebrow c-${color}`}>
      <span className="bead" aria-hidden="true" />
      {children}
    </p>
  );
}

function Header() {
  const { lang, setLang, t } = useLang();
  const items: [string, T][] = [
    ['about', ui.nav.about],
    ['projects', ui.nav.projects],
    ['career', ui.nav.career],
    ['awards', ui.nav.awards],
    ['contact', ui.nav.contact],
  ];
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a className="logo" href="#hero">
          <img src="./img/grumysh-logo.png" alt="Grumysh" width={148} height={36} />
        </a>
        <nav className="nav" aria-label="Principal">
          {items.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {t(label)}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <div className="lang-toggle" role="group" aria-label="Idioma / Language">
            {(['es', 'en'] as const).map((l) => (
              <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a className="btn btn-small" href={links.cv} download>
            {t(ui.nav.cv)}
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ slotRef }: { slotRef: React.RefObject<HTMLDivElement | null> }) {
  const { t } = useLang();
  return (
    <section id="hero" data-section="hero" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="aka">
            <span className="dot" aria-hidden="true" />
            {t(hero.available)}
          </p>
          <h1>
            <span className="hello">{t(hero.hello)}</span>
            <span className="name">{hero.name}</span>
          </h1>
          <p className="role">{t(hero.role)}</p>
          <p className="lead">{t(hero.lead)}</p>
          <div className="hero-ctas">
            <a className="btn" href="#projects">
              {t(hero.ctaProjects)}
            </a>
            <a className="btn btn-ghost" href="#contact">
              {t(hero.ctaContact)}
            </a>
          </div>
          <p className="status">{t(hero.location)}</p>
        </div>
        <div className="hero-slot" ref={slotRef}>
          <span className="sparkle s1">✦</span>
          <span className="sparkle s2">✦</span>
          <span className="sparkle s3">✧</span>
        </div>
      </div>
      <div className="wrap">
        <ul className="stats">
          {stats.map((s) => (
            <li key={s.value} className={`stat c-${s.color} reveal`}>
              <strong>{s.value}</strong>
              <span>{t(s.label)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function About() {
  const { t } = useLang();
  return (
    <section id="about" data-section="about" className="section">
      <div className="wrap">
        <div className="about-grid">
          <div className="reveal">
            <Eyebrow>{t(about.eyebrow)}</Eyebrow>
            <h2>{t(about.title)}</h2>
            {about.body.map((p, i) => (
              <p key={i} className="body-text">
                {t(p)}
              </p>
            ))}
          </div>
          <div className="reveal">
            <h3 className="mini-title">{t(about.wordsTitle)}</h3>
            <ul className="words">
              {about.words.map((w, i) => (
                <li key={i} className={`patch word c-${w.color}`}>
                  <span className="word-n">0{i + 1}</span>
                  <strong>{t(w.word)}</strong>
                  <span>{t(w.note)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="offline reveal">
          <div className="offline-copy">
            <h3 className="mini-title">{t(about.hobbiesTitle)}</h3>
            <p className="offline-lead">{t(about.hobbiesLead)}</p>
            <ul className="hobbies">
              {about.hobbies.map((h) => (
                <li key={h.id} className="hobby">
                  <BeadArt pattern={h.id} size={44} />
                  <div>
                    <strong>{t(h.label)}</strong>
                    <span>{t(h.note)}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Pegboard />
        </div>

        <h3 className="mini-title reveal">{t(about.stackTitle)}</h3>
        <div className="stack reveal">
          {about.stack.map((g) => (
            <div key={g.group.es} className="stack-group">
              <span className="stack-label">{t(g.group)}</span>
              <div className="chips">
                {g.items.map((i) => (
                  <span key={i} className="chip">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const { t } = useLang();
  const [featured, ...rest] = projects;
  return (
    <section id="projects" data-section="projects" className="section band">
      <div className="wrap">
        <div className="reveal">
          <Eyebrow color="purple">{t(projectsIntro.eyebrow)}</Eyebrow>
          <h2>{t(projectsIntro.title)}</h2>
        </div>

        <article className={`patch featured c-${featured.color} reveal`}>
          <div className="featured-side">
            <div className="featured-media">
              {featured.image && <img src={featured.image} alt="Chrysalis Quest — SIP-24, The Sandbox DAO" loading="lazy" />}
              {featured.metric && <span className="metric-tag">{t(featured.metric)}</span>}
            </div>
            <div className="chips">
              {featured.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
            <div className="link-row">
              {featured.links?.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="text-link">
                  {t(l.label)} ↗
                </a>
              ))}
            </div>
          </div>
          <div className="featured-body">
            <p className="meta">
              {t(featured.role)} · {t(featured.period)}
            </p>
            <h3>{t(featured.name)}</h3>
            <p className="body-text">{t(featured.summary)}</p>
            <ul className="highlights">
              {featured.highlights.map((h, i) => (
                <li key={i}>{t(h)}</li>
              ))}
            </ul>
          </div>
        </article>

        <div className="project-grid">
          {rest.map((p) => (
            <article key={p.id} className={`patch project c-${p.color} reveal`}>
              <p className="meta">{t(p.period)}</p>
              <h3>{t(p.name)}</h3>
              <p className="project-role">{t(p.role)}</p>
              <p className="body-text small">{t(p.summary)}</p>
              {p.metric && <span className="metric-pill">{t(p.metric)}</span>}
              {p.links && (
                <div className="link-row card-links">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="text-link">
                      {t(l.label)} ↗
                    </a>
                  ))}
                </div>
              )}
              <div className="chips">
                {p.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
          <a className="patch project next-card reveal" href="#contact">
            <BeadArt pattern="sparkle" size={64} />
            <h3>{t(projectsIntro.nextTitle)}</h3>
            <p className="body-text small">{t(projectsIntro.nextText)}</p>
            <span className="text-link">{t(projectsIntro.nextCta)} →</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Career() {
  const { t } = useLang();
  return (
    <section id="career" data-section="career" className="section">
      <div className="wrap">
        <div className="reveal">
          <Eyebrow color="mint">{t(careerIntro.eyebrow)}</Eyebrow>
          <h2>{t(careerIntro.title)}</h2>
        </div>
        <ol className="timeline">
          {career.map((c, i) => (
            <li key={i} className={`step reveal ${c.current ? 'is-current' : ''}`}>
              <span className="step-bead" aria-hidden="true" />
              <span className="step-period">{c.period}</span>
              <div>
                <h3>
                  {t(c.role)} <span className="org">· {c.org}</span>
                </h3>
                <p>{t(c.note)}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// Carrusel de premios: se ven de a 3 (2 en tablet, 1 en celular) y se pasa por páginas
function Awards() {
  const { t } = useLang();
  const trackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      const card = track.firstElementChild as HTMLElement | null;
      const perView = card ? Math.max(1, Math.round(track.clientWidth / card.offsetWidth)) : 1;
      setPages(Math.ceil(awardsByDate.length / perView));
      setPage(Math.round(track.scrollLeft / track.clientWidth));
    };
    measure();
    track.addEventListener('scroll', measure, { passive: true });
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    return () => {
      track.removeEventListener('scroll', measure);
      ro.disconnect();
    };
  }, []);

  const goTo = (p: number) => {
    const track = trackRef.current;
    if (!track) return;
    const next = Math.min(Math.max(p, 0), pages - 1);
    track.scrollTo({ left: next * track.clientWidth, behavior: 'smooth' });
  };

  return (
    <section id="awards" data-section="awards" className="section">
      <div className="wrap">
        <div className="awards-head reveal">
          <div>
            <Eyebrow color="butter">{t(awardsIntro.eyebrow)}</Eyebrow>
            <h2>{t(awardsIntro.title)}</h2>
          </div>
          <div className="carousel-arrows">
            <button type="button" className="arrow" onClick={() => goTo(page - 1)} disabled={page === 0} aria-label={t(awardsIntro.prev)}>
              ←
            </button>
            <button type="button" className="arrow" onClick={() => goTo(page + 1)} disabled={page >= pages - 1} aria-label={t(awardsIntro.next)}>
              →
            </button>
          </div>
        </div>
        <div className="awards-carousel reveal" ref={trackRef}>
          {awardsByDate.map((a, i) => (
            <a
              key={i}
              className={`patch award ${a.image ? '' : 'no-image'}`}
              href={a.href}
              target="_blank"
              rel="noreferrer"
            >
              {a.image ? (
                <div className="award-img">
                  <img src={a.image} alt="" loading="lazy" style={{ objectPosition: a.imagePosition }} />
                </div>
              ) : (
                <div className="award-art">
                  <BeadArt pattern="trophy" size={120} />
                </div>
              )}
              <div className="award-body">
                <p className={`meta kind kind-${a.kind}`}>
                  <span className="bead" aria-hidden="true" />
                  {t(awardsIntro[a.kind])} · {a.year}
                </p>
                <h3>{t(a.title)}</h3>
                <p className="body-text small">{t(a.text)}</p>
              </div>
            </a>
          ))}
        </div>
        {pages > 1 && (
          <div className="carousel-dots" role="group" aria-label={t(awardsIntro.eyebrow)}>
            {Array.from({ length: pages }, (_, i) => (
              <button
                key={i}
                type="button"
                className="dot-btn"
                aria-label={`${i + 1} / ${pages}`}
                aria-current={i === page}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Badges() {
  const { t } = useLang();
  const [selected, setSelected] = useState<Badge | null>(null);
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? badgesByDate : badgesByDate.filter((b) => b.featured);
  return (
    <section id="badges" data-section="badges" className="section band">
      <div className="wrap">
        <div className="reveal">
          <Eyebrow color="coral">{t(ui.nav.badges)}</Eyebrow>
          <h2>{t(badgesIntro.title)}</h2>
        </div>
        <ul className="badge-legend reveal">
          {Object.entries(badgeCategories).map(([id, c]) => (
            <li key={id} className={`c-${c.color}`}>
              <span className="bead" aria-hidden="true" />
              {t(c.label)}
            </li>
          ))}
        </ul>
        <ul className="badge-grid">
          {visible.map((b) => (
            <li key={b.title.es} className="badge reveal">
              <button type="button" onClick={() => setSelected(b)} aria-haspopup="dialog">
                <span className={`badge-patch c-${badgeCategories[b.category].color}`}>
                  <span>{b.glyph}</span>
                </span>
                <span className="badge-title">{t(b.title)}</span>
                <span className="badge-meta">
                  {b.now ? <em className="now">{t(badgesIntro.learning)}</em> : `${b.issuer}${b.year ? ` · ${b.year}` : ''}`}
                </span>
              </button>
            </li>
          ))}
        </ul>
        <div className="badges-more">
          <button type="button" className="btn btn-ghost" onClick={() => setShowAll((v) => !v)} aria-expanded={showAll}>
            {showAll ? t(badgesIntro.showLess) : `${t(badgesIntro.showAll)} (${badges.length})`}
          </button>
        </div>
      </div>
      <BadgesModal badge={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function Contact() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${links.email}`;
    }
  };
  return (
    <section id="contact" data-section="contact" className="section contact">
      <div className="wrap">
        <div className="patch contact-card c-pink reveal">
          <Eyebrow>{t(contact.eyebrow)}</Eyebrow>
          <h2>{t(contact.title)}</h2>
          <p className="body-text">{t(contact.text)}</p>
          <div className="contact-actions">
            <a className="btn" href={`mailto:${links.email}`}>
              {links.email}
            </a>
            <button type="button" className="btn btn-ghost" onClick={copy}>
              {copied ? t(contact.copied) : t(contact.copy)}
            </button>
          </div>
          <ul className="socials">
            <li>
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </li>
            <li>
              <a href={links.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </li>
            <li>
              <a href={links.gitlab} target="_blank" rel="noreferrer">
                GitLab ↗
              </a>
            </li>
            <li>
              <a href={links.cv} download>
                {t(contact.cvNote)} ↓
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer id="footer" data-section="footer" className="site-footer">
      <div className="wrap footer-inner">
        <img className="logo-img" src="./img/grumysh-logo.png" alt="Grumysh" width={132} height={32} />
        <p>
          {t(footer.made)} {t(footer.avatar)}
        </p>
        <p className="muted">© {new Date().getFullYear()} Andrea Ramírez</p>
      </div>
    </footer>
  );
}

// Sección activa: la que cruza la mitad de la pantalla
function useActiveSection() {
  const [active, setActive] = useState('hero');
  useEffect(() => {
    let raf = 0;
    const check = () => {
      raf = 0;
      const mid = window.innerHeight * 0.5;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) return setActive('footer');
      for (const id of SECTIONS) {
        const r = document.getElementById(id)?.getBoundingClientRect();
        if (r && r.top <= mid && r.bottom > mid) return setActive(id);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };
    check();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return active;
}

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    const observeNew = () => document.querySelectorAll('.reveal:not(.in)').forEach((el) => io.observe(el));
    observeNew();
    // También los bloques que aparecen después (popups, recarga en caliente, etc.)
    const mo = new MutationObserver(observeNew);
    mo.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}

export default function App() {
  const slotRef = useRef<HTMLDivElement>(null);
  const section = useActiveSection();
  useReveal();
  return (
    <>
      <a className="skip" href="#about">
        Saltar al contenido
      </a>
      <Header />
      <main>
        <Hero slotRef={slotRef} />
        <About />
        <Projects />
        <Career />
        <Badges />
        <Awards />
        <Contact />
      </main>
      <Footer />
      <AvatarStage section={section} slotRef={slotRef} />
    </>
  );
}
