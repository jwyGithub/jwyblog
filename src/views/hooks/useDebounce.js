/**
 * @Name: 防抖函数
 * @Descripttion: 防抖函数
 * @param func  执行的函数
 * @param wait  等待时间
 * @param deps  依赖数组
 * @param immediate  是否立即执行
 * @return {cancel}   结束防抖
 */
import { useEffect, useRef } from 'react';
const useDebounce = (func, wait = 1000, deps = [], immediate = true) => {
    let timeout = useRef();
    useEffect(() => {
        if (timeout.current) clearTimeout(timeout.current);
        if (immediate && !timeout.current) {
            timeout.current = setTimeout(() => {
                timeout.current = null;
            }, wait);
            func();
        } else {
            timeout.current = setTimeout(function () {
                func();
            }, wait);
        }
    }, deps);
    const cancel = () => {
        clearTimeout(timeout.current);
        timeout.current = null;
    };
    return [cancel];
};

export default useDebounce;
