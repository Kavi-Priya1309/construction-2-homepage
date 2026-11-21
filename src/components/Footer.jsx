import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import { images } from '../data/siteData'

const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/XtraTheme', Icon: Facebook },
  { label: 'Twitter', href: 'https://twitter.com/Xtra_Theme', Icon: Twitter },
  { label: 'Instagram', href: 'https://www.instagram.com/XtraTheme/', Icon: Instagram },
  { label: 'Youtube', href: 'https://youtube.com/', Icon: Youtube },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container footer__inner">
          <a className="footer__logo" href="#home" aria-label="XTRA Construction home">
            <img
              src={images.footerLogo}
              width="540"
              height="100"
              alt="Construction 2 WordPress Theme logo"
              loading="lazy"
            />
          </a>

          <p className="footer__about">
            A company is any entity that engages in business.
            <br />
            Companies can be structured in different ways.
            <br />
            For example, your company can be a sole proprietorship,
            <br />
            a partnership, or a corporation.
          </p>

          <ul className="footer__social" aria-label="Social media">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                  <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <span className="footer__copyright">© 2026 XTRA, Powered by WordPress</span>
          <nav className="footer__links" aria-label="Footer">
            <a href="#quote">Contact Us</a>
            <span className="footer__divider" aria-hidden="true" />
            <a href="#about">About</a>
            <span className="footer__divider" aria-hidden="true" />
            <a href="#home">Privacy Policy</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
