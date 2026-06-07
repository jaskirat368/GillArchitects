import React from 'react';
import { Link } from 'react-router-dom';
import InteractiveCard from '../components/InteractiveCard';
import SEO from '../components/SEO';

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: "How to Plan Your House Properly in Abohar",
      excerpt: "Key considerations for plot orientation, ventilation, and local climate when building in Punjab.",
      date: "Oct 12, 2023",
      category: "Planning"
    },
    {
      id: 2,
      title: "2D vs 3D Elevation: Why You Need Both",
      excerpt: "Understanding the difference between technical layouts and visual aesthetics for your dream home.",
      date: "Nov 05, 2023",
      category: "Design"
    },
    {
      id: 3,
      title: "Common House Planning Mistakes to Avoid",
      excerpt: "Don't let these common errors ruin your living experience. Learn what to watch out for.",
      date: "Dec 15, 2023",
      category: "Tips"
    },
    {
      id: 4,
      title: "Modern Elevation Trends in Punjab",
      excerpt: "From minimal facades to classic fusions, discover what's trending in local architecture.",
      date: "Jan 20, 2024",
      category: "Trends"
    }
  ];

  return (
    <>
      <SEO 
        title="Architecture Blog | House Planning Tips & Architecture Trends Punjab"
        description="Read our latest insights on house planning, construction tips, 3D elevation, and design trends across Abohar, Chandigarh, and Punjab."
        keywords="architecture blog, house planning tips, construction advice punjab, architect insights, 3d elevation trends, interior design guide, Gill Architects blog"
        canonical="https://gillarchitects.vercel.app/blog"
      />

      <div className="bg-charcoal-900 text-white pt-36 pb-20 md:pt-48 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-900/20 to-transparent z-0"></div>
        <div className="container mx-auto px-5 md:px-8 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-pearl-300"></span>
            <span className="text-pearl-200 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-medium">LATEST INSIGHTS</span>
            <span className="w-8 md:w-12 h-[1px] bg-gradient-to-l from-transparent to-pearl-300"></span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">Resources & Insights</h1>
          <p className="text-pearl-100 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            Expert advice to help you build better.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {posts.map((post) => (
              <InteractiveCard 
                key={post.id}
                flowColor="#faf0ca"
                className="border border-pearl-100"
              >
                <article className="p-8 h-full flex flex-col group bg-pearl-50 rounded-[inherit] [transform-style:preserve-3d]">
                  <div className="flex items-center gap-4 text-sm text-charcoal-500 mb-4 transition-all duration-500 group-hover:[transform:translateZ(20px)]">
                    <span className="bg-pearl-200 px-2 py-1 rounded-2xl text-charcoal-800 font-medium">{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-charcoal-900 mb-3 transition-all duration-500 group-hover:[transform:translateZ(40px)] group-hover:drop-shadow-xl inline-block">
                    <Link to={`/blog/${post.id}`} className="group-hover:text-charcoal-600 transition-colors">{post.title}</Link>
                  </h2>
                  <p className="text-charcoal-600 mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.id}`} className="text-charcoal-900 font-semibold hover:underline">
                    Read Article
                  </Link>
                </article>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
