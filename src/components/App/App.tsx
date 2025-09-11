import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import {useState} from "react";
import VoteOptions from "../VoteOptions/VoteOptions";
import type { Votes, VoteType } from "../../types/votes";
import VoteStatus from "../VoteStats/VoteStats";


let positiveRate = 0;
let totalVotes = 0;

export default function App() {
const [votes, setVotes] = useState<Votes>({
	good: 0,
	neutral: 0,
	bad: 0,
});

positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0
   const [canReset, setCanReset] = useState(true);

   const handleVote = (key: VoteType) => {
      setVotes(prev =>({
        ...prev,
        [key]: prev[key] + 1,
      }));
   };
   
   const resetVotes = () => {
   setVotes({
	 good: 0,
	 neutral: 0,
	 bad: 0,
   })
};
          return (
             <div className={css.app}>
              <CafeInfo />
              <VoteOptions  
                 votes={votes} 
                 onVote={handleVote} 
                 onReset={resetVotes} 
                 canReset={canReset}/>
                 <VoteStatus 
                    votes={votes}
                    totalVotes={totalVotes}
                    positiveRate={positiveRate}/>
            </div>
          )
}





