import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import {useState} from "react";
import VoteOptions from "../VoteOptions/VoteOptions";
import type { Votes, VoteType } from "../../types/votes";


export default function App() {
   const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
   });

   const handleVote = (key: keyof Votes) => {
      setVotes({
        ...votes,
        [key]: votes[key] + 1,
      });
   };
   const [canReset, setIsReset] = useState(true);
   
   const resetVotes = () => {
    setIsReset(!canReset)
   }
          return (
             <div className={css.app}>
              <CafeInfo />
              <VoteOptions votes={votes} onVote={handleVote} onReset={resetVotes}/>
               {canReset ? "Hide message" : "Show message"}
            </div>
          )
}





