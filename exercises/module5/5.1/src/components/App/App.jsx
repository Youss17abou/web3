import { useContext } from "react";
import { Context } from "../../contexts/countersContext";
function App() {
  const {
    incrementOk,incrementBad,incrementGood,resetAll,nbOk,nbBad,nbGood,} = useContext(Context);
  console.log("🟨🟨🟨 nbOk = ", nbOk);
  console.log("🟨🟨🟨 nbBad = ", nbBad);
  console.log("🟨🟨🟨 nbGood = ", nbGood);

  return (
    <>
      <h1>Exercice 5.1 : Votes prédéfinis</h1>
      <ul>
        <li>
          Good : {nbGood}
          <button type="submit" onClick={incrementGood}>
            increase good
          </button>
        </li>
        <li>
          Ok : {nbOk}{" "}
          <button type="submit" onClick={incrementOk}>
            increase ok
          </button>
        </li>
        <li>
          Bad : {nbBad}{" "}
          <button type="submit" onClick={incrementBad}>
            increase bad
          </button>
        </li>
      </ul>
      <button type="button" onClick={resetAll}>
        Reset
      </button>
    </>
  );
}

export default App;
