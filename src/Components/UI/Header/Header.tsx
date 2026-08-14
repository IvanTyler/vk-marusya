import { FC } from 'react';
import { ContainerSection } from '@/Components/UI/ContainerSection/ContainerSection';
import { Logo } from '@/Components/UI/Logo/Logo';
import { MenuItem } from '@/Components/UI/MenuItem/MenuItem';
import { SearchInput } from '@/Components/UI/SearchInput/SearchInput';
import style from './Header.module.scss';

export const Header: FC = () => {
    return (
        <header className={style.header}>
            <ContainerSection className={style.wrapper}>
                <Logo />

                <nav className={style.nav}>
                    <MenuItem active>Главная</MenuItem>
                    <MenuItem>Жанры</MenuItem>
                    <SearchInput placeholder="Поиск" />
                </nav>

                <MenuItem className={style.login}>Войти</MenuItem>
            </ContainerSection>
        </header>
    );
};
