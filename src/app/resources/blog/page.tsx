import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Blog - Resources',
  description: 'Read our latest articles and insights',
};

const blogPosts = [
  {
    slug: 'onwardism-aws-activate-program',
    title: 'Onwardism Is Now Part of the AWS Activate Program',
    excerpt: 'We\'re excited to share that Onwardism has been approved for the AWS Activate program.',
    date: '2026-01-15',
    author: 'Onwardism Team',
    banner: '/blog/onwardism-aws-activate-program.png',
  },
  {
    slug: 'introducing-onwardism-open-technology-intelligence',
    title: 'Introducing Onwardism: Open Technology Intelligence',
    excerpt: 'Technology teams are surrounded by information—news, blogs, research papers, dashboards, AI tools. What\'s missing is not access to information, but clarity.',
    date: '2026-01-15',
    author: 'Onwardism Team',
    banner: '/blog/introducing-onwardism-open-technology-intelligence.png',
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8">
        {blogPosts.map((post) => (
          <article key={post.slug} className="border-b pb-8 last:border-b-0">
            <Link href={`/resources/blog/${post.slug}`} className="group">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {post.banner && (
                  <div className="relative w-full md:w-80 h-48 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={post.banner}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-3">
                    {post.date} • {post.author}
                  </p>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
