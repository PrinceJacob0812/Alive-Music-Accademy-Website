import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Star, Users, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-w-0 bg-gradient-to-br from-orange-900 via-red-900 to-purple-900 text-white overflow-hidden -mt-20 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Hero Image Overlay */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src="https://dhvaniohio.org/wp-content/uploads/2011/10/instmts.jpg" 
          alt="South Indian Classical Music" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="w-full md:max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full text-orange-200 text-sm font-medium mb-6 border border-orange-400/30">
              <Star className="h-4 w-4 mr-2 text-orange-300" />
              Premier South Indian Music Academy
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
                Master the Art
              </span>
              <br />
              <span className="text-white">of South Indian Music</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-200">
              Experience traditional and contemporary music education from expert instructors at Alive Music Academy, Tiruvallur.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center text-orange-200">
                <Users className="h-5 w-5 mr-2" />
                <span className="font-semibold">We Have Students Globally</span>
              </div>
              <div className="flex items-center text-orange-200">
                <Star className="h-5 w-5 mr-2" />
                <span className="font-semibold">Since 2010</span>
              </div>
              <div className="flex items-center text-orange-200">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="font-semibold">Tiruvallur</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#classes" 
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <Play className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Explore Classes
              </a>
              <Link 
                to="/teachers" 
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Meet Our Master
              </Link>
            </div>
          </div>
          
          {/* Right side - Floating Cards */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative space-y-6">
              {/* Card 1 */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center mb-3">
                  <div className="h-12 w-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🎵</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-extrabold italic text-white drop-shadow-[0_0_10px_rgba(255,165,0,0.8)] tracking-wide">Online Classes Available</h3>
                    <p className="text-orange-200 text-sm">Classical & Devotional</p>
                  </div>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transform -rotate-2 hover:rotate-0 transition-transform duration-300 ml-8">
                <div className="flex items-center mb-3">
                  <div className="h-12 w-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🎻</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-white">Instruments</h3>
                    <p className="text-purple-200 text-sm">Veena, Violin, Keyboard</p>
                  </div>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center mb-3">
                  <div className="h-12 w-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🎤</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-white">Carnatic Music</h3>
                    <p className="text-blue-200 text-sm">Classical & Devotional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;