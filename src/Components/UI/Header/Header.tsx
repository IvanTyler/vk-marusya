import { FC } from 'react';
import { ContainerSection } from '@/Components/UI/ContainerSection/ContainerSection';
import { Logo } from '@/Components/UI/Logo/Logo';
import { MenuItem } from '@/Components/UI/MenuItem/MenuItem';
import { Input } from '@/Components/UI/Input/Input';
import { Icon } from '@/Components/UI/Icon/Icon';
import style from './Header.module.scss';

export const Header: FC = () => {
    return (
        <header className={style.header}>
            <ContainerSection>
                <div className={style.wrapper}>
                    <Logo />

                    <nav className={style.nav}>
                        <MenuItem active>Главная</MenuItem>
                        <MenuItem>Жанры</MenuItem>

                        <label className={style.search}>
                            <Icon name="search" className={style.searchIcon} />
                            <Input placeholder="Поиск" className={style.searchInput} />
                        </label>
                    </nav>

                    <MenuItem className={style.login}>Войти</MenuItem>
                </div>
            </ContainerSection>
        </header>
    );
};
