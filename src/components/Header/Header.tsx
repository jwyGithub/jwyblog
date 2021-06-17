import React, { useState } from 'react';

import './Header.scss';

interface INavList {
    id: number;
    name: string;
}

const Header: React.FC = () => {
    const [navList, setNavList] = useState<INavList[]>([
        {
            id: 0,
            name: '首页'
        },
        {
            id: 1,
            name: '未定义'
        }
    ]);

    const [searchVal, setSearchVal] = useState<string>('');

    // change事件类型   React.ChangeEvent

    const onSearch = (e: React.ChangeEvent) => {
        setSearchVal((e.target as HTMLInputElement).value);
    };

    return (
        <div className='header'>
            <span className='header-name'>Jwy</span>
            <input type='text' className='header-search' onChange={onSearch} />
            <ul className='header-navlist'>
                {navList.map(nav => (
                    <li key={nav.id}>{nav.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Header;
