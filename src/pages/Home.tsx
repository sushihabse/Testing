import { useEffect, useState } from "react";
import "./Home.css";

const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

useEffect(() => {
  fetch("/Testing/news/articles.json")
    .then((res) => res.json())
    .then((data) => setNewsItems(data))
    .catch(() => setNewsItems([]));
}, []);
// ── Replace these with your actual image imports ──
// import heroImage from "../assets/hero.jpg";
// import aboutImage from "../assets/about.png";
// import support1Image from "../assets/support1.png";
// import support2Image from "../assets/support2.png";
// import proj1Image from "../assets/proj1.png";
// import proj2Image from "../assets/proj2.png";
// import proj3Image from "../assets/proj3.png";
// import contactImage from "../assets/contact.png";

type Lang = "ja" | "en";


import { useEffect, useState } from "react";

type NewsItem = {
  id: string;
  tag: string;
  tagEn: string;
  tagColor: string;
  titleJa: string;
  titleEn: string;
  date: string;
  bodyJa: string;
  bodyEn: string;
  image: string | null;
};

const content = {
  ja: {
    // Hero
    heroTitle: "国際人材と資産の架け橋に",
    heroSub: "国際人材と資本の流動を支える支援プラットフォーム",
    heroBtn: "詳しく見る",

    // About
    aboutEyebrow: "JIEFとは",
    aboutTitle: "国際人材と資本の流動を支える取り組みについて",
    aboutText1:
      "国際的な人材移動および資本の流動が加速する中、外国人の日本における創業や、日本と海外をつなぐ事業活動へのニーズが高まっています。",
    aboutText2:
      "こうした背景のもと、当財団は外国人の日本創業および事業支援をはじめ、海外展開や資産形成に関する情報提供・連携支援を通じて、国境を越えた人材と資本の循環を支える取り組みを進めています。",
    aboutBtn: "詳しく見る",

    // Support
    supportTitle: "支援内容",
    support1Title: "外国人向け支援",
    support1Text1: "日本での創業および在留に関する各種支援に対応しています。",
    support1Text2:
      "ビザ、会社設立、生活面に関する情報提供および支援体制の整備を通じて、円滑な日本での活動を支えています。",
    support1Tags: ["総合支援", "創業環境支援", "人材連携支援"],
    support2Title: "日本人向け支援",
    support2Text1: "海外展開および資産形成に関する支援に対応しています。",
    support2Text2:
      "海外移住や不動産に関する情報提供および現地連携を通じて、国際的な事業活動および資産形成を支援しています。",
    support2Tags: ["海外資産・国際展開支援", "海外創業・進出先紹介"],

    // Projects
    projectTitle: "プロジェクト",
    projectSub: "具体的な支援体制の構築および連携推進に取り組んでいます。",
    proj1Title: "国際創業支援エコシステム構築",
    proj1Badge: "企画中",
    proj1Text:
      "外国人起業家を対象とした支援体制の構築を目的に、多様な業種・専門家との連携による持続的な支援環境の整備を進めています。",
    proj2Title: "専門家ネットワーク構築",
    proj2Badge: "進行中",
    proj2Text:
      "法務・税務・会計分野をはじめとする専門家との連携を通じて、分野横断的な支援ネットワークの構築を推進しています。",
    proj3Title: "国際ビジネス情報発信・交流事業",
    proj3Badge: "定期実施",
    proj3Text:
      "定期的なオンラインセッションを通じて、国際ビジネスに関する情報提供および交流機会の創出を行っています。",
    projectBtn: "詳しく見る",

    // News
    newsTitle: "お知らせ",
    newsMore: "一覧を見る →",
    newsLoading: "記事を読み込み中...",

    // Contact
    contactTitle: "お問い合わせ",
    contactText:
      "各種ご相談については、お気軽にお問い合わせください。\nオンラインでのご相談にも対応しております。",
    contactBtn: "お問い合わせはこちら",
    // inside ja:

    newsLoading: "記事を読み込み中...",
  
  },

  en: {
    // Hero
    heroTitle: "Bridging Global Talent & Capital",
    heroSub: "A support platform for international talent and investment.",
    heroBtn: "Learn More",
    

    // About
    aboutEyebrow: "ABOUT JIEF",
    aboutTitle: "Supporting Global Human Resource and Capital Mobility",
    aboutText1:
      "As international mobility of talent and capital accelerates, the need for foreign entrepreneurship in Japan and cross-border business activities is growing.",
    aboutText2:
      "Against this backdrop, we support foreign entrepreneurs, provide information on overseas expansion and asset formation, and promote the circulation of talent and capital across borders.",
    aboutBtn: "Learn More",

    // Support
    supportTitle: "Support Services",
    support1Title: "Support for Foreigners",
    support1Text1:
      "We provide comprehensive support for startups and residency in Japan.",
    support1Text2:
      "We support smooth activities in Japan through visa, company setup, and lifestyle guidance.",
    support1Tags: ["General Support", "Startup Support", "Talent Support"],
    support2Title: "Support for Japanese",
    support2Text1:
      "We support overseas business expansion and asset formation.",
    support2Text2:
      "We support international business and asset formation through overseas real estate information and local partnerships.",
    support2Tags: ["Global Asset Support", "Overseas Startup Introduction"],

    // Projects
    projectTitle: "Projects",
    projectSub:
      "We are working on building support systems and promoting collaboration.",
    proj1Title: "International Startup Ecosystem",
    proj1Badge: "Planning",
    proj1Text:
      "Building a sustainable support environment for foreign entrepreneurs through partnerships with diverse industries and professionals.",
    proj2Title: "Expert Network Building",
    proj2Badge: "In Progress",
    proj2Text:
      "Building cross-disciplinary support and expert networks through partnerships with legal, tax, and accounting professionals.",
    proj3Title: "International Business Exchange",
    proj3Badge: "Regular",
    proj3Text:
      "Providing information and creating exchange opportunities for international business through regular online sessions.",
    projectBtn: "Learn More",

    // News
    newsTitle: "News",
    newsMore: "View All →",
    newsLoading: "Loading articles...",
    // inside en:
    newsLoading: "Loading articles...",

    // Contact
    contactTitle: "Contact",
    contactText:
      "Please feel free to contact us for any inquiries.\nOnline consultations are also available.",
    contactBtn: "Contact Us",
    
  },
};

type Props = { language: Lang };

function Home({ language }: Props) {
  const t = content[language];
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetch("/Testing/news/articles.json")
      .then((r) => r.json())
      .then((data) => setNewsItems(data))
      .catch(() => setNewsItems([]));
  }, []);

  return (
    <>
      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="hero">
        {/* Replace div below with:
            <img src={heroImage} className="hero-bg" alt="" />
        */}
        <div className="hero-bg hero-bg-placeholder" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>{t.heroTitle}</h1>
          <p>{t.heroSub}</p>
          <button className="btn-amber">{t.heroBtn}</button>
        </div>
      </section>

      {/* ══════════════════════════════
          ABOUT
      ══════════════════════════════ */}
      <section className="about-section" id="section-0">
        <div className="about-inner">
          <div className="about-left">
            <div className="eyebrow">
              <span className="eyebrow-bar" />
              <span className="eyebrow-label">{t.aboutEyebrow}</span>
            </div>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutText1}</p>
            <p>{t.aboutText2}</p>
            <button className="btn-amber">{t.aboutBtn}</button>
          </div>
          <div className="about-right">
            {/* Replace with: <img src={aboutImage} alt="About" /> */}
            <div className="about-img-placeholder" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SUPPORT
      ══════════════════════════════ */}
      <section className="support-section" id="section-1">
        <div className="support-heading">
          <h2>{t.supportTitle}</h2>
        </div>

        <div className="support-grid">
          {/* Card 1 */}
          <div className="support-card">
            <div className="support-card-body">
              <h3>{t.support1Title}</h3>
              <p>{t.support1Text1}</p>
              <p>{t.support1Text2}</p>
              <div className="support-tags">
                {t.support1Tags.map((tag, i) => (
                  <span key={i} className="support-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="support-card-img">
              {/* Replace with: <img src={support1Image} alt={t.support1Title} /> */}
              <div className="img-placeholder" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="support-card support-card--reverse">
            <div className="support-card-img">
              {/* Replace with: <img src={support2Image} alt={t.support2Title} /> */}
              <div className="img-placeholder" />
            </div>
            <div className="support-card-body">
              <h3>{t.support2Title}</h3>
              <p>{t.support2Text1}</p>
              <p>{t.support2Text2}</p>
              <div className="support-tags">
                {t.support2Tags.map((tag, i) => (
                  <span key={i} className="support-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          PROJECTS
      ══════════════════════════════ */}
      <section className="project-section" id="section-2">
        <div className="project-heading">
          <h2>{t.projectTitle}</h2>
          <p>{t.projectSub}</p>
        </div>

        <div className="project-grid">

          {/* Card 1 */}
          <div className="project-card">
            <div className="project-card-img">
              {/* Replace with: <img src={proj1Image} alt={t.proj1Title} /> */}
              <div className="img-placeholder" />
            </div>
            <div className="project-card-divider" />
            <div className="project-card-body">
              <h3>
                {t.proj1Title}<br />
                <span className="project-card-badge">（{t.proj1Badge}）</span>
              </h3>
              <p>{t.proj1Text}</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="project-card">
            <div className="project-card-img">
              {/* Replace with: <img src={proj2Image} alt={t.proj2Title} /> */}
              <div className="img-placeholder" />
            </div>
            <div className="project-card-divider" />
            <div className="project-card-body">
              <h3>
                {t.proj2Title}<br />
                <span className="project-card-badge">（{t.proj2Badge}）</span>
              </h3>
              <p>{t.proj2Text}</p>
            </div>
          </div>

          {/* Card 3 — animated hover cycles image + title */}
          <div className="project-card project-card-animated">
            <div className="project-card-img multi-hover-img">
              {/* Replace src values with your actual images */}
              <div className="slide-img img-1 img-placeholder" />
              <div className="slide-img img-2 img-placeholder" />
              <div className="slide-img img-3 img-placeholder" />
            </div>
            <div className="project-card-divider" />
            <div className="project-card-body">
              <div className="card3-title card3-title--1">
                <h3>
                  {t.proj3Title}<br />
                  <span className="project-card-badge">（{t.proj3Badge}）</span>
                </h3>
                <p>{t.proj3Text}</p>
              </div>
              <div className="card3-title card3-title--2">
                <h3>
                  {t.proj2Title}<br />
                  <span className="project-card-badge">（{t.proj2Badge}）</span>
                </h3>
                <p>{t.proj2Text}</p>
              </div>
              <div className="card3-title card3-title--3">
                <h3>
                  {t.proj1Title}<br />
                  <span className="project-card-badge">（{t.proj1Badge}）</span>
                </h3>
                <p>{t.proj1Text}</p>
              </div>
            </div>
          </div>

        </div>

        <div className="project-btn-wrap">
          <button className="btn-amber">{t.projectBtn}</button>
        </div>
      </section>

      {/* ══════════════════════════════
          NEWS
      ══════════════════════════════ */}
      {/* ══════════════════════════════
    NEWS
══════════════════════════════ */}
<section className="news-section">
  <div className="news-header">
    <h2>{t.newsTitle}</h2>
    <a href="#" className="news-more">{t.newsMore}</a>
  </div>

  <div className="news-list">
    {newsItems.length === 0 ? (
      <p className="news-loading">{t.newsLoading}</p>
    ) : (
      newsItems.map((item) => (
        <div key={item.id} className="news-item">
          <div className="news-item-left">
            <span className={`news-tag ${item.tagColor}`}>
              {language === "ja" ? item.tag : item.tagEn}
            </span>
            <span className="news-item-text">
              {language === "ja" ? item.titleJa : item.titleEn}
            </span>
          </div>
          <span className="news-item-date">{item.date}</span>
        </div>
      ))
    )}
  </div>
</section>

      {/* ══════════════════════════════
          CONTACT
      ══════════════════════════════ */}
      <section className="contact-section" id="section-4">
        <div className="contact-box">
          <div className="contact-img-placeholder" />
          <div className="contact-content">
            <h2>{t.contactTitle}</h2>
            <p style={{ whiteSpace: "pre-line" }}>{t.contactText}</p>
            <button className="btn-amber-outline">{t.contactBtn}</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;