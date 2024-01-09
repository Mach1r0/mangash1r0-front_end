import React, { ReactNode } from 'react';
import Navbar from '@/app/components/global/navbar';
import AnimeView from '@/app/components/Anime/AnimeView';

interface Props {
    children: ReactNode
}

export default function AnimePage({ children }: Props) {
    return (
        <main>
            <Navbar />
            <AnimeView>
                {children}
            </AnimeView>
            {children}
        </main>
    );
}