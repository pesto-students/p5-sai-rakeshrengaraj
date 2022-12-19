import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerBar}>
      <div className={styles.footer_features}>
        <h3>Features</h3>
        <ul>
          <li>Link Shortning</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
      </div>
      <div className={styles.footer_resources}>
        <h3>Resources</h3>
        <ul>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
      </div>
      <div className={styles.footer_company}>
        <h3>Company</h3>

        <ul>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contacts</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
