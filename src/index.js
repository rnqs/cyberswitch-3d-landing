import { createRoot } from 'react-dom/client'

import './styles.css'

import Scene from './Scene'
import Content from './Content'

createRoot(document.getElementById('root')).render(
  <>
    <Scene />
    <Content />
  </>
)
