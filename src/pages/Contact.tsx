import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventQuality: '',
    eventDate: '',
    message: ''
  });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in photography services for ${formData.eventType || 'my event'} (${formData.eventQuality || 'quality not specified'}). Please provide more details.`;
    window.open(`https://wa.me/919305556846?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using FormSubmit with enhanced email template
      const response = await fetch('https://formsubmit.co/ajax/sandeepstudioazm@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Booking Inquiry - ${formData.eventType} (${formData.eventQuality})`,
          _template: 'box',
          _autoresponse: `Hi ${formData.name}, thank you for your inquiry about ${formData.eventType} (${formData.eventQuality} package). We'll contact you shortly.`,
          _format: 'plain',
          'Form Data': `
            Name: ${formData.name}
            Email: ${formData.email}
            Phone: ${formData.phone}
            Event Type: ${formData.eventType}
            Event Quality: ${formData.eventQuality}
            Event Date: ${formData.eventDate}
            Message: ${formData.message}
          `
        })
      });

      if (response.ok) {
        setShowConfirmation(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          eventQuality: '',
          eventDate: '',
          message: ''
        });
        
        setTimeout(() => setShowConfirmation(false), 5000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-16 relative">
      
      {/* Confirmation Card */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-2xl p-6 max-w-sm border-2 border-white/20">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-8 w-8 text-white flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white">Booking Confirmed!</h3>
                  <p className="text-green-100 mt-1">
                    Thank you for your inquiry. We'll contact you shortly to discuss the details.
                  </p>
                </div>
              </div>
              
              <motion.div 
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: 5, ease: "linear" }}
                className="h-1 bg-white/30 mt-4 origin-left"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-Apercu">
              Ready to capture your special moments? Let's discuss your vision and create something extraordinary together.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-[#3E3D53] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <AnimatedSection animation="fade-in-left">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">
                  Let's Start a Conversation
                </h2>
                <p className="text-gray-400 mb-8 text-lg font-sinkin">
                  We'd love to hear about your upcoming event and discuss how we can capture your special moments beautifully.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-yellow-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold mb-1 font-morva">Studio Address</h3>
                      <p className="text-gray-400 font-sinkin">
                        35MP+HRX, Harioudh Nagar, Azamgarh,<br />
                        Salempur, Uttar Pradesh 276001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-yellow-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold mb-1 font-morva">Phone</h3>
                      <p className="text-gray-400 font-sinkin">+91 9305556846</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-yellow-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold mb-1 font-morva">Email</h3>
                      <p className="text-gray-400 font-sinkin">sandeepstudioazm@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-yellow-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold mb-1 font-morva">Business Hours</h3>
                      <p className="text-gray-400 font-sinkin">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                      <p className="text-gray-400 font-sinkin">Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
                {/* WhatsApp CTA */}
                <div className="mt-8 p-6 bg-green-500 rounded-lg">
                  <div className="flex items-center mb-4">
                    <MessageCircle className="h-6 w-6 text-white mr-3" />
                    <h3 className="text-white font-semibold font-morva">Quick WhatsApp Inquiry</h3>
                  </div>
                  <p className="text-green-100 mb-4 font-sinkin">
                    Get instant responses to your queries via WhatsApp!
                  </p>
                  <button
                    onClick={handleWhatsApp}
                    className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-green-50 transition-colors duration-200 font-sinkin"
                  >
                    Chat on WhatsApp
                  </button>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection animation="fade-in-right">
              <div className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-3xl font-bold text-white mb-10 font-morva">Book By Messaging</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 font-sinkin">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors font-sinkin"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-sinkin">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors font-sinkin"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2 font-sinkin">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors font-sinkin"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium text-gray-300 mb-2 font-sinkin">
                        Event Type *
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        required
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors font-sinkin"
                      >
                        <option value="">Select event type</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                        <option value="Engagement">Engagement</option>
                        <option value="Corporate Event">Corporate Event</option>
                        <option value="Birthday Party">Birthday Party</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="eventQuality" className="block text-sm font-medium text-gray-300 mb-2 font-sinkin">
                        Event Quality *
                      </label>
                      <select
                        id="eventQuality"
                        name="eventQuality"
                        required
                        value={formData.eventQuality}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors font-sinkin"
                      >
                        <option value="">Select quality package</option>
                        <option value="Basic">Basic (Essential coverage)</option>
                        <option value="Standard">Standard (Comprehensive coverage)</option>
                        <option value="Premium">Premium (Full coverage with extras)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-medium text-gray-300 mb-2 font-sinkin">
                        Event Date
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors font-sinkin"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 font-sinkin">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors resize-none font-sinkin"
                      placeholder="Tell us about your event and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-yellow-500 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 flex items-center justify-center glow-btn font-sinkin ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#232323] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Visit Our Studio
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-Apercu">
                Located in the heart of Azamgarh, our studio is easily accessible and equipped with modern facilities.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.4897827424!2d75.8157!3d26.9653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU3JzU1LjEiTiA3NcKwNDgnNTcuNSJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sandeep Studio Location"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="mt-8 text-center">
              <a
                href="https://maps.google.com/?q=35MP+HRX,+Harioudh+Nagar,+Azamgarh,+Salempur,+Uttar+Pradesh+276001"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-200 font-sinkin"
              >
                <MapPin className="h-5 w-5 mr-2" />
                Get Directions
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;