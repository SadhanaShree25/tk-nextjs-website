import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { compileMDX } from 'next-mdx-remote/rsc';
import BlogShare from '@/components/BlogShare';

export const dynamicParams = false;

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  try {
    const post = getPostBySlug(params.slug);
    return {
      title: `${post.title} | TechKoodaram`,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        type: 'article',
        authors: [post.author],
        publishedTime: post.date,
      },
    };
  } catch (error) {
    return {
      title: 'Post Not Found',
    };
  }
}

export default async function BlogPost({ params }: PageProps) {
  try {
    const post = getPostBySlug(params.slug);
    
    // Compile MDX content
    const { content } = await compileMDX({
      source: post.content,
      options: {
        parseFrontmatter: false,
      },
    });

    return (
      <article className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="mb-8">
          <Link href="/blog" className="text-primary hover:underline mb-4 inline-block">
            &larr; Back to Blog
          </Link>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-gray-500 mb-8 border-b pb-4">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })} by {post.authorUrl ? (
              <a
                href={post.authorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {post.author}
              </a>
            ) : (
              post.author
            )}
          </div>
          
        </div>
        
        {post.youtubeId ? (
          <div className="mb-8">
            <div className="relative w-full aspect-video overflow-hidden rounded-lg">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${post.youtubeId}`}
                title={post.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        ) : null}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {content}
          {post.coverImage ? (
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg mb-8">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        ) : null}
        <BlogShare title={post.title} slug={post.slug} />
        </div>
      </article>
    );
  } catch (error) {
    console.error('Error rendering blog post:', error);
    notFound();
  }
}
