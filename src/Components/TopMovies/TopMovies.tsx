'use client';

import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTop10Movies } from '@/api/MovieTop10';
import { ContainerSection } from '@/Components/UI/ContainerSection/ContainerSection';
import { Preloader } from '@/Components/UI/Preloader/Preloader';
import { ListItems } from '@/Components/UI/ListItems/ListItems';
import { MovieCard } from '@/Components/UI/MovieCard/MovieCard';
import style from './TopMovies.module.scss';

export const TopMovies: FC = () => {
    const { data: movies } = useQuery({
        queryKey: ['top10Movies'],
        queryFn: fetchTop10Movies,
    });

    return (
        <section className={style.topMovies}>
            <ContainerSection className={style.containerTopMovies}>
                <h2 className={style.topMovies__title}>Топ 10 фильмов</h2>

                {!movies ? (
                    <Preloader />
                ) : (
                    <div className={style.topMovies__list}>
                        <ListItems
                            items={movies}
                            renderItem={(movie, index) => (
                                <MovieCard key={movie.id} movie={movie} rank={index + 1} />
                            )}
                        />
                    </div>
                )}
            </ContainerSection>
        </section>
    );
};
