import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import {useState} from "react";
import {Votes, VoteType} from "../../types/votes";
import VoteOptions from "../VoteOptions/VoteOptions";


export default function App() {
   const [votes, setVotes] = useState<Votes[]>([]);
   const [canReset, setIsReset] = useState(true);

   const handleVote = (key: keyof Votes) => {
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
            </div>
          )
}





