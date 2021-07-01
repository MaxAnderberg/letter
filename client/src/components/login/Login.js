import './Login.scss';
import {useState} from 'react';
const Login = () => {
    const [userName, setUser] = useState('');

    const handleOnChange = (e) => setUser(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userName){
            console.log(userName)
        }
        setUser('');
    }
    return (
        <div className="login">
        <h1 className="login__title">Letter</h1>
           <form onSubmit={handleSubmit}>
               <h3>Login</h3>
                <input type="text" name="" value={userName} id="" placeholder="Username..." onChange={(e) => handleOnChange(e)}/>
                <input type="submit" value="Login" />
           </form>
        </div>
    )
}

export default Login
