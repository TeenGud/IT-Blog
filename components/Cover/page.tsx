import React from 'react'
import cl from 'classnames'
import styles from './page.module.css'
import Image from 'next/image'
import img from './it-Photoroom.png'
import img2 from './network.png'

type CoverType = {
  className: string | undefined;
  title: string;
}

const Cover = ({ className, title }: CoverType) => {
  return (
    <div className={cl(className, styles.cover)}>
      <Image src={img2} width={300} height={300} className={styles.imageNetwork} alt='IT'/>
      <div className={styles.block}>
        <h1 className={styles.title} 
        dangerouslySetInnerHTML={{__html: title}}/>
        <Image src={img} width={650} height={300} className={styles.imageIt} alt='Network'/>
      </div>
    </div>
  )
}

export default Cover