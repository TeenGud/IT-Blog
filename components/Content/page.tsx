import React from 'react'
import cl from 'classnames'
import styles from './page.module.css'
import { DATASET, PROJECT_ID } from '@/sanity/sanity-utils'

const BlockContent = require('@sanity/block-content-to-react')

type ContentType = {
  className: string | undefined;
  body: any;
}

const Content = ({ className, body }: ContentType) => {
  return (
    <div className={cl(className, styles.content)}>
      <BlockContent 
      blocks={body}
      imageOptions={{w: 1000, h: 750, fit: 'max'}}
      projectId={PROJECT_ID}
      dataset={DATASET}/>
    </div>
  )
}

export default Content