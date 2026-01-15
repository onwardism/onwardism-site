import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

function getBlogPost(slug: string) {
  try {
    const filePath = path.join(process.cwd(), 'src/app/resources/blog', `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    return { data, content };
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.data.title,
    description: post.data.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const bannerPath = `/blog/${slug}.png`;

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 mb-8 rounded-lg overflow-hidden">
        <Image
          src={bannerPath}
          alt={post.data.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <header className="mb-8 border-b pb-8">
        <h1 className="text-4xl font-bold mb-4">{post.data.title}</h1>
        <div className="text-sm text-muted-foreground">
          {post.data.date} • {post.data.author}
        </div>
      </header>
      <div className="prose prose-lg dark:prose-invert max-w-none 
        [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mt-8 [&>h1]:mb-4
        [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-6 [&>h2]:mb-3
        [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-4 [&>h3]:mb-2
        [&>p]:mb-4 [&>p]:leading-7
        [&>ul]:mb-4 [&>ul]:ml-6 [&>ul]:list-disc
        [&>ol]:mb-4 [&>ol]:ml-6 [&>ol]:list-decimal
        [&>li]:mb-2
        [&>strong]:font-semibold
        [&>blockquote]:border-l-4 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:my-4">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
