import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>About</h2>
      <div className={styles.content}>
        <div>
          <p>
            I am a passionate Vibe Coding developer focused on building scalable web applications and workflow automation solutions. I enjoy working with modern web technologies and love to solve real-world problems with AI, Vibe coding and No Code Automations.
          </p>
          <ul>
            <li>🛠️ JavaScript, TypeScript, React, Node.js</li>
            <li>🗄️ Express, MongoDB, SQL</li>
            <li>🔄 Git, CI/CD, Automation</li>
            <li>🧰 Python, Shell Scripting, REST APIs</li>
            
          </ul>
        </div>
      </div>
    </section>
  );
}
