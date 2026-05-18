import "./Navbar.css";

type Props = {
  language: "ja" | "en";
  setLanguage: (lang: "ja" | "en") => void;
};

const navLinks = {
  ja: ["JIEFとは", "支援内容", "プロジェクト", "お知らせ", "お問い合わせ"],
  en: ["About", "Services", "Projects", "News", "Contact"],
};

function Navbar({ language, setLanguage }: Props) {
  const links = navLinks[language];

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">JIEF</div>

        <nav className="navbar-links">
          {links.map((link, i) => (
            <a key={i} href={`#section-${i}`} className="navbar-link">
              {link}
            </a>
          ))}
        </nav>

        <div className="navbar-lang">
          <button
            className={`lang-btn ${language === "ja" ? "active" : ""}`}
            onClick={() => setLanguage("ja")}
          >
            JP
          </button>
          <span className="lang-divider">|</span>
          <button
            className={`lang-btn ${language === "en" ? "active" : ""}`}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;