import { Quote, Heart } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      event: 'Wedding Photography',
      text: 'Sandeep Studio exceeded our expectations! They captured every precious moment of our wedding day with such artistry and professionalism. The photos are absolutely stunning, and we couldn\'t be happier with the results.'
    },
    {
      id: 2,
      event: 'Pre-Wedding Shoot',
      text: 'Our pre-wedding shoot was an amazing experience! Sandeep made us feel comfortable and natural throughout the session. The creativity and attention to detail in every shot is remarkable.'
    },
    {
      id: 3,
      event: 'Destination Wedding',
      text: 'We had a destination wedding in Goa, and Sandeep Studio traveled with us to capture every moment. Their dedication and passion for photography really shows in the beautiful memories they created for us.'
    },
    {
      id: 4,
      event: 'Wedding + Videography',
      text: 'The cinematic wedding video created by Sandeep Studio is like a beautiful movie of our special day. Every time we watch it, we relive those magical moments. Highly recommended!'
    },
    {
      id: 5,
      event: 'Royal Wedding',
      text: 'Our palace wedding required someone who could handle grandeur with elegance. Sandeep Studio delivered beyond our expectations, capturing both intimate moments and the royal magnificence perfectly.'
    },
    {
      id: 6,
      event: 'Engagement Ceremony',
      text: 'The team was professional, creative, and so easy to work with. They captured our engagement ceremony beautifully, focusing on all the important moments and emotions we wanted to remember forever.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Couples' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '100%', label: 'Referral Rate' }
  ];

  return (
    <div className="min-h-screen pt-16 relative">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-sinkin">
              Hear from our happy couples about their experience with Sandeep Studio.
              Your trust and satisfaction are our greatest achievements.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#FFDB58] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} animation="scale-in" delay={index * 100}>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-black mb-2 font-display">
                    {stat.number}
                  </div>
                  <div className="text-gray-800 text-lg font-medium font-sinkin">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-[#3E3D53] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.id} animation="fade-in-up" delay={index * 100}>
                <div className="bg-gray-800 rounded-lg p-8 h-full flex flex-col relative">
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-yellow-500 opacity-50" />

                  <p className="text-gray-300 mb-6 flex-grow leading-relaxed font-sinkin">
                    "{testimonial.text}"
                  </p>

                  {/* Event Type Only */}
                  <div className="mt-4 text-center">
                    <p className="text-2xl text-yellow-500 font-bold font-display">
                      {testimonial.event}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Follow Section */}
      <section className="py-20 bg-[#3E3D53] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Follow Our Journey
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 font-sinkin">
                Stay updated with our latest work and behind-the-scenes moments on Instagram.
              </p>
              <a
                href="https://www.instagram.com/sandeepstudioazamgarh?igsh=MXNudzhrZWsxZjB5NA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-sinkin"
              >
                <Heart className="h-5 w-5 mr-2" />
                Follow @sandeepstudio
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
