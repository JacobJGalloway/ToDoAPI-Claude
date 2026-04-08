import { NavLink } from 'react-router-dom'
import styles from './NavMenu.module.css'

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/inventory"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        Inventory
      </NavLink>
      <NavLink
        to="/bills-of-lading"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        Bills of Lading
      </NavLink>
    </nav>
  )
}
