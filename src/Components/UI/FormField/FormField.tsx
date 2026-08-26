import { forwardRef, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import { Icon, IconName } from '@/Components/UI/Icon/Icon';
import { Input } from '@/Components/UI/Input/Input';
import style from './FormField.module.scss';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    icon: IconName;
    error?: string;
    dark?: boolean;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>((
    {
        icon,
        error,
        dark = true,
        className,
        ...restProps
    },
    ref) => {
    return (
        <div className={clsx(style.formField, className)}>
            <label className={style.formField__field}>
                <Icon name={icon} className={clsx(style.formField__icon, !dark && style.light)} />
                <Input ref={ref} error={Boolean(error)} dark={dark} className={style.formField__input} {...restProps} />
            </label>

        </div>
    );
});

