import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

render(
    <div>
        <center><h1>Pokemon</h1></center>
        <App/>
    </div>,
    document.getElementById('app')
)
