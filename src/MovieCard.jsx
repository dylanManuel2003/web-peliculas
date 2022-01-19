import styles from './MovieCard.module.css';

export default function MovieCard({ movie }){
    const imageURL = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
    return(
        <li className={styles.movieCard}>
            <img 
                className={styles.movieImage} 
                src={imageURL} 
                alt={movie.title} 
                width={230}
                height={345}
            />
            <div>{movie.title}</div>
        </li>
    );
}