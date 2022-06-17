import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import './components/08-useReducer/intro-reducer';
import { MainApp } from './components/09-useContext/MainApp';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <MainApp />    
    </BrowserRouter>
);

