import { RandomMovie } from '@/Components/RandomMovie/RandomMovie';
import { TopMovies } from '@/Components/TopMovies/TopMovies';

export default function HomePage() {
    return (
        <main>
            <RandomMovie />
            <TopMovies />
        </main>
    );
}
