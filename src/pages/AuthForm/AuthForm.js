import classes from "./AuthForm.module.css";

const AuthForm = () => {
    return (
        <div className={classes["auth-form"]}>
        <h1>Connexion</h1>
        <form id="login-form">
            <div className={classes["form-group"]}>
                <label for="email">Email</label>
                {/* <input type="email" id="email" required=""> */}
            </div>
            <div className={classes["form-group"]}>
                <label for="password">Mot de passe</label>
                {/* <input type="password" id="password" required=""> */}
            </div>
            <button type="submit">Se connecter</button>
        </form>
    </div>
    );
}

export default AuthForm;