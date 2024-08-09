import React from 'react'
import cl from 'classnames'
import styles from './page.module.css'
import { ReactNode } from 'react';


type SectionType = {
  className: string | undefined;
  children: ReactNode;
}

const Section = ({ className, children }: SectionType) => {
  return (
    <section className={cl(className, styles.section)}>
      {children}
    </section>
  )
}

export default Section