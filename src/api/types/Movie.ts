import { z } from 'zod';

export const movieSchema = z.object({
    id: z.number(),
    title: z.string(),
    originalTitle: z.string(),
    language: z.string(),
    releaseYear: z.number(),
    releaseDate: z.string(),
    genres: z.array(z.string()),
    plot: z.string(),
    runtime: z.number(),
    budget: z.coerce.number().nullable(),
    revenue: z.coerce.number().nullable(),
    homepage: z.string().nullable(),
    status: z.string(),
    posterUrl: z.string().nullable(),
    backdropUrl: z.string().nullable(),
    trailerUrl: z.string().nullable(),
    trailerYouTubeId: z.string().nullable(),
    tmdbRating: z.number(),
    searchL: z.string(),
    keywords: z.array(z.string()),
    countriesOfOrigin: z.array(z.string()),
    languages: z.array(z.string()),
    cast: z.array(z.string()),
    director: z.string().nullable(),
    production: z.string().nullable(),
    awardsSummary: z.string().nullable(),
});

export type Movie = z.infer<typeof movieSchema>;
