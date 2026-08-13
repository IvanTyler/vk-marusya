import { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';
import style from './MenuItem.module.scss';

interface MenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean;
}

export const MenuItem: FC<MenuItemProps> = ({ active, className, children, ...restProps }) => {
    return (
        <button
            className={clsx(style.menuItem, active && style.active, className)}
            {...restProps}
        >
            {children}
        </button>
    );
};
