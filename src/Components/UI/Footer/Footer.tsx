import { FC } from 'react';
import { ContainerSection } from '@/Components/UI/ContainerSection/ContainerSection';
import { Icon, IconName } from '@/Components/UI/Icon/Icon';
import style from './Footer.module.scss';

interface SocialLink {
    name: IconName;
    href: string;
    label: string;
}

const SOCIAL_LINKS: SocialLink[] = [
    { name: 'vk', href: '#', label: 'ВКонтакте' },
    { name: 'youtube', href: '#', label: 'YouTube' },
    { name: 'ok', href: '#', label: 'Одноклассники' },
    { name: 'telegram', href: '#', label: 'Telegram' },
];

export const Footer: FC = () => {
    return (
        <footer className={style.footer}>
            <ContainerSection className={style.containerFooter}>
                <nav className={style.footer__nav}>
                    <ul className={style.navList}>
                        {SOCIAL_LINKS.map(({ name, href, label }) => (
                            <li className={style.navList__item} key={name}>
                                <a className={style.navList__link} href={href} aria-label={label} className={style.footer__socialLink}>
                                    <Icon name={name} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </ContainerSection>
        </footer>
    );
};
