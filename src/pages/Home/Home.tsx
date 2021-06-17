import { useState } from 'react';
import Header from '@/components/Header/Header';

import './Home.scss';

const Home: React.FC = () => {
    return (
        <div className='home'>
            <header className='home-header'>
                <Header />
            </header>
            <main className='home-main'>
                <aside>
                    
                </aside>
                <article></article>
            </main>
        </div>
    );
};

export default Home;
