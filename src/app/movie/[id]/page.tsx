interface MoviePageProps {
    params: { id: string };
}

export default function MoviePage({ params }: MoviePageProps) {
    return (
        <main>
            <p>Страница фильма {params.id}</p>
        </main>
    );
}
