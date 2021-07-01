import './Login.scss';
import {useState} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from "react-router-dom";

const Login = ({ login }) => {
    const [userName, setUser] = useState('');

    const handleOnChange = (e) => setUser(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userName){
            login(userName);
            return 
        }
        setUser('');
    }
    return (
        <div className="login">
        <h1 className="login__title">Letter</h1>
           <form action="#" onSubmit={handleSubmit}>
               <h3>Login</h3>
                <input type="text" name="" value={userName} id="" placeholder="Username..." onChange={(e) => handleOnChange(e)}/>
                <Link to="/home">
                    <input type="submit" value="Login" />
                </Link>
           </form>
        </div>
    )
}

export default Login
