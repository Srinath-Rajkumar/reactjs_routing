import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Import the CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login validation based on selected role
    if (selectedRole === 'admin' && username === 'admin' && email === 'admin@test.com') {
      // Store login status and role in local storage
      localStorage.setItem('isLoggedIn', JSON.stringify(true));
      localStorage.setItem('role', JSON.stringify('admin'));
      navigate('/dashboard');
    } else if (selectedRole === 'user' && username === 'user' && email === 'user@test.com') {
      // Store login status and role in local storage
      localStorage.setItem('isLoggedIn', JSON.stringify(true));
      localStorage.setItem('role', JSON.stringify('user'));
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <div className="button-container">
        <button
          className={selectedRole === 'admin' ? 'active' : ''}
          onClick={() => setSelectedRole('admin')}
        >
          Admin
        </button>
        <button
          className={selectedRole === 'user' ? 'active' : ''}
          onClick={() => setSelectedRole('user')}
        >
          User
        </button>
      </div>
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
