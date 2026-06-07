import React from 'react';
import { useParams, Navigate, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Calendar, User, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import { BUSINESS_INFO } from '../data/business';

// Centralised posts data
export const posts = [
  {
    id: 1,
    title: "How to Plan Your House Properly in Abohar",
    excerpt: "Key considerations for plot orientation, ventilation, and local climate when building in Punjab.",
    date: "Oct 12, 2023",
    category: "Planning",
    author: "Manjot Singh Gill",
    readTime: "5 min read",
    content: `
      <h2>The Importance of Proper House Planning in Punjab</h2>
      <p>Building a home is a lifetime investment, and in a climate like Punjab's, smart planning goes beyond just aesthetics. Proper house planning ensures your home remains comfortable during the intense heat of May-June and the cold winters of December-January.</p>
      
      <h3>1. Plot Orientation & Sun Path</h3>
      <p>Understanding the sun path is the most critical aspect of house planning. The south and west walls receive the maximum heat during summer afternoons. Therefore, it is advisable to place living rooms or primary bedrooms facing North or East, leaving the South and West sides for staircases, bathrooms, or storerooms.</p>
      
      <h3>2. Cross Ventilation is Key</h3>
      <p>With Abohar's dry summer heat, cross ventilation can significantly reduce your reliance on air conditioning. When you plan your house, ensure that air can flow straight through the living spaces by aligning windows on opposite or adjacent walls.</p>
      
      <h3>3. Vastu Compliance</h3>
      <p>Many of our clients prefer Vastu-compliant homes. Even if you aren't strict about it, general Vastu principles often align with good architectural practices—such as having the kitchen in the southeast corner to take advantage of morning sunlight and wind patterns.</p>
      
      <h3>4. Future-Proofing the Design</h3>
      <p>Always plan for the future. Consider adding an extra provision for a room, a flexible layout for growing families, or designing foundations robust enough to handle an extra floor later on.</p>
      
      <p>At Gill Architects, we handle all these technicalities so you don't have to. <a href="/contact#contact-form">Book a consultation</a> today to get started on your dream home.</p>
    `
  },
  {
    id: 2,
    title: "2D vs 3D Elevation: Why You Need Both",
    excerpt: "Understanding the difference between technical layouts and visual aesthetics for your dream home.",
    date: "Nov 05, 2023",
    category: "Design",
    author: "Manjot Singh Gill",
    readTime: "4 min read",
    content: `
      <h2>Bridging the Gap Between Plan and Reality</h2>
      <p>When you start a construction project, you will hear two terms frequently: 2D Floor Plans and 3D Elevations. While some people think they only need a basic floor plan to start building, a 3D elevation is what truly brings the project to life.</p>
      
      <h3>What is a 2D Floor Plan?</h3>
      <p>A 2D plan is a straight-down view of your home. It shows the layout of rooms, wall thicknesses, doors, windows, and furniture placement. It is the technical blueprint that contractors use to construct the walls and lay foundations. It represents <strong>functionality</strong>.</p>
      
      <h3>What is a 3D Elevation?</h3>
      <p>A 3D elevation is a photorealistic rendering of what your house will look like from the outside once it is built. It shows the colors, textures, materials (like wood cladding, stone, or glass), and lighting. It represents <strong>aesthetics</strong>.</p>
      
      <h3>Why Do You Need Both?</h3>
      <ul>
        <li><strong>Avoid Costly Mistakes:</strong> You might not like how a particular window looks on the facade, but changing it after the brickwork is done costs time and money. A 3D elevation lets you change things before construction begins.</li>
        <li><strong>Better Communication with Builders:</strong> Contractors understand exactly what the final outcome should look like, reducing guesswork.</li>
        <li><strong>Material Selection:</strong> 3D renderings help you choose the right exterior paint, tiles, and boundary wall designs by visualizing them first.</li>
      </ul>
      
      <p>Gill Architects provides comprehensive 2D and 3D architectural packages. Explore our <a href="/projects">portfolio</a> to see the difference.</p>
    `
  },
  {
    id: 3,
    title: "Common House Planning Mistakes to Avoid",
    excerpt: "Don't let these common errors ruin your living experience. Learn what to watch out for.",
    date: "Dec 15, 2023",
    category: "Tips",
    author: "Manjot Singh Gill",
    readTime: "6 min read",
    content: `
      <h2>Build Smart, Not Just Fast</h2>
      <p>Building a home requires careful orchestration. Skipping the detailed planning phase often leads to lifelong regrets. Here are the most common house planning mistakes we see, and how you can avoid them.</p>
      
      <h3>1. Ignoring Storage Needs</h3>
      <p>A minimalist design looks great on paper, but real life requires storage. Failing to plan for built-in wardrobes, a spacious pantry, or a dedicated storeroom will quickly lead to cluttered living areas.</p>
      
      <h3>2. Poor Bedroom Placement</h3>
      <p>Placing bedrooms directly off the main living area or overlooking a noisy street limits privacy. Try to create a buffer zone (like a short hallway) between public spaces and private sleeping quarters.</p>
      
      <h3>3. Inadequate Lighting Planning</h3>
      <p>Lighting is often treated as an afterthought. You must plan for natural light through well-placed windows and skylights, and layered artificial lighting (ambient, task, and accent lighting) during the initial design phase.</p>
      
      <h3>4. Squeezing in Too Many Rooms</h3>
      <p>People often try to fit 4 bedrooms into a plot meant for 3, resulting in tiny, claustrophobic rooms with no space for furniture. It's always better to have three spacious, well-ventilated rooms than four cramped ones.</p>
      
      <h3>5. Not Hiring a Professional</h3>
      <p>Relying solely on an enthusiastic contractor rather than a qualified architect for the layout is the biggest mistake. Architects are trained to optimize space and foresee structural challenges.</p>
      
      <p>Avoid these pitfalls by working with the experts at <a href="/">Gill Architects</a>.</p>
    `
  },
  {
    id: 4,
    title: "Modern Elevation Trends in Punjab",
    excerpt: "From minimal facades to classic fusions, discover what's trending in local architecture.",
    date: "Jan 20, 2024",
    category: "Trends",
    author: "Manjot Singh Gill",
    readTime: "4 min read",
    content: `
      <h2>The Evolution of Punjabi Architecture</h2>
      <p>The architectural landscape of Punjab, especially in cities like Abohar, Chandigarh, and Fazilka, has transformed dramatically. We are moving away from overly ornate, multi-colored exteriors towards clean, sophisticated designs.</p>
      
      <h3>1. Minimalist Contemporary</h3>
      <p>Less is more. The most popular trend right now features clean, straight lines, flat roofs, and a monochromatic color palette (usually whites, greys, and charcoal). This style relies on geometric shapes and large glass windows.</p>
      
      <h3>2. The Use of HPL and Louvers</h3>
      <p>High-Pressure Laminate (HPL) sheets with wood finishes and vertical metal louvers are being heavily used to add warmth and texture to the exterior without the maintenance issues of real wood.</p>
      
      <h3>3. Massive Fenestrations (Windows)</h3>
      <p>Homeowners want natural light. We are seeing a trend towards double-height glass facades that connect the interior living spaces to the outside environment, bridging the gap between nature and architecture.</p>
      
      <h3>4. Modern Colonial Fusion</h3>
      <p>A beautiful trend emerging in luxury villas is blending modern clean lines with classic colonial elements—such as subtle arches, sloped roof segments with shingles, and elegant wrought-iron balcony railings.</p>
      
      <p>Looking to build a home that stands out? Let Gill Architects design a modern facade that perfectly captures your style. <a href="/contact#contact-form">Contact us today</a>.</p>
    `
  }
];

const BlogPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === Number(id));

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName.toLowerCase() === 'a') {
      const href = target.getAttribute('href');
      if (href && href.startsWith('/')) {
        e.preventDefault();
        navigate(href);
      }
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://gillarchitects.vercel.app/blog/${post.id}`
    },
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": "2023-10-12T08:00:00+08:00", // using standard date format, ideally dynamic
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": BUSINESS_INFO.name,
      "logo": {
        "@type": "ImageObject",
        "url": "https://i.ibb.co/rRQ3XWRp/IMG-20260605-132311-1.png"
      }
    }
  };

  return (
    <>
      <SEO 
        title={`${post.title} | Architecture Blog | Gill Architects`}
        description={post.excerpt}
        keywords={`${post.category.toLowerCase()}, architecture blog, house planning, Gill Architects insights`}
        canonical={`https://gillarchitects.vercel.app/blog/${post.id}`}
        jsonLd={JSON.stringify(jsonLd)}
      />

      <article className="bg-pearl-50 min-h-screen pt-36 pb-20 md:pt-48 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          
          <Link to="/blog" className="inline-flex items-center gap-2 text-charcoal-600 hover:text-charcoal-900 transition-colors mb-8 group font-medium">
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-charcoal-500 mb-6 flex-wrap">
              <span className="bg-charcoal-900 text-white px-3 py-1 rounded-full font-medium">{post.category}</span>
              <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</div>
              <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime}</div>
              <div className="flex items-center gap-1.5"><User className="w-4 h-4" /> {post.author}</div>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-charcoal-900 leading-[1.1] tracking-tight mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-charcoal-600 leading-relaxed font-light">
              {post.excerpt}
            </p>
          </header>

          <div className="w-full h-px bg-pearl-200 mb-12"></div>

          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
            onClick={handleLinkClick}
          />

          <div className="mt-16 pt-8 border-t border-pearl-200">
            <div className="bg-white p-8 rounded-3xl border border-pearl-200 shadow-xl text-center">
              <h3 className="font-display text-2xl font-bold text-charcoal-900 mb-4">Ready to start your project?</h3>
              <p className="text-charcoal-600 mb-8 max-w-xl mx-auto">
                Turn these architectural insights into reality. Book a consultation with Gill Architects to design your perfect home.
              </p>
              <Link 
                to="/contact#contact-form"
                className="inline-block bg-charcoal-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-charcoal-800 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                Book Consultation
              </Link>
            </div>
          </div>

        </div>
      </article>
    </>
  );
};

export default BlogPostPage;
