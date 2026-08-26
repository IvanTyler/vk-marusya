'use client';

import { FC, useState } from 'react';
import { Modal } from '@/Components/UI/Modal/Modal';
import { Logo } from '@/Components/UI/Logo/Logo';
import { Icon } from '@/Components/UI/Icon/Icon';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import style from './AuthModal.module.scss';

type AuthMode = 'login' | 'register';

interface AuthModalProps {
    onClose: () => void;
}

export const AuthModal: FC<AuthModalProps> = ({ onClose }) => {
    const [mode, setMode] = useState<AuthMode>('login');

    return (
        <Modal onClose={onClose}>
            <div className={style.authModal}>
                <div className={style.authModal__card}>
                    <Logo className={style.authModal__logo} />

                    {mode === 'login'
                        ? <LoginForm />
                        : <RegisterForm />
                    }

                    <button
                        type="button"
                        className={style.authModal__switch}
                        onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
                    >
                        {mode === 'login' ? 'Регистрация' : 'У меня есть пароль'}
                    </button>
                </div>

                <button type="button" className={style.authModal__close} onClick={onClose} aria-label="Закрыть">
                    <Icon name="close" />
                </button>
            </div>
        </Modal>
    );
};
