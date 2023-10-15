import React, { useState } from 'react';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    if (!email.includes('@')) {
      setEmailError('Email must contain "@"');
    } else {
      setEmailError('');
    }

    // Password validation
    if (password.length < 3) {
      setPasswordError('Password must be at least 3 characters long');
    } else {
      setPasswordError('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="text" value={email} onChange={handleEmailChange} />
          {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
          {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
