import React from 'react';
import Link from 'next/link';
import cl from 'classnames';
import styles from './page.module.css';
import Image from 'next/image'
import Title from '../Title/page';

type PostType = {
  className: string | undefined;
  image: string;
  title: string | undefined;
  description: string;
  slug: string;
}

const Post = ({ className, image, title, description, slug }: PostType) => {
  return (
    <Link href={`/post/${encodeURIComponent(slug)}`} className={cl(className, styles.post)}>
      <h3 className={cl(styles.postTitle)}>{title}</h3>
      <div className={styles.postLink}>
        <div className={styles.postContent}>
          <div className={styles.postImage}>
            <Image src={image} alt={slug} width={200} height={200}/>
          </div>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </Link>
  )
  
}

export default Post