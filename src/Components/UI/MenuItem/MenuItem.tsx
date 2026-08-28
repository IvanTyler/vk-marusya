import { AnchorHTMLAttributes, ButtonHTMLAttributes, FC, ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';
import { Icon, IconName } from '@/Components/UI/Icon/Icon';
import style from './MenuItem.module.scss';

interface MenuItemBaseProps {
    active?: boolean;
    icon?: IconName;
    showIcon?: boolean;
    className?: string;
    children?: ReactNode;
}

type MenuItemProps =
    | (MenuItemBaseProps & { href: LinkProps['href'] } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>)
    | (MenuItemBaseProps & { href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>);

export const MenuItem: FC<MenuItemProps> = ({ active, icon, showIcon, className, children, href, ...restProps }) => {
    const content = showIcon && icon ? <Icon name={icon} /> : children;
    const classes = clsx(style.menuItem, showIcon && icon && style.noBorder, active && style.active, className);

    if (href) {
        return (
            <Link href={href} className={classes} {...(restProps as AnchorHTMLAttributes<HTMLAnchorElement>)}>
                {content}
            </Link>
        );
    }

    return (
        <button className={classes} {...(restProps as ButtonHTMLAttributes<HTMLButtonElement>)}>
            {content}
        </button>
    );
};
