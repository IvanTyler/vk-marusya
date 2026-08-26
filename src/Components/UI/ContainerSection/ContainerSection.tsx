import { FC, HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import style from './ContainerSection.module.scss';

interface ContainerSectionProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}

export const ContainerSection: FC<ContainerSectionProps> = ({ children, className, ...restProps }) => {
    return (
        <div className={clsx(style.container, className)} {...restProps}>
            {children}
        </div>
    );
};
