import { FC, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import { Icon } from '@/Components/UI/Icon/Icon';
import { Input } from '@/Components/UI/Input/Input';
import style from './SearchInput.module.scss';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export const SearchInput: FC<SearchInputProps> = ({ className, ...restProps }) => {
    return (
        <label className={clsx(style.search, className)}>
            <Icon name="search" className={style.icon} />
            <Input className={style.input} {...restProps} />
        </label>
    );
};
