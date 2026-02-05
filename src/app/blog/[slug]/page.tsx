import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
  return {
    title,
    description:
      "Read more about dating and compatibility insights from AILO.",
  };
}

// In production, this would fetch from a CMS or MDX files
function getBlogPost(slug: string) {
  return {
    title: slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    date: "January 10, 2025",
    readTime: "8 min read",
    category: "The Science",
    author: "AILO Team",
  };
}

const relatedPosts = [
  {
    slug: "understanding-your-communication-style",
    title: "Understanding Your Communication Style in Relationships",
    category: "Dating Tips",
  },
  {
    slug: "why-shared-interests-dont-matter",
    title: "Why Shared Interests Don't Matter as Much as You Think",
    category: "The Science",
  },
  {
    slug: "first-date-questions-that-actually-matter",
    title: "First Date Questions That Actually Matter",
    category: "Dating Tips",
  },
];

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Image */}
        <div className="aspect-[3/1] bg-gradient-hero flex items-center justify-center">
          <span className="text-white/40">Hero image placeholder</span>
        </div>

        <article className="section bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <Link
                  href="/blog"
                  className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors text-sm mb-4 inline-flex items-center gap-1"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back to Blog
                </Link>
                <span className="block text-sm font-medium text-[var(--color-accent)] mb-2">
                  {post.category}
                </span>
                <h1 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary-dark)] mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-[var(--color-muted)]">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Article Content Placeholder */}
              <div className="prose prose-lg max-w-none">
                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                  This is where the blog post content would appear. In
                  production, this content would come from MDX files or a
                  headless CMS.
                </p>

                <div className="bg-[var(--color-surface)] p-8 rounded-2xl my-8 text-center">
                  <p className="text-[var(--color-muted)]">
                    Blog post content placeholder
                    <br />
                    <span className="text-sm">
                      (Content to be added via MDX or CMS)
                    </span>
                  </p>
                </div>

                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                  More content would continue here, with headings, images,
                  quotes, and other rich content elements.
                </p>
              </div>

              {/* Inline CTA */}
              <div className="my-12 p-8 bg-[var(--color-surface)] rounded-2xl text-center">
                <h3 className="font-semibold text-xl text-[var(--color-primary-dark)] mb-2">
                  Ready to find your match?
                </h3>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Experience science-based compatibility matching.
                </p>
                <Link href="/apply" className="btn-primary">
                  Request Access
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="section bg-[var(--color-surface)]">
          <div className="container-custom">
            <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-[var(--color-primary-dark)] mb-8">
              Related Posts
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="block group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video bg-gradient-hero flex items-center justify-center">
                    <span className="text-white/40 text-xs">Image</span>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-medium text-[var(--color-accent)]">
                      {relatedPost.category}
                    </span>
                    <h3 className="font-semibold text-[var(--color-primary-dark)] mt-2 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section bg-gradient-hero">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to find your match?
              </h2>
              <Link href="/apply" className="btn-primary text-lg">
                Request Premium Access
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
