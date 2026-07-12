import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowLeft, ArrowUpRight, Check, Copy, Share2, Sparkles } from 'lucide-react';
import { platforms, getPlatform } from './linkData';
import './styles.css';

function Brand({ compact = false }) {
  return (
    <a className={`brand ${compact ? 'brand--compact' : ''}`} href="/" aria-label="Astra Parallax home">
      <span className="brand__mark" aria-hidden="true"><Sparkles size={17} /></span>
      <span>ASTRA <b>PARALLAX</b></span>
    </a>
  );
}

function Home() {
  return (
    <main className="shell home">
      <nav className="topbar"><Brand /><span className="topbar__note">One universe. Every link.</span></nav>
      <section className="hero">
        <p className="kicker"><span /> WELCOME TO OUR UNIVERSE <span /></p>
        <h1>Find your <em>perspective.</em></h1>
        <p className="hero__copy">Stories, ideas, and little discoveries - choose where you’d like to begin.</p>
      </section>
      <section className="platform-grid" aria-label="Astra Parallax platforms">
        {platforms.map((platform, index) => {
          const Icon = platform.icon;
          return (
            <a
              href={`/${platform.slug}`}
              className="platform-card"
              style={{ '--accent': platform.color, '--glow': platform.glow, '--delay': `${index * 90}ms` }}
              key={platform.slug}
            >
              <img className="platform-card__art" src={platform.image} alt="" />
              <span className="platform-card__shade" aria-hidden="true" />
              <div className="platform-card__top">
                <span className="platform-card__number">0{index + 1}</span>
                <span className="platform-card__arrow"><ArrowUpRight size={19} /></span>
              </div>
              <div className="platform-card__label">
                <span className="platform-card__icon"><Icon size={22} strokeWidth={1.8} /></span>
                <div>
                  <h2>{platform.name}</h2>
                  <p>{platform.eyebrow}</p>
                </div>
              </div>
            </a>
          );
        })}
      </section>
      <footer>Made with curiosity <span>✦</span> Astra Parallax</footer>
    </main>
  );
}

function PlatformPage({ platform }) {
  const [copied, setCopied] = useState(false);
  const Icon = platform.icon;

  useEffect(() => {
    document.title = `${platform.name} Links - Astra Parallax`;
  }, [platform.name]);

  const sharePage = async () => {
    const data = { title: `${platform.name} - Astra Parallax`, url: window.location.href };
    if (navigator.share) return navigator.share(data).catch(() => {});
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main className="shell link-page" style={{ '--accent': platform.color, '--glow': platform.glow }}>
      <nav className="detail-nav">
        <a href="/" className="circle-button" aria-label="Back to home"><ArrowLeft size={20} /></a>
        <Brand compact />
        <button className="circle-button" onClick={sharePage} aria-label="Share this page">
          {copied ? <Check size={19} /> : <Share2 size={19} />}
        </button>
      </nav>

      <section className="profile">
        <div className="profile__icon"><Icon size={30} strokeWidth={1.7} /></div>
        <p className="profile__eyebrow">{platform.eyebrow}</p>
        <h1>{platform.name}</h1>
        <p>{platform.description}</p>
      </section>

      <section className="links" aria-label={`${platform.name} links`}>
        <a className="link-card link-card--primary" href={platform.accountUrl} target="_blank" rel="noreferrer">
          <span className="link-card__mini"><Icon size={19} /></span>
          <span><strong>{platform.accountLabel}</strong><small>Official {platform.name} page</small></span>
          <ArrowUpRight size={20} />
        </a>

        <div className="section-label"><span>Featured links</span><i /></div>

        {platform.links.map((link) => {
          const content = (
            <>
              <span className="link-card__mini"><Sparkles size={18} /></span>
              <span><strong>{link.title}</strong><small>{link.note}</small></span>
              {link.active ? <ArrowUpRight size={20} /> : <span className="soon">SOON</span>}
            </>
          );
          return link.active ? (
            <a className="link-card" href={link.url} target="_blank" rel="sponsored noreferrer" key={link.title}>{content}</a>
          ) : (
            <div className="link-card link-card--disabled" key={link.title}>{content}</div>
          );
        })}
      </section>

      <button className="copy-button" onClick={sharePage}>
        {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? 'Link copied' : 'Copy this page'}
      </button>
      <footer>Made with curiosity <span>✦</span> Astra Parallax</footer>
    </main>
  );
}

function NotFound() {
  return <main className="shell not-found"><Brand /><h1>Lost among the stars?</h1><p>That page doesn’t exist yet.</p><a href="/">Return home</a></main>;
}

function App() {
  const slug = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
  if (!slug) return <Home />;
  const platform = getPlatform(slug);
  return platform ? <PlatformPage platform={platform} /> : <NotFound />;
}

createRoot(document.getElementById('root')).render(<App />);
