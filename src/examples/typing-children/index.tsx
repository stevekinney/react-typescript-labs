import React from 'react';
import ReactDOM from 'react-dom/client';
import { NestedBoxes } from './nested-boxes';

import '$/common/index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element. 😵‍💫');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <NestedBoxes />
  </React.StrictMode>,
);
