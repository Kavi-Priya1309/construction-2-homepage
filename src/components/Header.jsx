import { useEffect, useRef, useState } from 'react'
import { Facebook, Home, Instagram, Linkedin, Menu, Phone, Search, Twitter, X } from 'lucide-react'
import { images, navigation, phone } from '../data/siteData'
import SearchOverlay from './SearchOverlay'

function NavItem({ item }) {
  const hasChildren = Boolean(item.children?.length)

  return (
    <li className={`main-nav__item${hasChildren ? ' has-children' : ''}`}>
      <a href={item.href} className="main-nav__link">
        {item.label}
        {hasChildren && (
          <svg className="main-nav__caret" viewBox="0 0 10 6" width="10" height="6" aria-hidden="true">
            <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        )}
      </a>
      {hasChildren && (
        <ul className="sub-menu">
          {item.children.map((child) => (
            <li
              key={child.label}
              className={`sub-menu__item${child.children?.length ? ' has-children' : ''}`}
            >
              <a href={child.href} className="sub-menu__link">
                {child.label}
                {child.children?.length ? <span className="sub-menu__arrow">›</span> : null}
              </a>
              {child.children?.length ? (
                <ul className="sub-menu sub-menu--nested">
                  {child.children.map((nested) => (
                    <li key={nested.label} className="sub-menu__item">
                      <a href={nested.href} className="sub-menu__link">
                        {nested.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 320)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('is-locked', menuOpen || searchOpen)
    if (menuOpen) closeButtonRef.current?.focus()
    return () => document.body.classList.remove('is-locked')
  }, [menuOpen, searchOpen])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        setSearchOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="site-header">
        <div className="site-header__bar">
          <a className="brand" href="#home" aria-label="XTRA Construction home">
            <img
              src={images.logo}
              width="270"
              height="100"
              alt="Construction 2 WordPress Theme"
            />
          </a>

          <div className="site-header__right">
            <nav className="main-nav" aria-label="Primary">
              <ul className="main-nav__list">
                <li className="main-nav__item">
                  <a
                    href="#home"
                    className="main-nav__link main-nav__link--home"
                    aria-label="Home"
                  >
                    <Home size={16} strokeWidth={2} aria-hidden="true" />
                  </a>
                </li>
                {navigation.map((item) => (
                  <NavItem key={item.label} item={item} />
                ))}
              </ul>
            </nav>

            <button
              type="button"
              className="header-icon-btn header-icon-btn--search"
              aria-label="Open search"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen(true)}
            >
              <Search size={20} strokeWidth={2} aria-hidden="true" />
            </button>

            <a
              className="header-phone-btn"
              href={phone.href}
              aria-label={`Call ${phone.display}`}
            >
              <Phone size={19} strokeWidth={2} aria-hidden="true" />
            </a>

            <a className="btn btn--header" href="#quote">
              Free Consultation
            </a>

            <button
              type="button"
              className="mobile-toggle"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={22} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div className={`sticky-header${sticky ? ' is-visible' : ''}`}>
        <div className="sticky-header__inner">
          <a className="sticky-header__brand" href="#home" aria-label="XTRA Construction home">
            <img src={images.logo} width="135" height="50" alt="Construction 2 WordPress Theme" />
          </a>
          <div className="sticky-header__actions">
            <a className="sticky-header__phone" href={phone.href} aria-label={`Call ${phone.display}`}>
              <Phone size={18} strokeWidth={2} aria-hidden="true" />
            </a>
            <button
              type="button"
              className="sticky-header__menu"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={20} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`offcanvas${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="offcanvas__backdrop"
          aria-label="Close menu"
          tabIndex={-1}
          onClick={closeMenu}
        />
        <div className="offcanvas__panel" role="dialog" aria-modal="true" aria-label="Mobile menu">
          <button
            type="button"
            ref={closeButtonRef}
            className="offcanvas__close"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <X size={22} aria-hidden="true" />
          </button>

          <nav className="offcanvas__nav" aria-label="Mobile">
            <ul>
              <li>
                <a href="#home" onClick={closeMenu}>
                  Home
                </a>
              </li>
              {navigation.map((item) => (
                <li key={item.label}>
                  <a href={item.href} onClick={closeMenu}>
                    {item.label}
                  </a>
                  {item.children?.length ? (
                    <ul className="offcanvas__sub">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a href={child.href} onClick={closeMenu}>
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>

          <a className="btn btn--header offcanvas__cta" href="#quote" onClick={closeMenu}>
            Free Consultation
          </a>

          <div className="offcanvas__footer">
            <div className="offcanvas__social">
              <a href="https://www.facebook.com/XtraTheme" aria-label="Facebook">
                <Facebook size={16} aria-hidden="true" />
              </a>
              <a href="https://twitter.com/Xtra_Theme" aria-label="Twitter">
                <Twitter size={16} aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/XtraTheme/" aria-label="Instagram">
                <Instagram size={16} aria-hidden="true" />
              </a>
              <a href="#home" aria-label="Linkedin">
                <Linkedin size={16} aria-hidden="true" />
              </a>
            </div>
            <span>© Copyright 2026</span>
          </div>
        </div>
      </div>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
