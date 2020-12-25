import { useState } from '@/hooks/react';

export default function useUpdate() {
    const [flag, setFlag] = useState('');
    return function () {
        setFlag(Date.now());
    };
}
