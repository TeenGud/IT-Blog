import React from 'react'
import cl from 'classnames'
import styles from './page.module.css'
import Image from 'next/image'
import GitHub from './github.svg'
import VK from './vk.svg'
import Telegram from './telegram.svg'
import ScreenEgg from '../ScreenEgg/page'

const socialNetworks = [
  {
    id: 1,
    href: 'https://github.com/TeenGud',
    icon: GitHub,
    title: 'GitHub'
  },
  {
    id: 2,
    href: 'https://vk.com/teen1gud8',
    icon: VK,
    title: 'VK'
  },
  {
    id: 3,
    href: 'https://t.me/teengud',
    icon: Telegram,
    title: 'Telegram'
  },
]

type SocialNetworksType = {
  className: string | undefined;
}

const SocialNetworks = ({ className }: SocialNetworksType) => {
  return (
    <ScreenEgg type="left" className={''}>
      <ul className={cl(className, styles.socialNetworks)}>
        {socialNetworks.map((socialNetwork) => (
          <li key={socialNetwork.id}
          className={styles.listItem}>
            <a href={socialNetwork.href} className={styles.listLink} target='_blank'>
              <Image src={socialNetwork.icon.src} alt={socialNetwork.title} width={60} height={60}/>
            </a>
          </li>
        ))}
      </ul>
    </ScreenEgg>
  )
}

export default SocialNetworks