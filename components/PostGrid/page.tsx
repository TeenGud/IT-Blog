import React from 'react'
import cl from 'classnames'
import styles from './page.module.css'
import { ReactNode } from 'react';

type PostGridType = {
  className: string | undefined;
  children: ReactNode;
}

const PostGrid = ({ className, children }: PostGridType) => {
  return (
    <div className={cl(className, styles.postGrid)}>
      {children}
    </div>
  )
}

export default PostGrid