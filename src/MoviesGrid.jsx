import MovieCard from './MovieCard';
import movies from './movies.json';
import styles from './MovieGrid.module.css';

export default function MoviesGrid() {
    return(
        <div>
            <ul className={styles.moviesGrid}>
                {movies.map((movie) => {
                    return (
                        <MovieCard 
                            key={movie.id}
                            movie={movie}
                        />
                    );
                })}
            </ul>
        </div>
    );
}