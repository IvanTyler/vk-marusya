'use client';

import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchRandomMovie } from '@/api/Movies';
import { formatRuntime } from '@/utils/FormatRuntime';
import { ContainerSection } from '@/Components/UI/ContainerSection/ContainerSection';
import { ActionButton } from '@/Components/UI/ActionButton/ActionButton';
import { Rating } from '@/Components/UI/Rating/Rating';
import { Icon } from '@/Components/UI/Icon/Icon';
import { Preloader } from '@/Components/UI/Preloader/Preloader';
import style from './RandomMovie.module.scss';

export const RandomMovie: FC = () => {
    const { data: movie, refetch, isFetching } = useQuery({
        queryKey: ['randomMovie'],
        queryFn: fetchRandomMovie,
    });

    if (!movie) {
        return (
            <section className={style.randomMovie}>
                <ContainerSection className={style.containerRandomMovie}>
                    <Preloader />
                </ContainerSection>
            </section>
        );
    }

    return (
        <section className={style.randomMovie}>
            <ContainerSection className={style.containerRandomMovie}>
                <div className={style.randomMovie__info}>
                    <div className={style.randomMovie__meta}>
                        <Rating value={movie.tmdbRating} />
                        <span className={style.randomMovie__metaItem}>{movie.releaseYear}</span>
                        <span className={style.randomMovie__metaItem}>{movie.genres[0]}</span>
                        <span className={style.randomMovie__metaItem}>{formatRuntime(movie.runtime)}</span>
                    </div>

                    <h1 className={style.randomMovie__title}>{movie.title}</h1>
                    <p className={style.randomMovie__plot}>{movie.plot}</p>

                    <div className={style.randomMovie__actions}>
                        <ActionButton typeButton="primary">Трейлер</ActionButton>
                        <ActionButton typeButton="secondary">О фильме</ActionButton>
                        <ActionButton typeButton="secondary" iconOnly aria-label="Добавить в избранное">
                            <Icon name="favorite" />
                        </ActionButton>
                        <ActionButton
                            typeButton="secondary"
                            iconOnly
                            aria-label="Показать другой случайный фильм"
                            disabled={isFetching}
                            onClick={() => refetch()}
                        >
                            <Icon name="update" spinning={isFetching} />
                        </ActionButton>
                    </div>
                </div>

                {movie.backdropUrl ? (
                    <img
                        src={movie.backdropUrl}
                        alt={movie.title}
                        className={style.randomMovie__img}
                    />
                ) : (
                    <div className={style.randomMovie__imgPlaceholder} />
                )}
            </ContainerSection>
        </section>
    );
};
