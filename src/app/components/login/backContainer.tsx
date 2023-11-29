import BackgroundImage from '../../../../public/background.png'; // replace with the path to your image
import React, { ReactNode } from 'react';
import Image from 'next/image';
interface BackContainerProps {
    children: ReactNode;
}

export default function BackContainer({children}: BackContainerProps) {
    const backgroundImageStyle = { 
        backgroundImage: 'url(${BackgroundImage})',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
        position: 'absolute' as const,
        color: 'blue',
    }

    return(
        <div>
            <Image alt='background' src={BackgroundImage}/>
            {children}
        </div>
    )
}