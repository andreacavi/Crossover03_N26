import styles from "./Navbar.module.css";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={styles.nav_container}>
      <div className={styles.nav_logo_lang}>
        <img
          className={styles.logo}
          src="https://upload.wikimedia.org/wikipedia/commons/5/5a/N26_logo.svg"
          alt="logo"
        />
        <img
          className={styles.flag}
          src="../public/germany-svgrepo-com.svg"
          alt="lenguage flag"
        />
        <div className={styles.nav_language}>EN</div>
      </div>
      <div className={styles.nav_links}>
        <NavLink to="/accounts" className={styles.nav_link}>
          Accounts
        </NavLink>
        <NavLink to="/manage" className={styles.nav_link}>
          Manage
        </NavLink>
        <NavLink className={styles.nav_link}>Financial Products</NavLink>
        <NavLink className={styles.nav_link}>Pay</NavLink>
        <NavLink className={styles.nav_link}>Blog</NavLink>
      </div>
      <div className={styles.nav_account_links}>
        <Link className={styles.nav_account_link}>Log in</Link>
        <button>Open Free Bank Account</button>
      </div>
    </nav>
  );
}
