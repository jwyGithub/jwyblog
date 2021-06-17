import { useState, useEffect } from 'react';

const useScroll = (scrollRef: any) => {
    const [pos, setPos] = useState([0, 0]);
    useEffect(() => {
        function handleScroll() {
            setPos([scrollRef.current.scrollLeft, scrollRef.current.scrollTop]);
        }
        scrollRef.current.addEventListener('scroll', handleScroll, false);
        return () => {
            scrollRef.current.removeEventListener('scroll', handleScroll, false);
        };
    }, []);

    return pos;
};

export default useScroll;

// function useScrollDemo() {
//     const scrollRef = useRef();
//     const [x, y] = useScroll(scrollRef);
//     return (
//         <div>
//             <div ref={scrollRef} style={styles.div}>
//                 <ul style={styles.ul}>
//                     {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(item => (
//                         <li key={item} style={{ listStyle: 'none', lineHeight: '30px', margin: '20px', padding: 0 }}>
//                             {item}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//             {x},{y}
//         </div>
//     );
// }
