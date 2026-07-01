import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog – Digital Marketing TenX',
  description: 'Latest articles and insights from Digital Marketing TenX',
};

// Sample static posts – replace with DB‑driven data later
const posts = [
  {
    id: 1,
    title: 'How AI is Transforming Digital Marketing',
    slug: 'ai-digital-marketing',
    excerpt: 'Explore the newest AI tools that can boost your campaigns by 2‑3×.',
    image: '/images/blog/ai.jpg',
  },
  {
    id: 2,
    title: 'Top 10 SEO Trends for 2026',
    slug: 'seo-trends-2026',
    excerpt: 'Stay ahead of Google’s algorithm with these proven tactics.',
    image: '/images/blog/seo.jpg',
  },
];

export default function BlogPage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
          >
            {post.image && (
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-primary-600 hover:underline"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
