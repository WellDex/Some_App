import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomButton from './components/CustomButton';
import Contact_us from './components/Contact-us';
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";

let appId = '123';
let data = [
    {link: '/Contact_us', linkName: 'Contact us'},
    {link: '/path', linkName: 'path'}
];

let dataForBtns = [
    {title: 'hello', classToAdd: 'my-class1'},
    {title: 'hello1', classToAdd: 'my-class11'},
    {title: 'hello2', classToAdd: 'my-class12'}
];

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/Contact_us" component={Contact_us}/>
                <Route path="/path">
                    {dataForBtns.map(el => <CustomButton key={el.title} data={el}/>)}
                </Route>
                <Route path="/">
                    <div className="App" id={appId}>
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <p>
                                Edit <code>src/App.js</code> and save to reload.
                            </p>
                            <ul>
                                {data.map(el => (
                                    <li>
                                        <NavLink to={el.link}>{el.linkName}</NavLink>
                                    </li>
                                ))}
                            </ul>
                            <a
                                className="App-link"
                                href="https://reactjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn React
                            </a>
                        </header>
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
