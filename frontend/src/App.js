import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BudgetPage from "./components/budgetPage/budgetPage";
import ExpensePage from "./components/expensePage/expensePage";
import HomePage from "./components/homePage/homePage";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Navbar from "./components/navbar/navbar";
import { UserContext } from "./misc/context";
import axios from "axios";

export default function App () {

    axios.defaults.withCredentials = true
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = 'x-csrftoken'

    let token = localStorage.getItem('token');
    let username = localStorage.getItem('username');

    const [user, setUser] = useState({
        username: (username) ? username: '',
        isLoggedIn: (token) ? true: false,
        token: (token) ? token: '',
    })
    
    return (
        <React.Fragment>
            <UserContext.Provider value={[ user, setUser ]}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={ <HomePage /> } />
                    <Route path='/budget' element={ <BudgetPage /> } />
                    <Route path='/expenses' element={ <ExpensePage /> } />
                    <Route path='/login' element={ <Login />} />
                    <Route path='/register' element={ <Register />} />
                </Routes>
            </Router>
            </UserContext.Provider>
        </React.Fragment>
    )
}
