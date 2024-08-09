import React from 'react'
import cl from 'classnames'
import styles from './page.module.css'
import { ReactNode } from 'react';


type Button = {
  children: ReactNode;
  className: string | undefined;
  onClick: any;
  disabled: boolean;
}

const Button = ({
    children, className, onClick, disabled
}: Button) => {
  return (
    <button className={cl(className, styles.button)} onClick={onClick} disabled={disabled}>
        {children}
    </button>
  )
}

export default Button