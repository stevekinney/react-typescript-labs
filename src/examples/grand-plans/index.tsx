import React from 'react';
import ReactDOM from 'react-dom/client';
import { GrandPlans } from './grand-plans';

import '$/common/index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element. 😵‍💫');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <GrandPlans />
  </React.StrictMode>,
);
