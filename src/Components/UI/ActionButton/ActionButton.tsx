import { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';
import style from './ActionButton.module.scss';

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    typeButton?: 'primary' | 'secondary';
    iconOnly?: boolean;
}

export const ActionButton: FC<ActionButtonProps> = (
    {
        typeButton = 'primary',
        iconOnly,
        className,
        children,
        ...restProps
    }) => {
    return (
        <button
            className={clsx(style.button, style[typeButton], iconOnly && style.iconOnly, className)}
            {...restProps}
        >
            {children}
        </button>
    );
};
