import { useState } from 'react';

export default function useUpdate() {
    const [flag, setFlag] = useState(0);
    return function () {
        setFlag(Date.now());
    };
}
