import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BharatiyaLipiProvider } from './context/BharatiyaLipiContext.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BharatiyaLipiProvider>
        <App />
      </BharatiyaLipiProvider>
    </ThemeProvider>
  </StrictMode>,
);


