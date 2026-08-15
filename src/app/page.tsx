'use client';

import { useEffect } from 'react';
import { fetchRandomMovie } from '@/api/Movies';

export default function HomePage() {
    useEffect(() => {
        fetchRandomMovie().then((movie) => console.log(movie));
    }, []);

    return <main />;
}
