import { forwardRef, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import style from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((
    { 
        error, 
        className, 
        ...restProps 
    }, 
    ref) => {
    return (
        <input
            ref={ref}
            className={clsx(style.input, error && style.error, className)}
            {...restProps}
        />
    );
});

Input.displayName = 'Input';
