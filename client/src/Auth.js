import Button from "./Button";
import Input from "./Input";
import { useState, useContext } from 'react';
import axios from "axios";
import AuthContext from "./AuthContext";
import ClickOutHandler from "react-clickout-handler";
function Auth() {
    const [modelType, setType] = useState('login');
    const [email, setEmail] = useState('');
    const [username, setUSername] = useState('');
    const [password, setPassword] = useState('');
    
    const modelContext = useContext (AuthContext);
    const visible = modelContext.show !== false ? "block" : "hidden";
    if (modelContext.show && modelContext.show !== modelType) {
        setType(modelContext.show);
    }

    function register(e) {
        e.preventDefault();
        const data = { email, password, username };
        axios.post('http://localhost:4000/register', data, { withCredentials: true });

    }
    return (
        <div className={"w-screen h-screen fixed top-0 left-0 z-20 flex "+visible} style={{ backgroundColor: 'rgba(0,0,0,.6)' }}>
            <ClickOutHandler onClickOut={() => modelContext.setShow(false)}>
                <div className="border border-reddit_dark-brightest w-3/4 sm:w-1/2 md:w-1/4 bg-reddit_dark p-5 text-reddit_text self-center mx-auto rounded-md">
                {modelType === 'login' && (
                    <h1 className="text-2xl mb-5">Login</h1>
                )}
                {modelType === 'register' && (
                    <h1 className="text-2xl mb-5">Sign Up</h1>
                )}
                {modelType === 'register' && (
                    <label>
                        <span className="text-reddit_text text-sm">Email:</span>
                        <Input type="email" className="mb-3 w-full" value={email} onChange={e => setEmail(e.target.value)} />
                    </label>
                )}
                <label>
                    <span className="text-reddit_text text-sm">Username:</span>
                    <Input type="text" className="mb-3 w-full" value={username} onChange={e => setUSername(e.target.value)} />
                </label>
                <label>
                    <span className="text-reddit_text text-sm">Password:</span>
                    <Input type="password" className="mb-3 w-full" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                {modelType === 'login' && (
                    <Button className="w-full py-2 mb-3" style={{ borderRadius: "3rem" }}>
                        Log In
                    </Button>
                )}
                {modelType === 'register' && (
                    <Button className="w-full py-2 mb-3" style={{ borderRadius: "3rem" }} onClick={e => register(e)}>
                        Sign Up
                    </Button>
                )}
                {modelType === 'login' && (
                    <div>
                        New to Reddit? <button className="text-blue-600" onClick={() => setType('register')}>SIGN UP</button>
                    </div>
                )}
                {modelType === 'register' && (
                    <div>
                        Already have an account <button className="text-blue-600" onClick={() => setType('login')}>LOG IN</button>
                    </div>
                )}

            </div>
            </ClickOutHandler>
        </div>
    );
}
export default Auth;