import React from 'react';
import logo from './logo.png';
import './App.css';
import SearchBox from './components/SearchDevice/SearchBox';
import AddDeviceButton from './components/AddDevice/AddDevice';
import ArchiveDeviceButton from './components/ArchiveDevice/ArchiveDevice';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Laitekanta</h1>
        <SearchBox className="SearchBox" />
        <AddDeviceButton className="AddDeviceButton"/>
        <ArchiveDeviceButton className="ArchiveDeviceButton"/>
      </header>
    </div>
  );
}

export default App;
