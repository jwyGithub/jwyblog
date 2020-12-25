/*
 * @Descripttion:
 * @version:
 * @Author: jwy
 * @Date: 2020-12-07 15:15:22
 * @LastEditors: jwy
 * @LastEditTime: 2020-12-07 15:17:38
 */
import React, { useEffect } from 'react';
import useSize from '@views/hooks/useSize';

function useSizeDemo() {
    const size = useSize();
    return (
        <div>
            {size.width}
            <br />
            {size.height}
        </div>
    );
}

export default useSizeDemo;
