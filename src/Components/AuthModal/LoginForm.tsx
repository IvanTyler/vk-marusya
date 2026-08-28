'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { FormField } from '@/Components/UI/FormField/FormField';
import { ActionButton } from '@/Components/UI/ActionButton/ActionButton';
import { loginSchema, LoginFormValues } from '@/api/types/Auth';
import { loginUser } from '@/api/Auth';
import style from './AuthModal.module.scss';

export const LoginForm: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema) });

    const { mutate } = useMutation({
        mutationFn: loginUser,
        onSuccess: async (data) => {
            console.log('response', data);

        },
        onError: (error) => {
            console.error(error);
        },
    });

    const onSubmit = (values: LoginFormValues) => {
        mutate(values);
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
