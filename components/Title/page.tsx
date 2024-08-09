import React from 'react'
import cl from 'classnames'
import styles from './page.module.css'

type Title = {
  className: string | undefined;
  children?: any;
  type: string | undefined;
  title: string | undefined;
}

const Title = ({ className, children, type, title }: Title) => {
  if(type === 'small'){
    return (
      <div className={styles.block}>
        <h3 className={cl(className, styles.title, styles.titleSmall)}>
          {title}
        </h3>
      </div>)
  }
  return (
    <div className={styles.block}>
      <h2 className={cl(className, styles.title, styles.titleMedium)}>
        {children}
      </h2>
      </div>
  )
}

export default Title