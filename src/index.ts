import { getMessage } from './message';
import '../assets/style.css';
import logo from '../assets/logo.png';

const app = document.getElementById('app');

if (app) {
  const title: HTMLElement = document.createElement('h1');
  title.textContent = 'Webpack App';

  const message = document.createElement('p');
  message.textContent = getMessage();

  const img = document.createElement('img');
  img.src = logo;
  img.width = 200;

  const unusedVariable = 'This variable is declared but never used';

  const button = document.createElement('button');
  const loadLazyModule = async () => {
    const { lazy } = await import('./lazyModule');
      message.textContent = 'I will load a lazy module!';
    alert(lazy());
  };
  button.addEventListener('click', loadLazyModule);
  button.textContent = 'Click me';
  
  button.addEventListener('click', () => {
    message.textContent = 'You clicked the button!';
  });

  app.appendChild(title);
  app.appendChild(message);
  app.appendChild(img);
  app.appendChild(button);
}