import classes from "./AuthForm.module.css";
import { useForm } from "react-hook-form"
import {AuthService} from "../../services/auth";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {

    const {register, handleSubmit, formState:{errors}} = useForm();
    const navigate = useNavigate();

    const authservice = new AuthService();

    const onSubmit=(data)=> {
        console.log(data)
        const promise = authservice.login(data.email, data.password);
        promise.then((test) => {console.log(test);
            navigate('/movies');});
        promise.catch(error => console.log(error));
        
    }

    return (
        <div className={classes['login-form']}>
            <form id="register-form" onSubmit={handleSubmit(onSubmit)}>
                <div className={classes["form-group"]}>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email" id="email"  {...register("email", { required: "email obligatoire" })} required=""/>
                </div>
                <div className={classes["form-group"]}>
                    <label htmlFor="password">Mot de passe</label>
                    <input name="password" type="password" id="password" required="" {...register("password", { required: "mot de passe obligatoire" })}/>
                </div>
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    );
}

export default AuthForm;


    