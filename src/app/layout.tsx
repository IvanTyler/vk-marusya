import type { Metadata } from 'next';
import './globals.scss';
import { Header } from '@/Components/UI/Header/Header';
import { QueryProvider } from '@/providers/QueryProvider/QueryProvider';

export const metadata: Metadata = {
    title: 'ВК Маруся — фильмы',
    description: 'Бета-версия стримингового сервиса ВК Маруся',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body>
                <QueryProvider>
                    <Header />
                    {children}
                </QueryProvider>
            </body>
        </html>
    );
}
