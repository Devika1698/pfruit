// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { AspectRatio } from "@/components/ui/aspect-ratio";
// import { Badge } from "@/components/ui/badge";
// import { ArrowRight, Target, TrendingUp, Users, Eye, Megaphone, Video, Camera, Palette, BarChart, Star, Play } from "lucide-react";
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// const AdvertisingService = () => {
//     const heroRef = useScrollAnimation();
//     const servicesRef = useScrollAnimation();
//     const portfolioRef = useScrollAnimation();
//     const processRef = useScrollAnimation();
//     const benefitsRef = useScrollAnimation();
//     const ctaRef = useScrollAnimation();

//     const services = [
//         {
//             icon: <Target className="w-8 h-8" />,
//             title: "Brand Strategy",
//             description: "Comprehensive brand positioning and messaging that resonates with your target audience.",
//             features: ["Brand Identity", "Market Research", "Competitor Analysis", "Brand Guidelines"]
//         },
//         {
//             icon: <Video className="w-8 h-8" />,
//             title: "Video Advertising",
//             description: "Compelling video content for social media, TV commercials, and digital platforms.",
//             features: ["TV Commercials", "Social Media Ads", "Product Videos", "Promotional Content"]
//         },
//         {
//             icon: <Camera className="w-8 h-8" />,
//             title: "Visual Content",
//             description: "Eye-catching photography and graphics that tell your brand story effectively.",
//             features: ["Product Photography", "Lifestyle Shoots", "Graphic Design", "Print Materials"]
//         },
//         {
//             icon: <Megaphone className="w-8 h-8" />,
//             title: "Digital Campaigns",
//             description: "Multi-platform advertising campaigns that drive engagement and conversions.",
//             features: ["Social Media Campaigns", "Google Ads", "Display Advertising", "Retargeting"]
//         }
//     ];

//     const portfolioItems = [
//         {
//             title: "Tech Startup Launch",
//             category: "Brand Campaign",
//             description: "Complete brand identity and launch campaign for innovative tech company",
//             image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
//             tags: ["Branding", "Digital", "Launch"]
//         },
//         {
//             title: "E-commerce Growth",
//             category: "Digital Advertising",
//             description: "Multi-platform campaign resulting in 300% increase in online sales",
//             image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
//             tags: ["E-commerce", "Social Media", "ROI"]
//         },
//         {
//             title: "Restaurant Chain",
//             category: "Video Production",
//             description: "Appetizing food photography and video content for national restaurant chain",
//             image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop",
//             tags: ["Food", "Video", "Commercial"]
//         },
//         {
//             title: "Fashion Brand",
//             category: "Content Creation",
//             description: "Lifestyle photography and influencer content for emerging fashion brand",
//             image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=300&fit=crop",
//             tags: ["Fashion", "Lifestyle", "Influencer"]
//         }
//     ];

//     const process = [
//         {
//             step: "01",
//             title: "Strategy & Planning",
//             description: "We begin with comprehensive research and strategic planning to understand your goals and target audience."
//         },
//         {
//             step: "02",
//             title: "Creative Development",
//             description: "Our creative team develops compelling concepts and content that align with your brand message."
//         },
//         {
//             step: "03",
//             title: "Production & Creation",
//             description: "Professional production of all advertising materials with attention to quality and detail."
//         },
//         {
//             step: "04",
//             title: "Launch & Optimize",
//             description: "Strategic campaign launch with continuous monitoring and optimization for maximum impact."
//         }
//     ];

//     const benefits = [
//         {
//             icon: <TrendingUp className="w-6 h-6" />,
//             title: "Increased Brand Awareness",
//             description: "Boost your brand visibility and recognition in the market"
//         },
//         {
//             icon: <Users className="w-6 h-6" />,
//             title: "Audience Engagement",
//             description: "Connect with your target audience through compelling content"
//         },
//         {
//             icon: <BarChart className="w-6 h-6" />,
//             title: "Measurable Results",
//             description: "Track ROI and campaign performance with detailed analytics"
//         },
//         {
//             icon: <Eye className="w-6 h-6" />,
//             title: "Professional Quality",
//             description: "High-quality content that reflects your brand's excellence"
//         }
//     ];

//     return (
//         <div className="min-h-screen bg-white overflow-x-hidden">
//             <Navigation />

//             {/* Hero Section */}
//             <section ref={heroRef} className="relative py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden scroll-animate">
//                 <div className="absolute inset-0 pointer-events-none">
//                     <div className="absolute top-20 left-20 w-32 h-32 border border-gray-200 rotate-45"></div>
//                     <div className="absolute bottom-20 right-20 w-24 h-24 border border-gray-200 -rotate-12"></div>
//                     <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-yellow-400 rounded-full"></div>
//                     <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-gray-800 rounded-full"></div>
//                 </div>

//                 <div className="container mx-auto px-4 text-center relative z-10">
//                     <Badge className="mb-6 bg-yellow-400 text-gray-900 hover:bg-yellow-500">
//                         Advertising & Content Creation
//                     </Badge>
//                     <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
//                         Amplify Your Brand's
//                         <span className="block text-yellow-600">Impact</span>
//                     </h1>
//                     <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
//                         Create powerful advertising campaigns and compelling content that drives results.
//                         From strategy to execution, we deliver campaigns that captivate and convert.
//                     </p>
//                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                         <Button
//                             size="lg"
//                             className="bg-gray-900 text-white hover:bg-gradient-to-r hover:from-yellow-500 hover:to-gray-800 px-8 py-3"
//                         >
//                             Start Your Campaign
//                             <ArrowRight className="ml-2 w-5 h-5" />
//                         </Button>
//                         <Button
//                             size="lg"
//                             variant="outline"
//                             className="border-gray-900 text-gray-900 hover:bg-gray-50"
//                         >
//                             View Portfolio
//                             <Play className="ml-2 w-5 h-5" />
//                         </Button>
//                     </div>
//                 </div>
//             </section>

//             {/* Services Section */}
//             <section ref={servicesRef} className="py-20 bg-white scroll-animate">
//                 <div className="container mx-auto px-4">
//                     <div className="text-center mb-16">
//                         <h2 className="text-4xl font-bold mb-4 text-gray-900">
//                             Our Advertising Services
//                         </h2>
//                         <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                             Comprehensive advertising solutions tailored to your business goals
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                         {services.map((service, index) => (
//                             <Card
//                                 key={index}
//                                 className="hover:shadow-lg transition-all duration-300 border-gray-200"
//                             >
//                                 <CardHeader>
//                                     <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gradient-to-r hover:from-yellow-500 hover:to-gray-800 transition-all duration-300">
//                                         <div className="text-white">
//                                             {service.icon}
//                                         </div>
//                                     </div>
//                                     <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
//                                     <CardDescription className="text-gray-600">
//                                         {service.description}
//                                     </CardDescription>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <div className="grid grid-cols-2 gap-2">
//                                         {service.features.map((feature, featureIndex) => (
//                                             <Badge
//                                                 key={featureIndex}
//                                                 variant="secondary"
//                                                 className="bg-gray-100 text-gray-700 hover:bg-yellow-100"
//                                             >
//                                                 {feature}
//                                             </Badge>
//                                         ))}
//                                     </div>
//                                 </CardContent>
//                             </Card>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Portfolio Section */}
//             <section ref={portfolioRef} className="py-20 bg-gray-50 scroll-animate">
//                 <div className="container mx-auto px-4">
//                     <div className="text-center mb-16">
//                         <h2 className="text-4xl font-bold mb-4 text-gray-900">
//                             Success Stories
//                         </h2>
//                         <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                             Real results from our advertising and content creation campaigns
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                         {portfolioItems.map((item, index) => (
//                             <Card
//                                 key={index}
//                                 className="overflow-hidden hover:shadow-lg transition-all duration-300 group border-gray-200"
//                             >
//                                 <AspectRatio ratio={16 / 10} className="relative overflow-hidden">
//                                     <img
//                                         src={item.image}
//                                         alt={item.title}
//                                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                                     />
//                                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                                     <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                                 </AspectRatio>
//                                 <CardContent className="p-6">
//                                     <div className="flex flex-wrap gap-2 mb-3">
//                                         {item.tags.map((tag, tagIndex) => (
//                                             <Badge
//                                                 key={tagIndex}
//                                                 variant="secondary"
//                                                 className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
//                                             >
//                                                 {tag}
//                                             </Badge>
//                                         ))}
//                                     </div>
//                                     <CardTitle className="text-xl mb-2 text-gray-900">{item.title}</CardTitle>
//                                     <CardDescription className="text-gray-600 mb-3">{item.category}</CardDescription>
//                                     <p className="text-gray-700">{item.description}</p>
//                                 </CardContent>
//                             </Card>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Process Section */}
//             <section ref={processRef} className="py-20 bg-white scroll-animate">
//                 <div className="container mx-auto px-4">
//                     <div className="text-center mb-16">
//                         <h2 className="text-4xl font-bold mb-4 text-gray-900">
//                             Our Process
//                         </h2>
//                         <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                             A proven methodology that delivers exceptional advertising results
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                         {process.map((step, index) => (
//                             <div key={index} className="text-center">
//                                 <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold hover:bg-gradient-to-r hover:from-yellow-500 hover:to-gray-800 transition-all duration-300">
//                                     {step.step}
//                                 </div>
//                                 <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
//                                 <p className="text-gray-600">{step.description}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Benefits Section */}
//             <section ref={benefitsRef} className="py-20 bg-gray-50 scroll-animate">
//                 <div className="container mx-auto px-4">
//                     <div className="text-center mb-16">
//                         <h2 className="text-4xl font-bold mb-4 text-gray-900">
//                             Why Choose Our Services
//                         </h2>
//                         <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                             The benefits of working with PF Media for your advertising needs
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                         {benefits.map((benefit, index) => (
//                             <div key={index} className="text-center">
//                                 <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-gray-800 transition-all duration-300">
//                                     <div className="text-white">
//                                         {benefit.icon}
//                                     </div>
//                                 </div>
//                                 <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
//                                 <p className="text-gray-600">{benefit.description}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* CTA Section */}
//             <section ref={ctaRef} className="py-20 bg-white scroll-animate">
//                 <div className="container mx-auto px-4 text-center">
//                     <div className="max-w-3xl mx-auto">
//                         <h2 className="text-4xl font-bold mb-6 text-gray-900">
//                             Ready to Amplify Your Brand?
//                         </h2>
//                         <p className="text-xl text-gray-600 mb-8">
//                             Let's create an advertising campaign that drives real results for your business.
//                             Contact us today for a free consultation.
//                         </p>
//                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                             <Button
//                                 size="lg"
//                                 className="bg-gray-900 text-white hover:bg-gradient-to-r hover:from-yellow-500 hover:to-gray-800 px-8 py-3"
//                             >
//                                 Get Started Today
//                                 <ArrowRight className="ml-2 w-5 h-5" />
//                             </Button>
//                             <Button
//                                 size="lg"
//                                 variant="outline"
//                                 className="border-gray-900 text-gray-900 hover:bg-gray-50"
//                             >
//                                 Schedule Consultation
//                             </Button>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <Footer />
//         </div>
//     );
// };

// export default AdvertisingService;

import ComingSoon from "./ComingSoon";

const AdvertisingService = () => {
    return <ComingSoon />;
};

export default AdvertisingService;