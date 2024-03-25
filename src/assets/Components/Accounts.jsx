import styles from "./Accounts.module.css";

export default function Accounts() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.leftPart}>
          <div className={styles.content}>
            <h3>N26 Standard</h3>
            <h1 className={styles.HeadingOne}>
              The free bank account for your everyday
            </h1>
            <p className={styles.gridParagraph}>
              Send, receive, and manage your money in one place via the N26
              mobile app or the N26 WebApp—anytime and anywhere. Open your
              online free bank account in minutes. No paperwork. No queues. No
              account fees. No hassle.
            </p>
            <button className={styles.btn}>Open Bank Account</button>
          </div>
        </div>
        <div className={styles.imageContainerOne}></div>
      </div>
      <div className={styles.ContainerSectionTwo}>
        <div className={styles.imageContainer}> </div>
        <div className={styles.RightSectionTwo}>
          <h2 className={styles.HeadingTwo}>Start earning interest</h2>
          <p className={styles.gridParagraph}>
            No deposit limits,** simple conditions, and full flexibility.
            Discover N26 Instant Savings, the easy-access savings account
            available at no extra cost in the N26 app. N26 Standard customers
            get 2.8%* p.a. interest on their savings. Prefer 4%* p.a.? Choose
            N26 Metal.
          </p>
          <a>More about the Instant Savings account</a>
        </div>
      </div>
      <h2
        className={styles.HeadingTwo}
        style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px" }}
      >
        You are in Control, 24/7
      </h2>
      <div className={styles.GridContainer}>
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <img
              src="https://images.ctfassets.net/q33z48p65a6w/4Y6EuFOwekOAgqCEYowCMo/6cfd7fa495fc87c80f827eb4f3a16a4f/n26-icon-mastercard-securecode.svg"
              alt="Image 1"
              className={styles.GridImage}
            />
            <h3 className={styles.gridHeading}>Mastercard 3D Secure</h3>
            <p className={styles.gridParagraph}>
              Enjoy peace of mind with Mastercard 3D Secure, an advanced
              two-factor authentication step for online purchases.
            </p>
          </div>
          <div className={styles.gridItem}>
            <img
              src="https://images.ctfassets.net/q33z48p65a6w/6DFg841iGmhzlLH90Ov4aY/e95b1640ecf684f7815081b721f09e72/Notification_T.svg"
              alt="Image 2"
              className={styles.GridImage}
            />
            <h3 className={styles.gridHeading}>Instant push notifications</h3>
            <p className={styles.gridParagraph}>
              Receive immediate push notifications for all account activity, so
              you’re aware of every incoming or outgoing payment as it happens.
            </p>
          </div>
          <div className={styles.gridItem}>
            <img
              src="https://images.ctfassets.net/q33z48p65a6w/6nnjlbeK1dZ98WtTeua21E/48d5e89c15ef4090482fa202c7cee862/FaceID_T.svg"
              alt="Image 3"
              className={styles.GridImage}
            />
            <h3 className={styles.gridHeading}>Biometric identification</h3>
            <p className={styles.gridParagraph}>
              Keep your banking login extra secure by using fingerprint
              identification or FaceID to verify your identity and access your
              free bank account.
            </p>
          </div>
          <div className={styles.gridItem}>
            <img
              src="https://images.ctfassets.net/q33z48p65a6w/32CZLrsZXuzuMR2jCPbaD9/74bd83f991c194371121ac0be32420bb/Security_T.svg"
              alt="Image 4"
              className={styles.GridImage}
            />
            <h3 className={styles.gridHeading}>Protected up to €100,000</h3>
            <p className={styles.gridParagraph}>
              With N26’s full banking license, your money is always protected up
              to €100,000 with the German Deposit Protection Scheme.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.BackgroundPink}>
        <div className={styles.containerColumn}>
          <h2 className={styles.HeadingTwo} style={{ marginTop: "70px" }}>
            N26 Smart—spend and save with confidence
          </h2>
          <p className={styles.gridParagraph}>
            Want to get even smarter about your spending and saving? Go premium
            with N26 Smart and create 10 Spaces sub-accounts, including Shared
            Spaces to save together with others. Plus, pick a Mastercard in your
            choice of color, get even more free ATM withdrawals each month, and
            call us via a direct hotline if you ever need support.
          </p>
          <a> Get a bank account</a>
          <img
            src="https://images.ctfassets.net/q33z48p65a6w/5Di9aVhp05cuUnRfpWNsFH/47a36b18eeede0935398110b98e2127d/SMART_EN_FEATURETEASER_ORGANIC_LP_800X500.png?fit=pad&fm=webp&q=80&w=1400"
            style={{ marginBottom: "70px" }}
          ></img>
        </div>
      </div>
      <div className={styles.containerColumn}>
        <img src="/Cards.png"></img>
        <h2 className={styles.HeadingTwo}>
          The free bank account that's 100% flexible
        </h2>
        <p className={styles.gridParagraph}>
          Ready to discover why over 8 million customers bank with N26? Compare
          our premium subscriptions now, or sign up online for your free N26
          bank account directly from your phone or desktop. It’s fast, simple,
          and easy—no paperwork required.
        </p>
        <button className={styles.btn2}>Open Bank Account </button>
      </div>
    </div>
  );
}
