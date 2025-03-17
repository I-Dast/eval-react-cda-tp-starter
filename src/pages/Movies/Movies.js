import classes from './Movies.module.css';

const Movies = () => {
    return (
        <div className={classes["movies-page"]}>
            <h1>Films</h1>
            <div className={classes["movies-grid"]}>
                <p>Aucun film trouvé</p>
            </div>
        </div>
    );
}

export default Movies;