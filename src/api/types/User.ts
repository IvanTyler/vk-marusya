import { z } from 'zod';

export const userSchema = z.object({
    name: z.string(),
    surname: z.string(),
    email: z.string(),
    favorites: z.array(z.string()),
});

export type User = z.infer<typeof userSchema>;
