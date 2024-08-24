
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';

function Home(){
    const {state}=useContext(AuthContext);

    return(
        
        <div id="home">
        </div>
    )
}

export default Home;