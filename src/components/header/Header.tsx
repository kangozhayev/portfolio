'use client';

import styles from './Header.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <Link
            href="/"
            className={styles.logo}
          >
            Logo
          </Link>
        </div>
        <div className={styles.center}>
          <ul className={styles.menu}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/experience">Experience</Link>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <Link
            href="/contact"
            className={styles.cta}
          >
            Contact
          </Link>

          <button
            type="button"
            className={`${styles.burger} ${open ? styles.burgerActive : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            <span className={styles.burgerBar} />
            <span className={styles.burgerBar} />
            <span className={styles.burgerBar} />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${open ? styles.mobileOpen : ''}`}
        onClick={close}
      >
        <div
          className={styles.mobilePanel}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className={styles.mobileList}>
            <li>
              <Link
                href="/"
                onClick={close}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={close}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                onClick={close}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/experience"
                onClick={close}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={close}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
