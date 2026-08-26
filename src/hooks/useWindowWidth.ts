'use client';

import { useEffect, useState } from 'react';

interface UseWindowWidthResult {
    widthWindow: number;
    isMobileContent: boolean;
}

export const useWindowWidth = (breakpoint?: number): UseWindowWidthResult => {
    const [widthWindowSize, setWidthWindowSize] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWidthWindowSize(window.innerWidth);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);

    return {
        widthWindow: widthWindowSize,
        isMobileContent: breakpoint ? widthWindowSize <= breakpoint : false,
    };
};
