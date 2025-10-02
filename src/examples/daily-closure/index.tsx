import React from 'react';
import ReactDOM from 'react-dom/client';
import { Newspaper } from './newspaper';

import '$/common/index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element. 😵‍💫');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Newspaper />
  </React.StrictMode>,
);
