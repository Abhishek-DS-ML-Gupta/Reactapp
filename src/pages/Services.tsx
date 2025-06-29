// import remains same
import { Camera, Video, Users, Check, Heart } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Services = () => {
  const services = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Wedding Photography',
      description: 'Complete wedding coverage from ceremonies to celebrations',
      features: [
        'Full day coverage (8-12 hours)',
        'Bride & Groom preparation shots',
        'Ceremony documentation',
        'Reception photography',
        '500+ edited high-resolution photos',
        'Online gallery for sharing',
        'USB drive with all images'
      ],
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg'
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: 'Pre-Wedding Shoots',
      description: 'Romantic couple sessions before your big day',
      features: [
        '2-3 hour photo session',
        'Multiple outfit changes',
        'Choice of locations',
        'Props and styling assistance',
        '100+ edited photos',
        'Print-ready images',
        'Social media optimized versions'
      ],
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg'
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: 'Cinematic Videography',
      description: 'Professional video production for your special day',
      features: [
        'Cinematic wedding film (3-5 mins)',
        'Full ceremony recording',
        'Reception highlights',
        'Drone footage (where permitted)',
        '4K video quality',
        'Professional audio recording',
        'Custom music and editing'
      ],
      image: 'https://i.ytimg.com/vi/ba9nc0D15Wo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD6TVaJm_qUVl8MOOhEA9z4Auu2sQ'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Event Photography',
      description: 'Corporate events, parties, and celebrations',
      features: [
        'Event documentation',
        'Candid moments capture',
        'Group photography',
        'Speaker and presentation shots',
        'Same-day preview images',
        'Quick turnaround time',
        'Professional editing'
      ],
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg'
    }
  ];

  return (
    <div className="min-h-screen pt-16 relative">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
              Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-sinkin">
              Photography and videography services tailored to capture your moments with professional excellence and artistic flair.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#3E3D53] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {services.map((service, index) => (
            <div key={service.title} className={`mb-20 ${index !== services.length - 1 ? 'border-b border-gray-800 pb-20' : ''}`}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <AnimatedSection animation={index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="text-yellow-500 mb-4">
                      {service.icon}
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-xl text-gray-400 mb-8 font-sinkin">
                      {service.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-white mb-4 font-morva">What's Included:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-gray-300">
                            <Check className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                            <span className="font-sinkin">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation={index % 2 === 0 ? 'fade-in-right' : 'fade-in-left'}>
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full rounded-lg shadow-2xl"
                    />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#3E3C53] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Our Process
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-sinkin">
                From initial consultation to final delivery, we ensure a smooth and professional experience.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Initial discussion about your vision, requirements, and preferences.'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Detailed planning of timeline, locations, and shot list for your event.'
              },
              {
                step: '03',
                title: 'Capture',
                description: 'Professional photography and videography on your special day.'
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Edited photos and videos delivered within the promised timeframe.'
              }
            ].map((process, index) => (
              <AnimatedSection key={process.step} animation="fade-in-up" delay={index * 100}>
                <div className="text-center">
                  <div className="bg-yellow-500 text-black w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 font-display">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 font-morva">{process.title}</h3>
                  <p className="text-gray-400 font-sinkin">{process.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section remains unchanged */}
      <section className="py-20 bg-[#FFDF58] relative overflow-hidden">
        {/* Decorative SVGs */}
        <svg className="absolute top-1/4 left-[-150px] w-[400px] h-[400px] opacity-20 animate-float-slow z-0" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="white" />
        </svg>
        <svg className="absolute bottom-[-80px] left-1/2 w-[350px] h-[350px] opacity-20 animate-float-medium z-0" viewBox="0 0 100 100">
          <polygon points="50,15 90,85 10,85" fill="black" />
        </svg>
        <svg className="absolute top-[-60px] right-[-100px] w-[300px] h-[300px] opacity-20 animate-float-slow-reverse z-0" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" fill="white" />
        </svg>

        {/* CTA Content */}
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-black mb-6">
              Ready to Book Your Session?
            </h2>
            <p className="text-xl text-gray-800 mb-8 font-sinkin">
              Let's discuss your photography needs and create a custom package that fits your vision and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors duration-300 font-sinkin"
              >
                Get Custom Quote
              </a>
              <a
                href="tel:+919305556846"
                className="border-2 border-black text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 font-sinkin"
              >
                Call Now: +91 93055 56846
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;
