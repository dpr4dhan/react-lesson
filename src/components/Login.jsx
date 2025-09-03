import {useState} from "react";

export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    function handleLogin(e){
        e.preventDefault();
        console.log(username, password);
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" value={username} onInput={(e) => {
                        setUsername(e.target.value)
                    }}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} onInput={(e) => {
                        setPassword(e.target.value)
                    }}/>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}