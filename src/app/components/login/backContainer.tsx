import BackgroundImage from '../../../../public/background3.png'; // replace with the path to your image
import React, { ReactNode } from 'react';
import Image from 'next/image';
interface BackContainerProps {
    children: ReactNode;
}

export default function BackContainer({children}: BackContainerProps) {
    const backgroundImageStyle = {
        backgroundImage: 'url(${BackgroundImage})',
        position: 'absolute' as const,
        BackgroundImage: '',
        backgroundPosition: 'left', // positions the image to the left
        backgroundRepeat: 'no-repeat',
        // Position from the left half of the screen
    }

    return(
        <div style={backgroundImageStyle}>
            <Image height={1200} alt='background' src={BackgroundImage}/>
            {children}
        </div>
    )
}