
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import Slider from "./Slider"
function Home(){
    const {state}=useContext(AuthContext);

    return(
        
        <div id="home">
            
            <h1>Welcome to Event mangement- {state?.user?.name}</h1>
            <Slider/>
            
        </div>
    )
}

export default Home;