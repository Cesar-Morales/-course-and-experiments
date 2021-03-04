import React from 'react';
import { render } from 'react-dom';

import App from './component/App';

render(
    <div>
        <h1>App</h1>
        <App/>
    </div>,
    document.getElementById('app')
)
