import { Link } from "react-router-dom";
import './navbar.css';

export default function NavBar () {
    return (
        <nav>
            <div className='site-links'>
                <Link to='/'>Home</Link>
                <Link to='/budget'>Budget</Link>
                <Link to='/expenses'>Expenses</Link>
            </div>
            <div className='user-links'>
                <Link to='/login'>Login</Link>
                <Link to='/registration'>Register</Link>
            </div>
        </nav>
    )
}