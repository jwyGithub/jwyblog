/*
 * @Descripttion:
 * @version:
 * @Author: jwy
 * @Date: 2020-12-04 15:37:56
 * @LastEditors: jwy
 * @LastEditTime: 2020-12-07 15:11:50
 */
import useDebounce from '@views/hooks/useDebounce';
import debounce from '@views/utils/debounce';
import useUpdate from '@views/hooks/useUpdate';
import React, { useState } from 'react';

import $axios from '@views/config/axios';
const useDebounceDemo = props => {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);
    useDebounce(
        function () {
            setCountB(countA);
        },
        300,
        [countA]
    );
    const getData = debounce(function () {
        $axios.get('/src/public/json/index.json').then(res => {
            console.log(res);
        });
    });

    return (
        <div>
            <button onClick={getData}>Get</button>
            <button onClick={useUpdate()}>Update</button>
            <p>{countA}</p>
            <p>{countB}</p>
            <input onChange={e => setCountA(e.target.value)} />
            {Date.now()}
        </div>
    );
};

export default useDebounceDemo;
