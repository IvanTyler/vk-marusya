import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().min(1, 'Введите email').email('Некорректный email'),
    password: z.string().min(1, 'Введите пароль'),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const loginResponseSchema = z.object({
    result: z.boolean(),
});

export const registerSchema = z
    .object({
        email: z.string().min(1, 'Введите email').email('Некорректный email'),
        name: z.string().min(1, 'Введите имя'),
        surname: z.string().min(1, 'Введите фамилию'),
        password: z.string().min(6, 'Минимум 6 символов'),
        confirmPassword: z.string().min(1, 'Повторите пароль'),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Пароли не совпадают',
        path: ['confirmPassword'],
    });

export type RegisterFormValues = z.infer<typeof registerSchema>;

export const registerResponseSchema = z.object({
    success: z.boolean(),
});
