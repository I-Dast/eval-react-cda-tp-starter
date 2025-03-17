import classes from "./AuthForm.module.css";
import { useForm } from "react-hook-form"

const AuthForm = () => {

    const {handleSubmit, formState:{errors}} = useForm();
    const onSubmit=(data)=> console.log(data);

    return (
        <div className={classes['login-form']}>
            <form id="register-form" onSubmit={handleSubmit(onSubmit)}>
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
    );
}

export default AuthForm;


    