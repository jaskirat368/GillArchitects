import React from 'react';
import InteractiveCard from '../components/InteractiveCard';

const ProjectsPage = () => {
  // Placeholder project data
  const projects = [
    { id: 1, title: "Modern Villa in Ajit Nagar", category: "Residential", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" },
    { id: 2, title: "Commercial Complex", category: "Commercial", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
    { id: 3, title: "Farmhouse Design", category: "Residential", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800" },
    { id: 4, title: "Interior Renovation", category: "Interior", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" },
    { id: 5, title: "Small Plot House", category: "Residential", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?auto=format&fit=crop&q=80&w=800" },
    { id: 6, title: "Office Space", category: "Commercial", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <>
      <>
        <title>Our Projects | Gill Architects Abohar</title>
        <meta name="description" content="View our portfolio of residential and commercial projects in Abohar and surrounding areas. Modern designs, practical layouts." />
      </>

      <div className="bg-charcoal-900 text-white pt-36 pb-20 md:pt-48 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-900/20 to-transparent z-0"></div>
        <div className="container mx-auto px-5 md:px-8 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-pearl-300"></span>
            <span className="text-pearl-200 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-medium">OUR PORTFOLIO</span>
            <span className="w-8 md:w-12 h-[1px] bg-gradient-to-l from-transparent to-pearl-300"></span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl drop-shadow-2xl">Our Projects</h1>
          <p className="text-pearl-100 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            A showcase of our recent work in Abohar and nearby regions.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <InteractiveCard 
                key={project.id} 
                flowColor="#faf0ca" 
                tiltIntensity={5}
                className="overflow-hidden"
              >
                <div className="group relative w-full h-80 cursor-pointer [transform-style:preserve-3d]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 [transform-style:preserve-3d]">
                    <span className="text-charcoal-300 text-sm uppercase tracking-wider mb-1 transition-all duration-500 group-hover:[transform:translateZ(20px)]">{project.category}</span>
                    <h3 className="text-white text-xl font-bold transition-all duration-500 group-hover:[transform:translateZ(40px)] group-hover:drop-shadow-2xl">{project.title}</h3>
                  </div>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
