import { FC } from 'react';
import clsx from 'clsx';
import { Icon } from '@/Components/UI/Icon/Icon';
import style from './Rating.module.scss';

type RatingGrade = 'excellent' | 'good' | 'poor' | 'bullshit';

interface RatingProps {
    value: number;
    className?: string;
}

const getGrade = (value: number): RatingGrade => {
    if (value >= 8) return 'excellent';
    if (value >= 6) return 'good';
    if (value >= 4) return 'poor';
    return 'bullshit';
};

export const Rating: FC<RatingProps> = ({ value, className }) => {
    const grade = getGrade(value);

    return (
        <div className={clsx(style.rating, style[grade], className)}>
            <Icon name="star-white" size="clamp(10px, 1.2vw, 16px)" />
            <span className={style.rating__value}>{value.toFixed(1).replace('.', ',')}</span>
        </div>
    );
};
