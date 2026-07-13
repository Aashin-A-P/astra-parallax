import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowUpRight, Check, Clipboard, Home, PackageOpen, Share2 } from 'lucide-react';
import { FaPinterestP } from 'react-icons/fa';
import { SITE_URL, smallKitchenArticle } from './pinterestArticleData';

const upsertMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement(attributes.tag || 'meta');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    if (key !== 'tag') element.setAttribute(key, value);
  });
  return element;
};

function useArticleMetadata(article) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${article.path}`;
    const heroUrl = `${SITE_URL}${article.heroImage}`;
    document.title = `${article.shortTitle} | AstraParallax`;

    upsertMeta('meta[name="description"]', { name: 'description', content: article.description });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'article' });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: article.title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: article.description });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: heroUrl });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: article.title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: article.description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: heroUrl });
    upsertMeta('link[rel="canonical"]', { tag: 'link', rel: 'canonical', href: canonicalUrl });

    const schemas = [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        image: heroUrl,
        datePublished: article.published,
        dateModified: article.published,
        mainEntityOfPage: canonicalUrl,
        author: { '@type': 'Organization', name: 'AstraParallax' },
        publisher: { '@type': 'Organization', name: 'AstraParallax', url: SITE_URL }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Pinterest', item: `${SITE_URL}/pinterest` },
          { '@type': 'ListItem', position: 3, name: article.category, item: canonicalUrl }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: article.shortTitle,
        numberOfItems: article.products.length,
        itemListElement: article.products.map((product) => ({
          '@type': 'ListItem',
          position: product.id,
          item: { '@type': 'Thing', name: product.name, url: `${canonicalUrl}#${product.slug}` }
        }))
      }
    ];

    const script = document.createElement('script');
    script.id = 'article-structured-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemas);
    document.head.appendChild(script);
    return () => script.remove();
  }, [article]);
}

function AffiliateDisclosure({ compact = false }) {
  return (
    <aside className={`article-disclosure ${compact ? 'article-disclosure--compact' : ''}`} aria-label="Affiliate disclosure">
      <strong>Disclosure:</strong> This article contains affiliate links. As an Amazon Associate, I earn from qualifying purchases at no additional cost to you.
    </aside>
  );
}

function ProductImage({ product }) {
  if (product.imageAvailable) {
    return <img className="article-product__image" src={product.image} alt={product.imageAlt} width="720" height="720" loading="lazy" />;
  }
  return (
    <div className="article-product__placeholder" role="img" aria-label={`${product.imageAlt}. Product image pending authorized asset.`}>
      <PackageOpen size={34} strokeWidth={1.4} />
      <span>Product image pending</span>
      <small>{product.name}</small>
    </div>
  );
}

function ProductSection({ product }) {
  return (
    <section className="article-product" id={product.slug} aria-labelledby={`${product.slug}-title`}>
      <div className="article-product__number">PRODUCT {String(product.id).padStart(2, '0')}</div>
      <div className="article-product__grid">
        <ProductImage product={product} />
        <div className="article-product__intro">
          <p className="article-product__brand">{product.brand} · {product.category}</p>
          <h2 id={`${product.slug}-title`}>{product.name}</h2>
          <p className="article-product__summary">{product.summary}</p>
          <h3>Why it works in a small kitchen</h3>
          <p>{product.whyItWorks}</p>
        </div>
      </div>

      <div className="article-product__details">
        <div>
          <h3>Key benefits</h3>
          <ul>{product.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
        </div>
        <div>
          <h3>Best for</h3>
          <ul>{product.bestFor.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div>
          <h3>Things to consider</h3>
          <ul>{product.considerations.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>

      <aside className="article-tip"><strong>Small-kitchen tip</strong><span>{product.organizationTip}</span></aside>
      <div className="article-product__cta-row">
        <a
          className="article-amazon-button"
          href={product.affiliateUrl}
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          aria-label={`Check current Amazon details for ${product.name} (affiliate link, opens in a new tab)`}
        >
          Check Current Details on Amazon <ArrowUpRight size={18} />
        </a>
        <small>Affiliate link · Details and availability may change.</small>
      </div>
    </section>
  );
}

function ComparisonTable({ products }) {
  return (
    <section className="article-section" aria-labelledby="comparison-heading">
      <div className="article-section__eyebrow">AT A GLANCE</div>
      <h2 id="comparison-heading">Quick comparison</h2>
      <div className="comparison-wrap">
        <table className="comparison-table">
          <caption className="sr-only">Comparison of ten small-kitchen organization products</caption>
          <thead><tr><th scope="col">No.</th><th scope="col">Product</th><th scope="col">Best for</th><th scope="col">Space-saving benefit</th><th scope="col">Link</th></tr></thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td data-label="Number">{String(product.id).padStart(2, '0')}</td>
                <th scope="row" data-label="Product">{product.name}</th>
                <td data-label="Best for">{product.bestForShort}</td>
                <td data-label="Benefit">{product.spaceBenefit}</td>
                <td data-label="Link">
                  <a href={product.affiliateUrl} target="_blank" rel="sponsored nofollow noopener noreferrer" aria-label={`View ${product.name} on Amazon (affiliate link, opens in a new tab)`}>View product <ArrowUpRight size={14} /></a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function PinterestArticle() {
  const article = smallKitchenArticle;
  const [copied, setCopied] = useState(false);
  useArticleMetadata(article);

  const canonicalUrl = `${SITE_URL}${article.path}`;
  const heroUrl = `${SITE_URL}${article.heroImage}`;
  const pinterestUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(canonicalUrl)}&media=${encodeURIComponent(heroUrl)}&description=${encodeURIComponent(article.title)}`;

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="article-page">
      <header className="article-nav">
        <a href="/pinterest" className="article-nav__back"><ArrowLeft size={18} /> Pinterest</a>
        <a href="/" className="article-nav__brand">ASTRA <b>PARALLAX</b></a>
        <div className="article-share article-share--top">
          <a href={pinterestUrl} target="_blank" rel="noopener noreferrer" aria-label="Share this article on Pinterest"><FaPinterestP /></a>
          <button onClick={copyLink} aria-label="Copy article link">{copied ? <Check size={18} /> : <Share2 size={18} />}</button>
        </div>
      </header>

      <main>
        <article>
          <div className="article-hero-wrap">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <ol><li><a href="/">Home</a></li><li><a href="/pinterest">Pinterest</a></li><li aria-current="page">Small Kitchen Ideas</li></ol>
            </nav>
            <header className="article-hero">
              <div className="article-hero__copy">
                <span className="article-category">SMALL KITCHEN IDEAS</span>
                <h1>10 Kitchen Items That Make Small Kitchens Look Bigger <em>(Amazon Finds You'll Actually Use)</em></h1>
                <p>{article.excerpt}</p>
                <div className="article-byline"><span>ASTRAPARALLAX EDITORIAL</span><i /> <time dateTime={article.published}>July 13, 2026</time><i /> <span>12 MIN READ</span></div>
              </div>
              <img src={article.heroImage} alt="A calm, organized small kitchen using shelves and clear work surfaces" width="1600" height="1066" fetchPriority="high" />
            </header>
          </div>

          <div className="article-body">
            <section className="article-intro">
              <p className="article-lede">A kitchen rarely feels cramped because of one single object. More often, the pressure comes from crowded counters, deep cabinets that are difficult to use, and vertical space that sits empty.</p>
              <p>This guide looks at practical small kitchen organization products that may reduce visible clutter, free useful surfaces, improve access to everyday tools and make a compact kitchen feel calmer. None of them can physically enlarge the room. The goal is to make the space you already have work more clearly.</p>
            </section>

            <AffiliateDisclosure />

            <nav className="article-toc" aria-labelledby="toc-heading">
              <div><span>QUICK OVERVIEW</span><h2 id="toc-heading">Jump to a kitchen find</h2></div>
              <ol>{article.products.map((product) => <li key={product.id}><a href={`#${product.slug}`}><span>{String(product.id).padStart(2, '0')}</span>{product.name}</a></li>)}</ol>
            </nav>

            <ComparisonTable products={article.products} />

            <div className="article-products">
              {article.products.map((product) => <ProductSection product={product} key={product.id} />)}
            </div>

            <section className="article-conclusion">
              <span className="article-category">A CALMER KITCHEN</span>
              <h2>How to Make a Small Kitchen Feel More Open</h2>
              <p>Start by keeping frequently used surfaces clear. Move suitable tools into vertical or hidden storage, group similar items together and measure every cabinet or drawer before ordering an organizer. Most importantly, avoid buying a storage product unless it solves a specific daily problem.</p>
              <blockquote>Start with the area that creates the most daily clutter, then add only the organizers that genuinely improve how you use the space.</blockquote>
              <AffiliateDisclosure compact />
            </section>

            <section className="continue-exploring" aria-labelledby="continue-heading">
              <span>MORE FROM ASTRA PARALLAX</span>
              <h2 id="continue-heading">Continue Exploring</h2>
              <div>
                <a href="/pinterest"><FaPinterestP /><strong>Browse More Pinterest Guides</strong><small>Return to our ideas and inspiration hub.</small><ArrowUpRight /></a>
                <a href="/"><Home /><strong>Explore Astra Parallax</strong><small>Choose another corner of our universe.</small><ArrowUpRight /></a>
              </div>
            </section>

            <section className="article-share article-share--bottom" aria-label="Share this article">
              <span>Found this useful? Save it for later.</span>
              <a href={pinterestUrl} target="_blank" rel="noopener noreferrer"><FaPinterestP /> Save on Pinterest</a>
              <button onClick={copyLink}>{copied ? <Check size={17} /> : <Clipboard size={17} />} {copied ? 'Link copied' : 'Copy link'}</button>
            </section>
          </div>
        </article>
      </main>
      <footer className="article-footer">© 2026 Astra Parallax · Thoughtful finds for curious homes</footer>
    </div>
  );
}
