import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact</h2>
      <div className={styles.cta}>
        <a href="mailto:avinari32@gmail.com" className={styles.emailButton}>
          📧 avinari32@gmail.com
        </a>
        <a
          href="https://github.com/KakumanuLakshmiNarayana"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ghButton}
        >
          <span role="img" aria-label="github">🐙</span> GitHub
        </a>
      </div>
      <div className={styles.socials}>
        <a href="https://www.linkedin.com/in/lakshminarayanakakumanu/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        {/* Add more socials here if you want */}
      </div>
    </section>
  );
}