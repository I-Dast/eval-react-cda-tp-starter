import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className={classes.navbar}>
            <div className="Logo">
                {/* <img src="logo.png" class="logo"> */}
            </div>
            <ul className={classes["nav-links"]}>
                <li><a href="#" data-page="home" class="">Accueil</a></li>
                <li><a href="#" data-page="movies" class="">Films</a></li>
                <li className={classes['auth-required']}><a href="#" data-page="add-movie">Ajouter</a></li>
                <li className={classes['guest-only']} ><a href="#" data-page="login" class="active">Connexion</a></li>
                <li className={classes['guest-only']} ><a href="#" data-page="register" class="">Inscription</a></li>
                <li className={classes['auth-required']} ><a href="#" id="logout">Déconnexion</a></li>
            </ul>
    </nav>    

    )
}

export default Navbar;