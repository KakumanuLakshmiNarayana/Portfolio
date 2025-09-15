import React, { useEffect, useState } from "react";
import styles from "./Automations.module.css";

// Get API URL and Key from Vite environment variables
const N8N_API_URL = import.meta.env.VITE_N8N_API_URL;
const N8N_API_KEY = import.meta.env.VITE_N8N_API_KEY;

export default function Automations() {
  const [workflows, setWorkflows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchWorkflows() {
      setLoading(true);
      setError("");
      try {
        // Debug: log env values
        console.log("N8N_API_URL:", N8N_API_URL);
        console.log("N8N_API_KEY:", N8N_API_KEY);

        const res = await fetch(N8N_API_URL, {
          headers: {
            "X-N8N-API-KEY": N8N_API_KEY,
          },
        });

        const text = await res.text();
        console.log("RAW RESPONSE", text);

        let data;
        try {
          data = JSON.parse(text);
        } catch (e) {
          throw new Error("Failed to load automations. Unexpected response format (not JSON)");
        }

        setWorkflows(data.data || []);
      } catch (err) {
        setError(err.message || "Unknown error loading automations.");
      } finally {
        setLoading(false);
      }
    }
    fetchWorkflows();
  }, []);

  return (
    <section id="automations" className={styles.automations}>
      <h2>Automations</h2>
      {loading && <p>Loading automations...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && (
        <div className={styles.list}>
          {workflows.length === 0 && <p>No workflows found.</p>}
          {workflows.map((wf) => (
            <div key={wf.id} className={styles.card}>
              <div className={styles.title}>{wf.name}</div>
              <p className={styles.desc}>{wf.active ? "Active" : "Inactive"}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}