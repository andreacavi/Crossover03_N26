import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <div className={styles.main_container}>
      <div className={styles.text_box}>
        <h1>Beautifully simple banking — now with interest</h1>
        <p>
          Welcome to the future of banking. Join Germany’s most-loved bank —
          beautifully simple, 100% digital, and trusted by millions.
        </p>
        <button>Open Free Bank Account</button>
      </div>
    </div>
  );
}
