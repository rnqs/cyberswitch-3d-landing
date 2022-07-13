import { ReactComponent as Logo } from './assets/logo.svg'
import { ReactComponent as Email } from './assets/email.svg'
import { ReactComponent as Github } from './assets/github.svg'
import { ReactComponent as LinkedIn } from './assets/linkedin.svg'
import { ReactComponent as WhatsApp } from './assets/whatsapp.svg'
import { ReactComponent as Instagram } from './assets/instagram.svg'

import './styles.css'

export default function Content() {
  return (
    <div className='content'>
      <div className='overlay' />
      <nav>
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
      </nav>

      <main></main>
      <section className="s1"></section>
      <section className="s2"></section>
      <section className="s3"></section>
    </div>
  )
}