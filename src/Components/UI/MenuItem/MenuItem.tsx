import { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';
import { Icon, IconName } from '@/Components/UI/Icon/Icon';
import style from './MenuItem.module.scss';

interface MenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean;
    icon?: IconName;
    showIcon?: boolean;
}

export const MenuItem: FC<MenuItemProps> = (
    {
        active,
        icon,
        showIcon,
        className,
        children,
        ...restProps
    }) => {
    return (
        <button
            className={clsx(style.menuItem, 
                showIcon && icon && style.noBorder, 
                active && style.active, className)}
            {...restProps}
        >
            {showIcon && icon ? <Icon name={icon} /> : children}
        </button>
    );
};
