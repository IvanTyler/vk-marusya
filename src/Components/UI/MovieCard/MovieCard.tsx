import { FC } from 'react';
import Link from 'next/link';
import { Movie } from '@/api/types/Movie';
import style from './MovieCard.module.scss';

interface MovieCardProps {
    movie: Movie;
    rank: number;
}

export const MovieCard: FC<MovieCardProps> = ({ movie, rank }) => {
    return (
        <Link href={`/movie/${movie.id}`} className={style.movieCard}>
            {movie.posterUrl ? (
                <img src={movie.posterUrl} alt={movie.title} className={style.movieCard__poster} />
            ) : (
                <div className={style.movieCard__placeholder} />
            )}
            <span className={style.movieCard__rank}>{rank}</span>
        </Link>
    );
};
