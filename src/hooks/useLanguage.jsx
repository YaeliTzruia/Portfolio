import { useEffect, useState } from 'react';

export default function useLanguage() {
    const [isEnglish, setIsEnglish] = useState(false);
    const [side, setSide] = useState('rtl');

    useEffect(() => {
        if (isEnglish) {
            setSide('ltr');
        } else {
            setSide('rtl');
        }
    }, [isEnglish]);

    return {
        isEnglish,
        setIsEnglish,
        side,
        setSide,
    };
}
