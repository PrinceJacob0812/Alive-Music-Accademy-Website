import React from 'react';
import { Music, Award, Users, Clock, MapPin, Star, Phone, Mail, Link } from 'lucide-react'; 

const Teachers = () => {
    const teacher = {
        id: 1,
        name: 'Isai Kalaimani Abraham Sir',
        title: 'Founder & Master Teacher',
        // Assuming asset path is correct for Master.jpg
        image: '/src/assets/Master.jpg', 
        bio: 'Isai Kalaimani Abraham Sir, founder of Alive Music Academy, is an accomplished musician with over 6 years of professional teaching experience, and more than 8 years of expertise in Veena instruction. Known for his patience, passion, and personalized teaching style, Abraham Sir has mentored hundreds of students—many now active in orchestras, television performances, and cultural stages across South India.',
        teachingPhilosophy: 'He teaches with a rare blend of South Indian classical discipline and friendly modern methods, adapting lessons based on individual student goals. Fluent in Tamil, his sessions are accessible, comfortable, and rooted in deep musical understanding.',
        specialties: ['Veena', 'Violin', 'Keyboard', 'Guitar', 'Carnatic Music', 'Devotional Music', 'Gospel Music', 'Western Instrumental Training'],
        education: 'Isai Kalaimani (Music Scholar)',
        experience: '6+ years professional teaching, 8+ years Veena expertise',
        achievements: [
            'Founded Alive Music Academy in 2010',
            'Trained 60-100 students annually',
            'Students performing in orchestras and TV shows',
            'Expert in traditional guru-shishya teaching method',
            'Specialized in South Indian classical music',
            'Fluent in Tamil and English instruction'
        ],
        icon: <Music className="h-6 w-6" />,
        rating: 5,
        students: 500,
        yearsExperience: 15,
        languages: ['Tamil', 'English'],
        teachingModes: ['Online Classes', 'Offline Classes', 'Home Tutor']
    };

    return (
        <div className="bg-gradient-to-b from-orange-50 to-white">
            {/* Header */}
            <section className="bg-gradient-to-r from-orange-900 via-red-900 to-purple-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full text-orange-200 text-sm font-medium mb-6 border border-orange-400/30">
                        <Star className="h-4 w-4 mr-2" />
                        Meet Our Master Teacher
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Learn from <span className="bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">Abraham Sir?</span>
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto text-orange-100">
                        Join our musical family and experience the transformative power of learning from a master teacher with 15+ years of experience.
                    </p>
                    <a 
                      href="/contact" 
                      className="inline-block mt-8 px-8 py-3 bg-white text-orange-600 hover:bg-gray-100 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Schedule Free Consultation
                    </a>
                </div>
            </section>

            {/* Teacher Profile - STACKED LAYOUT FIX APPLIED HERE */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                        
                        {/* Forced to STACK vertically (1 column) */}
                        <div className="grid grid-cols-1 gap-0"> 
                            
                            {/* Image Section - Now Full Width */}
                            <div className="relative overflow-hidden">
                                <img 
                                    src={teacher.image} 
                                    alt={teacher.name} 
                                    className="w-full object-cover max-h-[600px]" // Max height set for horizontal view
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                
                                {/* Stats Overlay */}
                                <div className="absolute bottom-6 left-6 right-6 lg:left-12 lg:right-12">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                                            <div className="text-2xl font-bold text-orange-600">{teacher.yearsExperience}+</div>
                                            <div className="text-xs text-gray-600">Years Legacy</div>
                                        </div>
                                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                                            <div className="text-2xl font-bold text-purple-600">{teacher.students}+</div>
                                            <div className="text-xs text-gray-600">Students</div>
                                        </div>
                                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                                            <div className="text-2xl font-bold text-green-600">8+</div>
                                            <div className="text-xs text-gray-600">Veena Expertise</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Content Section - Now Full Width, Below Image */}
                            <div className="p-8 lg:p-12">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="p-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-full text-orange-600">
                                        {teacher.icon}
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-gray-900">{teacher.name}</h2>
                                        <p className="text-orange-600 font-medium text-lg">{teacher.title}</p>
                                        <div className="flex items-center mt-2">
                                            {[...Array(teacher.rating)].map((_, i) => (
                                                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                            ))}
                                            <span className="ml-2 text-gray-600 text-sm">({teacher.rating}/5)</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <p className="text-gray-600 text-lg mb-6 leading-relaxed">{teacher.bio}</p>
                                
                                <div className="bg-gradient-to-r from-orange-50 to-purple-50 rounded-xl p-6 mb-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Teaching Philosophy</h3>
                                    <p className="text-gray-600 leading-relaxed">{teacher.teachingPhilosophy}</p>
                                </div>
                                
                                {/* Education & Experience */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Education</h4>
                                        <p className="text-gray-600">{teacher.education}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Experience</h4>
                                        <p className="text-gray-600">{teacher.experience}</p>
                                    </div>
                                </div>
                                
                                {/* Specialties */}
                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Teaching Specializations</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {teacher.specialties.map((specialty, index) => (
                                            <span key={index} className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">
                                                {specialty}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Languages & Teaching Modes */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Languages</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {teacher.languages.map((language, index) => (
                                                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                                                    {language}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Teaching Modes</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {teacher.teachingModes.map((mode, index) => (
                                                <span key={index} className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                                                    {mode}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Achievements */}
                                <div className="mb-8">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
                                    <div className="space-y-2">
                                        {teacher.achievements.map((achievement, index) => (
                                            <div key={index} className="flex items-start text-gray-600">
                                                <Award className="h-4 w-4 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-sm">{achievement}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                <a href='/contact' className="block w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    Book a Session with Abraham Sir
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Teaching Approach */}
            <section className="py-16 bg-gradient-to-b from-white to-orange-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Teaching Approach</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Abraham Sir's unique blend of traditional and modern teaching methods
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
                            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 mb-6">
                                <Users size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Personalized Attention</h3>
                            <p className="text-gray-600">Individual focus on each student's unique learning style and musical goals</p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
                            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 mb-6">
                                <Clock size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Flexible Scheduling</h3>
                            <p className="text-gray-600">Online and offline classes with weekend availability to suit your schedule</p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
                            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 mb-6">
                                <MapPin size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Cultural Connection</h3>
                            <p className="text-gray-600">Deep understanding of South Indian musical traditions and cultural context</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-r from-orange-900 via-red-900 to-purple-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Learn from Abraham Sir?</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto text-orange-100">
                        Join our musical family and experience the transformative power of learning from a master teacher with 15+ years of experience.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a 
                            href="/contact" 
                            className="px-8 py-4 bg-white text-orange-600 hover:bg-gray-100 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Schedule Free Consultation
                        </a>
                        <a 
                            href="/classes" 
                            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                        >
                            View Classes
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Teachers;