import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Guitar, Mic, BookOpen, Clock, Users, DollarSign, ChevronRight, Star, Video, MapPin } from 'lucide-react';

const Classes = () => {
  const classes = [
      {
      id: 1,
      title: 'Veena (Classical Instrumental)',
      subtitle: 'Traditional String Instrument',
      icon: <Music className="h-8 w-8 text-blue-600" />,
      image: 'https://s7ap1.scene7.com/is/image/incredibleindia/bobbili-veena-andhra-pradesh-1-craft-hero?qlt=82&ts=1726641472288',
      description: 'Learn the divine Veena with 8+ years of specialized teaching expertise. Master traditional compositions and techniques with home tutor and online options.',
      levels: ['Beginner', 'Intermediate', 'Advanced'],
      duration: '60-90 minutes',
      price: 'Contact for pricing',
      instruments: ['Veena']
    },
     {
       id: 2,
      title: 'Keyboard & Gospel Songs',
      subtitle: 'Digital Piano & Keyboard Training',
      icon: <Music className="h-8 w-8 text-red-600" />,
      image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Learn keyboard, and gospel Songs with focus on both classical compositions and contemporary music arrangements. Offline and online classes available.',
      levels: ['Beginner', 'Intermediate', 'Advanced'],
      duration: '45-60 minutes',
      price: 'Contact for pricing',
      instruments: ['Casio', 'Keyboard', 'Piano']
    },
    {
      id: 3,
      title: 'Gospel Music',
      subtitle: 'Spiritual Music Training',
      icon: <Music className="h-8 w-8 text-purple-600" />,
      image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Learn devotional songs and gospel music with emphasis on spiritual expression and meaningful rendition. Classes conducted in Tamil.',
      levels: ['Beginner', 'Intermediate', 'Advanced'],
      duration: '45-60 minutes',
      price: 'Contact for pricing',
      instruments: ['Vocals', 'Keyboard', 'Harmonium']
    },
     {
      id: 4,
      title: 'Carnatic Vocal Music',
      subtitle: 'Traditional South Indian Music',
      icon: <Mic className="h-8 w-8 text-pink-600" />,
      image: 'https://img.freepik.com/free-photo/side-view-woman-singing-microphone_141793-14270.jpg?semt=ais_hybrid&w=740&q=80',
      description: 'Master the ancient art of Carnatic music with traditional ragas, compositions, and authentic guru-student teaching methods. Learn in Tamil for better understanding.',
      levels: ['Beginner', 'Intermediate', 'Advanced'],
      duration: '45-60 minutes',
      price: 'Contact for pricing',
      popular: true,
      instruments: ['Vocals', 'Veena', 'Violin']
    },
    {
      id: 5,
      title: 'Violin (Classical Music)',
      subtitle: 'Classical & Contemporary Violin',
      icon: <Music className="h-8 w-8 text-green-600" />,
      image: 'https://cdn.wallpapersafari.com/53/44/q0yjQH.jpg',
      description: 'Comprehensive violin training covering Carnatic classical techniques and contemporary styles with proper bowing and fingering. Available as home tutor service.',
      levels: ['Beginner', 'Intermediate', 'Advanced'],
      duration: '45-60 minutes',
      price: 'Contact for pricing',
      instruments: ['Violin']
    },
    {
      id: 6,
      title: 'Guitar & Harmonium',
      subtitle: 'String & Wind Instruments',
      icon: <Guitar className="h-8 w-8 text-indigo-600" />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEM4dgVEtKyCBrSqcG13vYRD_u0FdhGD4C7A&s',
      description: 'Learn guitar and harmonium with traditional and contemporary approaches. Perfect for devotional and classical music accompaniment.',
      levels: ['Beginner', 'Intermediate', 'Advanced'],
      duration: '45-60 minutes',
      price: 'Contact for pricing',
      instruments: ['Guitar', 'Harmonium']
    },
  ];

  return (
    <section id="classes" className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-medium mb-6">
            <Star className="h-4 w-4 mr-2" />
            Our Musical Courses
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Musical <span className="text-orange-600">Education</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Alive Music Academy, we offer structured classes across a range of genres and instruments, catering to students of all ages and skill levels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {classes.map((classItem) => (
            <div key={classItem.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              {classItem.popular && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Popular
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img 
                  src={classItem.image} 
                  alt={classItem.title} 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  {classItem.icon}
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{classItem.title}</h3>
                  <p className="text-orange-600 text-sm font-medium">{classItem.subtitle}</p>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{classItem.description}</p>
                
                {classItem.instruments && (
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-900 mb-2">Instruments:</p>
                    <div className="flex flex-wrap gap-1">
                      {classItem.instruments.map((instrument, index) => (
                        <span key={index} className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                          {instrument}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <Users size={18} className="text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Skill Levels</p>
                      <p className="text-gray-600 text-sm">{classItem.levels.join(', ')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock size={18} className="text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Duration</p>
                      <p className="text-gray-600 text-sm">{classItem.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <DollarSign size={18} className="text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Pricing</p>
                      <p className="text-gray-600 text-sm">{classItem.price}</p>
                    </div>
                  </div>
                </div>
                
                <Link 
                  to="/contact" 
                  className="block w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-center rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                > 
                  Register Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Teaching Modes */}
        <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden mb-16">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <div className="relative text-center">
            <h3 className="text-3xl font-bold mb-4">Teaching Modes</h3>
            <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
              Flexible learning options designed to fit your schedule and preferences
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center mb-4">
                  <Video className="h-8 w-8 text-blue-300 mr-3" />
                  <h4 className="text-xl font-semibold">Online Classes</h4>
                </div>
                <p className="text-purple-200 text-sm mb-4">Interactive sessions via Zoom/Google Meet with personalized attention</p>
                <span className="text-yellow-300 font-bold">Flexible Timings</span>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-green-300 mr-3" />
                  <h4 className="text-xl font-semibold">Offline Classes</h4>
                </div>
                <p className="text-purple-200 text-sm mb-4">In-person sessions at our Tiruvallur center with hands-on guidance</p>
                <span className="text-yellow-300 font-bold">Saturday & Sunday after 2:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Start Your Musical Journey <ChevronRight size={24} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Classes;