import classes from "./RegisterForm.module.css";

const RegisterForm = () => {
    return (
        <main id="app">
            <div className={classes["auth-form"]}>
                <h1>Inscription</h1>
                <form id="register-form">
                    <div className={classes["form-group"]}>
                        <label for="nickname">Pseudo</label>
                        {/* <input type="text" id="nickname" required=""> */}
                    </div>
                    <div className={classes["form-group"]}>
                        <label for="email">Email</label>
                        {/* <input type="email" id="email" required=""> */}
                    </div>
                    <div className={classes["form-group"]}>
                        <label for="password">Mot de passe</label>
                        {/* <input type="password" id="password" required=""> */}
                    </div>
                    <button type="submit">S'inscrire</button>
                </form>
            </div>
        </main>
    );
}

export default RegisterForm;