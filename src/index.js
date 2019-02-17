import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import {CookiesProvider} from 'react-cookie'

import './index.css'

import App from './App'

import Main from "./components/Main";

ReactDOM.render(
    <BrowserRouter>
        <CookiesProvider>
            <App>
                <Main/>
            </App>
        </CookiesProvider>
    </BrowserRouter>
    , document.getElementById('root'));
