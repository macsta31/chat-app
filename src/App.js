import React from 'react';
import reactDom from 'react-dom';
import SignIn from './components/SignIn';
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth'
import Chat from './components/Chat';
import Header from './components/Header';

function App() {
  const auth = getAuth();
  const [user] = useAuthState(auth)
  return (
    <div className="container">
      <Header />
      <div className="app-container">
        { user ? <Chat user={user}/> : <SignIn /> }
      </div>
    </div>
  );
}

export default App;
