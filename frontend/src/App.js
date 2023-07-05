import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BudgetPage from "./components/budgetPage/budgetPage";
import ExpensePage from "./components/expensePage/expensePage";
import HomePage from "./components/homePage/homePage";
import LoginPage from "./components/loginPage/loginPage";
import RegistrationPage from "./components/registrationPage/registrationPage";
import NavBar from "./components/navbar/navbar";

export default function App () {
    return (
        <React.Fragment>
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={ <HomePage /> } />
                    <Route path='/budget' element={ <BudgetPage /> } />
                    <Route path='/expenses' element={ <ExpensePage /> } />
                    <Route path='/login' element={ <LoginPage />} />
                    <Route path='/registration' element={ <RegistrationPage />} />
                </Routes>
            </Router>  
        </React.Fragment>
    )
}
