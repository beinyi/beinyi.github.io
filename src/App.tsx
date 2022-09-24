import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Calendar} from "./components/calendar/calendar";

function App() {
    return (
        <div className="App">
            <Header/>
            <Calendar/>
        </div>
    );


}

export default App;
