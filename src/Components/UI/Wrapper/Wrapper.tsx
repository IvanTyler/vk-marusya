import {FC} from "react";
import style from './Wrapper.module.css';
import { clsx } from 'clsx';

interface IWrapperProps {
    children: React.ReactNode,
}


export const Wrapper: FC<IWrapperProps> = ({children}) => {
    return (
        <div className={clsx(style.wrapper)}>
            {children}
        </div>
    )
}