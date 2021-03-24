import React from 'react';
import Header from './components/Header/header';
import './App.css';
import Home from './Routes/home';


function App() {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <Home/>
      </main>
    </React.Fragment>
  );
}

export default App;
