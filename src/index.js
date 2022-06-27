import { createRoot } from 'react-dom/client'

import './styles.css'

import App from './App'

import { ReactComponent as Logo } from './assets/logo.svg'
import { ReactComponent as Email } from './assets/email.svg'
import { ReactComponent as Github } from './assets/github.svg'
import { ReactComponent as LinkedIn } from './assets/linkedin.svg'
import { ReactComponent as WhatsApp } from './assets/whatsapp.svg'
import { ReactComponent as Instagram } from './assets/instagram.svg'

function Overlay() {
  return (
    <div className='overlay'>
      <div className='logo'>
        <Logo width={180} height={28} />
      </div>
      <div className='links'>
        <a href="https://github.com/cyberswitch">
          <Github width={28} height={28} />
        </a>
        <a href="https://www.linkedin.com/company/devcyberswitch">
          <LinkedIn width={28} height={28} />
        </a>
        <a href="https://www.instagram.com/cyberswitch.dev">
          <Instagram width={28} height={28} />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5514997163492">
          <WhatsApp width={28} height={28} />
        </a>
        <a href="mailto:contato@cyberswitch.dev">
          <Email width={28} height={28} />
        </a>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Overlay />
  </>
)
