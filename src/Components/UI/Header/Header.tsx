'use client';

import { FC, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { ContainerSection } from '@/Components/UI/ContainerSection/ContainerSection';
import { Logo } from '@/Components/UI/Logo/Logo';
import { MenuItem } from '@/Components/UI/MenuItem/MenuItem';
import { SearchInput } from '@/Components/UI/SearchInput/SearchInput';
import { AuthModal } from '@/Components/AuthModal/AuthModal';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import { fetchProfile } from '@/api/Auth';
import style from './Header.module.scss';

const MOBILE_BREAKPOINT = 800;

export const Header: FC = () => {
    const { isMobileContent } = useWindowWidth(MOBILE_BREAKPOINT);
    const [isAuthModalOpen, setAuthModalOpen] = useState(false);
    const pathname = usePathname();

    const { data: profile } = useQuery({
        queryKey: ['profile'],
        queryFn: fetchProfile,
    });

    return (
        <header className={style.header}>
            <ContainerSection className={style.containerHeader}>
                <Logo />

                <nav className={style.header__nav}>
                    {!isMobileContent &&
                        <MenuItem href="/" active={pathname === '/'} className={style.header__home}>
                            Главная
                        </MenuItem>
                    }
                    <MenuItem href="/genres" icon="genres" showIcon={isMobileContent} active={pathname === '/genres'}>
                        Жанры
                    </MenuItem>
                    <SearchInput placeholder="Поиск" showIcon={isMobileContent} />
                </nav>

                {profile ? (
                    <MenuItem
                        href="/profile"
                        icon="user"
                        showIcon={isMobileContent}
                        active={pathname === '/profile'}
                        className={style.header__profile}
                    >
                        {profile.name}
                    </MenuItem>
                ) : (
                    <MenuItem
                        icon="user"
                        showIcon={isMobileContent}
                        className={style.header__login}
                        onClick={() => setAuthModalOpen(true)}
                    >
                        Войти
                    </MenuItem>
                )}

            </ContainerSection>

            {isAuthModalOpen && <AuthModal onClose={() => setAuthModalOpen(false)} />}
        </header>
    );
};
