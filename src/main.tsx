import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.js'
import global_en from "./translations/en/global.json"
import global_es from "./translations/es/global.json"
import {IntlayerProvider} from 'react-intlayer';

const rootEl = document.getElementById('root');
if (rootEl){
  ReactDOM.createRoot(rootEl).render(
    // <StrictMode>
      <IntlayerProvider>
        <App />
      </IntlayerProvider> 
    // </StrictMode>,
  )
}
else{
  console.error("Could not find element with id=root");
}

