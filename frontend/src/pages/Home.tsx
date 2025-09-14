import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, Camera, Video, Heart, Rocket, Users, Star, Sparkles, Play, Award, Film } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Home = () => {
    const aboutRef = useScrollAnimation();
    const servicesRef = useScrollAnimation();
    const portfolioRef = useScrollAnimation();
    const testimonialsRef = useScrollAnimation();

    const services = [
        {
            icon: <Film className="w-8 h-8" />,
            title: "Movies & Short Films",
            description: "Professional video content that tells your story and engages your audience.",
            link: "/services/movies"
        },
        {
            icon: <Camera className="w-8 h-8" />,
            title: "Rental Services",
            description: "Access industry-standard cameras, lighting, and audio equipment for your next project.",
            link: "/rental-services"
        },
        {
            icon: <Video className="w-8 h-8" />,
            title: "Advertising & Content",
            description: "Creative visual solutions that bring your brand to life with impact.",
            link: "/services/advertising"
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Wedding Services",
            description: "Stunning photography that captures moments and creates lasting impressions.",
            link: "/pf-wedding"
        },
    ];

    const portfolioItems = [
        {
            title: "Musical Album",
            category: "Album",
            video: "https://youtu.be/BMsC4H7rNbU?si=Fz6rMhrAmTfm_k9P"
        },
        {
            title: "The Award Winner",
            category: "Short Film",
            video: "https://youtu.be/JWvjIWqFq3g?si=sFy1bIbk4bwHIi4u"
        },
        {
            title: "The Creative Cut",
            category: "Short Film",
            video: "https://youtu.be/C-GEru_PhjU?si=Jme0Nk1UTuYERUrp"
        },
        {
            title: "Suspense Thriller",
            category: "Web Series",
            video: "https://youtu.be/td4QP87LBWs?si=wiBfyfBt1o3Zrwad"
        }
    ];

    const testimonials = [
        {
            name: "Johnson",
            company: "TechCorp Inc.",
            content: "PF Media delivered exceptional results that exceeded our expectations. Their creative vision and technical expertise are unmatched.",
            rating: 5
        },
        {
            name: "Michael Chen",
            company: "Creative Studios",
            content: "Working with PF Media was a game-changer for our brand. They brought our vision to life with incredible attention to detail.",
            rating: 5
        },
        {
            name: "Emily Rodriguez",
            company: "Global Ventures",
            content: "The team at PF Media is professional, creative, and delivers on time. We couldn't be happier with the results.",
            rating: 5
        }
    ];

    const getYoutubeThumbnail = (url: string) => {
        const regex = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/;
        const match = url.match(regex);
        return match ? `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg` : "";
    };

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navigation />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Geometric Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-500 via-gray-400 to-gray-600">
                    {/* Geometric shapes */}
                    <div className="absolute inset-0">
                        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-gray-300/20 rotate-45 transform"></div>
                        <div className="absolute top-1/3 right-1/3 w-24 h-24 border-2 border-gray-300/20 rotate-12 transform"></div>
                        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 border-2 border-gray-300/20 -rotate-12 transform"></div>
                        <div className="absolute bottom-1/3 right-1/4 w-28 h-28 border-2 border-gray-300/20 rotate-45 transform"></div>
                        <div className="absolute top-1/2 left-1/2 w-36 h-36 border-2 border-gray-300/20 -rotate-45 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                </div>

                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Bringing Stories to Life
                    </h1>

                    <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
                        We create compelling visual narratives that captivate and inspire audiences across all platforms.
                    </p>

                    <Button
                        size="lg"
                        className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg font-medium transform transition-all duration-300 hover:scale-105"
                    >
                        Explore Our Work
                    </Button>
                </div>
            </section>

            {/* About PF Media Section */}
            <section ref={aboutRef} className="py-20 bg-gradient-to-br from-white via-yellow-50/30 to-gray-50/30 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-yellow-400/10 to-black/5 rounded-full blur-xl" />
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-black/5 to-yellow-400/10 rounded-full blur-xl" />

                <div className="container mx-auto px-4 relative">
                    <div className="max-w-5xl mx-auto text-center animate-fade-in">
                        <div className="flex items-center justify-center mb-6">
                            <Award className="w-8 h-8 mr-3 text-yellow-600" />
                            <h2 className="text-5xl font-bold bg-gradient-to-r from-black via-yellow-700 to-gray-800 bg-clip-text text-transparent">
                                About PF Media
                            </h2>
                        </div>
                        <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto font-light">
                            We are a creative media production company passionate about telling stories that matter.
                            With years of experience in video production, photography, design, and digital solutions,
                            we help brands connect with their audiences through compelling visual content.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="text-center group">
                                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                                    <Video className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">50+</h3>
                                <p className="text-gray-600">Projects Completed</p>
                            </div>
                            <div className="text-center group">
                                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                                    <Users className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">30+</h3>
                                <p className="text-gray-600">Happy Clients</p>
                            </div>
                            <div className="text-center group">
                                <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                                    <Award className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">5+</h3>
                                <p className="text-gray-600">Awards Won</p>
                            </div>
                        </div>
                        <Button variant="outline" size="lg" className="bg-black text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-700">
                            Read More About Us
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section ref={servicesRef} className="py-20 bg-gradient-to-b from-white to-gray-50/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-black via-yellow-700 to-gray-800 bg-clip-text text-transparent">
                            Our Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            From concept to completion, we offer comprehensive media solutions tailored to your needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <Card
                                key={index}
                                className={`hover:shadow-2xl transition-all duration-500 cursor-pointer group hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50/50 relative overflow-hidden animate-fade-in`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Hover background effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/0 via-gray-50/0 to-yellow-100/0 group-hover:from-yellow-50/50 group-hover:via-gray-50/30 group-hover:to-yellow-100/50 transition-all duration-500" />

                                <CardHeader className="text-center relative z-10">
                                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                                        <div className="text-white group-hover:scale-110 transition-transform duration-300">
                                            {service.icon}
                                        </div>
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-yellow-700 transition-colors duration-300">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <CardDescription className="text-center mb-6 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                                        {service.description}
                                    </CardDescription>
                                    <a href={service.link} className="block" rel="noopener noreferrer">
                                        <Button
                                            variant="ghost"
                                            className="w-full border bg-black text-white group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-yellow-700 group-hover:text-white transition-all duration-300 hover:shadow-lg transform group-hover:scale-105"
                                        >
                                            Learn More
                                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                        </Button>
                                    </a>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Showcase */}
            <section ref={portfolioRef} className="py-20 bg-gradient-to-br from-gray-50 via-yellow-50/20 to-black/5 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-br from-yellow-400/10 to-black/10 rounded-full blur-xl" />
                <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-black/10 to-yellow-400/10 rounded-full blur-xl" />

                <div className="container mx-auto px-4 relative">
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-black via-yellow-700 to-gray-800 bg-clip-text text-transparent">
                            Latest Work
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Explore our recent projects and see how we bring creative visions to life
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {portfolioItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.video}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Card
                                    key={index}
                                    className={`overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer group hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm animate-fade-in`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <AspectRatio ratio={16 / 10} className="relative overflow-hidden">
                                        <img
                                            src={getYoutubeThumbnail(item.video)}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 group-hover:brightness-110"
                                        />
                                        {/* Overlay effect */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                        <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            <p className="text-sm font-medium">View Project</p>
                                        </div>
                                        {/* Play icon for hover */}
                                        <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-white opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300 bg-black/30 rounded-full p-3" />
                                    </AspectRatio>
                                    <CardContent className="p-4 relative">
                                        <CardTitle className="text-lg mb-2 group-hover:text-yellow-700 transition-colors duration-300">{item.title}</CardTitle>
                                        <CardDescription className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{item.category}</CardDescription>
                                    </CardContent>
                                </Card>
                            </a>
                        ))}
                    </div>

                    <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                        <a
                            href="https://www.youtube.com/@pfruitmedia"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button size="lg" variant="outline" className="bg-black text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-700">
                                View Full Portfolio
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section ref={testimonialsRef} className="py-20 bg-gradient-to-b from-white to-yellow-50/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-black via-yellow-700 to-gray-800 bg-clip-text text-transparent">
                            What Our Clients Say
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Don't just take our word for it - hear from the brands we've helped succeed
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <Carousel className="w-full">
                            <CarouselContent>
                                {testimonials.map((testimonial, index) => (
                                    <CarouselItem key={index}>
                                        <Card className="mx-4 border-0 bg-gradient-to-br from-white to-yellow-50/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                                            <CardContent className="p-10 text-center relative overflow-hidden">
                                                {/* Background decorative element */}
                                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400/10 to-black/10 rounded-full blur-xl" />

                                                <div className="flex justify-center mb-6">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 transition-transform duration-300 hover:scale-110" />
                                                    ))}
                                                </div>
                                                <blockquote className="text-xl italic mb-8 text-gray-700 leading-relaxed relative z-10">
                                                    "{testimonial.content}"
                                                </blockquote>
                                                <div className="flex items-center justify-center space-x-4 relative z-10">
                                                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full flex items-center justify-center">
                                                        <Users className="w-6 h-6 text-white" />
                                                    </div>
                                                    <div className="text-left">
                                                        <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                                                        <div className="text-gray-600">{testimonial.company}</div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="hover:scale-110 transition-transform duration-200" />
                            <CarouselNext className="hover:scale-110 transition-transform duration-200" />
                        </Carousel>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-20 bg-gradient-to-br from-yellow-50 via-yellow-100/30 to-yellow-200/20 text-gray-900 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <Sparkles className="absolute top-20 left-20 w-6 h-6 text-gray-300/30 animate-pulse" style={{ animationDelay: '0s' }} />
                    <Sparkles className="absolute bottom-20 right-20 w-4 h-4 text-yellow-400/40 animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-gray-300/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-yellow-400/40 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
                </div>

                <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-300 hover:rotate-110 hover:rotate-12">
                        <Rocket className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-black via-yellow-700 to-gray-800 bg-clip-text text-transparent">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-700">
                        Let's discuss your vision and create something amazing together.
                        Get in touch today for a free consultation and let's bring your ideas to life.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-black text-white hover:from-yellow-400 hover:scale-105 hover:shadow-lg hover:text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-700"
                        >
                            Get in Touch
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border border-yellow-600 text-yellow-600 hover:scale-105 hover:shadow-lg hover:text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-700 duration-300"
                        >
                            View Our Work
                            <Play className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </section >

        </div >
    );
};

export default Home;
