import classes from "./RegisterForm.module.css";
import { useForm } from "react-hook-form"

const RegisterForm = () => {
    const {handleSubmit, formState:{errors}} = useForm();
    const onSubmit=(data)=> console.log(data);

    return (
        <main id="app">
            <div className={classes["auth-form"]}>
                <h1>Inscription</h1>
                <form id="register-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className={classes["form-group"]}>
                        <label for="nickname">Pseudo</label>
                        <input type="text" name="pseudo" className={classes['']} />
                    </div>
                    <div className={classes["form-group"]}>
                        <label for="email">Email</label>
                        <input type="email" id="email" required=""/>
                    </div>
                    <div className={classes["form-group"]}>
                        <label for="password">Mot de passe</label>
                        <input type="password" id="password" required=""/>
                    </div>
                    <button type="submit">S'inscrire</button>
                </form>
            </div>
        </main>
    );
}

export default RegisterForm;