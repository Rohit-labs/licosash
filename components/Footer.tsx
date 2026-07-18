const LINKS = [
  { href: "#about", label: "About" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#work", label: "Featured Work" },
  { href: "#creators", label: "Creators" },
  { href: "#talk", label: "Let's Talk" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__hero">
          <div className="footer__brand">
            <span className="footer__brand-mark" />
            Licosash
          </div>
          <p className="footer__punchline">We build campaigns people remember.</p>
          <p className="footer__sub">Enterprise strategy. Creator energy.</p>
        </div>

        <div className="footer__grid">
          <div className="footer__col">
            <div className="footer__col-title">Contact</div>
            <p>
              Pan India
              <br />
              +91 00000 00000
              <br />
              hello@licosash.com
            </p>
            <div className="footer__social">
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Instagram">ig</a>
              <a href="#" aria-label="YouTube">yt</a>
            </div>
          </div>

          <div className="footer__col">
            <div className="footer__col-title">Quick links</div>
            <div className="footer__links">
              {LINKS.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer__col">
            <div className="footer__col-title">Supported by Anecdote Martech</div>
            <small>
              MSME: UDYAM-MH-33-0457403&nbsp;&nbsp;|&nbsp;&nbsp;GSTIN:
              27AGRPM3661L1ZQ
              <br />
              <br />
              Pan India Business Development Teams, Social Media experts,
              Videographers, Photographers, Creator Management, Ideation &amp;
              Scripting, Outsourced Studio for (pre &amp; post) Production &amp;
              Editing, Analysis &amp; Strategy, Legal &amp; Finance.
            </small>
          </div>
        </div>

        <div className="footer__legal">
          © Licosash. 2024. All rights reserved by Anecdote Martech.
        </div>
      </div>
    </footer>
  );
}
