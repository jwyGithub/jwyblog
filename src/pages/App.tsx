import Welcome from '../components/Welcome/welcome';
import Home from '@/pages/Home/Home';
import './App.scss';

const App = () => {
    return (
        <div className='app'>
            <Welcome />
            <Home />
        </div>
    );
};

export default App;
