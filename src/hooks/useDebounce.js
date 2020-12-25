import { useEffect, useRef } from '@/hooks/react';
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

// const useDebounceDemo = props => {
//     const [countA, setCountA] = useState(0);
//     const [countB, setCountB] = useState(0);
//     useDebounce(
//         function () {
//             setCountB(countA);
//         },
//         300,
//         [countA]
//     );
//     const getData = debounce(function () {
//         $axios.get('/src/public/json/index.json').then(res => {
//             console.log(res);
//         });
//     });

//     return (
//         <div>
//             <button onClick={getData}>Get</button>
//             <button onClick={useUpdate()}>Update</button>
//             <p>{countA}</p>
//             <p>{countB}</p>
//             <input onChange={e => setCountA(e.target.value)} />
//             {Date.now()}
//         </div>
//     );
// };
