import { FaStar } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import about2Image from '../assets/about (2).jpg';
import iconLogo from '../assets/logo.jpg';
const About = () => {
  return (
  <section id="about" className="py-20 bg-gradient-to-b from-white to-orange-50 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-medium mb-6">
              <FaStar className="h-4 w-4 mr-2" />
              Our Legacy Since 2010
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              About <span className="text-orange-600">Alive Music Academy</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2010 by <span className="font-semibold text-orange-600 italic">Veena Abraham Lingan.P</span>, Alive Music Academy is a premier institution rooted in South Indian musical tradition. With a legacy of teaching students Globally every year, many of whom now perform in orchestras, TV shows, and cultural events, the academy has grown into a trusted name in music education.
            </p>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our approach blends classical <span className="font-semibold text-orange-600">guru–shishya discipline</span> with interactive, modern teaching techniques. We specialize in <span className="font-semibold text-purple-600">Carnatic music</span>, devotional, gospel, and instrumental training across vocal and instrumental formats including Veena, Violin, and Keyboard.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're a beginner or looking to advance your skills, Alive Music Academy offers a nurturing environment with flexible online and offline weekend classes designed to help you grow with passion and confidence.
            </p>
            
            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-orange-500">
                <div className="flex items-center">
                  <FaTrophy className="h-8 w-8 text-orange-500 mr-3" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">World Wide</p>
                    <p className="text-gray-600 text-sm">Students </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-purple-500">
                <div className="flex items-center">
                  <FaStar className="h-8 w-8 text-purple-500 mr-3" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">15+</p>
                    <p className="text-gray-600 text-sm">Years Legacy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <img src={about2Image} 
              alt="15 years of teaching" 
              className="w-full h-full object-cover" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-orange-500 to-red-500 p-8 rounded-2xl shadow-2xl text-white">
              <div className="flex items-center">
                <img 
                  src={iconLogo} 
                  alt="Alive Music Academy Logo" 
                  className="h-12 w-12 object-contain bg-white rounded-full p-1"
                />
                <div className="ml-6">
                  <p className="text-3xl font-bold">15+</p>
                  <p className="text-orange-100 font-semibold">Years of Excellence</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-1/2 -left-6 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-bounce"></div>
          </div>
        </div>

        {/* Our Values */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-600">Teaching Philosophy</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The fundamental principles that guide our musical education and shape every lesson we teach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-orange-500">
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 mb-6 group-hover:scale-110 transition-transform">
              <FaUsers size={40} />
            </div>
            <h4 className="text-xl font-semibold mb-4 text-gray-900">Traditional Mentorship</h4>
            <p className="text-gray-600 leading-relaxed">
              Following the ancient guru-shishya tradition where each student receives individual attention and guidance tailored to their unique musical journey and goals.
            </p>
          </div>
          
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-purple-500">
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 mb-6 group-hover:scale-110 transition-transform">
              <FaAward size={40} />
            </div>
            <h4 className="text-xl font-semibold mb-4 text-gray-900">Excellence in Teaching</h4>
            <p className="text-gray-600 leading-relaxed">
              Maintaining the highest standards of musical instruction while instilling cultural values, discipline, and respect for the divine art of South Indian music.
            </p>
          </div>
          
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500">
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 mb-6 group-hover:scale-110 transition-transform">
              <FaHeart size={40} />
            </div>
            <h4 className="text-xl font-semibold mb-4 text-gray-900">Joyful Learning</h4>
            <p className="text-gray-600 leading-relaxed">
              Creating a joyful, supportive environment where students discover the bliss of music, fostering creativity and lifelong passion for the arts.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-orange-900 via-red-900 to-purple-900 text-white rounded-3xl p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                15+
              </div>
              <p className="text-orange-200 text-lg">Years Veena Expertise</p>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                1000+
              </div>
              <p className="text-purple-200 text-lg">Benificial Students Till Now</p>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                6
              </div>
              <p className="text-blue-200 text-lg">Instruments Taught</p>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                15
              </div>
              <p className="text-green-200 text-lg">Years Legacy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;