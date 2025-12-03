import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Heart, Clock } from 'lucide-react';
import academyLogo from '../assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                
                <img src={academyLogo} 
                alt="Alive Music Academy Logo" 
                className="h-12 w-auto" 
                /> 
                  
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-purple-400/20 rounded-full blur-lg"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
                  Alive Music Academy
                </span>
                <div className="text-sm text-orange-200 font-medium">Mastering Music Through Passion & Tradition</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Founded by Isai Kalaimani Abraham Sir in 2010, we specialize in South Indian classical music, 
              devotional, and instrumental training with traditional guru-shishya discipline and modern teaching methods.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="group p-3 bg-white/10 hover:bg-orange-500 rounded-full transition-all duration-300 transform hover:scale-110">
                <Facebook className="h-5 w-5 text-gray-300 group-hover:text-white" />
              </a>
              <a href="#" className="group p-3 bg-white/10 hover:bg-blue-500 rounded-full transition-all duration-300 transform hover:scale-110">
                <Twitter className="h-5 w-5 text-gray-300 group-hover:text-white" />
              </a>
              <a href="#" className="group p-3 bg-white/10 hover:bg-pink-500 rounded-full transition-all duration-300 transform hover:scale-110">
                <Instagram className="h-5 w-5 text-gray-300 group-hover:text-white" />
              </a>
              <a href="https://www.youtube.com/@ALIVEMUSICACADEMY" target="_blank" rel="noopener noreferrer" className="group p-3 bg-white/10 hover:bg-red-500 rounded-full transition-all duration-300 transform hover:scale-110">
                <Youtube className="h-5 w-5 text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-orange-300">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-orange-300 transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                  Home
                </Link>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-orange-300 transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#classes" className="text-gray-300 hover:text-orange-300 transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                  Our Classes
                </a>
              </li>
              <li>
                <Link to="/teachers" className="text-gray-300 hover:text-orange-300 transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                  Meet Abraham Sir
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-orange-300 transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-orange-300">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start group">
                <Phone className="h-5 w-5 text-orange-400 mr-3 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-300 group-hover:text-orange-300 transition-colors">+91-94448-21399</p>
                  <p className="text-gray-400 text-sm">Available for inquiries</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <Mail className="h-5 w-5 text-orange-400 mr-3 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-300 group-hover:text-orange-300 transition-colors">aliveabraham@gmail.com</p>
                  <p className="text-gray-400 text-sm">Quick Response Guaranteed</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <MapPin className="h-5 w-5 text-orange-400 mr-3 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-300 group-hover:text-orange-300 transition-colors">
                    Kakkalur, Tiruvallur<br />
                    Near Kakkallur Vegetable Market<br />
                    Behind Government School
                  </p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <Clock className="h-5 w-5 text-orange-400 mr-3 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-300 group-hover:text-orange-300 transition-colors">Weekend Classes Available</p>
                  <p className="text-gray-400 text-sm">Saturday & Sunday after 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <p className="text-gray-400 text-sm flex items-center">
                © 2010–2025 Alive Music Academy. Made with 
                <Heart className="h-4 w-4 text-red-400 mx-1" />
                for music lovers. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-orange-300 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-300 text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-300 text-sm transition-colors duration-200">
                Follow Us
              </a>
            </div>
          </div>
          
          {/* Cultural Quote */}
          <div className="text-center mt-6 pt-6 border-t border-gray-800">
            <p className="text-orange-300 italic text-sm">
              "Music is the language of the soul" - Abraham Sir, Alive Music Academy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;