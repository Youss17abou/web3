import App from "./App";    
import {ProviderWrapper as CounterProviderWrapper} from "../../contexts/countersContext";

const AppLoader = () => {
    return (
        <CounterProviderWrapper>
            <App />
        </CounterProviderWrapper>
    )
}   
export default AppLoader;