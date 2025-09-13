import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import {useState} from "react";
import VoteOptions from "../VoteOptions/VoteOptions";
import type { Votes, VoteType } from "../../types/votes";
import VoteStatus from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";

export default function App() {
const [votes, setVotes] = useState<Votes>({
	good: 0,
	neutral: 0,
	bad: 0,
});
   const totalVotes = votes.good + votes.neutral + votes.bad;

   const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;
 
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
                 canReset={totalVotes > 0}
             />
                 {totalVotes > 0 ? ( <VoteStatus 
                    votes={votes}
                    totalVotes={totalVotes}
                    positiveRate={positiveRate} />
                 ) :(
                <Notification/>
                     )}
            </div>
          )
}





