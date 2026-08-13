import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
    title: 'ВК Маруся — фильмы',
    description: 'Бета-версия стримингового сервиса ВК Маруся',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body>{children}</body>
        </html>
    );
}
