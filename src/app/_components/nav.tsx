import Link from "next/link";
import styles from './nav.module.scss';

interface NavItem { 
  href: string; 
  label: string 
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navItems.map((item) => (
          <li className={styles.item} key={item.href}>
            <Link href={item.href} className={styles.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav;