import React from 'react';
import Navigation from './components/Navigation/navigation';
import './App.css';
import Home from './Routes/home';

function App() {
  return (
    <React.Fragment>
      <Navigation/>
      <main>
        <Home/>
      </main>
    </React.Fragment>
  );
}

export default App;
