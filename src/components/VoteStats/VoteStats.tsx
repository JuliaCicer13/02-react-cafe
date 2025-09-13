import styles from "./VoteStats.module.css";
import type {Votes} from "../../types/votes";


interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

export default function VoteStatus ({votes, totalVotes, positiveRate}: VoteStatsProps) {
    return(
         <div className={styles.container}>
  <p className={styles.stat}>Good:{votes.good} <strong></strong></p>
  <p className={styles.stat}>Neutral:{votes.neutral} <strong></strong></p>
  <p className={styles.stat}>Bad:{votes.bad} <strong></strong></p>
  <p className={styles.stat}>Total:{totalVotes} <strong>0</strong></p>
  <p className={styles.stat}>Positive:{positiveRate} <strong>0%</strong></p>
</div>
    )

}