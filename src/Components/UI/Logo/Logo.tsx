import { FC } from 'react';
import clsx from 'clsx';
import style from './Logo.module.scss';

interface LogoProps {
    className?: string;
}

export const Logo: FC<LogoProps> = ({ className }) => {
    return (
        <span className={clsx(style.logo, className)}>
            <img src="/icons/logo.svg" alt="" className={style.logo__mark} width={25} height={32} />
            маруся
        </span>
    );
};
