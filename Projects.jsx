import React, { useEffect, useState } from "react";
import styles from "./Projects.module.css";

const GITHUB_USERNAME = "KakumanuLakshmiNarayana";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      setLoading(true);
      const res = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
      );
      const data = await res.json();
      setRepos(
        Array.isArray(data)
          ? data.filter(r => !r.fork && !r.private)
          : []
      );
      setLoading(false);
    }
    fetchRepos();
  }, []);

  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      {loading && <p className={styles.loading}>Loading projects...</p>}
      {!loading && (
        <div className={styles.list}>
          {repos.length === 0 && <p>No public repositories found.</p>}
          {repos.map(repo => (
            <div key={repo.id} className={styles.card}>
              <div className={styles.title}>{repo.name}</div>
              <p className={styles.desc}>{repo.description}</p>
              <div className={styles.meta}>
                {repo.language && <span>{repo.language}</span>}
                <span>⭐ {repo.stargazers_count}</span>
                <span>
                  Updated: {new Date(repo.updated_at).toLocaleDateString()}
                </span>
              </div>
              <div className={styles.links}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                </a>
                {/* Only for FINSIGHT repo, show the website link */}
                {repo.name.toLowerCase() === "finsight" && (
                  <a
                    href="https://finsight.fun"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}