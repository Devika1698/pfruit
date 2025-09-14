// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Camera, Video, Mic, Lightbulb, Monitor, Headphones, Star, CheckCircle, ArrowRight } from "lucide-react";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation";
// import RentFormModal from "@/components/RentalFormModal";

// const RentalServices = () => {
//     const navigate = useNavigate();
//     const [activeCategory, setActiveCategory] = useState("all");
//     const heroRef = useScrollAnimation();
//     const equipmentRef = useScrollAnimation();
//     const packagesRef = useScrollAnimation();
//     const benefitsRef = useScrollAnimation();
//     const [showForm, setShowForm] = useState(false);
//     const [selectedItem, setSelectedItem] = useState(null);
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         aadhaar: "",
//     });

//     const categories = [
//         { id: "all", name: "All Equipment", icon: Monitor },
//         { id: "cameras", name: "Cameras", icon: Camera },
//         { id: "video", name: "Video", icon: Video },
//         { id: "audio", name: "Audio", icon: Mic },
//         { id: "lighting", name: "Lighting", icon: Lightbulb },
//     ];

//     const equipment = [
//         {
//             id: 1,
//             name: "Professional DSLR Camera",
//             category: "cameras",
//             price: "$50/day",
//             image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//             features: ["4K Video", "Full Frame", "Weather Sealed"],
//             rating: 4.9
//         },
//         {
//             id: 2,
//             name: "Cinema Camera Kit",
//             category: "video",
//             price: "$150/day",
//             image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//             features: ["6K RAW", "Professional Codec", "Multiple Lenses"],
//             rating: 5.0
//         },
//         {
//             id: 3,
//             name: "Wireless Microphone System",
//             category: "audio",
//             price: "$30/day",
//             image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//             features: ["Crystal Clear Audio", "100m Range", "Dual Channel"],
//             rating: 4.8
//         },
//         {
//             id: 4,
//             name: "LED Panel Lighting Kit",
//             category: "lighting",
//             price: "$40/day",
//             image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//             features: ["Adjustable Color Temperature", "Wireless Control", "Portable"],
//             rating: 4.7
//         }
//     ];

//     const packages = [
//         {
//             name: "Starter Package",
//             price: "$120/day",
//             description: "Perfect for small projects and beginners",
//             features: [
//                 "DSLR Camera",
//                 "Basic Lighting Kit",
//                 "Wireless Microphone",
//                 "Memory Cards & Batteries",
//                 "Basic Support"
//             ],
//             popular: false
//         },
//         {
//             name: "Professional Package",
//             price: "$250/day",
//             description: "Complete solution for professional shoots",
//             features: [
//                 "Cinema Camera Kit",
//                 "Advanced Lighting Setup",
//                 "Multi-Channel Audio",
//                 "Backup Equipment",
//                 "Technical Support",
//                 "Delivery & Setup"
//             ],
//             popular: true
//         },
//         {
//             name: "Enterprise Package",
//             price: "$400/day",
//             description: "Full production equipment for large projects",
//             features: [
//                 "Multiple Camera Setup",
//                 "Professional Lighting Grid",
//                 "Full Audio Suite",
//                 "Backup Systems",
//                 "On-Site Technician",
//                 "24/7 Support"
//             ],
//             popular: false
//         }
//     ];

//     const handleProceedToPayment = () => {
//         if (!/^\d{12}$/.test(formData.aadhaar)) {
//             alert("Please enter a valid 12-digit Aadhaar number");
//             return;
//         }

//         setShowForm(false);
//         console.log("Form Submitted:", formData);

//         // Example: trigger Razorpay / Stripe here
//         // handlePayment(Number(selectedItem?.price.replace(/[^0-9]/g, "")));
//     };

//     const filteredEquipment = activeCategory === "all"
//         ? equipment
//         : equipment.filter(item => item.category === activeCategory);

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50 to-slate-100">

//             {/* Floating Elements */}
//             <div className="fixed inset-0 overflow-hidden pointer-events-none">
//                 <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-30 animate-pulse"></div>
//                 <div className="absolute top-40 right-20 w-16 h-16 bg-slate-300 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1s' }}></div>
//                 <div className="absolute bottom-40 left-20 w-12 h-12 bg-yellow-300 rounded-full opacity-35 animate-pulse" style={{ animationDelay: '2s' }}></div>
//             </div>

//             {/* Hero Section */}
//             <section ref={heroRef} className="relative pt-32 pb-20 px-4 overflow-hidden scroll-animate">
//                 <div className="container mx-auto text-center relative z-10">
//                     <div className="animate-fade-in">
//                         <Badge className="mb-6 bg-yellow-100 text-yellow-800 border-yellow-200">
//                             Professional Equipment Rental
//                         </Badge>
//                         <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-600 via-slate-800 to-black bg-clip-text text-transparent leading-tight">
//                             Rent Professional
//                             <br />
//                             <span className="text-slate-800">Equipment</span>
//                         </h1>
//                         <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
//                             Access industry-standard cameras, lighting, and audio equipment for your next project.
//                             Professional quality, competitive prices.
//                         </p>
//                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                             <Button size="lg" className="bg-gradient-to-r from-yellow-600 to-slate-800 hover:from-yellow-700 hover:to-slate-900 text-white px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300">
//                                 Browse Equipment
//                                 <ArrowRight className="ml-2 h-5 w-5" />
//                             </Button>
//                             <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-2 hover:bg-slate-50 transform hover:scale-105 transition-all duration-300">
//                                 View Packages
//                             </Button>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Equipment Categories */}
//             <section ref={equipmentRef} className="py-16 px-4 scroll-animate">
//                 <div className="container mx-auto">
//                     <div className="text-center mb-12 animate-fade-in">
//                         <h2 className="text-4xl font-bold text-slate-800 mb-4">Equipment Categories</h2>
//                         <p className="text-slate-600 text-lg">Choose from our wide range of professional equipment</p>
//                     </div>

//                     <div className="flex flex-wrap justify-center gap-4 mb-12">
//                         {categories.map((category, index) => {
//                             const Icon = category.icon;
//                             return (
//                                 <Button
//                                     key={category.id}
//                                     variant={activeCategory === category.id ? "default" : "outline"}
//                                     onClick={() => setActiveCategory(category.id)}
//                                     className={`transform hover:scale-105 transition-all duration-300 animate-fade-in ${activeCategory === category.id
//                                         ? "bg-gradient-to-r from-yellow-600 to-slate-800 text-white shadow-lg"
//                                         : "hover:bg-yellow-50"
//                                         }`}
//                                     style={{ animationDelay: `${index * 0.1}s` }}
//                                 >
//                                     <Icon className="w-4 h-4 mr-2" />
//                                     {category.name}
//                                 </Button>
//                             );
//                         })}
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                         {filteredEquipment.map((item, index) => (
//                             <Card
//                                 key={item.id}
//                                 className="group cursor-pointer transform hover:scale-105 transition-all duration-300 border-0 shadow-lg hover:shadow-2xl bg-white/80 backdrop-blur-sm animate-fade-in"
//                                 style={{ animationDelay: `${index * 0.1}s` }}
//                             >
//                                 <div className="relative overflow-hidden rounded-t-lg">
//                                     <img
//                                         src={item.image}
//                                         alt={item.name}
//                                         className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
//                                     />
//                                     <div className="absolute top-4 right-4">
//                                         <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
//                                             Available
//                                         </Badge>
//                                     </div>
//                                     <div className="absolute top-4 left-4 flex items-center space-x-1 bg-white/90 rounded-full px-2 py-1">
//                                         <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
//                                         <span className="text-xs font-medium">{item.rating}</span>
//                                     </div>
//                                 </div>
//                                 <CardHeader>
//                                     <CardTitle className="text-lg group-hover:text-yellow-600 transition-colors">
//                                         {item.name}
//                                     </CardTitle>
//                                     <CardDescription className="text-2xl font-bold text-yellow-600">
//                                         {item.price}
//                                     </CardDescription>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <div className="space-y-2">
//                                         {item.features.map((feature) => (
//                                             <div key={feature} className="flex items-center text-sm text-slate-600">
//                                                 <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
//                                                 {feature}
//                                             </div>
//                                         ))}
//                                     </div>
//                                     <Button className="w-full mt-4 bg-gradient-to-r from-yellow-600 to-slate-800 hover:from-yellow-700 hover:to-slate-900 text-white transform hover:scale-105 transition-all duration-300"
//                                         onClick={() => navigate("/rent-form", { state: { item } })}>
//                                         Rent Now
//                                     </Button>
//                                 </CardContent>
//                             </Card>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Rental Packages */}
//             <section ref={packagesRef} className="py-16 px-4 bg-gradient-to-r from-slate-100 to-yellow-50 scroll-animate">
//                 <div className="container mx-auto">
//                     <div className="text-center mb-12 animate-fade-in">
//                         <h2 className="text-4xl font-bold text-slate-800 mb-4">Rental Packages</h2>
//                         <p className="text-slate-600 text-lg">Complete packages for every budget and project size</p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         {packages.map((pkg, index) => (
//                             <Card
//                                 key={pkg.name}
//                                 className={`relative transform hover:scale-105 transition-all duration-300 border-0 shadow-lg hover:shadow-2xl bg-white/90 backdrop-blur-sm animate-fade-in ${pkg.popular ? 'ring-2 ring-yellow-500' : ''
//                                     }`}
//                                 style={{ animationDelay: `${index * 0.2}s` }}
//                             >
//                                 {pkg.popular && (
//                                     <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                                         <Badge className="bg-gradient-to-r from-yellow-600 to-slate-800 text-white px-4 py-1">
//                                             Most Popular
//                                         </Badge>
//                                     </div>
//                                 )}
//                                 <CardHeader className="text-center">
//                                     <CardTitle className="text-2xl font-bold text-slate-800">{pkg.name}</CardTitle>
//                                     <div className="text-4xl font-bold text-yellow-600 my-4">{pkg.price}</div>
//                                     <CardDescription className="text-slate-600">{pkg.description}</CardDescription>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <div className="space-y-3 mb-6">
//                                         {pkg.features.map((feature) => (
//                                             <div key={feature} className="flex items-center">
//                                                 <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                                                 <span className="text-slate-700">{feature}</span>
//                                             </div>
//                                         ))}
//                                     </div>
//                                     <Button
//                                         className={`w-full transform hover:scale-105 transition-all duration-300 ${pkg.popular
//                                             ? 'bg-gradient-to-r from-yellow-600 to-slate-800 hover:from-yellow-700 hover:to-slate-900 text-white'
//                                             : 'bg-slate-800 hover:bg-slate-900 text-white'
//                                             }`}
//                                     >
//                                         Choose Package
//                                     </Button>
//                                 </CardContent>
//                             </Card>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Why Choose Us */}
//             <section ref={benefitsRef} className="py-16 px-4 scroll-animate">
//                 <div className="container mx-auto">
//                     <div className="text-center mb-12 animate-fade-in">
//                         <h2 className="text-4xl font-bold text-slate-800 mb-4">Why Choose Our Rental Service?</h2>
//                         <p className="text-slate-600 text-lg">Professional equipment, competitive prices, exceptional service</p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                         {[
//                             { icon: CheckCircle, title: "Quality Guaranteed", description: "All equipment is professionally maintained and tested" },
//                             { icon: Headphones, title: "24/7 Support", description: "Technical support available around the clock" },
//                             { icon: Star, title: "Competitive Pricing", description: "Best rates in the industry with flexible terms" },
//                             { icon: ArrowRight, title: "Quick Delivery", description: "Same-day delivery available in most areas" }
//                         ].map((benefit, index) => {
//                             const Icon = benefit.icon;
//                             return (
//                                 <Card
//                                     key={benefit.title}
//                                     className="text-center p-6 border-0 shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 animate-fade-in"
//                                     style={{ animationDelay: `${index * 0.1}s` }}
//                                 >
//                                     <div className="w-16 h-16 bg-gradient-to-r from-yellow-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
//                                         <Icon className="w-8 h-8 text-yellow-600" />
//                                     </div>
//                                     <h3 className="text-xl font-bold text-slate-800 mb-2">{benefit.title}</h3>
//                                     <p className="text-slate-600">{benefit.description}</p>
//                                 </Card>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>

//             {/* CTA Section */}
//             <section className="py-16 px-4 bg-gradient-to-r from-slate-900 via-slate-800 to-black">
//                 <div className="container mx-auto text-center text-white">
//                     <div className="animate-fade-in">
//                         <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
//                         <p className="text-xl mb-8 opacity-90">Contact us today to discuss your equipment needs and get a custom quote</p>
//                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                             <Button size="lg" variant="secondary" className="px-8 py-6 text-lg bg-yellow-600 text-white hover:bg-yellow-700 transform hover:scale-105 transition-all duration-300">
//                                 Get Quote
//                             </Button>
//                             <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transform hover:scale-105 transition-all duration-300">
//                                 Call Now
//                             </Button>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <RentFormModal
//                 showForm={showForm}
//                 selectedItem={selectedItem}
//                 formData={formData}
//                 setFormData={setFormData}
//                 setShowForm={setShowForm}
//                 handleProceedToPayment={handleProceedToPayment}
//             />
//         </div>
//     );
// };

// export default RentalServices;


import ComingSoon from "./ComingSoon";

const RentalServices = () => {
    return <ComingSoon />;
};

export default RentalServices;