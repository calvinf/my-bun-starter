import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root')!;
  const root = createRoot(rootElement);
  root.render(<App />);
});
