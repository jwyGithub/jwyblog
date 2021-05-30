import './AuthorInfo.scss';
const AuthorInfo = ({ onChangeStatus }: any) => {
    return (
        <div className='author-info'>
            <button onClick={onChangeStatus}>点击</button>
        </div>
    );
};

export default AuthorInfo;
