import React from 'react';
import { Star } from 'lucide-react';

const Reviews = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rathi Devi',
      rating: 5,
      text: "So privileged to learn veenai under the tutelage of Mr.Abraham sir. Undoubtedly, he is a great teacher/sculptor and am really impressed with his teaching skills that are par excellence. He has a very rare quality i.e., his selfless teaching skill, as he is not reserving or limiting what to teach and what not to.",
    },
    {
      id: 2,
      name: 'S. Miller',
      rating: 5,
      text: "It's was very good music academy in Thiruvallur. Sir teaching was so nice. Now I was good in keyboard playing and also singing. Thank you for your good teaching.",
    },
    {
      id: 3,
      name: 'Radhika Rajkumar',
      rating: 5,
      text: "I am learning Veenai from Abraham sir. He is very polite and teaches me easy songs and clears all my doubts and makes me more confident.",
    },
    {
      id: 4,
      name: 'Prema Vathy C',
      rating: 5,
      text: "He is one of the best teachers whom you could look when it comes to teaching veena, very knowledgeable and the patience he shows when it comes to clarifying doubts is one of the remarkable qualities.",
    },
    {
      id: 5,
      name: 'Devi Prabhaharan',
      rating: 5,
      text: "I'm from USA, and I started learning Veena since 6 months ago. Abraham Sir taught me new songs every week and boosted up my confident level. I strongly recommend him for the best online classes.",
    },
    {
      id: 6,
      name: 'Mythili',
      rating: 5,
      text: "I have been learning Veena for past 1 month from Abraham sir. I have got an amazing experience in this first month. I have started learning songs and he is such an amazing teacher with so much patience.",
    },
    {
      id: 7,
      name: 'Ganesh Uthiravasagam',
      rating: 5,
      text: "It's been only 2 months I've been learning keyboard via online class but Abraham sir has covered all important basics. Within just 2 months I have learnt a few beautiful Tamil songs along with chords. Abraham sir is amazing, polite, and very patient.",
    },
    {
      id: 8,
      name: 'Gowri Kanagasabapathy',
      rating: 5,
      text: "I've resumed Veena learning from Abraham sir after taking a break of 6 years. It's been one month I'm learning from him, I've gained confidence to continue my practice with Veena. Although it's online class, the classes are very lively and he gives all the notes and lessons very promptly.",
    },
    {
      id: 9,
      name: 'Rajababu (Parent)',
      rating: 5,
      text: "My son Roshith, 6 years old, started learning Piano. Now he is enjoying, he can play songs after practicing from Great Guru. Thank you so much Sir.",
    },
    {
      id: 10,
      name: 'Vasandah Siva',
      rating: 5,
      text: "My guru is very patient and teaches well with step by step on songs. He is a great guru! He teaches with passion and instills the idea to me and other students which is what we as students need. Wonderful experience!!!",
    },
    {
      id: 11,
      name: 'Uma Mahesh',
      rating: 5,
      text: "It was my first day of learning. I have on and off trained with many gurus. But this session was interesting and very different. The session was an eye opener and helped a lot in understanding and appreciating the nuances in playing the Veena.",
    },
  ];

  return (
    <section id="reviews" className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Student <span className="text-purple-600">Reviews</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear what our students have to say about their learning experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
              {/* Name */}
              <h3 className="font-bold text-lg text-gray-900 mb-3 border-b pb-2 border-purple-100">
                {testimonial.name}
              </h3>
              
              {/* Review Text */}
              <div className="flex-grow mb-4">
                <p className="text-gray-600 leading-relaxed italic">"{testimonial.text}"</p>
              </div>
              
              {/* Rating */}
              <div className="flex items-center justify-center mt-auto pt-3 border-t border-gray-100">
                <div className="flex items-center bg-purple-50 px-3 py-1 rounded-full">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-current mx-0.5" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Showing {testimonials.length} reviews • All rated 5 stars
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;