import { PortableTextBlock } from "next-sanity";

export type PostType = {
    date: Date;
    _id: string;
    _createdAt: Date;
    meta_title: string;
    publishedDate: Date;
    description: string;
    title: string;
    slug: string;
    image: string;
    body: PortableTextBlock[];
}