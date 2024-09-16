import { useState } from 'react';

function App() {
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let newPassword = '';
    for (let i = 0; i < 12; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
  };

  return (
    <div className="App">
      <h1>Password Generator</h1>
      <input type="text" value={password} readOnly />
      <button onClick={generatePassword}>Generate Password</button>
    </div>
  );
}

export default App;
