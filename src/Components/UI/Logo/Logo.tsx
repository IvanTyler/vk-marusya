import { FC } from 'react';
import clsx from 'clsx';
import style from './Logo.module.scss';

interface LogoProps {
    className?: string;
}

export const Logo: FC<LogoProps> = ({ className }) => {
    return (
        <span className={clsx(style.logo, className)}>
            <span className={style.mark} />
            маруся
        </span>
    );
};
