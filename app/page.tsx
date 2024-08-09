"use client"
import React, { useEffect } from 'react'
import Head from 'next/head'
import { useState } from "react";
import { getCountOfPosts, getPosts } from "@/sanity/sanity-utils";
import { Section, Cover, SocialNetworks, BuyMeACoffe, Title, PostGrid, Post, Button } from '../components/index'
import { PostType } from '@/types/Post';

const LOAD_MORE_STEP = 4;

type Posts = PostType[]

export default function Home() {
  const [ posts, setPosts ] = useState<Posts>([])
  const [ loadedAmount, setLoadedAmount ] = useState(LOAD_MORE_STEP)
  const [ loading, setLoading ] = useState(false)
  const [ countOfPosts, setCountOfPosts ] = useState(0);

  const getMorePosts = async () => {
    setLoading(true);
    try{
      const data = await getPosts(loadedAmount, loadedAmount+LOAD_MORE_STEP)
      setLoadedAmount(loadedAmount + LOAD_MORE_STEP)
      setPosts([...posts, ...data])
      setLoading(false)
    } catch(error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    async function getServerSideProps() {
      const posts = await getPosts(0, LOAD_MORE_STEP);
      const countOfPosts = await getCountOfPosts();
      setCountOfPosts(countOfPosts)
      setPosts(posts)
      }
    getServerSideProps()
  }, [])
  const showLoadButton =  countOfPosts > loadedAmount
  return (
    <div>
      <Head>
        <title>IT Blog</title>
      </Head>
      <Section className={undefined}>
        <Cover title="Simon<br/>Gorunovich" className={undefined}/>
        <SocialNetworks className={undefined}/>
        <BuyMeACoffe className={undefined}/>
      </Section>
      <Section className={undefined} >
        <Title type="medium" className={""} title={''}>New Post</Title>
        <PostGrid className={undefined}>
            {posts.map((post) => (
            <Post className={''} key={post._id} {...post} />
          ))}
        </PostGrid>
        {showLoadButton && 
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Button className={''} disabled={loading} onClick={getMorePosts}>Load more posts</Button>
        </div>}
      </Section>
    </div>
  );
}