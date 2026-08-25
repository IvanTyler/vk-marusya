import { FC } from 'react';
import clsx from 'clsx';
import style from './Icon.module.scss';

export type IconName =
    | 'burger'
    | 'check'
    | 'copyright'
    | 'favorite'
    | 'genres'
    | 'info'
    | 'loading'
    | 'mail'
    | 'ok'
    | 'password'
    | 'pause'
    | 'phone'
    | 'play'
    | 'search'
    | 'send'
    | 'star-white'
    | 'telegram'
    | 'update'
    | 'user'
    | 'vk'
    | 'youtube';

interface IconProps {
    name: IconName;
    className?: string;
    size?: string;
    spinning?: boolean;
}

export const Icon: FC<IconProps> = ({ name, className, size, spinning }) => {
    const maskImage = `url(/icons/${name}.svg)`;

    return (
        <span
            className={clsx(style.icon, spinning && style.spinning, className)}
            style={
                {
                    maskImage,
                    WebkitMaskImage:
                        maskImage,
                    ...(size ? { width: size, height: size } : {})
                }
            }
        />
    );
};
