import css from "./VoteOptions.module.css";
import type {Votes, VoteType} from "../../types/votes";
interface VoteOptionsProps {
votes: Votes;
onVote: (type: VoteType) => void;
onReset: () => void;
canReset: boolean;
}

export default function VoteOptions ({votes, onVote, onReset, canReset}: VoteOptionsProps) {
      return (
        <div className={css.container}>
  <button onClick={()=> onVote("good")} className={css.button}>Good:{votes.good}</button>
  <button onClick={()=> onVote("neutral")} className={css.button}>Neutral:{votes.neutral}</button>
  <button onClick={()=> onVote("bad")} className={css.button}>Bad:{votes.bad}</button>
  {canReset && (<button onClick={onReset}className={`${css.button} ${css.reset}`}>Reset</button>)}
        </div>
      )
}