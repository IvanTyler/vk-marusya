import { FC, MouseEvent, ReactNode } from 'react';
import { ContainerSection } from '@/Components/UI/ContainerSection/ContainerSection';
import style from './Modal.module.scss';

interface ModalProps {
    children: ReactNode;
    onClose?: () => void;
}

export const Modal: FC<ModalProps> = ({ children, onClose }) => {
    const handleStopPropagation = (event: MouseEvent) => {
        event.stopPropagation();
    };

    return (
        <div className={style.modal} onClick={onClose}>
            <ContainerSection className={style.modalContainer} onClick={handleStopPropagation}>
                {children}
            </ContainerSection>
        </div>
    );
};
