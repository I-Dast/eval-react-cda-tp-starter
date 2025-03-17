import classes from "./Ajouter.module.css";
import { useForm } from "react-hook-form"
import {AuthService} from "../../services/auth";


const MovieForm = () => {

    const {register, handleSubmit, formState:{errors}} = useForm();
    const onSubmit=(data) => {
        const promise = MovieForm(data.title, data.description, data.releaseDate, data.imageURL)
        
    }

    return (
        <div class="movie-form">
            <h1>Ajouter un film</h1>
            <form id="movie-form">
                <div class="form-group">
                    <label for="title">Titre</label>
                    {/* <input type="text" id="title" required=""> */}
                </div>
                <div class="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" required=""></textarea>
                </div>
                <div class="form-group">
                    <label htmlFor="releaseDate">Date de sortie</label>
                    {/* <input type="date" id="releaseDate" required=""> */}
                </div>
                <div class="form-group">
                    <label htmlFor="imageUrl">URL de l'image</label>
                    {/* <input type="url" id="imageUrl" required=""> */}
                </div>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}

export default MovieForm;