import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { ContextProvider } from './context/Context';

const container = document.getElementById('root');

createRoot(container).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
