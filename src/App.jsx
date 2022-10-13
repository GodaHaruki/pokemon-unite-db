import { useState, createContext } from 'react';
import './App.css';
import SignIn from './components/signin';
import { useUserInfoContext } from './components/userInfo.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const { isLogin } = useUserInfoContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={isLogin ? <Home /> : <Navigate replace to="/signin" />}
          />
          <Route
            path="/signin"
            element={isLogin ? <Navigate replace to="/" /> : <SignIn />}
          />
          {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
