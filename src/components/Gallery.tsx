import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Users, Music, Award, Images, X } from 'lucide-react'; // Added X for the close button
// --- VEENA CLASSES (6 images) ---
import imgVeena11 from '../assets/gallery/11.jpg';
import imgVeena12 from '../assets/gallery/12.jpg';
import imgVeena16 from '../assets/gallery/16.jpg';
import imgVeena23 from '../assets/gallery/23.jpg';
import imgVeena40 from '../assets/gallery/40.jpg';

// --- KEYBOARD CLASSES (4 images) ---
import imgKeyboard1 from '../assets/gallery/1.jpg';
import imgKeyboard15 from '../assets/gallery/15.jpg';
import imgKeyboard22 from '../assets/gallery/22.jpg';
import imgKeyboard41 from '../assets/gallery/41.jpg';

// --- VOCAL TRAINING (4 images) ---
import imgVocal21 from '../assets/gallery/21.jpg';
import imgVocal3 from '../assets/gallery/3.jpg';
import imgVocal6 from '../assets/gallery/6.jpg';
import imgVocal29 from '../assets/gallery/29.jpg';

// --- MASTER CLASS (5 images) ---
import imgMaster24 from '../assets/gallery/24.jpg';
import imgMaster38 from '../assets/gallery/38.jpg';
import imgMaster28 from '../assets/gallery/28.jpg';
import imgMaster8 from '../assets/gallery/8.jpg';
import imgMaster30 from '../assets/gallery/30.jpg';

// --- MEMORIES (10 images) ---
import imgMemory25 from '../assets/gallery/25.jpg';
import imgMemory17 from '../assets/gallery/17.jpg';
import imgMemory13 from '../assets/gallery/13.jpg';
import imgMemory31 from '../assets/gallery/31.jpg';
import imgMemory35 from '../assets/gallery/35.jpg';
import imgMemory5 from '../assets/gallery/5.jpg';
import imgMemory37 from '../assets/gallery/37.jpg';
import imgMemory2 from '../assets/gallery/2.jpg';
import imgMemory27 from '../assets/gallery/27.jpg';
import imgMemory26 from '../assets/gallery/26.jpg';

// --- ACHIEVEMENTS (8 images) ---
import imgAchievement10 from '../assets/gallery/10.jpg';
import imgAchievement36 from '../assets/gallery/36.jpg';
import imgAchievement14 from '../assets/gallery/14.jpg';
import imgAchievement19 from '../assets/gallery/19.jpg';
import imgAchievement20 from '../assets/gallery/20.jpg';
import imgAchievement39 from '../assets/gallery/39.jpg';
import imgAchievement33 from '../assets/gallery/33.jpg';
import imgAchievement34 from '../assets/gallery/34.jpg';

// Define a type for the image objects to make the code cleaner and prevent errors
interface GalleryItem {
    id: number;
    images: string[]; // This holds the array of image paths for the item
    alt: string;
    category: string;
    title: string;
    description?: string;
}

const Gallery = () => {
    // State to hold the ENTIRE current item object when the lightbox is open
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
    // State to hold the index of the specific image currently viewed in the lightbox
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const galleryImages: GalleryItem[] = [
        {
            id: 1,
            // CORRECTED: Ensure 'images' is an array of strings for ALL items
            images: [
                imgVeena16,
                imgVeena12, 
                imgVeena11, 
                imgVeena23, 
                imgVeena40, 
                
            ],
            alt: 'Abraham Sir teaching Veena to students',
            category: 'Veena Classes',
            title: 'Traditional Veena Instruction',
            description: 'A dedicated session focusing on the classical Indian instrument.'
        },
        {
            id: 2,
            // CORRECTED: Changed 'Images' (capital I) to 'images' (lowercase i)
            images: [
                imgKeyboard15,
                imgKeyboard41,
                imgKeyboard22,
                imgKeyboard1
            ],
            alt: 'Keyboard and piano lessons at the academy',
            category: 'Keyboard Classes',
            title: 'Modern Keyboard Training',
            description: 'Exploring contemporary and classical piano methods.'
        },
        {
            id: 3,
            images: [
                imgVocal21,
                imgVocal29,
                imgVocal3,
                imgVocal6

            ],
            alt: 'Vocal training and singing lessons',
            category: 'Vocal Training',
            title: 'Carnatic Vocal Excellence',
            description:'Unleash Your Voice and Discover the full potential of your natural Instrrument'
        },
        {
            id: 4,
            images: [
                imgMaster24,
                imgMaster28,
                imgMaster30,
                imgMaster38,
                imgMaster8

            ],
            alt: 'Master at Work',
            category: 'Teachings',
            title: 'Moments of Mastery',
            description:'Guided Expertise: Abraham Sir in Action'
        },
        {
            id: 5,
            images: [
              imgMemory25,
              imgMemory17,
              imgMemory2,
              imgMemory25,
              imgMemory13,
              imgMemory27,
              imgMemory26,
              imgMemory31,
              imgMemory35,
              imgMemory37,
              imgMemory5
            ],
            alt: 'Academy Chronicles',
            category: 'Musical Journey',
            title: 'Our Shared Memories',
            description:'Collection of Cherished Moments'
        },
        {
            id: 6,
            images: [
                imgAchievement10,
                imgAchievement36,
                imgAchievement19,
                imgAchievement20, 
                imgAchievement33,
                imgAchievement14,
                imgAchievement34,
                imgAchievement39
              ],
            alt: 'Student performance at cultural event',
            category: 'Performances',
            title: 'Student Achievements',
            description: 'Our students performing at cultural events and TV shows'
        }
    ];

    const categories = ['All', 'Veena Classes', 'Keyboard Classes', 'Violin Classes', 'Vocal Training', 'Devotional Music', 'Performances'];
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredImages = activeCategory === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    // --- LIGHTBOX LOGIC MODIFIED ---

    const openLightbox = (item: GalleryItem) => {
        // Open the lightbox using the entire item object
        setSelectedItem(item);
        // Always start viewing the first image in the array
        setCurrentImageIndex(0);
    };

    const closeLightbox = () => {
        setSelectedItem(null);
        setCurrentImageIndex(0); // Reset the index when closing
    };

    const nextImage = () => {
        if (!selectedItem) return;
        const totalImages = selectedItem.images.length;
        // Cycle forward: (current index + 1) % total images
        const nextIndex = (currentImageIndex + 1) % totalImages;
        setCurrentImageIndex(nextIndex);
    };

    const prevImage = () => {
        if (!selectedItem) return;
        const totalImages = selectedItem.images.length;
        // Cycle backward: (current index - 1 + total images) % total images
        const prevIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        setCurrentImageIndex(prevIndex);
    };

    // Helper to get the current image URL for the lightbox display
    const currentImageUrl = selectedItem?.images[currentImageIndex] || '';

    return (
        <section id="gallery" className="py-20 bg-gradient-to-b from-white to-orange-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header and Category Filter code remains the same */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-medium mb-6">
                        <Music className="h-4 w-4 mr-2" />
                        Visual Journey
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Our Musical <span className="text-orange-600">Gallery</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Witness the passion, dedication, and joy of learning at Alive Music Academy through these moments captured during our classes and performances.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                                activeCategory === category
                                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 border border-gray-200'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {(filteredImages ?? []).map((item: GalleryItem) => ( // Use 'item' to represent the gallery item
                        <div
                            key={item.id}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                            // MODIFIED: Pass the entire item object to openLightbox
                            onClick={() => openLightbox(item)}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    // Use the first image in the array as the thumbnail
                                    src={item.images[0]}
                                    alt={item.alt}
                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Overlay Content */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                        {/* Display number of images available for this item */}
                                        <Images className="h-6 w-6 text-orange-600" />
                                    </div>
                                </div>
                                
                                {/* Image Count Badge (New Feature) */}
                                {item.images.length > 1 && (
                                     <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                                        <Images className="h-3 w-3 mr-1" />
                                        {item.images.length} Photos
                                    </div>
                                )}


                                {/* Category Badge */}
                                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                    {item.category}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Stats Section remains the same */}
                <div className="mt-20 bg-gradient-to-r from-orange-900 via-red-900 to-purple-900 rounded-3xl p-12 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}></div>
                    </div>
                    
                    <div className="relative text-center mb-12">
                        <h3 className="text-3xl font-bold mb-4">Moments of Musical Excellence</h3>
                        <p className="text-xl text-orange-200 max-w-3xl mx-auto">
                            Every image tells a story of dedication, learning, and the beautiful journey of musical discovery at our academy.
                        </p>
                    </div>
                    
                    <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="group">
                            <div className="flex items-center justify-center mb-4">
                                <Users className="h-12 w-12 text-orange-300 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
                                100+
                            </div>
                            <p className="text-orange-200">Happy Students</p>
                        </div>
                        <div className="group">
                            <div className="flex items-center justify-center mb-4">
                                <Music className="h-12 w-12 text-purple-300 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                                6
                            </div>
                            <p className="text-purple-200">Instruments Taught</p>
                        </div>
                        <div className="group">
                            <div className="flex items-center justify-center mb-4">
                                <Award className="h-12 w-12 text-blue-300 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                                50+
                            </div>
                            <p className="text-blue-200">Performances</p>
                        </div>
                        <div className="group">
                            <div className="flex items-center justify-center mb-4">
                                <Play className="h-12 w-12 text-green-300 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                                15
                            </div>
                            <p className="text-green-200">Years Legacy</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal MODIFIED */}
            {selectedItem && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <div className="relative max-w-4xl w-full">
                        
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 z-10 bg-black/80 backdrop-blur-sm hover:bg-white/20 text-white p-2 rounded-full transition-colors"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        {/* Navigation Buttons (Only display if there is more than one image) */}
                        // --- REPLACE THE NAVIGATION BUTTONS BLOCK WITH THIS ---

                        {selectedItem.images.length > 1 && (
                            <> 
                                {/* Previous Button */}
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-colors z-10"
                                >
                                    <ChevronLeft className="h-6 w-6" />
                                </button>
                                
                                {/* Next Button */}
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-colors z-10"
                                >
                                    <ChevronRight className="h-6 w-6" />
                                </button>
                            </> // <-- The critical closing tag that was likely missing
                        )}

                        {/* Image */}
                        <div className="bg-white rounded-2xl overflow-hidden">
                            <img
                                // MODIFIED: Use the calculated currentImageUrl state
                                src={currentImageUrl}
                                alt={selectedItem.alt}
                                className="w-full h-auto max-h-[70vh] object-contain"
                            />
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                        {selectedItem.category}
                                    </span>
                                    {selectedItem.images.length > 1 && (
                                         <span className="text-gray-500 text-sm">
                                            {currentImageIndex + 1} of {selectedItem.images.length}
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    {selectedItem.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {selectedItem.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;