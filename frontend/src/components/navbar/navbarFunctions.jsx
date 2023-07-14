import React from "react"
import Logout from '../logout/logout';
import { Link } from 'react-router-dom';

export function userLinksLoggedIn (username) {
    return (
        <React.Fragment>
            <div className='greeting' data-cy='greeting'>Hi { username }!</div>
            <Logout />
        </React.Fragment>
    )
}

export function userLinksLoggedOut () {
    return (
        <React.Fragment>
            <Link to='/login' data-cy='login-link'>Login</Link>
            <Link to='/register' data-cy='register-link'>Register</Link>
        </React.Fragment>
    )
}

export function siteLinksLoggedIn () {
    return (
        <React.Fragment>
            <Link to='/'>Home</Link>
            <Link to='/budget' data-cy='budget-page-link'>Budget</Link>
            <Link to='/expenses' data-cy="expenses-page-link">Expenses</Link>
        </React.Fragment>
    )
}

export function siteLinksLoggedOut () {
    return (
        <React.Fragment>
            <Link to='/login'>Home</Link>
            <Link to='/login'>Budget</Link>
            <Link to='/login'>Expenses</Link>
        </React.Fragment>
    )
}