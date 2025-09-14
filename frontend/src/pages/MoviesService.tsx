import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Film, Camera, Edit, Award, CheckCircle, ArrowRight, Star, Clock, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import movie from "@/assets/cmaera.jpeg";

const MoviesService = () => {
    const [activeTab, setActiveTab] = useState("movies");
    const heroRef = useScrollAnimation();
    const servicesRef = useScrollAnimation();
    const projectsRef = useScrollAnimation();
    const processRef = useScrollAnimation();
    const pricingRef = useScrollAnimation();

    const services = [
        {
            id: "movies",
            name: "Movies & Films",
            icon: Film,
            description: "Full-length feature films and documentaries"
        },
        {
            id: "shorts",
            name: "Short Films",
            icon: Camera,
            description: "Creative short films and promotional content"
        },
        {
            id: "post",
            name: "Post-Production",
            icon: Edit,
            description: "Professional editing and visual effects"
        }
    ];

    const projects = [
        {
            title: "Manjadikunnile Mahasambhavam",
            category: "Web Series",
            link: "https://youtu.be/8Wk4Ut5bXJQ?si=cVkTqVJYeDS_2cct",
            description: "A compelling drama about life in the modern city",
            year: "2024"
        },
        {
            title: "Khajana",
            category: "Short Film",
            link: "https://youtu.be/IsCnaOF8404?si=cyHMHE38KlcMxQ0k",
            description: "An exploration of wildlife and natural beauty",
            year: "2022"
        },
        {
            title: "Estate Moola",
            category: "Web Series",
            link: "https://youtu.be/nvas-kH98mw?si=cCCVe7UHzRHnz-ph",
            description: "A sci-fi thriller about humanity's final hour",
            year: "2023"
        }
    ];

    const packages = [
        {
            name: "Trial Package",
            price: "Free",
            duration: "1 day",
            features: [
                "One location shoot",
                "2 hours of filming",
                "Basic editing",
                "720p video quality",
                "PF Media watermark",
                "Conditions Apply*"
            ],
            conditions: "*Limited to first-time clients, subject to availability"
        },
        {
            name: "Short Film Package",
            price: "₹5,000 - ₹15,000",
            duration: "2-5 days",
            features: [
                "Pre-production planning",
                "Professional camera crew",
                "Basic lighting setup",
                "Post-production editing",
                "Color correction",
                "Final delivery in HD"
            ]
        },
        {
            name: "Documentary Package",
            price: "₹15,000 - ₹50,000",
            duration: "2-8 weeks",
            features: [
                "Research and planning",
                "Multi-location shooting",
                "Interview setups",
                "Advanced audio recording",
                "Extensive post-production",
                "Multiple format delivery",
                "Distribution consultation"
            ],
            popular: true
        },
        {
            name: "Feature Film Package",
            price: "₹50,000+",
            duration: "3-12 months",
            features: [
                "Complete pre-production",
                "Professional cast and crew",
                "Advanced cinematography",
                "Multi-camera setups",
                "Complete post-production",
                "Sound design and mixing",
                "Distribution strategy",
                "Marketing materials"
            ]
        }
    ];

    const process = [
        { step: "01", title: "Concept Development", description: "We work with you to develop your story and vision" },
        { step: "02", title: "Pre-Production", description: "Script development, casting, location scouting, and planning" },
        { step: "03", title: "Production", description: "Professional filming with state-of-the-art equipment" },
        { step: "04", title: "Post-Production", description: "Editing, color grading, sound design, and visual effects" },
        { step: "05", title: "Delivery", description: "Final delivery in your preferred format and distribution" }
    ];

    const getYoutubeThumbnail = (url: string) => {
        const regex = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/;
        const match = url.match(regex);
        return match ? `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg` : "";
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50 to-slate-100">
            <Navigation />

            {/* Floating Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute top-40 right-20 w-16 h-16 bg-slate-300 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-40 left-20 w-12 h-12 bg-yellow-300 rounded-full opacity-35 animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 right-10 w-14 h-14 bg-slate-400 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '3s' }}></div>
            </div>

            {/* Hero Section */}
            <section ref={heroRef} className="relative pt-32 pb-20 px-4 overflow-hidden scroll-animate">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-in">
                            <Badge className="mb-6 bg-yellow-100 text-yellow-800 border-yellow-200">
                                Movies & Short Films
                            </Badge>
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-600 via-slate-800 to-black bg-clip-text text-transparent leading-tight">
                                Cinematic
                                <br />
                                <span className="text-slate-800">Storytelling</span>
                            </h1>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                From concept to screen, we create compelling visual narratives that captivate audiences
                                and bring your stories to life with professional cinematography and expert production.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-gradient-to-r from-yellow-600 to-slate-800 hover:from-yellow-700 hover:to-slate-900 text-white px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300">
                                    View Our Work
                                    <Play className="ml-2 h-5 w-5" />
                                </Button>
                                <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-2 border-slate-800 text-slate-800 hover:bg-yellow-50 transform hover:scale-105 transition-all duration-300">
                                    Get Quote
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                        <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
                            <div className="relative">
                                <img
                                    src={movie}
                                    alt="Professional film production"
                                    className="rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Categories */}
            <section ref={servicesRef} className="py-16 px-4 bg-white/80 backdrop-blur-sm scroll-animate">
                <div className="container mx-auto">
                    <div className="text-center mb-12 animate-fade-in">
                        <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
                        <p className="text-slate-600 text-lg">Professional film production services for every need</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <Card
                                    key={service.id}
                                    className="p-6 border-0 shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-yellow-50 transform hover:scale-105 transition-all duration-300 animate-fade-in cursor-pointer group"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                    onClick={() => setActiveTab(service.id)}
                                >
                                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-3 text-center group-hover:text-yellow-600 transition-colors">
                                        {service.name}
                                    </h3>
                                    <p className="text-slate-600 text-center">{service.description}</p>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section ref={projectsRef} className="py-20 px-4 scroll-animate">
                <div className="container mx-auto">
                    <div className="text-center mb-12 animate-fade-in">
                        <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
                        <p className="text-slate-600 text-lg">A showcase of our recent cinematic work</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <a
                                key={index}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Card
                                    key={project.title}
                                    className="overflow-hidden border-0 shadow-lg hover:shadow-2xl bg-white transform hover:scale-105 transition-all duration-300 animate-fade-in group"
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={getYoutubeThumbnail(project.link)}
                                            alt={project.title}
                                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <Button
                                            size="sm"
                                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-12 h-12 bg-white/90 hover:bg-white text-yellow-600 opacity-0 group-hover:opacity-100 transition-all duration-300"
                                        >
                                            <Play className="w-4 h-4 ml-0.5" />
                                        </Button>
                                        <div className="absolute top-4 right-4">
                                            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                                                {project.year}
                                            </Badge>
                                        </div>
                                    </div>
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <CardTitle className="text-lg group-hover:text-yellow-600 transition-colors">
                                                {project.title}
                                            </CardTitle>
                                        </div>
                                        <CardDescription className="text-yellow-600 font-medium">
                                            {project.category}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Production Process */}
            <section ref={processRef} className="py-16 px-4 bg-gradient-to-r from-slate-100 to-yellow-50 scroll-animate">
                <div className="container mx-auto">
                    <div className="text-center mb-12 animate-fade-in">
                        <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Production Process</h2>
                        <p className="text-slate-600 text-lg">From concept to completion, we guide you through every step</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {process.map((step, index) => (
                            <Card
                                key={step.step}
                                className="p-6 border-0 shadow-lg hover:shadow-xl bg-white/90 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 animate-fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                                        {step.step}
                                    </div>
                                    <h3 className="font-bold text-slate-800 mb-2">{step.title}</h3>
                                    <p className="text-sm text-slate-600">{step.description}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Packages */}
            <section ref={pricingRef} className="py-20 px-4 scroll-animate">
                <div className="container mx-auto">
                    <div className="text-center mb-12 animate-fade-in">
                        <h2 className="text-4xl font-bold text-slate-800 mb-4">Production Packages</h2>
                        <p className="text-slate-600 text-lg">Choose the perfect package for your project</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {packages.map((pkg, index) => (
                            <Card
                                key={pkg.name}
                                className={`relative p-8 border-0 shadow-lg hover:shadow-2xl bg-white transform hover:scale-105 transition-all duration-300 animate-fade-in ${pkg.popular ? 'ring-2 ring-yellow-500' : ''
                                    }`}
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <Badge className="bg-gradient-to-r from-yellow-600 to-slate-800 text-white px-4 py-1">
                                            Most Popular
                                        </Badge>
                                    </div>
                                )}
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{pkg.name}</h3>
                                    <div className="text-3xl font-bold text-yellow-600 mb-2">{pkg.price}</div>
                                    <div className="flex items-center justify-center text-slate-500">
                                        <Clock className="w-4 h-4 mr-1" />
                                        <span>{pkg.duration}</span>
                                    </div>
                                </div>
                                <div className="space-y-3 mb-8">
                                    {pkg.features.map((feature) => (
                                        <div key={feature} className="flex items-center">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                                            <span className="text-slate-700">{feature}</span>
                                        </div>
                                    ))}
                                    {pkg.conditions && (
                                        <div className="mt-4 text-xs text-slate-500 italic">
                                            {pkg.conditions}
                                        </div>
                                    )}
                                </div>
                                <Button
                                    className={`w-full transform hover:scale-105 transition-all duration-300 ${pkg.popular
                                        ? 'bg-gradient-to-r from-yellow-600 to-slate-800 hover:from-yellow-700 hover:to-slate-900 text-white'
                                        : 'bg-slate-800 hover:bg-slate-900 text-white'
                                        }`}
                                >
                                    Choose Package
                                </Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 bg-gradient-to-r from-slate-900 via-slate-800 to-black">
                <div className="container mx-auto text-center text-white">
                    <div className="animate-fade-in">
                        <h2 className="text-4xl font-bold mb-4">Ready to Create Your Film?</h2>
                        <p className="text-xl mb-8 opacity-90">Let's bring your vision to the big screen</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg bg-yellow-600 text-white hover:bg-yellow-700 transform hover:scale-105 transition-all duration-300">
                                Start Your Project
                            </Button>
                            <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transform hover:scale-105 transition-all duration-300">
                                View Portfolio
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MoviesService;