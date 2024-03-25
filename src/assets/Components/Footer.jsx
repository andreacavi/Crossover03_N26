import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.link_container}>
          <div className={styles.link_card}>
            <h2>Social Media</h2>
            <Link className={styles.link}>Facebook</Link>
            <Link className={styles.link}>Instagram</Link>
            <Link className={styles.link}>Linkedln</Link>
          </div>
          <div className={styles.link_card}>
            <h2>Blog</h2>
            <Link className={styles.link}>All articles</Link>
            <Link className={styles.link}>Company</Link>
            <Link className={styles.link}>Product</Link>
          </div>
          <div className={styles.link_card}>
            <h2>Company</h2>
            <Link className={styles.link}>About N26</Link>
            <Link className={styles.link}>Leadership team</Link>
            <Link className={styles.link}>Careers</Link>
          </div>
          <div className={styles.link_card}>
            <h2>Help</h2>
            <Link className={styles.link}>Customer Support</Link>
            <Link className={styles.link}>Sistemap</Link>
          </div>
        </div>
        <div className={styles.app_container}>
          <div className={styles.app_textbox}>
            <h2>Bank from anywhere, 24/7</h2>
            <p>
              Download the N26 app today for a 100% mobile banking experience.
              Available on iOS and Android.
            </p>
            <div className={styles.app_buttons}>
              <Link>
                <img
                  src="https://n26.com/build/media/ios.a5ad099b78edc81ddc9f42b8c0f26d21.svg"
                  alt="App Store"
                />
              </Link>
              <Link>
                <img
                  src="https://n26.com/build/media/android.116748e7ca0027b10310b9ffb91f899e.svg"
                  alt="Google Play"
                />
              </Link>
            </div>
          </div>
          <div className={styles.phone}>
            <img
              src="https://images.ctfassets.net/q33z48p65a6w/5IkJIZwNyloYyojubwWMzp/99f7b047556a9def5c8e10d5d3a86c21/EN_EU.png?fit=thumb&fl=progressive&fm=jpg&h=1273&q=70&w=1200"
              alt="phone image"
              width="270"
            />
          </div>
        </div>
      </div>
      <div className={styles.extra_footer}>
        <div className={styles.bottom_links}>
          <Link className={styles.bottom_link}>N26 AG 2024</Link>
          <Link className={styles.bottom_link}>Legal Documents</Link>
          <Link className={styles.bottom_link}>Provacy Policy</Link>
          <Link className={styles.bottom_link}>Cookie Policy</Link>
          <Link className={styles.bottom_link}>Imprint</Link>
        </div>
        <div className={styles.bottom_extra}>
          <Link className={styles.bottom_link}>Update cookie settings</Link>
          <button>
            <img
              src="../public/germany-svgrepo-com.svg"
              alt="flag"
              width="16"
            />
            English
          </button>
        </div>
      </div>
    </>
  );
}
