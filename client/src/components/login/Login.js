import './Login.scss';
import {useState} from 'react';
import { useHistory } from 'react-router';


const Login = ({ login }) => {
    const [userName, setUser] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const handleUserNameOnChange = (e) => setUser(e.target.value)
    const handlePasswordOnChange = (e) => setPassword(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Do I ever happen?")
        if(userName){
            console.log('Do I happen?')
            login(userName);
            history.push({
                pathname:  "/home",
            });
        }
        setUser('');
        setPassword('');
    }
    return (
        <div className="login">
        <h1 className="login__title">Log in to Letter</h1>
           <form className="login__form" action="#" onSubmit={handleSubmit}>
                <input className="login__input-userName" type="text" name="" value={userName} id="" placeholder="Username" onChange={(e) => handleUserNameOnChange(e)}/>
                <input className="login__input-password" type="password" name="" value={password} id="" placeholder="Password" onChange={(e) => handlePasswordOnChange(e)}/>
                <input className="login__submit" type="submit" value="Log in" />
           </form>
        </div>
    )
}

export default Login;
