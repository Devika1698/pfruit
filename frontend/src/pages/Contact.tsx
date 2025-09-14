import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    MessageCircle,
    Calendar,
    Star,
    CheckCircle,
    ArrowRight
} from "lucide-react";
import Navigation from "@/components/Navigation";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useToast } from "@/hooks/useToast";

const Contact = () => {
    const heroRef = useScrollAnimation();
    const formRef = useScrollAnimation();
    const faqRef = useScrollAnimation();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        service: ""
    });
    const { toast } = useToast();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Message Sent!",
            description: "Thank you for contacting us. We'll get back to you within 24 hours.",
        });
        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
            service: ""
        });
    };

    const contactInfo = [
        {
            icon: Phone,
            title: "Phone",
            info: "+91 9876543210",
            subtitle: "Call us anytime",
            color: "text-blue-600"
        },
        {
            icon: Mail,
            title: "Email",
            info: "hello@pfproductions.com",
            subtitle: "Drop us a line",
            color: "text-green-600"
        },
        {
            icon: MapPin,
            title: "Location",
            info: "Kerala",
            subtitle: "",
            color: "text-purple-600"
        },
        {
            icon: Clock,
            title: "Business Hours",
            info: "Mon - Fri: 9AM - 6PM",
            subtitle: "Weekend by appointment",
            color: "text-orange-600"
        }
    ];

    const services = [
        "Wedding Videography",
        "Corporate Videos",
        "Equipment Rental",
        "Live Event Coverage",
        "Post-Production",
        "Photography",
        "Other"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50 to-slate-100">
            <Navigation />

            {/* Floating Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute top-40 right-20 w-16 h-16 bg-slate-300 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-40 left-20 w-12 h-12 bg-yellow-300 rounded-full opacity-35 animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 right-10 w-8 h-8 bg-slate-400 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '3s' }}></div>
            </div>

            {/* Hero Section */}
            <section ref={heroRef} className="relative pt-32 pb-20 px-4 overflow-hidden scroll-animate">
                <div className="container mx-auto text-center relative z-10">
                    <div className="animate-fade-in">
                        <Badge className="mb-6 bg-yellow-100 text-yellow-800 border-yellow-200">
                            Get In Touch
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-600 via-slate-800 to-black bg-clip-text text-transparent leading-tight">
                            Contact Us
                        </h1>
                        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Ready to bring your vision to life? Let's discuss your project and create something amazing together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-gradient-to-r from-yellow-600 to-slate-800 hover:from-yellow-700 hover:to-slate-900 text-white px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300">
                                <MessageCircle className="mr-2 h-5 w-5" />
                                Start a Conversation
                            </Button>
                            <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-2 hover:bg-slate-50 transform hover:scale-105 transition-all duration-300">
                                <Calendar className="mr-2 h-5 w-5" />
                                Schedule a Call
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information Cards */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {contactInfo.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <Card
                                    key={item.title}
                                    className="text-center p-6 border-0 shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 animate-fade-in"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Icon className={`w-8 h-8 ${item.color}`} />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                                    <p className="text-slate-900 font-medium">{item.info}</p>
                                    <p className="text-slate-600 text-sm">{item.subtitle}</p>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact Form and Map Section */}
            <section ref={formRef} className="py-16 px-4 scroll-animate">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="text-3xl font-bold text-slate-800 mb-2">Send us a Message</CardTitle>
                                    <CardDescription className="text-lg text-slate-600">
                                        Fill out the form below and we'll get back to you within 24 hours
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="name" className="text-slate-700 font-medium">Full Name *</Label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="John Doe"
                                                    className="border-2 focus:border-blue-500 transition-colors duration-300"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email" className="text-slate-700 font-medium">Email Address *</Label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="john@example.com"
                                                    className="border-2 focus:border-blue-500 transition-colors duration-300"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="phone" className="text-slate-700 font-medium">Phone Number</Label>
                                                <Input
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    placeholder="+91 9876543210"
                                                    className="border-2 focus:border-blue-500 transition-colors duration-300"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="service" className="text-slate-700 font-medium">Service Interest</Label>
                                                <select
                                                    id="service"
                                                    name="service"
                                                    value={formData.service}
                                                    onChange={handleInputChange}
                                                    className="w-full h-10 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background focus:border-blue-500 transition-colors duration-300"
                                                >
                                                    <option value="">Select a service</option>
                                                    {services.map((service) => (
                                                        <option key={service} value={service}>{service}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="subject" className="text-slate-700 font-medium">Subject *</Label>
                                            <Input
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="What's this about?"
                                                className="border-2 focus:border-blue-500 transition-colors duration-300"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message" className="text-slate-700 font-medium">Message *</Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Tell us about your project, timeline, and any specific requirements..."
                                                rows={6}
                                                className="border-2 focus:border-blue-500 transition-colors duration-300"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300"
                                        >
                                            <Send className="mr-2 h-5 w-5" />
                                            Send Message
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Map and Additional Info */}
                        <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                            {/* Map Placeholder */}
                            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm overflow-hidden">
                                <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                                    <div className="text-center">
                                        <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                                        <h3 className="text-xl font-bold text-slate-800 mb-2">Our Location</h3>
                                        <p className="text-slate-600">Kerala</p>
                                        {/* <p className="text-slate-600">Los Angeles, CA 90210</p> */}
                                        <Button variant="outline" className="mt-4 hover:bg-blue-50">
                                            Get Directions
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </Card>

                            {/* Quick Stats */}
                            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold text-slate-800">Why Choose Us?</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {[
                                        { stat: "50+", label: "Projects Completed", icon: CheckCircle },
                                        { stat: "24/7", label: "Customer Support", icon: MessageCircle },
                                        { stat: "5★", label: "Average Rating", icon: Star },
                                        { stat: "48hrs", label: "Response Time", icon: Clock }
                                    ].map((item, index) => {
                                        const Icon = item.icon;
                                        return (
                                            <div key={item.label} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-300">
                                                <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                                                    <Icon className="w-5 h-5 text-blue-600" />
                                                </div>
                                                <div>
                                                    <div className="text-2xl font-bold text-slate-800">{item.stat}</div>
                                                    <div className="text-slate-600">{item.label}</div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section ref={faqRef} className="py-16 px-4 bg-gradient-to-r from-slate-100 to-blue-50 scroll-animate">
                <div className="container mx-auto">
                    <div className="text-center mb-12 animate-fade-in">
                        <h2 className="text-4xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
                        <p className="text-slate-600 text-lg">Quick answers to common questions</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                question: "What's your typical response time?",
                                answer: "We respond to all inquiries within 24 hours, often much sooner during business hours."
                            },
                            {
                                question: "Do you offer free consultations?",
                                answer: "Yes! We offer free initial consultations to discuss your project needs and provide estimates."
                            },
                            {
                                question: "What areas do you serve?",
                                answer: "We primarily serve the Los Angeles area but can travel for larger projects. Contact us to discuss."
                            },
                            {
                                question: "Can you work with tight deadlines?",
                                answer: "Absolutely! We understand urgent projects and offer rush services when needed."
                            }
                        ].map((faq, index) => (
                            <Card
                                key={faq.question}
                                className="border-0 shadow-lg hover:shadow-xl bg-white/90 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 animate-fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <CardHeader>
                                    <CardTitle className="text-lg text-slate-800">{faq.question}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600">{faq.answer}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 bg-gradient-to-r from-slate-900 via-slate-800 to-black">
                <div className="container mx-auto text-center text-white">
                    <div className="animate-fade-in">
                        <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
                        <p className="text-xl mb-8 opacity-90">Let's create something amazing together. Get in touch today!</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg bg-yellow-600 text-white hover:bg-yellow-700 transform hover:scale-105 transition-all duration-300">
                                <Phone className="mr-2 h-5 w-5" />
                                Call Now
                            </Button>
                            <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transform hover:scale-105 transition-all duration-300">
                                <Mail className="mr-2 h-5 w-5" />
                                Email Us
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;