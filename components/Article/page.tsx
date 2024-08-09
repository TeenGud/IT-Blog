import React from 'react'
import cl from 'classnames'
import styles from './page.module.css'
import Link from 'next/link'
import { FaArrowLeft } from "react-icons/fa";

type ArticleType = {
  children: any;
  className: string | undefined;
  backUrl: string;
}

const Article = ({
    children, className, backUrl
}: ArticleType) => {
  return (
    <article className={cl(className, styles.article)}>
      <Link href={backUrl}>
        <div className={styles.articleBack}>
          <FaArrowLeft width={100}/>
        </div>
      </Link>
      <div className={styles.articleContent}>
        {children}
      </div>
    </article>
  )
}

export default Article