import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import {useState} from "react";
import VoteOptions from "../VoteOptions/VoteOptions";
import type { Votes, VoteType } from "../../types/votes";


export default function App() {
   const [votes, setVotes] = useState<Votes[]>({
	good: 0,
	neutral: 0,
	bad: 0
});
   const [canReset, setIsReset] = useState(true);

   const handleVote = (key: keyof VoteType) => {
      setVotes({
        ...votes,
        [key]: votes[key] + 1,
      });
   };
   
   const resetVotes = () => {
    setIsReset(!canReset)
   }
          return (
             <div className={css.app}>
              <CafeInfo />
              <VoteOptions votes={votes} onVote={handleVote} onReset={resetVotes}/>
               {canReset && ( "Hide message")}
            </div>
          )
}





