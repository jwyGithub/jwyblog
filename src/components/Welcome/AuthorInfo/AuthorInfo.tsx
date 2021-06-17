import { useState, memo } from 'react';
import useRandomData from '@/hooks/useRandomData/useRandomData';
import toTing from '../welcomMsg';
import './AuthorInfo.scss';

interface IAuthorInfoProps {
    onChangeStatus: React.MouseEventHandler<HTMLButtonElement>;
}

const AuthorInfo = ({ onChangeStatus }: IAuthorInfoProps) => {
    const [tags, setTags] = useState(['Vue', 'React', 'NodeJS', 'Echarts', 'Webpack']);

    return (
        <div className='author-info'>
            <div className='header-img'>
                <img src='https://avatars.githubusercontent.com/u/58636312?v=4' alt='头像' />
            </div>
            <p className='author'>野猪佩奇</p>
            <ul className='description'>
                <li>
                    <span>职业：</span>
                    <span>前端开发工程师</span>
                </li>
            </ul>
            <ul className='tags'>
                {tags.map(tag => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>

            <p className='likeTing'>{useRandomData(toTing, true)}</p>

            <div className='start'>
                <button onClick={onChangeStatus}>进入</button>
            </div>
        </div>
    );
};

export default memo(AuthorInfo);
