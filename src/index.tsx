import ReactDOM from 'react-dom/client';
import App from './app';

document.addEventListener('DOMContentLoaded', () => {
  const rootDiv = document.getElementById('root');

  const root = ReactDOM.createRoot(rootDiv);
  root.render(<App/>);
});