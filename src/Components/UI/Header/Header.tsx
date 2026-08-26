'use client';

import { FC, useState } from 'react';
import { ContainerSection } from '@/Components/UI/ContainerSection/ContainerSection';
import { Logo } from '@/Components/UI/Logo/Logo';
import { MenuItem } from '@/Components/UI/MenuItem/MenuItem';
import { SearchInput } from '@/Components/UI/SearchInput/SearchInput';
import { AuthModal } from '@/Components/AuthModal/AuthModal';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import style from './Header.module.scss';

const MOBILE_BREAKPOINT = 800;

export const Header: FC = () => {
    const { isMobileContent } = useWindowWidth(MOBILE_BREAKPOINT);
    const [isAuthModalOpen, setAuthModalOpen] = useState(false);

    return (
        <header className={style.header}>
            <ContainerSection className={style.containerHeader}>
                <Logo />

                <nav className={style.header__nav}>
                    {!isMobileContent &&
                        <MenuItem active className={style.header__home}>
                            Главная
                        </MenuItem>
                    }
                    <MenuItem icon="genres" showIcon={isMobileContent}>
                        Жанры
                    </MenuItem>
                    <SearchInput placeholder="Поиск" showIcon={isMobileContent} />
                </nav>

                <MenuItem
                    icon="user"
                    showIcon={isMobileContent}
                    className={style.header__login}
                    onClick={() => setAuthModalOpen(true)}
                >
                    Войти
                </MenuItem>
            </ContainerSection>

            {isAuthModalOpen && <AuthModal onClose={() => setAuthModalOpen(false)} />}
        </header>
    );
};
