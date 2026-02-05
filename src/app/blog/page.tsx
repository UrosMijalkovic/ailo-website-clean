import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Dating Insights Blog",
  description:
    "Tips, research, and real talk about modern dating and compatibility.",
};

// Placeholder blog posts - in production, these would come from a CMS or MDX files
const featuredPost = {
  slug: "science-of-compatibility",
  title: "The Science of Compatibility: Why Dating Apps Get It Wrong",
  excerpt:
    "For decades, dating apps have relied on proximity and superficial preferences. Here's why that approach is fundamentally broken — and what science says actually works.",
  date: "January 10, 2025",
  readTime: "8 min read",
  category: "The Science",
  image: "/images/blog/DSCF8931-web.jpg",
};

const recentPosts = [
  {
    slug: "understanding-your-communication-style",
    title: "Understanding Your Communication Style in Relationships",
    excerpt:
      "How you relate, connect, and learn can make or break a relationship. Discover your primary communication doorway.",
    date: "January 8, 2025",
    readTime: "5 min read",
    category: "Dating Tips",
    image: "/images/blog/LEN04168-web.jpg",
  },
  {
    slug: "why-shared-interests-dont-matter",
    title: "Why Shared Interests Don't Matter as Much as You Think",
    excerpt:
      "Forget hiking and travel. Real compatibility is about how your natural traits interact — not your hobbies.",
    date: "January 5, 2025",
    readTime: "6 min read",
    category: "The Science",
    image: "/images/blog/DSCF8613-web.jpg",
  },
  {
    slug: "first-date-questions-that-actually-matter",
    title: "First Date Questions That Actually Matter",
    excerpt:
      "Skip the small talk. These questions reveal compatibility markers that take most couples years to discover.",
    date: "January 2, 2025",
    readTime: "4 min read",
    category: "Dating Tips",
    image: "/images/blog/LEN03887-web.jpg",
  },
  {
    slug: "emotional-availability-what-it-really-means",
    title: "Emotional Availability: What It Really Means",
    excerpt:
      "Everyone says they want an emotionally available partner. Here's how to assess it — in yourself and others.",
    date: "December 28, 2024",
    readTime: "7 min read",
    category: "Dating Tips",
    image: "/images/blog/DSCF8849-web.jpg",
  },
  {
    slug: "building-ailo-founders-journey",
    title: "Building AILO: A Founder's Journey from Frustration to Solution",
    excerpt:
      "Why I quit my tech job to build a dating app. Spoiler: it started with a lot of bad first dates.",
    date: "December 20, 2024",
    readTime: "10 min read",
    category: "News",
    image: "/images/blog/LEN04089-web.jpg",
  },
  {
    slug: "breaking-the-pattern",
    title: "Breaking the Pattern: Why You Keep Dating the Same Type",
    excerpt:
      "Understanding your attachment style and natural preferences can reveal why you're attracted to certain people.",
    date: "December 15, 2024",
    readTime: "6 min read",
    category: "Dating Tips",
    image: "/images/blog/DSCF8337-web.jpg",
  },
  {
    slug: "modern-dating-paradox",
    title: "The Modern Dating Paradox: More Options, Less Connection",
    excerpt:
      "Why having endless choices actually makes it harder to find meaningful relationships.",
    date: "December 10, 2024",
    readTime: "5 min read",
    category: "The Science",
    image: "/images/blog/LEN04265-web.jpg",
  },
  {
    slug: "authentic-connection-digital-age",
    title: "Authentic Connection in the Digital Age",
    excerpt:
      "How to move beyond surface-level interactions and build genuine intimacy with potential partners.",
    date: "December 5, 2024",
    readTime: "7 min read",
    category: "Dating Tips",
    image: "/images/blog/DSCF8560-web.jpg",
  },
  {
    slug: "red-flags-vs-preferences",
    title: "Red Flags vs. Preferences: Knowing the Difference",
    excerpt:
      "Not every dealbreaker is a red flag. Learn to distinguish between incompatibility and genuine warning signs.",
    date: "December 1, 2024",
    readTime: "8 min read",
    category: "Dating Tips",
    image: "/images/blog/LEN04377-web.jpg",
  },
];

const categories = ["All", "Dating Tips", "The Science", "Success Stories", "News"];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section bg-[var(--color-surface)]">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
                Dating Insights
              </h1>
              <p className="text-lg text-[var(--color-text-secondary)]">
                Tips, research, and real talk about modern dating and
                compatibility.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-4 border-b border-white/10 sticky top-16 md:top-20 bg-[var(--color-surface)] z-10">
          <div className="container-custom">
            <div className="flex gap-3 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`whitespace-nowrap transition-all ${
                    category === "All"
                      ? "tag-gold"
                      : "tag-dark hover:bg-[#5A5A5A]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="section bg-[var(--color-background)]">
          <div className="container-custom">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="block group"
            >
              <div className="card-teal-horizontal p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Featured Image */}
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <span className="tag-gold mb-4">
                      {featuredPost.category}
                    </span>
                    <h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-bold text-white mt-4 mb-4 group-hover:text-[var(--color-accent)] transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-white/80 mb-4">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-white/60">
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Newsletter Signup */}
            <div className="bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 rounded-2xl p-6 md:p-8 text-center mt-8">
              <h3 className="font-semibold text-white text-lg mb-2">Get Dating Insights Weekly</h3>
              <p className="text-white/70 text-sm mb-4">
                Join 3,000+ readers getting science-backed dating advice every Friday.
              </p>
              <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[var(--color-accent)]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/90 rounded-xl text-[var(--color-primary-dark)] font-medium transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-white/40 text-xs mt-3">No spam. Unsubscribe anytime.</p>
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="section bg-[var(--color-surface)]">
          <div className="container-custom">
            <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-[var(--color-text-primary)] mb-8">
              Recent Posts
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block group card-muted overflow-hidden hover:scale-[1.02] transition-transform duration-300"
                >
                  {/* Post Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="tag-gold text-[10px]">
                      {post.category}
                    </span>
                    <h3 className="font-semibold text-white mt-3 mb-2 group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-white/70 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-white/50">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-gradient-hero">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to find your match?
              </h2>
              <Link href="/apply" className="btn-primary text-lg">
                See If You Qualify
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
