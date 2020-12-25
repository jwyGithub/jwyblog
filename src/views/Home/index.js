import React, { useState, useEffect } from 'react';
import styles from './index.module.less';
import Header from '@/components/Header';
import Nav from '@/components/Nav';

function index() {
    const [content, setContent] = useState('这  是  用  grid  布  局  出  来  的  页  面，我  也  不  知  道  要  写  点  什  么');

    useEffect(() => {
        let timer = setInterval(() => {
            setContent(content.substring(1, content.length) + content.charAt(0));
        }, 500);
        return () => {
            clearInterval(timer);
        };
    });

    return (
        <div className={styles.home}>
            <header>
                <Header />
            </header>
            <nav>
                <Nav />
            </nav>
            <main>{content}</main>
        </div>
    );
}

export default index;
