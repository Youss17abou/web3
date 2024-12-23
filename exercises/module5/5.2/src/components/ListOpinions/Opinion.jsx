import { useContext } from "react";
import { Context as OpinionContext } from "../../contexts/OpinionContext";

function Opinion({ opinion }) {
    const { increaseOpinionScore } = useContext(OpinionContext);

  return (
    <li key={opinion.id}>
      <span>{opinion.text} : {opinion.score}</span>
        <button onClick={()=>increaseOpinionScore(opinion.id)}>voter</button>
    </li>
  );
}
export default Opinion;