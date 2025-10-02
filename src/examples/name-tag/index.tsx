import React from 'react';
import ReactDOM from 'react-dom/client';
import { NameTag } from './name-tag';

import '$/common/index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element. 😵‍💫');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <NameTag name="Finn the Human" title="Hero of Ooo" level={34} isOnline={true} />
  </React.StrictMode>,
);
