import { FC } from 'react';
import style from './Preloader.module.scss';

export const Preloader: FC = () => {
    return (
        <div className={style.preloader}>
            <div className={style.preloader__ripple}>
                <div />
                <div />
            </div>
        </div>
    );
};
