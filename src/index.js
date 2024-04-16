import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot only
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProductProvider } from './Context';

createRoot(document.getElementById('root')).render( // Use createRoot instead of ReactDOM.render
    <ProductProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ProductProvider>
);

reportWebVitals();