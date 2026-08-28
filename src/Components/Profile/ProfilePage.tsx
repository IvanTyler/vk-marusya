'use client';

import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ContainerSection } from '@/Components/UI/ContainerSection/ContainerSection';
import { Icon, IconName } from '@/Components/UI/Icon/Icon';
import { Preloader } from '@/Components/UI/Preloader/Preloader';
import { ListItems } from '@/Components/UI/ListItems/ListItems';
import { MovieCard } from '@/Components/UI/MovieCard/MovieCard';
import { ActionButton } from '@/Components/UI/ActionButton/ActionButton';
import { fetchProfile, logoutUser } from '@/api/Auth';
import { fetchFavorites } from '@/api/Favorites';
import style from './ProfilePage.module.scss';

enum ProfileTab {
    Favorites = 'favorites',
    Settings = 'settings',
}

const TABS: { id: ProfileTab; icon: IconName; label: string }[] = [
    { id: ProfileTab.Favorites, icon: 'favorite', label: 'Избранные фильмы' },
    { id: ProfileTab.Settings, icon: 'user', label: 'Настройка аккаунта' },
];

export const ProfilePage: FC = () => {
    const [activeTab, setActiveTab] = useState<ProfileTab>(ProfileTab.Favorites);
    const router = useRouter();
    const queryClient = useQueryClient();

    const { data: profile } = useQuery({
        queryKey: ['profile'],
        queryFn: fetchProfile,
    });

    const { data: favorites } = useQuery({
        queryKey: ['favorites'],
        queryFn: fetchFavorites,
        enabled: activeTab === ProfileTab.Favorites,
    });

    const { mutate: logout } = useMutation({
        mutationFn: logoutUser,
        onSuccess: () => {
            queryClient.removeQueries({ queryKey: ['profile'] });
            router.push('/');
        },
    });

    const initials = profile ? `${profile.name.charAt(0)}${profile.surname.charAt(0)}`.toUpperCase() : '';

    return (
        <ContainerSection className={style.profile}>
            <h1 className={style.profile__title}>Мой аккаунт</h1>

            <nav>
                <ul className={style.profile__tabs}>
                    {TABS.map(({ id, icon, label }) => (
                        <li key={id}>
                            <button
                                type="button"
                                className={clsx(style.profile__tab, activeTab === id && style.active)}
                                onClick={() => setActiveTab(id)}
                            >
                                <Icon name={icon} />
                                {label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            {activeTab === ProfileTab.Favorites ? (
                !favorites ? (
                    <Preloader />
                ) : favorites.length > 0 ? (
                    <div className={style.profile__grid}>
                        <ListItems items={favorites} renderItem={(movie) => <MovieCard key={movie.id} movie={movie} />} />
                    </div>
                ) : (
                    <p className={style.profile__empty}>Вы пока не добавили ни одного фильма в избранное</p>
                )
            ) : (
                <div className={style.profile__settings}>
                    <div className={style.profile__field}>
                        <span className={style.profile__avatar}>{initials}</span>
                        <div>
                            <p className={style.profile__label}>Имя Фамилия</p>
                            <p className={style.profile__value}>
                                {profile ? `${profile.name} ${profile.surname}` : ''}
                            </p>
                        </div>
                    </div>

                    <div className={style.profile__field}>
                        <span className={style.profile__avatar}>
                            <Icon name="mail" />
                        </span>
                        <div>
                            <p className={style.profile__label}>Электронная почта</p>
                            <p className={style.profile__value}>{profile?.email}</p>
                        </div>
                    </div>

                    <ActionButton typeButton="primary" onClick={() => logout()} className={style.profile__logout}>
                        Выйти из аккаунта
                    </ActionButton>
                </div>
            )}
        </ContainerSection>
    );
};
