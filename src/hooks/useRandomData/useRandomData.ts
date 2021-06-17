import { useEffect, useState } from 'react';

const useRandomData = (data: Array<string>, isAuto: boolean = false, time: number = 3000): string => {
    const [msg, setMsg] = useState('');

    const getRandom = () => {
        return Math.round(Math.random() * ((data as Array<string>).length - 1)) + 1;
    };

    useEffect(() => {
        let timeID: any;
        if (isAuto) {
            setMsg(data[getRandom()]);
            timeID = setInterval(() => {
                console.log(data[getRandom()]);
                setMsg(data[getRandom()]);
            }, time);
        } else {
            setMsg(data[getRandom()]);
        }

        return () => {
            console.log('clean');
            clearInterval(timeID);
        };
    }, []);

    return msg;
};

export default useRandomData;
