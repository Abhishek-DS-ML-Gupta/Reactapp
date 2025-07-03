import { Award, Camera, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
  return (
    <div className="min-h-screen pt-16 relative">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in-left">
              <div>
                <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
                  About Sandeep Studio
                </h1>
                <p className="text-xl text-gray-300 mb-8 font-Apercu">
                  Where passion meets artistry, and every moment becomes a timeless memory.
                </p>
                <p className="text-gray-400 leading-relaxed mb-12 font-Apercu">
                  Sandeep Studio has been capturing life’s precious moments for over 33 years, preserving every wedding, celebration, and smile with care and artistic excellence.
                </p>
                <Link
                  to="/Reactapp/history"
                  className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors duration-300 font-Apercu"
                >
                  Our Journey
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg"
                  alt="Sandeep - Lead Photographer"
                  className="w-full rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-yellow-500 rounded-lg p-6">
                  <Camera className="h-12 w-12 text-black" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-[#3E3D53] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto font-Apercu">
                A journey that began with a simple dream - to capture the beauty of human emotions
                and preserve them for generations to come.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in-left">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4 font-morva">The Beginning</h3>
                  <p className="text-gray-400 leading-relaxed font-sinkin">
                    Sandeep's journey into photography began during his college days when he picked up his first camera.
                    What started as a hobby quickly transformed into a passion as he discovered the power of capturing
                    emotions through his lens.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4 font-morva">Professional Growth</h3>
                  <p className="text-gray-400 leading-relaxed font-sinkin">
                    After years of honing his craft, Sandeep specialized in wedding and event photography.
                    His ability to blend traditional techniques with modern aesthetics quickly gained recognition.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4 font-morva">Studio Formation</h3>
                  <p className="text-gray-400 leading-relaxed font-sinkin">
                    In 2016, Sandeep Studio was officially established with a mission to provide world-class photography
                    services. Today, we're a team of passionate artists committed to excellence.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg" alt="1" className="w-full h-48 object-cover rounded-lg" />
                <img src="https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg" alt="2" className="w-full h-48 object-cover rounded-lg mt-8" />
                <img src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg" alt="3" className="w-full h-48 object-cover rounded-lg -mt-8" />
                <img src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg" alt="4" className="w-full h-48 object-cover rounded-lg" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-[#232323] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Our Philosophy
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto font-Apercu">
                We believe great photography is not just about technical excellence,
                but connecting with people and understanding their stories.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Heart className="h-8 w-8" />, title: 'Passion Driven', description: 'Every shot is taken with genuine passion.' },
              { icon: <Users className="h-8 w-8" />, title: 'Client Focused', description: 'Your comfort and story come first.' },
              { icon: <Award className="h-8 w-8" />, title: 'Quality First', description: 'We never compromise on quality.' },
              { icon: <Camera className="h-8 w-8" />, title: 'Artistic Vision', description: 'Blending creativity with precision.' }
            ].map((item, i) => (
              <AnimatedSection key={item.title} animation="scale-in" delay={i * 100}>
                <div className="text-center bg-gray-900 p-8 rounded-lg">
                  <div className="text-yellow-500 mb-4 flex justify-center">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 font-morva">{item.title}</h3>
                  <p className="text-gray-400 font-sinkin">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#3E3C53] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-Apercu">
                A passionate team of photographers and videographers dedicated to capturing your special moments.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Hira Gupta', role: 'Lead Photographer', description: 'With 8+ years of experience, Hira brings artistic vision and technical expertise.' },
              { name: 'Sandeep Gupta', role: 'Videographer', description: 'Specialist in cinematic wedding films and storytelling.' },
              { name: 'AccheLal Gupta', role: 'Portrait Photographer', description: 'Expert in capturing intimate moments with grace.' }
            ].map((member, i) => (
              <AnimatedSection key={member.name} animation="fade-in-up" delay={i * 100}>
                <div className="text-center bg-gray-800 rounded-lg p-6">
                  <h3 className="text-3xl font-bold text-white mb-2 font-morva">{member.name}</h3>
                  <p className="text-yellow-500 mb-4 font-sinkin text-lg">{member.role}</p>
                  <p className="text-gray-400 font-sinkin">{member.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#FFDF58] relative overflow-hidden">
        <svg className="absolute top-1/4 left-[-150px] w-[500px] h-[500px] opacity-20 animate-float-slow z-0" viewBox="0 0 200 200"><circle cx="100" cy="100" r="90" fill="white" /></svg>
        <svg className="absolute bottom-1/4 right-[-180px] w-[500px] h-[500px] opacity-20 animate-float-slow-reverse z-0" viewBox="0 0 200 200"><circle cx="100" cy="100" r="90" fill="black" /></svg>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-black mb-6">
              Let's Create Something Beautiful Together
            </h2>
            <p className="text-2xl text-gray-800 mb-10 font-Apercu">
              Ready to capture your special moments? We’d love to hear your story and bring it to life.
            </p>
            <Link
              to="/Reactapp/history"
              className="inline-block bg-black text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-gray-900 transition duration-300 font-Apercu"
            >
              Our Journey
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;
