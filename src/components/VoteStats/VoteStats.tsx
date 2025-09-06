import styles from "./VoteStats.module.css";


interface VoteStatsProps {
  votes: number;
  totalVotes: () => void;
  positiveRate: () => void;
}
export default function VoteStatus ({}: VoteStatsProps) {
    return(
         <div className={styles.container}>
  <p className={styles.stat}>Good: <strong>0</strong></p>
  <p className={styles.stat}>Neutral: <strong>0</strong></p>
  <p className={styles.stat}>Bad: <strong>0</strong></p>
  <p className={styles.stat}>Total: <strong>0</strong></p>
  <p className={styles.stat}>Positive: <strong>0%</strong></p>
</div>
    )

}