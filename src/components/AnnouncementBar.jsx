import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { phone } from '../data/siteData'

const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/XtraTheme', Icon: Facebook },
  { label: 'Twitter', href: 'https://twitter.com/Xtra_Theme', Icon: Twitter },
  { label: 'Instagram', href: 'https://www.instagram.com/XtraTheme/', Icon: Instagram },
  { label: 'Linkedin', href: '#home', Icon: Linkedin },
]

export default function AnnouncementBar() {
  return (
    <div className="topbar">
      <div className="topbar__inner">
        <div className="topbar__left">
          <span className="topbar__question">Have any questions? call us</span>
          <a className="topbar__phone" href={phone.href}>
            <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" focusable="false">
              <path
                fill="currentColor"
                d="M6.6 10.8c1.2 2.4 3.2 4.4 5.6 5.6l2-2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V19c0 .6-.4 1-1 1C9.9 20 4 14.1 4 6.9c0-.6.4-1 1-1h3.2c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1l-2 2.4z"
              />
            </svg>
            <span>{phone.display}</span>
          </a>
        </div>
        <ul className="topbar__social" aria-label="Social media">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                <Icon size={15} strokeWidth={1.8} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
