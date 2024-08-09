import React from 'react'
import cl from 'classnames'
import styles from './page.module.css'
import { ReactNode } from 'react';


type ScreenEggType = {
  className: string | undefined;
  type: string | undefined;
  children: ReactNode;
}

const ScreenEgg = ({ className, type, children }: ScreenEggType) => {
  return (
    <div className={cl(className, styles.screenEgg, type === 'right' ? styles.screenEggRight : styles.screenEggLeft)}>
      {children}
    </div>
  )
}

export default ScreenEgg