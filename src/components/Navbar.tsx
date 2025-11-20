import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react'; // CLEANED: Removed unused Mail, ChevronDown, Music

// Import the logo image
import logo from '../assets/logo.jpg';

const Navbar = () => {
    // --- 1. STATE & HOOKS ---
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    // FIXED: Explicitly set type to number | null
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null); 
    const location = useLocation();
    const navigate = useNavigate();
    const dropdownRef = useRef<HTMLDivElement>(null);

    // --- NAVIGATION DATA ---
    const navigation = [
        { name: 'Home', href: '/', type: 'page' }, // Changed /#hero to / for cleaner routing
        { name: 'About', href: '/#about', type: 'mixed' },
        { name: 'Classes', href: '/#classes', type: 'mixed' },
        { name: 'Gallery', href: '/#gallery', type: 'mixed' },
        { name: 'Reviews', href: '/#reviews', type: 'mixed' },
        { name: 'Teachers', href: '/teachers', type: 'page' },
        { name: 'Contact', href: '/contact', type: 'page' },
        { name: 'Payment', href: '/paymentpage', type: 'page' },
    ];

    // --- 2. HELPER FUNCTIONS ---

    // FIXED: Uses the robust logic to handle scrolling from deep pages
    const handleNavClick = (href: string, type: string, closeMenu = true) => {
        if (closeMenu) {
            setIsOpen(false);
            setActiveDropdown(null);
        }

        if (type === 'page') {
            navigate(href);
            return;
        }

        if (href.includes('#')) {
            const [path, hash] = href.split('#');

            // Logic: If we are not on the target page (i.e., we are on /teachers or /contact), 
            // force navigation back to the target base path (usually '/') with the scroll target.
            if (location.pathname !== path && location.pathname !== '/') { 
                navigate(path, { state: { scrollTo: hash } });
                return;
            } 
            
            // If already on the correct page, execute the scroll directly
            setTimeout(() => {
                const element = document.getElementById(hash);
                if (element) {
                    const navHeight = 80; 
                    const elementPosition = element.offsetTop - navHeight;
                    window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
    };

    // FIXED: Added correct types for the mouse event
    const toggleDropdown = (index: number, event: React.MouseEvent) => {
        event.stopPropagation();
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    // Function to check if a link is active
    const isActive = (href: string, type: string) => {
        // If type is 'page', check for exact path match
        if (type === 'page') {
            return location.pathname === href;
        } 
        // If type is 'mixed', check if we are on the base page AND the hash matches
        else if (type === 'mixed' && href.includes('#')) {
            const [path, hash] = href.split('#');
            // We consider it active if the base path is '/' and the hash matches, 
            // OR if the current path matches the link path.
            return (location.pathname === path || (path === '/' && location.pathname === '/')) && location.hash === `#${hash}`;
        }
        return false;
    };

    // --- 3. USE EFFECTS (Lifecycle Management) ---

    // Effect 1: Handle scroll change (transparent to white background)
    useEffect(() => {
        const handleScroll = () => { 
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Effect 2: Close dropdown when clicking outside (FIXED: Cleaned up structure and used MouseEvent)
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Using 'as Node' to satisfy TypeScript's contains() check
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) { 
                setActiveDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside as any); // Use 'as any' for compatibility
        return () => {
            document.removeEventListener('mousedown', handleClickOutside as any);
        };
    }, []); 

    // Effect 3: Handle scroll after navigation (scrolling to section when navigating from a different page)
    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            setTimeout(() => {
                const element = document.getElementById(location.state.scrollTo);
                if (element) {
                    const navHeight = 80;
                    const elementPosition = element.offsetTop - navHeight;
                    window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                    });
                    // Clear the state to prevent re-scrolling on back navigation
                    navigate(location.pathname, { replace: true, state: {} });
                }
            }, 300);
        }
    }, [location, navigate]);

    // --- 4. RENDER (JSX) ---
    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200' 
                : 'bg-white/90 backdrop-blur-md shadow-sm'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link 
                            to="/" 
                            className="flex items-center space-x-2 group" 
                            onClick={() => { setIsOpen(false); setActiveDropdown(null); }}
                            aria-label="Alive Music Academy Home"
                        >
                            <div className="relative flex items-center">
                                <img src={logo} alt="Alive Music Academy Logo" className="h-10 w-auto transition-transform duration-300 group-hover:scale-105 rounded-lg" />
                                <div className="ml-3">
                                    <span className="text-lg font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                                        Alive Music Academy
                                    </span>
                                    <div className="text-xs text-gray-500 font-medium hidden sm:block">Tiruvallur • Since 2010</div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation - Centered properly */}
                    <div className="hidden lg:flex items-center justify-center flex-1 px-4">
                        <div className="flex items-center space-x-1">
                            {navigation.map((item, index) => (
                                <div key={item.name} className="relative">
                                    <button
                                        onClick={() => handleNavClick(item.href, item.type)}
                                        className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 relative group ${
                                            isActive(item.href, item.type)
                                                ? 'text-orange-600 bg-orange-50'
                                                : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                                        }`}
                                    >
                                        {item.name}
                                        <div 
                                            className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 origin-center ${
                                                isActive(item.href, item.type) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                            }`}
                                        ></div>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Contact Info & CTA - Right aligned */}
                    <div className="hidden lg:flex items-center space-x-4 ml-4 pl-4 border-l border-gray-200 flex-shrink-0">
                        <div className="flex items-center space-x-4 text-base">
                            <a 
                                href="tel:+91-9444821399" 
                                className="flex items-center text-gray-600 hover:text-orange-600 transition-colors duration-200 font-medium"
                            >
                                <Phone className="h-5 w-5 mr-2" />
                                <span className="hidden xl:inline">+91-94448-21399</span>
                            </a>
                        </div>
                        
                        <button
                            onClick={() => handleNavClick('/contact', 'page')} // Changed to simple page navigation for the Register button
                            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Register Now
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center space-x-2">
                        <a href="tel:+91-9444821399" className="text-orange-600 hover:text-orange-700 transition-colors p-2 rounded-lg hover:bg-orange-50">
                            <Phone className="h-5 w-5" />
                        </a>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-orange-600 focus:outline-none focus:text-orange-600 p-2 rounded-lg hover:bg-orange-50 transition-all duration-200"
                            aria-label="Toggle menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-xl">
                        <div className="px-4 py-4 space-y-1">
                            {navigation.map((item) => (
                                <div key={item.name}>
                                    <button
                                        onClick={() => handleNavClick(item.href, item.type)}
                                        className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                                            isActive(item.href, item.type)
                                                ? 'text-orange-600 bg-orange-50'
                                                : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                                        }`}
                                    >
                                        {item.name}
                                    </button>
                                </div>
                            ))}
                            
                            {/* Mobile Contact Info */}
                            <div className="pt-4 border-t border-gray-200 space-y-3 mt-2">
                                <a href="tel:+91-9444821399" className="flex items-center px-4 py-2 text-gray-600 hover:text-orange-600 transition-colors duration-200 rounded-lg hover:bg-orange-50 text-base">
                                    <Phone className="h-5 w-5 mr-3" />
                                    <span className="font-medium">+91-94448-21399</span>
                                </a>
                                <div className="flex items-center px-4 py-2 text-gray-600 rounded-lg text-base">
                                    <MapPin className="h-5 w-5 mr-3" />
                                    <span className="font-medium">Kakkalur, Tiruvallur</span>
                                </div>
                                <button
                                    onClick={() => handleNavClick('/contact', 'page')} // Changed to simple page navigation
                                    className="block w-full text-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-3 rounded-lg text-base font-semibold transition-colors duration-300 mt-2"
                                >
                                    Register Now
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            
            {/* Overlay for mobile menu */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/20 z-40 lg:hidden"
                    onClick={() => {
                        setIsOpen(false);
                        setActiveDropdown(null);
                    }}
                ></div>
            )}
        </nav>
    );
};

export default Navbar;