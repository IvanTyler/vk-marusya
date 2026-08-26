'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { FormField } from '@/Components/UI/FormField/FormField';
import { ActionButton } from '@/Components/UI/ActionButton/ActionButton';
import { registerSchema, RegisterFormValues } from '@/api/types/Auth';
import { registerUser } from '@/api/Auth';
import style from './AuthModal.module.scss';

export const RegisterForm: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormValues>({ resolver: zodResolver(registerSchema) });

    const { mutate, isPending, isSuccess } = useMutation({
        mutationFn: registerUser,
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.error(error);
        },
    });

    const onSubmit = ({ email, password, name, surname }: RegisterFormValues) => {
        mutate({ email, password, name, surname });
    };

    if (isSuccess) {
        return (
            <div className={style.authModal__form}>
                <h2 className={style.authModal__title}>Регистрация завершена</h2>
                <p className={style.authModal__message}>Теперь вы можете войти, используя свои данные</p>
            </div>
        );
    }

    return (
        <form className={style.authModal__form} onSubmit={handleSubmit(onSubmit)} noValidate>
            <h2 className={style.authModal__title}>Регистрация</h2>

            <FormField
                icon="mail"
                type="email"
                placeholder="Электронная почта"
                dark={false}
                error={errors.email?.message}
                {...register('email')}
            />

            <FormField
                icon="user"
                type="text"
                placeholder="Имя"
                dark={false}
                error={errors.name?.message}
                {...register('name')}
            />

            <FormField
                icon="user"
                type="text"
                placeholder="Фамилия"
                dark={false}
                error={errors.surname?.message}
                {...register('surname')}
            />

            <FormField
                icon="password"
                type="password"
                placeholder="Пароль"
                dark={false}
                error={errors.password?.message}
                {...register('password')}
            />

            <FormField
                icon="password"
                type="password"
                placeholder="Подтвердите пароль"
                dark={false}
                error={errors.confirmPassword?.message}
                {...register('confirmPassword')}
            />

            <ActionButton type="submit" typeButton="primary" disabled={isPending} className={style.authModal__submit}>
                {isPending ? 'Создание аккаунта...' : 'Создать аккаунт'}
            </ActionButton>
        </form>
    );
};
