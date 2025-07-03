import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'weddings', name: 'Weddings' },
    { id: 'pre-wedding', name: 'Pre-Wedding' },
    { id: 'events', name: 'Events' }
  ];

  const portfolioItems = [
    {
      id: 1,
      category: 'weddings',
      type: 'image',
      url: 'https://www.alfaazphotography.com/wp-content/uploads/2020/05/FW-_-SA-1621-scaled.jpg',
      title: 'Wedding',
      description: 'A beautiful traditional ceremony'
    },
    {
      id: 2,
      category: 'pre-wedding',
      type: 'image',
      url: 'https://assets.simplotel.com/simplotel/image/upload/x_0,y_417,w_1667,h_1667,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/heritage-village-resorts-spa-manesar/Heritage_Village_Resorts_and_Spa,_Manesar,_Boutique_Resort_in_Manesar_15.jpg',
      title: 'Pre-Wedding',
      description: 'Romantic pre-wedding shoot'
    },
    {
      id: 3,
      category: 'events',
      type: 'image',
      url: 'https://img.freepik.com/premium-photo/photo-indian-wedding-couple-photography_1235950-83425.jpg',
      title: 'Fashion Show',
      description: 'Glamorous fashion showcase event'
    },
    {
      id: 4,
      category: 'events',
      type: 'image',
      url: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      title: 'Corporate Event',
      description: 'Professional event coverage'
    },
    {
      id: 5,
      category: 'weddings',
      type: 'image',
      url: 'https://oakstreetevents.com/wp-content/uploads/2024/10/Picture1.jpg',
      title: 'Destination Wedding',
      description: 'Destination wedding in Goa'
    },
    {
      id: 6,
      category: 'pre-wedding',
      type: 'image',
      url: 'https://imgmediagumlet.lbb.in/media/2023/07/64ba509fcaed286aa8d090d2_1689931935431.jpg',
      title: 'Pre-Wedding',
      description: 'Outdoor pre-wedding session'
    },
    {
      id: 7,
      category: 'events',
      type: 'image',
      url: 'https://img.freepik.com/free-photo/colorful-stage-with-lights-cultural-event_53876-124382.jpg',
      title: 'Cultural Fest',
      description: 'Vibrant cultural celebrations and performances'
    },
    {
      id: 8,
      category: 'pre-wedding',
      type: 'image',
      url: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      title: 'Birthday Celebration',
      description: 'Special birthday moments'
    },
    {
      id: 9,
      category: 'weddings',
      type: 'image',
      url: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
      title: 'Royal Wedding',
      description: 'Royal palace wedding'
    }
  ];

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-16 relative">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-sinkin">
              Explore our collection.
              Each project tells a unique story of love, celebration, and joy.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-[#3E3D53] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 font-sinkin ${
                    activeCategory === category.id
                      ? 'bg-yellow-500 text-black'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <AnimatedSection key={item.id} animation="scale-in" delay={index * 100}>
                <div className="group relative bg-gray-800 rounded-lg overflow-hidden grid-item">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2 font-morva">{item.title}</h3>
                      <p className="text-gray-300 font-sinkin">{item.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
