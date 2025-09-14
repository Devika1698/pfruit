import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Camera, Heart, Star, CheckCircle, ArrowRight, Play, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Dir1 from "@/assets/images/dir1.jpg";
import Dir2 from "@/assets/images/dir2.jpg";

const About = () => {
    const heroRef = useScrollAnimation();
    const storyRef = useScrollAnimation();
    const valuesRef = useScrollAnimation();
    const teamRef = useScrollAnimation();

    const stats = [
        { number: "50+", label: "Projects Completed", icon: Camera },
        { number: "20+", label: "Happy Clients", icon: Heart },
        { number: "10+", label: "Years Experience", icon: Globe },
        { number: "5+", label: "Awards Won", icon: Award }
    ];

    const values = [
        {
            title: "Creative Excellence",
            description: "We push the boundaries of creativity to deliver visually stunning content that captures attention and tells compelling stories.",
            icon: Star
        },
        {
            title: "Professional Quality",
            description: "Using state-of-the-art equipment and industry-best practices, we ensure every project meets the highest professional standards.",
            icon: Award
        },
        {
            title: "Client-Focused Approach",
            description: "Your vision is our priority. We work closely with clients to understand their needs and exceed their expectations.",
            icon: Users
        }
    ];

    const team = [
        {
            name: "Aswin Ashok",
            role: "Managing Director",
            image: Dir1,
            description: "10+ years of experience in visual storytelling"
        },
        {
            name: "Akhil AS",
            role: "Managing Director",
            image: Dir2,
            description: ""
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50 to-slate-100">
            <Navigation />

            {/* Floating Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute top-60 right-10 w-16 h-16 bg-slate-300 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-yellow-300 rounded-full opacity-35 animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/3 right-1/4 w-14 h-14 bg-slate-400 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '3s' }}></div>
            </div>

            {/* Hero Section */}
            <section ref={heroRef} className="relative pt-32 pb-20 px-4 overflow-hidden scroll-animate">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-in">
                            <Badge className="mb-6 bg-yellow-100 text-yellow-800 border-yellow-200">
                                About PF Media
                            </Badge>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-black via-yellow-700 to-black-800 bg-clip-text text-transparent leading-tight">
                                Crafting Visual
                                <br />
                                <span className="text-slate-800">Stories</span>
                            </h1>
                            {/* <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                We are passionate visual storytellers dedicated to capturing life's most precious moments
                                and creating compelling content that resonates with audiences worldwide.
                            </p> */}
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                Each life is a unique and intriguing story. At PFruit, we carefully craft our services to portray it with passion and authenticity. Whether it’s art or business, we understand your vision and provide the perfect media team to bring it to life.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-black text-white hover:from-yellow-400 hover:shadow-lg text-white px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-700">
                                    Our Services
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button variant="outline" size="lg" className="px-8 py-6 text-lg border border-yellow-600 text-yellow-600 hover:text-white hover:from-yellow-400 transform hover:scale-105 transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-700">
                                    <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                                    Watch Our Work
                                </Button>
                            </div>
                        </div>
                        <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Professional camera equipment"
                                    className="rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                                <div className="absolute bottom-6 left-6 right-6 text-white">
                                    <p className="text-lg font-semibold">Professional Equipment</p>
                                    <p className="text-sm opacity-90">State-of-the-art cameras and gear</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-4 bg-white/80 backdrop-blur-sm">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <Card
                                    key={stat.label}
                                    className="text-center p-6 border-0 shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-yellow-50 transform hover:scale-105 transition-all duration-300 animate-fade-in group cursor-pointer"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</h3>
                                    <p className="text-slate-600">{stat.label}</p>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section ref={storyRef} className="py-20 px-4 scroll-animate">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="animate-fade-in">
                            <h2 className="text-4xl font-bold text-slate-800 mb-6">Our Vision</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Founded with a passion for visual storytelling, PF Media has grown from a small creative studio
                                to a full-service media production company. We believe that every moment has a story worth telling,
                                and every brand has a unique voice that deserves to be heard.
                            </p>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Our journey began with a simple camera and a big dream. Today, we've had the privilege of working
                                with clients across the globe, capturing everything from intimate weddings to large-scale commercial
                                productions.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Award-winning cinematography",
                                    "Cutting-edge equipment and technology",
                                    "Personalized approach to every project",
                                    "Commitment to exceeding expectations"
                                ].map((feature, index) => (
                                    <div key={feature} className="flex items-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                                        <span className="text-slate-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
                            <img
                                src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Creative team at work"
                                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section ref={valuesRef} className="py-16 px-4 bg-gradient-to-r from-slate-100 to-yellow-50 scroll-animate">
                <div className="container mx-auto">
                    <div className="text-center mb-12 animate-fade-in">
                        <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Values</h2>
                        <p className="text-slate-600 text-lg">The principles that guide everything we do</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <Card
                                    key={value.title}
                                    className="p-8 border-0 shadow-lg hover:shadow-xl bg-white/90 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 animate-fade-in group cursor-pointer"
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-8 h-8 text-yellow-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">{value.title}</h3>
                                    <p className="text-slate-600 text-center leading-relaxed">{value.description}</p>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section ref={teamRef} className="py-20 px-4 scroll-animate">
                <div className="container mx-auto">
                    <div className="text-center mb-12 animate-fade-in">
                        <h2 className="text-4xl font-bold text-slate-800 mb-4">Meet Our Team</h2>
                        <p className="text-slate-600 text-lg">The creative minds behind every project</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {team.map((member, index) => (
                            <Card
                                key={member.name}
                                className="overflow-hidden border-0 shadow-lg hover:shadow-xl bg-white transform hover:scale-105 transition-all duration-300 animate-fade-in"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="relative overflow-hidden h-96">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl text-slate-800">{member.name}</CardTitle>
                                    <CardDescription className="text-yellow-600 font-medium">{member.role}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600">{member.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default About;