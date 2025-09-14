import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Navigation from "@/components/Navigation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Heart, Camera, Film, Clock, Star, Phone, Mail, MapPin, Sparkles } from "lucide-react";

const PFWedding = () => {
    const packagesRef = useScrollAnimation();
    const galleryRef = useScrollAnimation();
    const bookingRef = useScrollAnimation();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        venue: "",
        package: "",
        message: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Wedding booking form submitted:", formData);
        // Handle form submission here
    };

    const packages = [
        {
            name: "Essential",
            price: "₹25,000",
            duration: "6 hours",
            features: [
                "Pre-wedding consultation",
                "6 hours of wedding day coverage",
                "200+ edited photos",
                "Online gallery",
                "USB with all images"
            ]
        },
        {
            name: "Premium",
            price: "₹45,000",
            duration: "8 hours",
            features: [
                "Everything in Essential",
                "8 hours of coverage",
                "Engagement session",
                "300+ edited photos",
                "Wedding highlight video (3-5 min)",
                "Premium album design"
            ],
            popular: true
        },
        {
            name: "Luxury",
            price: "₹75,000",
            duration: "Full day",
            features: [
                "Everything in Premium",
                "Full day coverage",
                "Second photographer",
                "500+ edited photos",
                "Full ceremony & reception video",
                "Luxury album + prints",
                "Drone footage (if permitted)"
            ]
        }
    ];

    const galleryImages = [
        {
            src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop",
            alt: "Romantic wedding ceremony"
        },
        {
            src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
            alt: "Wedding couple portrait"
        },
        {
            src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=600&fit=crop",
            alt: "Wedding reception"
        },
        {
            src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=600&fit=crop",
            alt: "Wedding details"
        },
        {
            src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop",
            alt: "Bridal photography"
        }
    ];

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navigation />

            {/* Hero Section with Carousel */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Carousel */}
                <Carousel className="absolute inset-0 w-full h-full">
                    <CarouselContent>
                        {galleryImages.map((image, index) => (
                            <CarouselItem key={index} className="min-w-0 shrink-0 grow-0 basis-full">
                                <div
                                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-[20s] hover:scale-110"
                                    style={{ backgroundImage: `url('${image.src}')` }}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 z-20" />
                    <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 z-20" />
                </Carousel>

                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

                {/* Floating hearts animation */}
                <div className="absolute inset-0 pointer-events-none">
                    <Heart className="absolute top-20 left-10 w-4 h-4 text-yellow-300/40 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
                    <Heart className="absolute top-32 right-20 w-3 h-3 text-yellow-200/50 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
                    <Heart className="absolute bottom-40 left-1/4 w-5 h-5 text-yellow-400/30 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }} />
                    <Sparkles className="absolute top-1/3 right-1/3 w-6 h-6 text-yellow-200/40 animate-pulse" style={{ animationDelay: '1.5s' }} />
                </div>

                <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 animate-fade-in">
                    {/* <div className="flex items-center justify-center mb-8 group">
                        <Heart className="w-10 h-10 mr-4 text-yellow-400 transition-all duration-300 group-hover:scale-125 group-hover:text-yellow-300" />
                        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                            PF Wedding
                        </h1>
                        <Heart className="w-10 h-10 ml-4 text-yellow-400 transition-all duration-300 group-hover:scale-125 group-hover:text-yellow-300" />
                    </div> */}

                    {/* Wedding Services Banner */}
                    <div className="bg-gradient-to-r from-yellow-500/20 via-yellow-400/30 to-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-8 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                        <p className="text-2xl md:text-3xl mb-4 font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                            Cinematic Wedding Storytelling
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm md:text-base">
                            <div className="flex flex-col items-center group cursor-pointer">
                                <Camera className="w-8 h-8 mb-2 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                                <span className="font-semibold">Photography</span>
                            </div>
                            <div className="flex flex-col items-center group cursor-pointer">
                                <Film className="w-8 h-8 mb-2 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                                <span className="font-semibold">Videography</span>
                            </div>
                            <div className="flex flex-col items-center group cursor-pointer">
                                <Sparkles className="w-8 h-8 mb-2 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                                <span className="font-semibold">Drone Coverage</span>
                            </div>
                        </div>
                    </div>

                    <p className="text-xl md:text-2xl mb-8 font-light opacity-0 animate-fade-in max-w-4xl mx-auto leading-relaxed" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                        From intimate ceremonies to grand celebrations, we create timeless memories
                        that reflect the unique beauty and emotion of your special day with cinematic excellence.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                        <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-10 py-4 text-lg font-bold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            View Our Portfolio
                            <Camera className="ml-3 w-6 h-6" />
                        </Button>
                        <Button size="lg" variant="outline" className="border-2 border-white text-black hover:bg-white hover:text-black px-10 py-4 text-lg font-semibold transform transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                            Book Consultation
                            <Heart className="ml-3 w-6 h-6" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Wedding Packages */}
            <section ref={packagesRef} className="py-20 px-4 bg-gradient-to-b from-white to-rose-50/30 scroll-animate">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-800 to-rose-800 bg-clip-text text-transparent">
                            Wedding Packages
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Choose the perfect package for your special day. Each package is designed
                            to capture every precious moment with professional excellence.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {packages.map((pkg, index) => (
                            <Card
                                key={index}
                                className={`relative transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group ${pkg.popular
                                    ? 'ring-2 ring-rose-500 scale-105 shadow-xl'
                                    : 'hover:shadow-xl'
                                    } animate-fade-in`}
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <CardHeader className="text-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-rose-50/0 to-rose-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <CardTitle className="text-2xl font-bold text-gray-900 relative z-10 group-hover:text-rose-700 transition-colors duration-300">
                                        {pkg.name}
                                    </CardTitle>
                                    <div className="text-3xl font-bold text-rose-600 mb-2 relative z-10 group-hover:scale-110 transition-transform duration-300">
                                        {pkg.price}
                                    </div>
                                    <CardDescription className="flex items-center justify-center relative z-10">
                                        <Clock className="w-4 h-4 mr-2 group-hover:text-rose-500 transition-colors duration-300" />
                                        {pkg.duration}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="relative">
                                    <ul className="space-y-3">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start group/item">
                                                <Star className="w-5 h-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200" />
                                                <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button
                                        className={`w-full mt-6 transform transition-all duration-300 hover:scale-105 ${pkg.popular
                                            ? 'bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 shadow-lg'
                                            : 'hover:shadow-lg'
                                            }`}
                                        variant={pkg.popular ? 'default' : 'outline'}
                                    >
                                        Choose {pkg.name}
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Showcase */}
            <section ref={galleryRef} className="py-20 px-4 bg-gradient-to-b from-rose-50/30 to-gray-50 scroll-animate">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-800 to-rose-800 bg-clip-text text-transparent">
                            Wedding Gallery
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            A glimpse into the beautiful moments we've captured for couples like you.
                        </p>
                    </div>

                    <Carousel className="w-full max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <CarouselContent>
                            {galleryImages.map((image, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-2">
                                        <div className="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                            <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                                <p className="text-sm font-medium">{image.alt}</p>
                                            </div>
                                            {/* Floating heart on hover */}
                                            <Heart className="absolute top-4 right-4 w-6 h-6 text-white opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300" />
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hover:scale-110 transition-transform duration-200" />
                        <CarouselNext className="hover:scale-110 transition-transform duration-200" />
                    </Carousel>

                    <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-rose-500 text-rose-600 hover:bg-rose-50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            onClick={() => window.location.href = '/gallery'}
                        >
                            View Full Portfolio
                        </Button>
                    </div>
                </div>
            </section>

            {/* Booking Section */}
            <section ref={bookingRef} className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white scroll-animate">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-800 to-rose-800 bg-clip-text text-transparent">
                            Book Your Wedding
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Ready to start planning? Fill out the form below and we'll get back to you
                            within 24 hours to discuss your special day.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <Card className="animate-fade-in hover:shadow-xl transition-all duration-500" style={{ animationDelay: '0.2s' }}>
                            <CardHeader>
                                <CardTitle className="text-2xl text-gray-900">Get In Touch</CardTitle>
                                <CardDescription>
                                    Tell us about your wedding vision and we'll create a custom package for you.
                                </CardDescription>
                            </CardHeader>

                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="group">
                                            <Label htmlFor="name" className="group-focus-within:text-rose-600 transition-colors duration-200">Full Name *</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="mt-1 transition-all duration-200 focus:ring-rose-500 focus:border-rose-500 hover:border-rose-300"
                                            />
                                        </div>
                                        <div className="group">
                                            <Label htmlFor="email" className="group-focus-within:text-rose-600 transition-colors duration-200">Email *</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="mt-1 transition-all duration-200 focus:ring-rose-500 focus:border-rose-500 hover:border-rose-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="group">
                                            <Label htmlFor="phone" className="group-focus-within:text-rose-600 transition-colors duration-200">Phone Number</Label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="mt-1 transition-all duration-200 focus:ring-rose-500 focus:border-rose-500 hover:border-rose-300"
                                            />
                                        </div>
                                        <div className="group">
                                            <Label htmlFor="date" className="group-focus-within:text-rose-600 transition-colors duration-200">Wedding Date</Label>
                                            <Input
                                                id="date"
                                                name="date"
                                                type="date"
                                                value={formData.date}
                                                onChange={handleInputChange}
                                                className="mt-1 transition-all duration-200 focus:ring-rose-500 focus:border-rose-500 hover:border-rose-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="group">
                                            <Label htmlFor="venue" className="group-focus-within:text-rose-600 transition-colors duration-200">Wedding Venue</Label>
                                            <Input
                                                id="venue"
                                                name="venue"
                                                value={formData.venue}
                                                onChange={handleInputChange}
                                                className="mt-1 transition-all duration-200 focus:ring-rose-500 focus:border-rose-500 hover:border-rose-300"
                                                placeholder="Venue name or location"
                                            />
                                        </div>
                                        <div className="group">
                                            <Label htmlFor="package" className="group-focus-within:text-rose-600 transition-colors duration-200">Interested Package</Label>
                                            <select
                                                id="package"
                                                name="package"
                                                value={formData.package}
                                                onChange={handleInputChange}
                                                className="mt-1 w-full h-10 px-3 py-2 text-sm rounded-md border border-input bg-background transition-all duration-200 focus:ring-rose-500 focus:border-rose-500 hover:border-rose-300"
                                            >
                                                <option value="">Select a package</option>
                                                <option value="essential">Essential - ₹25,000</option>
                                                <option value="premium">Premium - ₹45,000</option>
                                                <option value="luxury">Luxury - ₹75,000</option>
                                                <option value="custom">Custom Package</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="group">
                                        <Label htmlFor="message" className="group-focus-within:text-rose-600 transition-colors duration-200">Tell us about your wedding</Label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className="mt-1 w-full px-3 py-2 text-sm rounded-md border border-input bg-background transition-all duration-200 focus:ring-rose-500 focus:border-rose-500 hover:border-rose-300"
                                            placeholder="Share your vision, style preferences, special requests..."
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                    >
                                        Send Inquiry
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <Card className="animate-fade-in hover:shadow-lg transition-all duration-300 group" style={{ animationDelay: '0.4s' }}>
                                <CardHeader>
                                    <CardTitle className="text-xl text-gray-900 group-hover:text-rose-700 transition-colors duration-300">Contact Information</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center group/item">
                                        <Phone className="w-5 h-5 text-rose-600 mr-3 group-hover/item:scale-110 transition-transform duration-200" />
                                        <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">+91 9876543210</span>
                                    </div>
                                    <div className="flex items-center group/item">
                                        <Mail className="w-5 h-5 text-rose-600 mr-3 group-hover/item:scale-110 transition-transform duration-200" />
                                        <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">weddings@pfmedia.com</span>
                                    </div>
                                    <div className="flex items-center group/item">
                                        <MapPin className="w-5 h-5 text-rose-600 mr-3 group-hover/item:scale-110 transition-transform duration-200" />
                                        <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">Kerala</span>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="animate-fade-in hover:shadow-lg transition-all duration-300 group" style={{ animationDelay: '0.6s' }}>
                                <CardHeader>
                                    <CardTitle className="text-xl text-gray-900 group-hover:text-rose-700 transition-colors duration-300">Why Choose PF Wedding?</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-start group/item">
                                        <Camera className="w-5 h-5 text-rose-600 mr-3 mt-0.5 group-hover/item:scale-110 transition-transform duration-200" />
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover/item:text-rose-700 transition-colors duration-200">Cinematic Style</h4>
                                            <p className="text-sm text-gray-600">Film-inspired approach with artistic flair</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start group/item">
                                        <Film className="w-5 h-5 text-rose-600 mr-3 mt-0.5 group-hover/item:scale-110 transition-transform duration-200" />
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover/item:text-rose-700 transition-colors duration-200">Full Service</h4>
                                            <p className="text-sm text-gray-600">Photography and videography in one package</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start group/item">
                                        <Heart className="w-5 h-5 text-rose-600 mr-3 mt-0.5 group-hover/item:scale-110 transition-transform duration-200" />
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover/item:text-rose-700 transition-colors duration-200">Personal Touch</h4>
                                            <p className="text-sm text-gray-600">Every couple gets a unique, personalized experience</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PFWedding;
