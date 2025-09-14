import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X, Film, Camera, Heart, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import pfLogo from "@/assets/pf.jpg"; // Adjust the path as necessary

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    const serviceItems = [
        {
            title: "Movies & Short Films",
            href: "/services/movies",
            description: "Professional movie production and short film creation",
            icon: <Film className="w-4 h-4" />
        },
        {
            title: "Advertising & Content Creation",
            href: "/services/advertising",
            description: "Commercial videos and branded content",
            icon: <Camera className="w-4 h-4" />
        },
        {
            title: "Rental Services",
            href: "/rental-services",
            description: "Professional equipment rental for your projects",
            icon: <Briefcase className="w-4 h-4" />
        },
        {
            title: "Wedding Photography & Videography",
            href: "/pf-wedding",
            description: "Capture your special day with cinematic storytelling",
            icon: <Heart className="w-4 h-4" />
        },
    ];

    return (
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="font-bold text-2xl text-primary">
                        <img src={pfLogo} alt="PF Media" className="h-12 w-auto group-hover:scale-105 transition-transform duration-300" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <Link
                                        to="/"
                                        className={cn(
                                            "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                                            isActive("/") ? "bg-accent text-primary rounded-md" : "text-gray-600"
                                        )}
                                    >
                                        Home
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link
                                        to="/about"
                                        className={cn(
                                            "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                                            isActive("/about") ? "bg-accent text-primary rounded-md" : "text-gray-600"
                                        )}
                                    >
                                        About Us
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-gray-600 hover:text-primary">
                                        Services
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid gap-3 p-6 w-[500px] grid-cols-1">
                                            {serviceItems.map((item) => (
                                                <NavigationMenuLink key={item.href} asChild>
                                                    <Link
                                                        to={item.href}
                                                        className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                                    >
                                                        <div className="text-primary mt-1">{item.icon}</div>
                                                        <div className="flex-1">
                                                            <div className="font-medium text-gray-900 group-hover:text-primary">
                                                                {item.title}
                                                            </div>
                                                            <div className="text-sm text-gray-600 mt-1">
                                                                {item.description}
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                            ))}
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link
                                        to="/rental-services"
                                        className={cn(
                                            "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                                            isActive("/rental-services") ? "bg-accent text-primary rounded-md" : "text-gray-600"
                                        )}
                                    >
                                        Rental Services
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link
                                        to="/pf-wedding"
                                        className={cn(
                                            "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                                            isActive("/pf-wedding") ? "bg-accent text-primary rounded-md" : "text-gray-600"
                                        )}
                                    >
                                        PF WedMovies
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link
                                        to="/contact"
                                        className={cn(
                                            "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                                            isActive("/contact") ? "bg-accent text-primary rounded-md" : "text-gray-600"
                                        )}
                                    >
                                        Contact Us
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>

                        <Button asChild>
                            <Link to="/contact">Get Quote</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </Button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-2">
                            <Link to="/" className="px-3 py-2 text-gray-600 hover:text-primary">Home</Link>
                            <Link to="/about" className="px-3 py-2 text-gray-600 hover:text-primary">About Us</Link>
                            <div className="px-3 py-2">
                                <div className="font-medium text-gray-900 mb-2">Services</div>
                                <div className="pl-4 space-y-2">
                                    {serviceItems.map((item) => (
                                        <Link
                                            key={item.href}
                                            to={item.href}
                                            className="block text-sm text-gray-600 hover:text-primary"
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <Link to="/pf-wedding" className="px-3 py-2 text-gray-600 hover:text-primary">PF Wedding</Link>
                            <Link to="/rental-services" className="px-3 py-2 text-gray-600 hover:text-primary">Rental Services</Link>

                            <Link to="/contact" className="px-3 py-2 text-gray-600 hover:text-primary">Contact Us</Link>
                            <Button asChild className="mx-3 mt-4">
                                <Link to="/contact">Get Quote</Link>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;