import { Link } from "react-router-dom";
import { Youtube, Instagram, Film, Camera, Heart, Briefcase, Phone, Mail } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const serviceLinks = [
        { title: "Movies & Short Films", href: "/services/movies", icon: <Film className="w-4 h-4" /> },
        { title: "Advertising & Content", href: "/services/advertising", icon: <Camera className="w-4 h-4" /> },
        { title: "Rental Services", href: "/rental-services", icon: <Briefcase className="w-4 h-4" /> },
        { title: "Wedding Services", href: "/pf-wedding", icon: <Heart className="w-4 h-4" /> },
    ];

    const quickLinks = [
        { title: "Home", href: "/" },
        { title: "About Us", href: "/about" },
        { title: "Contact", href: "/contact" }
    ];

    return (
        <footer className="bg-gray-900 border-t border-gray-700 mt-20 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-yellow-400">PF Media</h3>
                        <p className="text-gray-300">
                            Bringing Stories to Life - Professional media production services for all your creative needs.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-yellow-400 transition-colors"
                            >
                                <Youtube className="w-5 h-5" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-yellow-400 transition-colors"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Services</h4>
                        <ul className="space-y-2">
                            {serviceLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        to={link.href}
                                        className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
                                    >
                                        {link.icon}
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        to={link.href}
                                        className="text-gray-300 hover:text-yellow-400 transition-colors"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Contact</h4>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-gray-300">
                                <Phone className="w-4 h-4" />
                                <span>+91 9876543210</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                                <Mail className="w-4 h-4" />
                                <span>info@pfmedia.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-gray-400">
                        © {currentYear} PF Media. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;