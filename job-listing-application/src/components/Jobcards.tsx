import { useState } from "react";
import type { Job } from "./Jobs";
interface JobCardProps {
  job: Job;
}

const JobCards = ({ job }: JobCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const styles: { [key: string]: React.CSSProperties } = {
    card: {
      background: "light-blue",
      borderRadius: "12px",
      padding: "1.5rem",
      boxShadow: "0 2px 8px rgba(17, 90, 246, 0.99)",
    },
    cardHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: "1rem",
    },
    title: { margin: "0 0 10px 0", fontWeight: 700, color: "#c07ecb" },
    company: { margin: 0, color: "#a07ea5", fontWeight: 600 },
    badge: {
      padding: "0.25rem 0.75rem",
      borderRadius: "20px",
      fontSize: "0.85rem",
      fontWeight: 600,
    },
    "Full-time": { background: "#e0f2fe", color: "#0284c7" },
    "Part-time": { background: "#fef3c7", color: "#d97706" },
    Contract: { background: "#f3e8ff", color: "#7c3aed" },
    meta: {
      display: "flex",
      gap: "1.5rem",
      color: "#938f8f",
      marginBottom: "1rem",
    },
    button: {
      background: "#390639",
      color: "white",
      border: "none",
      padding: "0.6rem 1.2rem",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: 500,
    },
    details: {
      marginTop: "30px",
      paddingTop: "35px",
      borderTop: "1px solid #e5e7eb",
      color: "#949191",
    },
  };
  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <div>
          <h3 style={styles.title}>{job.title}</h3>
          <p style={styles.company}>{job.company}</p>
        </div>
        <span style={{ ...styles.badge, ...styles[job.type] }}>{job.type}</span>
      </div>

      <div style={styles.meta}>
        <p>📍 {job.location}</p>
        <p>💰 {job.salary}/month</p>
      </div>

      <button
        style={styles.button}
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && (
        <div style={styles.details}>
          <p>{job.description}</p>
        </div>
      )}
    </div>
  );
};
export default JobCards;
