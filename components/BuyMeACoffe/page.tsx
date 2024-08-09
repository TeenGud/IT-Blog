import React from 'react'
import cl from 'classnames'
import styles from './page.module.css'
import Image from 'next/image'
import cofee from './anime-cofee.jpg'
import ScreenEgg from '../ScreenEgg/page'
import Heart from './heart-smile.svg'

type BuyMeACofeeType = {
  className: string | undefined;
}

const BuyMeACoffe = ({ className }: BuyMeACofeeType) => {
  return (
    <ScreenEgg type="right" className={undefined}>
    <div className={cl(className, styles.buyMeACoffe)}>
      <div className={styles.block}>
        <Image src={Heart} alt='Heart' width={60} height={60}/>
        <a href="https://www.donationalerts.com/r/teen_gud_beats"
        target='_blank'
        className={styles.buyCoffeButton}
        rel='noreferrer'>
          Buy me a cofee...
        </a>
      </div>
      <Image className={styles.anime} src={cofee} alt='cofee' width={200} height={400}/>
    </div>
    </ScreenEgg>
  )
}

export default BuyMeACoffe