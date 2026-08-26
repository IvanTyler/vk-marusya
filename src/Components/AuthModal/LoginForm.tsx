'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormField } from '@/Components/UI/FormField/FormField';
import { ActionButton } from '@/Components/UI/ActionButton/ActionButton';
import { loginSchema, LoginFormValues } from '@/api/types/Auth';
import style from './AuthModal.module.scss';

export const LoginForm: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema) });

    const onSubmit = (values: LoginFormValues) => {
        // TODO: подключить запрос логина, когда будет известен эндпоинт
        console.log(values);
    };

    return (
        <form className={style.authModal__form} onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormField
                icon="mail"
                type="email"
                placeholder="Электронная почта"
                dark={false}
                error={errors.email?.message}
                {...register('email')}
            />

            <FormField
                icon="password"
                type="password"
                placeholder="Пароль"
                dark={false}
                error={errors.password?.message}
                {...register('password')}
            />

            <ActionButton type="submit" typeButton="primary" className={style.authModal__submit}>
                Войти
            </ActionButton>
        </form>
    );
};
