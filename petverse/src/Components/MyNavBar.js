import { Link } from 'react-router-dom';
import './MyNavBar.css';

const MyNavBar = () => {
    return (
        <nav>
            <div className="logo">
                <Link to="/">PetVerse</Link>
            </div>
            <div>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/shops">Shops</Link></li>
                    <li><Link to="/vets">Vets</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default MyNavBar;