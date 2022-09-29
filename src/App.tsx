import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {MainWrapper} from "./components/MainWrapper";

function App() {
    return (
        <div className="App">
            <Header/>
            <NavBar/>
            <MainWrapper />
        </div>
    );
}

export default App;
