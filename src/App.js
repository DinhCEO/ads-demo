import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Advertisement from './Advertisement';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div style={{width: '1000px', height: '800px', margin: 'auto'}}>
                    <Advertisement name="17939840/globalGrid728" size="[728, 90]" id="div-gpt-ad-1521434719648-0"/>
                </div>
            </div>
        );
    }
}

export default App;
