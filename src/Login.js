// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login validation
    if (username === 'test' && email === 'test@test.com') {
      // Store login status in local storage
      localStorage.setItem('isLoggedIn', JSON.stringify(true));
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
