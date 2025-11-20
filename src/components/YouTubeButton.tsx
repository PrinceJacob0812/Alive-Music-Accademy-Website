import React from 'react';
// Import the YouTube icon from lucide-react (or your icon library)
import { Youtube } from 'lucide-react'; 

const YouTubeButton = () => {
  // 1. *IMPORTANT:* Replace 'YOUR_YOUTUBE_CHANNEL_URL' with your actual YouTube channel URL
  const youtubeUrl = 'https://youtube.com/@alivemusicacademy?si=M1diSy0Ywu4wYf9U';

  const handleYouTubeClick = () => {
    // Opens the YouTube channel in a new tab
    window.open(youtubeUrl, 'https://youtube.com/@alivemusicacademy?si=M1diSy0Ywu4wYf9U');
  };

  return (
    <button
      onClick={handleYouTubeClick}
      // Positioning Adjustments:
      // - bottom-36: Puts it 8 units (36-28) above the Instagram button (which is at bottom-28)
      // - right-6: Matches the horizontal position of the other two buttons
      // - Same p-4, h-6, w-6 classes for identical size
      // - Using a red color scheme (e.g., bg-red-600) for YouTube
      className="fixed bottom-52 right-6 z-50 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105"
      aria-label="Subscribe to us on YouTube"
    >
      {/* Ensure the icon has the same size class as your other buttons: h-6 w-6 */}
      <Youtube className="h-6 w-6" />

      {/* Tooltip for YouTube (Matches the style of your existing tooltip) */}
      <div className="absolute top-full right-0 mt-2 p-3 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Subscribe on YouTube
      </div>

      {/* Ripple effect (Matches the style of your existing ripple) */}
      <div className="absolute inset-0 rounded-full bg-white opacity-30 animate-ping"></div>
    </button>
  );
};

export default YouTubeButton;