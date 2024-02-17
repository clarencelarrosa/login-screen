import React, {useState} from "react";

const adminUser= {
    name: "Admin",
    email: "admin@email.co",
    password:"1234"
}

function LoginForm({Login,error,setError}){
    const [creds, setCreds] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        if (creds.email === adminUser.email && creds.password === adminUser.password) {
          Login(adminUser);
        } else {
          setError("Invalid Credentials");
        }
      };
      
    return(
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h1>Login</h1>
                {error && <div className="error-message">{error}</div>}
                
                <div className="App-form-group"> 
                    <label htmlFor='email'>Email</label>
                    <input className="App-input" type='text' id='email' 
                    placeholder="Enter Email" name='email' onChange={e=>setCreds({...creds,email: e.target.value})} value={creds.email}/>
                </div>
                <div className="App-form-group">
                    <label htmlFor='password'>Password</label>
                    <input className="App-input" type='password' id='password' 
                    placeholder="Enter Password" name='password' onChange={e=>setCreds({...creds,password: e.target.value})} value={creds.password}/>
                </div>
                <div>
                    <input className="App-button" type='submit' value='Login'/>
                </div>

            </div>
        </form>
    )
}

export const Admin = adminUser;
export default LoginForm;