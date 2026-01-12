"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import logo from '@/assets/logo.png';
import { ABOUT_LABEL } from '@/data/navigationLabels';

// Removed: useHero3DEffect import (Not needed for fixed nav)

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    
    // Pages with light/white backgrounds that need dark text in header
    const lightBackgroundPages = ['/Workshop', '/about', '/inscription', '/projects', '/privacy-policy', '/terms-of-use', '/faq'];
    const hasLightBackground = lightBackgroundPages.some(page => pathname.startsWith(page));
    
    // Determine if header should use light theme (white bg, dark text)
    const shouldUseLightTheme = isScrolled || hasLightBackground;
    
    // Removed: headerRef and hero3DContext logic

    // Handle scroll detection for transparent/solid navbar
    useEffect(() => {
        const handleScroll = () => {
            // Changed from 50 to 10 to react faster to the slide-over animation
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
        setIsProjectsDropdownOpen(false);
    }, [pathname]);

    const navigation = [
        { name: 'Accueil', href: '/' },
        { name: ABOUT_LABEL, href: '/about' },
        { 
            name: 'Projets', 
            href: '/projects',
            hasDropdown: true,
            dropdownItems: [
                { name: 'Tous les projets', href: '/projects' },
                { name: 'Site Web', href: '/projects/siteinternet' },
                { name: 'Mentoring', href: '/projects/mentoring' },
                { name: 'ChatBot', href: '/projects/codexchatbot' },
            ] 
        },
        { name: 'Workshop', href: '/Workshop' },
    ];

    const ctaLink = { name: 'Nous Rejoindre', href: '/inscription' };

    const isActivePath = (path) => {
        if (path === '/' && pathname === '/') return true;
        return pathname.startsWith(path) && path !== '/';
    };

    return (
        <nav 
            // Removed ref={headerRef} and style={{ transformStyle... }}
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        >
            <div className={`transition-all duration-300 ${
                shouldUseLightTheme 
                    ? 'mx-0 md:mx-4 lg:mx-8 xl:mx-16 mt-0 md:mt-3 bg-white/95 backdrop-blur-md rounded-none md:rounded-full shadow-lg border-0 md:border border-gray-100'
                    : 'mx-0 bg-transparent'
            }`}>
                <div className={`container-custom mx-auto flex items-center justify-between px-6 transition-all duration-300 ${
                    shouldUseLightTheme ? 'h-14' : 'h-20'
                }`}>
                    {/* Logo - Hidden on mobile when menu is open */}
                    <Link 
                        href="/" 
                        className={`flex items-center gap-2 hover:opacity-90 transition-opacity ${
                            isMenuOpen ? 'md:flex hidden' : 'flex'
                        }`}
                    >
                        <Image 
                            src={logo} 
                            alt="CODEX" 
                            width={isScrolled ? 40 : 50} 
                            height={isScrolled ? 40 : 50} 
                            priority 
                            className="transition-all duration-300" 
                        />
                        <span className={`font-bold transition-all duration-300 ${
                            shouldUseLightTheme ? 'text-2xl text-orange-500' : 'text-3xl text-white'
                        }`}>CODEX</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className={`hidden md:flex items-center transition-all duration-300 ${shouldUseLightTheme ? 'space-x-6' : 'space-x-8'}`}>
                        {navigation.map((item) => (
                            <div key={item.name} className="relative group">
                                {item.hasDropdown ? (
                                    <>
                                        <button
                                            onClick={() => setIsProjectsDropdownOpen(!isProjectsDropdownOpen)}
                                            className={`flex items-center py-2 transition-all duration-300 font-medium
                                                ${shouldUseLightTheme ? 'text-sm' : 'text-base'}
                                                ${isActivePath(item.href)
                                                    ? 'text-orange-500'
                                                    : shouldUseLightTheme 
                                                        ? 'text-gray-700 hover:text-orange-500' 
                                                        : 'text-white/90 hover:text-white'
                                                }
                                                group
                                            `}
                                        >
                                            {item.name}
                                            <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isProjectsDropdownOpen ? 'rotate-180' : ''}`} />
                                            
                                            {/* Underline Animation */}
                                            <span 
                                                className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-all duration-300
                                                    ${isActivePath(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                                                    ${shouldUseLightTheme ? 'bg-orange-500' : 'bg-white'}
                                                `}
                                            />
                                        </button>
                                        
                                        {/* Dropdown Menu */}
                                        {isProjectsDropdownOpen && (
                                            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-1">
                                                {item.dropdownItems.map((dropdownItem) => (
                                                    <Link
                                                        key={dropdownItem.name}
                                                        href={dropdownItem.href}
                                                        className={`block px-4 py-2 text-sm transition-colors
                                                            ${isActivePath(dropdownItem.href)
                                                                ? 'text-orange-500 bg-orange-50 font-medium'
                                                                : 'text-gray-600 hover:text-orange-500 hover:bg-gray-50'
                                                            }
                                                        `}
                                                        onClick={() => setIsProjectsDropdownOpen(false)}
                                                    >
                                                        {dropdownItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`relative py-2 transition-all duration-300 font-medium
                                            ${shouldUseLightTheme ? 'text-sm' : 'text-base'}
                                            ${isActivePath(item.href)
                                                ? 'text-orange-500'
                                                : shouldUseLightTheme 
                                                    ? 'text-gray-700 hover:text-orange-500' 
                                                    : 'text-white/90 hover:text-white'
                                            }
                                            group
                                        `}
                                    >
                                        {item.name}
                                        <span 
                                            className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-all duration-300
                                                ${isActivePath(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                                                ${shouldUseLightTheme ? 'bg-orange-500' : 'bg-white'}
                                            `}
                                        />
                                    </Link>
                                )}
                            </div>
                        ))}
                        
                        {/* CTA Button */}
                        <Link 
                            href={ctaLink.href}
                            className={`ml-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                                shouldUseLightTheme ? 'px-5 py-2 text-sm' : 'px-6 py-2.5 text-base'
                            }`}
                        >
                            {ctaLink.name}
                        </Link>
                    </div>

                    {/* Mobile Menu Button - Hidden when menu is open */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`md:hidden p-2 rounded-md transition-colors duration-300 ${
                            isMenuOpen ? 'hidden' : 'block'
                        } ${
                            shouldUseLightTheme 
                                ? 'text-gray-800 hover:bg-gray-100' 
                                : 'text-white hover:bg-white/10'
                        }`}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {/* 
                    This is the mobile menu container that appears when the hamburger menu is clicked.
                    It's only visible on mobile devices (md:hidden = hidden on medium screens and up).
                */}
                <div 
                    className={`
                        md:hidden 
                        overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out
                        ${isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'}
                        ${shouldUseLightTheme 
                            ? 'bg-white/95 backdrop-blur-md border-t border-gray-100 rounded-b-[2rem]' 
                            : 'bg-white rounded-2xl mt-2 shadow-xl'
                        }
                    `}
                >
                    {/* 
                        Mobile Menu Header Section
                        Contains the CODEX logo and the close (X) button at the top of the menu.
                        This header is always visible when the menu is open.
                    */}
                    <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
                        {/* Logo Link - Clicking it navigates to home and closes the menu */}
                        <Link 
                            href="/" 
                            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Image 
                                src={logo} 
                                alt="CODEX" 
                                width={40} 
                                height={40} 
                                priority 
                                className="transition-all duration-300" 
                            />
                            <span className="font-bold text-2xl text-orange-500">CODEX</span>
                        </Link>
                        {/* Close Button - Clicking the X icon closes the mobile menu */}
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="p-2 rounded-md transition-colors duration-300 text-gray-800 hover:bg-gray-100"
                            aria-label="Close menu"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>
                    
                    {/* 
                        Navigation Items Container
                        This section contains all the menu items (Accueil, À propos, Projets, Workshop)
                        and the "Nous Rejoindre" button at the bottom.
                    */}
                    <div className="px-4 py-4 space-y-2">
                        {/* 
                            Loop through each navigation item and render it.
                            Each item can be either a simple link or a dropdown menu.
                        */}
                        {navigation.map((item) => (
                            <div key={item.name}>
                                {/* 
                                    Check if this navigation item has a dropdown menu (like "Projets").
                                    - If hasDropdown is true: Show a button with chevron that toggles submenu
                                    - If hasDropdown is false: Show a simple navigation link (Accueil, À propos, Workshop)
                                    Active items are highlighted with orange text and background.
                                */}
                                {item.hasDropdown ? (
                                    <>
                                        {/* 
                                            Dropdown Button
                                            This button toggles the dropdown menu open/closed.
                                            Shows a chevron icon that rotates when the dropdown is open.
                                        */}
                                        <button
                                            onClick={() => setIsProjectsDropdownOpen(!isProjectsDropdownOpen)}
                                            className={`w-full text-left flex justify-between items-center px-4 py-2 rounded-lg transition-colors ${
                                                isActivePath(item.href) ? 'text-orange-500 bg-orange-50' : 'text-gray-700 hover:bg-gray-50'
                                            }`}
                                        >
                                            {item.name}
                                            {/* Chevron icon rotates 180 degrees when dropdown is open */}
                                            <ChevronDown className={`w-4 h-4 transition-transform ${isProjectsDropdownOpen ? 'rotate-180' : ''}`} />
                                        </button>
                                        
                                        {/* 
                                            Dropdown Submenu Container
                                            This contains the submenu items (Tous les projets, Site Web, etc.)
                                            It animates open/closed using max-height transition.
                                        */}
                                        <div className={`overflow-hidden transition-all duration-300 ${isProjectsDropdownOpen ? 'max-h-40 mt-1' : 'max-h-0'}`}>
                                            {/* 
                                                Submenu Items
                                                These are indented with a left border to show they're sub-items.
                                            */}
                                            <div className="pl-4 space-y-1 border-l-2 border-gray-100 ml-4">
                                                {item.dropdownItems.map((dropdownItem) => (
                                                    <Link
                                                        key={dropdownItem.name}
                                                        href={dropdownItem.href}
                                                        className="block px-4 py-2 text-sm text-gray-600 hover:text-orange-500 rounded-md"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        {dropdownItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`block px-4 py-2 rounded-lg transition-colors ${
                                            isActivePath(item.href) ? 'text-orange-500 bg-orange-50' : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        {/* 
                            Call-to-Action Button
                            The "Nous Rejoindre" (Join Us) button at the bottom of the menu.
                            It's styled prominently with orange background and full width.
                        */}
                        <Link
                            href={ctaLink.href}
                            className="block w-full text-center mt-4 px-4 py-3 bg-orange-500 text-white font-semibold rounded-xl shadow-md active:scale-95 transition-transform"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {ctaLink.name}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
