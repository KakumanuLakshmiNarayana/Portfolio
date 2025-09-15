import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      &copy; {new Date().getFullYear()} Lakshmi Narayana Kakumanu · Built with React &amp; GitHub API
    </footer>
  );
}