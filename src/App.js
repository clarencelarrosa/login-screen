import './App.css';
import * as LogIn from './login/LoginForm';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({name:"", email:""})
  const [error, setError] = useState("");

  const Login = details => {
    if(details.email == LogIn.Admin.email) {
      if(details.password==LogIn.Admin.password){
        setUser({
          name: details.name,
          email: details.email
        });
        setError("");
      }
    } else {
      setError("Invalid Credentials")
    }
  }

  const Logout=() => {
    setUser({
      name: "",
      email:""
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        {user.email !== "" ? (
          <div className="welcome-container">
            <h3>Welcome, <span>{user.name}</span></h3>
            <button className="App-button" onClick={Logout}>Logout</button>
          </div>
        ) : (
          <LogIn.default Login={Login} error={error} setError={setError} />
        )}
      </header>
    </div>
  );
}

export default App;
