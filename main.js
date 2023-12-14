import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { callbacksComponent} from './src/concepts/02-callbacks';
import { promisesComponent } from './src/concepts/03-promises';
import { promiseRaceComponent } from './src/concepts/04-promise-race';
import { asyncComponent } from './src/concepts/05-async';
import { asyncAwaitComponent } from './src/concepts/06-async-await';
import { asyncAwait2Component } from './src/concepts/07-async-await-2';
import { forAwaitComponent } from './src/concepts/08-for-await';
import { generatorsFunctionComponent } from './src/concepts/09-generators';
import { generatorAsyncComponent } from './src/concepts/10-generator-async';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">



    </div>
  </div>
`;

const divElement = document.querySelector('.card');
// environmentsComponent(divElement);
// callbacksComponent(divElement);
// promisesComponent(divElement);
// promiseRaceComponent(divElement);
// asyncComponent(divElement);
// asyncAwaitComponent(divElement);
// asyncAwait2Component(divElement);
// forAwaitComponent(divElement);
// generatorsFunctionComponent(divElement);
generatorAsyncComponent(divElement);