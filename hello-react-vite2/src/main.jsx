import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './ch13/App';
import Ex7_App from "./ch13/ex/Ex7_App";
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Ex7_App />
    </BrowserRouter>
)
