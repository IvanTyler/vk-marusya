import { forwardRef, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import style from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
    dark?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((
    {
        error,
        dark = true,
        className,
        ...restProps
    },
    ref) => {
    return (
        <input
            ref={ref}
            className={clsx(style.input, !dark && style.light, error && style.error, className)}
            {...restProps}
        />
    );
});

Input.displayName = 'Input';
