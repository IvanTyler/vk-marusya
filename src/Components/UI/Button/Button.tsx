import { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';
import style from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    typeButton?: 'primary' | 'secondary';
}

export const Button: FC<ButtonProps> = (
    {
        typeButton = 'primary',
        className,
        children,
        ...restProps
    }) => {
    return (
        <button
            className={clsx(style.button, style[typeButton], className)}
            {...restProps}
        >
            {children}
        </button>
    );
};
