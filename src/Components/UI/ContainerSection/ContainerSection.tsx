import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import style from './ContainerSection.module.scss';

interface ContainerSectionProps {
    children: ReactNode;
    className?: string;
}

export const ContainerSection: FC<ContainerSectionProps> = ({ children, className }) => {
    return (
        <div className={clsx(style.container, className)}>
            {children}
        </div>
    );
};
