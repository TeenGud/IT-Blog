import { Article, Content, Title } from "@/components";
import Head from 'next/head'
import styles from './page.module.css'
import { getPost } from "@/sanity/sanity-utils";
import { format } from 'date-fns';

type Props = {
    params: { slug: string; }
}

export default async function Post({ params }: Props) {
    const slug = params.slug;
    const post = await getPost(slug);
    const date = format(new Date(post.publishedDate), 'dd MMM yyy')

    return (
        <Article backUrl="/" className={styles.post}>
                <Head>
                    <title>{post.meta_title}</title>
                </Head>
                <Title className={styles.postTitle} type={""} title={""}>
                    <div style={{fontSize: '2.8rem', bottom: '-4px'}}>
                    {post.title}
                    </div>
                </Title>
                <p className={styles.postDate}>{date}</p>
                <Content body={post.body} className={undefined}/>
        </Article>
    )
}