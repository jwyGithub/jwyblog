import React from 'react';
import { render } from 'react-dom';
import App from '@/views/App.js';
import '@/assets/js/rem';
import '@/assets/css/reset.less';
render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
