import { FC, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import { Icon } from '@/Components/UI/Icon/Icon';
import { Input } from '@/Components/UI/Input/Input';
import style from './SearchInput.module.scss';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    showIcon?: boolean;
}

export const SearchInput: FC<SearchInputProps> = ({ className, showIcon, ...restProps }) => {
    if (showIcon) {
        return (
            <button type="button" className={clsx(style.search, style.iconOnly, className)} aria-label="Поиск">
                <Icon name="search" />
            </button>
        );
    }

    return (
        <label className={clsx(style.search, className)}>
            <Icon name="search" className={style.search__icon} />
            <Input className={style.search__input} {...restProps} />
        </label>
    );
};
