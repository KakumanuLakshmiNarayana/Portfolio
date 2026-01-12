import styles from "./About.module.css";

export default function About() {
  const skills = [
    { icon: "⚛️", name: "TypeScript, React, Node.js", category: "Frontend & Backend" },
    { icon: "🗄️", name: "Express, MongoDB, SQL", category: "Database" },
    { icon: "🔄", name: "Git, CI/CD, Automation", category: "DevOps" },
    { icon: "🧰", name: "Python, Shell Scripting, REST APIs", category: "Development" },
    { icon: "🤖", name: "Vibe Coding, N8N Automation", category: "Automation" },
  ];

  return (
    <section id="about" className={styles.about}>
      {/* Decorative element */}
      <div className={styles.decorativeCorner}></div>
      
      <h2>About</h2>
      <div className={styles.content}>
        <div>
          <p>
            I am a passionate Vibe Code developer focused on building scalable web applications and workflow automation solutions. I enjoy working with modern web technologies and love to solve real-world problems with Vibe coding and No Code Automations.
          </p>
          
          {/* Skills grid with icons */}
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillCard}>
                <span className={styles.skillIcon}>{skill.icon}</span>
                <div className={styles.skillInfo}>
                  <span className={styles.skillCategory}>{skill.category}</span>
                  <span className={styles.skillName}>{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
