import './Login.scss';
import {useState} from 'react';
const Login = () => {
    const [userName, setUser] = useState('');

    const handleSubmit = () => {

    }
    return (
        <div className="login">
        <h1 className="login__title">Letter</h1>
           <form>
               <h3>Login</h3>
                <input type="text" name="" value={userName} id="" placeholder="Username..."/>
                <input type="button" value="Login" />
           </form>
        </div>
    )
}

export default Login
