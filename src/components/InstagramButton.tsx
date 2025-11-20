import React from 'react';
// Assuming you are using 'lucide-react' - you MUST have an icon installed.
// If you don't have 'lucide-react', you will need to install it: npm install lucide-react
import { Instagram } from 'lucide-react'; 

const InstagramButton = () => {
  // 1. *IMPORTANT:* Replace 'YOUR_INSTAGRAM_HANDLE' with your actual Instagram URL/Handle
  const instagramUrl = 'https://www.instagram.com/alive_music_academy?igsh=MXdkZ3BrYWMzenk1cg==';

  const handleInstagramClick = () => {
    // Opens the Instagram profile in a new tab
    window.open(instagramUrl, '_blank');
  };

  return (
    <button
      onClick={handleInstagramClick}
      // Positioning Adjustments:
      // - right-6: Matches the horizontal position of the WhatsApp button.
      // - bottom-20: Puts it 14 units (bottom-20 minus bottom-6) above the WhatsApp button.
      // - p-4, h-6, w-6: Matches the size of the WhatsApp button for uniform look.
      className="fixed bottom-28 right-6 z-50 bg-pink-600 hover:bg-pink-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105"
      aria-label="Follow us on Instagram"
    >
      {/* Ensure this icon has the same size class as your MessageCircle: h-6 w-6 */}
      <Instagram className="h-6 w-6" />

      {/* Tooltip for Instagram (Matches the style of your existing tooltip) */}
      {/* Note: In production code, you might wrap this in a parent div to apply 'group' for the hover effect */}
      <div className="absolute top-full right-0 mt-2 p-3 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Follow us on Instagram
      </div>

      {/* Ripple effect (Matches the style of your existing ripple) */}
      <div className="absolute inset-0 rounded-full bg-white opacity-30 animate-ping"></div>
    </button>
  );
};

export default InstagramButton;