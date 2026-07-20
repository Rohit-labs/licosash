import { InstagramIcon, LinkedInIcon, YouTubeIcon } from "./icons";

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
            <img src="/logo_foot.jpeg" alt="Licosash" className="footer__logo-img" />
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
              <a href="tel:+919833201919">+91 9833201919</a>
              <br />
              <a href="mailto:arvind@licosash.com">arvind@licosash.com</a>
            </p>
            <div className="footer__social">
              <a href="#" aria-label="LinkedIn">
                <LinkedInIcon size={18} />
              </a>
              <a href="#" aria-label="Instagram">
                <InstagramIcon size={18} />
              </a>
              <a href="#" aria-label="YouTube">
                <YouTubeIcon size={18} />
              </a>
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
