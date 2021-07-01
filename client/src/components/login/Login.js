import './Login.scss';
import {useState} from 'react';
import { useHistory } from 'react-router';


const Login = ({ login }) => {
    const [userName, setUser] = useState('');
    const history = useHistory();

    const handleOnChange = (e) => setUser(e.target.value)

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
    }
    return (
        <div className="login">
        <h1 className="login__title">Login in to letter</h1>
           <form className="login__form" action="#" onSubmit={handleSubmit}>
                <input className="login__input-userName" type="text" name="" value={userName} id="" placeholder="Username..." onChange={(e) => handleOnChange(e)}/>
                <input type="submit" value="Login" />
           </form>
        </div>
    )
}

export default Login;
