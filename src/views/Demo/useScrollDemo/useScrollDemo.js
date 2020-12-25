/*
 * @Descripttion:
 * @version:
 * @Author: jwy
 * @Date: 2020-12-07 15:23:57
 * @LastEditors: jwy
 * @LastEditTime: 2020-12-07 15:32:07
 */
import React, { useRef } from 'react';
import useScroll from '@views/hooks/useScroll';

function useScrollDemo() {
    const scrollRef = useRef();
    const [x, y] = useScroll(scrollRef);
    return (
        <div>
            <div ref={scrollRef} style={{ width: '300px', height: '300px', border: '1px solid red', overflow: 'auto', margin: 0, padding: 0 }}>
                <ul style={{ margin: 0, padding: 0, width: '400px' }}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(item => (
                        <li key={item} style={{ listStyle: 'none', lineHeight: '30px', margin: '20px', padding: 0 }}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            {x},{y}
        </div>
    );
}

export default useScrollDemo;
