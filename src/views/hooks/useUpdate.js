/*
 * @Descripttion: 使当前组件强制更新
 * @version:  1.0
 * @Author: jwy
 * @Date: 2020-12-04 17:24:14
 * @LastEditors: jwy
 * @LastEditTime: 2020-12-04 17:29:32
 */
import { useState } from 'react';

export default function useUpdate() {
    const [flag, setFlag] = useState('');
    return function () {
        setFlag(Date.now());
    };
}
