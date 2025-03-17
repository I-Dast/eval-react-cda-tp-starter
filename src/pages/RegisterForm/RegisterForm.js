import classes from "./RegisterForm.module.css";
import { useForm } from "react-hook-form";
import {AuthService} from "../../services/auth";

const RegisterForm = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();

    const authservice = new AuthService();

    const onSubmit=(data)=> {
        const promise = authservice.register(data.pseudo, data.email, data.password);
        promise.then((test) => console.log(test));
        promise.catch(error => console.log(error));
    };

    return (
        <main id="app">
            <div className={classes["auth-form"]}>
                <h1>Inscription</h1>
                <form id="register-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className={classes["form-group"]}>
                        <label htmlFor="nickname">Pseudo</label>
                        <input name="nickname" type="text"  {...register("pseudo", { required: "pseudo obligatoire" })} className={classes['']} />
                        {errors.pseudo && <p className={classes["error"]}>{errors.pseudo.message}</p>}
                    </div>
                    <div className={classes["form-group"]}>
                        <label htmlFor="email">Email</label>
                        <input name="email" type="email" {...register("email", { required: "email obligatoire", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,message: "email invalide"}})} required=""/>
                        {errors.email && <p className={classes["error"]}>{errors.email.message}</p>}
                    </div>
                    <div className={classes["form-group"]}>
                        <label htmlFor="password">Mot de passe</label>
                        <input name="password" type="password" {...register("password", { required: "mot de passe obligatoire" })} required=""/>
                        {errors.password && <p className={classes["error"]}>{errors.password.message}</p>}
                    </div>
                    <button type="submit">S'inscrire</button>
                </form>
            </div>
        </main>
    );
}

export default RegisterForm;