import { ProviderWrapper as OpinionProviderWrapper } from "../../contexts/OpinionContext.jsx";
import App from "./App.jsx";

const AppLoader= () => {
  return (
    <OpinionProviderWrapper >
        <App />
 
      </OpinionProviderWrapper >
  )
}
export default AppLoader;