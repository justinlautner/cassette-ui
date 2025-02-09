import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './styles/generalStyle.css'
import './styles/genreMenuStyle.css'
import './styles/albumInfoPaneStyle.css'
import './styles/playlistViewStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
