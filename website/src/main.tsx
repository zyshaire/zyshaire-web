import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { FormspreeProvider } from '@formspree/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormspreeProvider project={import.meta.env.VITE_FORMSPREE_PROJECT_ID}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FormspreeProvider>
  </StrictMode>,
);
