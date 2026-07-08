import { useEffect, useState,   } from "react";
import * as react from 'react'
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
// import { react } from '@vitejs/plugin-react';

function Login(){

    console.log('Login rendered...')

    const navigate = useNavigate();

    const [username , setUsername ] = useState("");
    const [password , setPassword] = useState("")
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState("")

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        
        setError("");
        setLoading(true);

        try{
            await authService.login({
                username ,
                password
            });

            navigate("/dashboard")
        }catch{
            setError("InValid username or password")
        }finally{
            setLoading(false);
        }
    }
   
    
    return(
        <>
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>

            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)} />
                
            <br />
            <br />
            <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)} />

            <br/>
            <br/>

            {error && <p>Error</p>}

            <button disabled={loading}>
                {loading ? "Logging in...." : "Login"}
            </button>

          </form>  
        </>
    )
}

export default Login;