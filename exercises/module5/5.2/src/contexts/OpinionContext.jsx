import {useState,createContext} from 'react';
import { v4 as uuidv4 } from "uuid";


const Context = createContext(null);

const ProviderWrapper = ({ children }) => {
    const [sortedOpinions, setSortedOpinions] = useState([]);

    const increaseOpinionScore = (opinionId) => {
        const newSortedOpinions = [...sortedOpinions];
        const opinionToUpdate = newSortedOpinions.find(
          (opinion) => opinion.id === opinionId
        );
        if (!opinionToUpdate) return;
    
        opinionToUpdate.score += 1;
        sortOpinions(newSortedOpinions);
      };
    
      const createOpinion = (opinion) => {
        const newSortedOpinions = sortedOpinions.concat({
          id: uuidv4(),
          text: opinion,
          score: 1,
        });
    
        sortOpinions(newSortedOpinions);
      };
    
      // Sort opinions by score in descending order
      const sortOpinions = (opinions) => {
        console.log('🟢🟢🟢sorting opinions');
        
        const newSortedOpinions = [...opinions].sort((a, b) => b.score - a.score);
        setSortedOpinions(newSortedOpinions);
      };

    const exposedValue = {
        sortedOpinions,
        increaseOpinionScore,
        createOpinion,
    };

    return <Context.Provider value={exposedValue}>{children}</Context.Provider>;
}

export { Context, ProviderWrapper };