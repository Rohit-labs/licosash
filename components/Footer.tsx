import { InstagramIcon, LinkedInIcon, YouTubeIcon } from "./icons";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#work", label: "Work" },
  { href: "#talk", label: "Let's Talk" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__hero">
          <div className="footer__brand">
            <img src="/logo_foot.jpeg" alt="Licosash™" className="footer__logo-img" />
          </div>
          <p className="footer__punchline">We don&apos;t just do influencer marketing, we humanise it.</p>
          <p className="footer__info">
            Supported by Anecdote Martech &nbsp;&middot;&nbsp; MSME: UDYAM-MH-33-0457403 &nbsp;&middot;&nbsp; GSTIN: 27AGRPM3661L1ZQ
          </p>
        </div>

        <div className="footer__legal">
          © Licosash™. 2024. All rights reserved by Anecdote Martech.
        </div>
      </div>
    </footer>
  );
}
