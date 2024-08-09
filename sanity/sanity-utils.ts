import { PostType } from "@/types/Post";
import { createClient, groq } from "next-sanity";

export const PROJECT_ID = "xf389pey";
export const DATASET = 'production';

export async function getPosts(start: number, end: number): Promise<PostType[]> {
    const client = createClient({
        projectId: PROJECT_ID,
        dataset: DATASET,
        apiVersion: '2024-08-07'
    });
    const posts  = await client.fetch(
        groq`*[_type == "post"] | order(publishedDate desc) [${start}...${end}] {
        _id,
        publishedDate,
        title,
        "slug": slug.current,
        description,
        "image": image.asset -> url}`)
    return posts
}
export async function getCountOfPosts() {
    const client = createClient({
        projectId: PROJECT_ID,
        dataset: DATASET,
        apiVersion: '2024-08-07'
    });
    const count  = await client.fetch(
        groq`count(*[_type == "post"])`)
    return count
}
export async function getPost(slug: string): Promise<PostType> {
    const client = createClient({
        projectId: PROJECT_ID,
        dataset: DATASET,
        apiVersion: '2024-08-07'
    });
    const post  = await client.fetch(
        groq`*[_type == "post" && slug.current == $slug][0] {
        _id,
        publishedDate,
        meta_title,
        title,
        "slug": slug.current,
        description,
        body,
        "image": image.asset -> url}`,
        
    {slug})
    return post
}

// groq`*[_type == "post"]{
//     _id,
//     _createdAt,
//     meta_title,
//     title,
//     publishedDate,
//     image,
//     slug,
//     description,
//     body

// }`