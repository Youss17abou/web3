import { useContext } from "react";
import { Context as OpinionContext } from "../../contexts/OpinionContext";
import Opinion from "./Opinion";
export default function ListOpinions() {
  const { sortedOpinions } = useContext(OpinionContext);

  if (!sortedOpinions || sortedOpinions.length === 0) {
    console.log("🦧🦧🦧No opinions available.");
    
    return <div>No opinions available.</div>; // Gestion des cas où sortedOpinions est null
  }
  return (
    <div>
      <h2>Opinions</h2>
      <ul>
        {sortedOpinions.map((opinion) => (
          <Opinion key={opinion.id} opinion={opinion} />
        ))}
      </ul>
    </div>
  );
}
