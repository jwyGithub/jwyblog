import { useState } from 'react';
import Background from './Background/Background';
import AuthorInfo from './AuthorInfo/AuthorInfo';
import './welcome.scss';

const Welcome = () => {
    const [status, setStatus] = useState(true);
    const onChangeStatus = () => {
        setStatus(false);
    };
    return (
        <div className={['welcome', status ? '' : 'hide'].join(' ')}>
            <Background />
            <AuthorInfo onChangeStatus={onChangeStatus} />
        </div>
    );
};

export default Welcome;
