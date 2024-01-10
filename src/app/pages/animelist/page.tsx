import React, { ReactNode } from 'react';
import Navbar from '@/app/components/global/navbar';
import InputContainer from '@/app/components/Anime/InputContainer';

interface Props {
    children: ReactNode
}

export default function AnimePage({ children }: Props) {
    return (
        <main>
            <Navbar />
            <InputContainer>
                {children}
            </InputContainer>
        </main>
    );
}