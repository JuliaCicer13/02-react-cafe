import css from "./VoteOptions.module.css";

interface VoteOptionsProps {
votes: number;
onVote: () => void;
onReset: () => void;
}

export default function VoteOptions ({votes, onVote, onReset}: VoteOptionsProps) {
      return (
        <div className={css.container}>
  <button onClick={onVote} className={css.button}>Good:{votes}</button>
  <button onClick={onVote} className={css.button}>Neutral: {votes}</button>
  <button onClick={onVote} className={css.button}>Bad:{votes}</button>
  <button onClick={onReset}className={`${css.button} ${css.reset}`}>Reset</button>
        </div>
      )
}