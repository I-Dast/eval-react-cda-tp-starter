import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {useState} from "react";
import { AuthService} from "../../services/auth";



const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    const authService = new AuthService();
    
    const isAuthenticated = authService.isAuthenticated;

    return (
        <nav className={classes.navbar}>
            <div className="Logo"></div>
            <ul className={classes["nav-links"]}>
                <li><NavLink to="/" className={({isActive}) => (isActive ? classes.active : "")}>Accueil</NavLink></li>
                <li><NavLink to="/Movies" className={({isActive}) => (isActive ? classes.active : "")}>Films</NavLink></li>
                <li className={isAuthenticated ? "" : classes['auth-required']}><NavLink to="/MovieForm" className={({isActive}) => (isActive ? classes.active : "")}>Ajouter</NavLink></li>
                <li className={isAuthenticated ? classes['auth-required'] : classes['guest_only'] } ><NavLink to="/AuthForm" className={({isActive}) => (isActive ? classes.active : "")}>Connexion</NavLink></li>
                <li className={isAuthenticated ? classes['auth-required'] : "" } ><NavLink to="/RegisterForm" className={({isActive}) => (isActive ? classes.active : "")}>Inscription</NavLink></li>
                <li className={isAuthenticated ? "" : classes['auth-required']} ><NavLink to="/Logout" className={({isActive}) => (isActive ? classes.active : "")}>Deconnexion</NavLink></li>
            </ul>
    </nav>    

    )
}

export default Navbar;