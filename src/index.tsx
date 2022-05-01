import react from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';

document.addEventListener('DOMContentLoaded', () => {
  const rootDiv = document.getElementById('root');

  const root = ReactDOM.createRoot(rootDiv);
  root.render(<App name="ian.tech" callback={() => console.log('app rendered');
});