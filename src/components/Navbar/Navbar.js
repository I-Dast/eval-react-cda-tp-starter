import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {useState} from "react";
import {AuthService} from "../../services/auth";



const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={classes.navbar}>
            <div className="Logo"></div>
            <ul className={classes["nav-links"]}>
                <li><NavLink to="/" className={({isActive}) => (isActive ? classes.active : "")}>Accueil</NavLink></li>
                <li><NavLink to="/Movies" className={({isActive}) => (isActive ? classes.active : "")}>Films</NavLink></li>
                <li className={classes['auth-required']}><a href="#" data-page="add-movie">Ajouter</a></li>
                <li className={classes['guest-only']} ><NavLink to="/AuthForm" className={({isActive}) => (isActive ? classes.active : "")}>Connexion</NavLink></li>
                <li className={classes['guest-only']} ><NavLink to="/RegisterForm" className={({isActive}) => (isActive ? classes.active : "")}>Inscription</NavLink></li>
                <li className={classes['auth-required']} ><a href="#" id="logout">Déconnexion</a></li>
            </ul>
    </nav>    

    )
}

export default Navbar;