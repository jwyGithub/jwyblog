import { memo } from 'react';
import './Background.scss';
const Background = () => {
    return (
        <div className='welcome-background'>
            <div className='stars'></div>
        </div>
    );
};
export default memo(Background);
