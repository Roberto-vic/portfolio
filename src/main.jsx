/**
 * @copyright 2024 - All rights reserved Roberto Vicari
 * @license Apache-2.0 License
 */


/**
 * Node modules
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

/**
 * Components
 */
import App from './App.jsx';
import 'lenis/dist/lenis.css';

/**
 * Css links
 */
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
