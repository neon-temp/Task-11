import JobCards from "./Jobcards";
import type { Job } from "./Jobs";
import { jobs } from "./Jobs";

interface JobListsProps {
  jobs: Job[];
}

const JobLists = ({ jobs }: JobListsProps) => {
  return (
    <div style={styles.list}>
      {jobs.length > 0 ? (
        jobs.map((job) => <JobCards key={job.id} job={job} />)
      ) : (
        <p style={styles.empty}>No jobs available at the moment.</p>
      )}
    </div>
  );
};
const styles: { [key: string]: React.CSSProperties } = {
  app: {
    maxWidth: "700px",
    margin: "0 auto",
    padding: "45px 25px",
    fontFamily: "system-ui, sans-serif",
    boxShadow: "0 2px 8px rgba(17, 90, 246, 0.99)" ,
  },
  header: { textAlign: "center", marginBottom: "2rem", color:"rgb(168, 104, 104)"},
  list: { display: "grid", gap: "30px" },
  empty: {
    textAlign: "center",
    color: "#666",
    fontSize: "1.1rem",
    padding: "3rem 0",
  },
};
function Joblists() {
  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1>Job Listing</h1>
        <p>Find your next job opportunity👍</p>
      </header>

      <JobLists jobs={jobs} />
    </div>
  );
}
export default Joblists;
