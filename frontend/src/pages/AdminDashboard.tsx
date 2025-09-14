import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Upload,
    Image,
    Video,
    Trash2,
    Edit3,
    Eye,
    Calendar,
    Users,
    Camera,
    Film,
    Heart,
    Settings,
    Plus,
    Search,
    Filter,
    Download
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState("wedding");
    const [searchTerm, setSearchTerm] = useState("");
    const contentRef = useScrollAnimation();

    // Mock data for uploaded content
    const weddingContent = [
        {
            id: 1,
            type: "image",
            title: "Romantic Garden Wedding",
            url: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            uploadDate: "2024-01-15",
            category: "ceremony"
        },
        {
            id: 2,
            type: "video",
            title: "Wedding Highlights Reel",
            url: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            uploadDate: "2024-01-10",
            category: "highlights"
        },
        {
            id: 3,
            type: "image",
            title: "Elegant Reception Setup",
            url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            uploadDate: "2024-01-08",
            category: "reception"
        }
    ];

    const rentalContent = [
        {
            id: 1,
            type: "image",
            title: "Professional Camera Setup",
            url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            uploadDate: "2024-01-12",
            category: "cameras"
        },
        {
            id: 2,
            type: "image",
            title: "Lighting Equipment",
            url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            uploadDate: "2024-01-09",
            category: "lighting"
        }
    ];

    const stats = [
        { label: "Total Images", value: "234", icon: Image, color: "bg-yellow-500" },
        { label: "Total Videos", value: "45", icon: Video, color: "bg-black" },
        { label: "Wedding Gallery", value: "156", icon: Heart, color: "bg-yellow-600" },
        { label: "Rental Items", value: "78", icon: Camera, color: "bg-gray-800" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-yellow-50 to-white">
            <Navigation />

            {/* Header */}
            <div className="pt-20 pb-8 px-6">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="text-4xl font-bold text-black mb-2">Admin Dashboard</h1>
                            <p className="text-gray-600">Manage your wedding and rental content</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                                <Settings className="w-4 h-4 mr-2" />
                                Settings
                            </Button>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <Card key={stat.label} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                    <CardContent className="p-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                                                <p className="text-3xl font-bold text-black mt-1">{stat.value}</p>
                                            </div>
                                            <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div ref={contentRef as any} className="px-6 pb-12 scroll-animate">
                <div className="container mx-auto">
                    <Card className="border-0 shadow-2xl">
                        <CardHeader className="bg-black text-white">
                            <CardTitle className="text-2xl">Content Management</CardTitle>
                            <CardDescription className="text-gray-300">
                                Upload and manage images and videos for your services
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                                <TabsList className="grid w-full grid-cols-2 bg-gray-100">
                                    <TabsTrigger
                                        value="wedding"
                                        className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
                                    >
                                        <Heart className="w-4 h-4 mr-2" />
                                        PF Wedding
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="rental"
                                        className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
                                    >
                                        <Camera className="w-4 h-4 mr-2" />
                                        Rental Services
                                    </TabsTrigger>
                                </TabsList>

                                {/* Wedding Content Tab */}
                                <TabsContent value="wedding" className="p-6">
                                    <div className="space-y-6">
                                        {/* Upload Section */}
                                        <Card className="border-2 border-dashed border-yellow-300 bg-yellow-50">
                                            <CardContent className="p-8">
                                                <div className="text-center">
                                                    <Upload className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
                                                    <h3 className="text-xl font-bold text-black mb-2">Upload Wedding Content</h3>
                                                    <p className="text-gray-600 mb-6">Drag and drop files here or click to browse</p>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                                        <div>
                                                            <Label htmlFor="wedding-images" className="text-black font-medium">Upload Images</Label>
                                                            <div className="flex items-center space-x-2 mt-2">
                                                                <Input id="wedding-images" type="file" accept="image/*" multiple className="border-yellow-300" />
                                                                <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                                                                    <Image className="w-4 h-4" />
                                                                </Button>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <Label htmlFor="wedding-videos" className="text-black font-medium">Upload Videos</Label>
                                                            <div className="flex items-center space-x-2 mt-2">
                                                                <Input id="wedding-videos" type="file" accept="video/*" multiple className="border-yellow-300" />
                                                                <Button size="sm" className="bg-black hover:bg-gray-800 text-white">
                                                                    <Video className="w-4 h-4" />
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                        <div>
                                                            <Label htmlFor="title" className="text-black font-medium">Title</Label>
                                                            <Input id="title" placeholder="Enter content title" className="border-yellow-300" />
                                                        </div>
                                                        <div>
                                                            <Label htmlFor="category" className="text-black font-medium">Category</Label>
                                                            <select className="w-full px-3 py-2 border border-yellow-300 rounded-md">
                                                                <option>Ceremony</option>
                                                                <option>Reception</option>
                                                                <option>Pre-Wedding</option>
                                                                <option>Highlights</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="mb-4">
                                                        <Label htmlFor="description" className="text-black font-medium">Description</Label>
                                                        <Textarea id="description" placeholder="Enter content description" className="border-yellow-300" />
                                                    </div>

                                                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8">
                                                        <Plus className="w-4 h-4 mr-2" />
                                                        Upload Content
                                                    </Button>
                                                </div>
                                            </CardContent>
                                        </Card>

                                        {/* Content Management */}
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-xl font-bold text-black">Wedding Gallery ({weddingContent.length})</h3>
                                            <div className="flex items-center space-x-2">
                                                <div className="relative">
                                                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                    <Input
                                                        placeholder="Search content..."
                                                        value={searchTerm}
                                                        onChange={(e) => setSearchTerm(e.target.value)}
                                                        className="pl-10 w-64"
                                                    />
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    <Filter className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {weddingContent.map((item) => (
                                                <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                                    <div className="relative overflow-hidden rounded-t-lg">
                                                        <img
                                                            src={item.url}
                                                            alt={item.title}
                                                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                                        />
                                                        <div className="absolute top-2 left-2">
                                                            <Badge className={item.type === 'video' ? 'bg-black text-white' : 'bg-yellow-500 text-black'}>
                                                                {item.type === 'video' ? <Video className="w-3 h-3 mr-1" /> : <Image className="w-3 h-3 mr-1" />}
                                                                {item.type}
                                                            </Badge>
                                                        </div>
                                                        <div className="absolute top-2 right-2">
                                                            <Badge variant="secondary" className="bg-white/90 text-black">
                                                                {item.category}
                                                            </Badge>
                                                        </div>
                                                    </div>
                                                    <CardContent className="p-4">
                                                        <h4 className="font-bold text-black mb-1">{item.title}</h4>
                                                        <p className="text-sm text-gray-600 mb-3">Uploaded: {item.uploadDate}</p>
                                                        <div className="flex items-center space-x-2">
                                                            <Button size="sm" variant="outline" className="flex-1">
                                                                <Eye className="w-3 h-3 mr-1" />
                                                                View
                                                            </Button>
                                                            <Button size="sm" variant="outline">
                                                                <Edit3 className="w-3 h-3" />
                                                            </Button>
                                                            <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                                                                <Trash2 className="w-3 h-3" />
                                                            </Button>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            ))}
                                        </div>
                                    </div>
                                </TabsContent>

                                {/* Rental Services Tab */}
                                <TabsContent value="rental" className="p-6">
                                    <div className="space-y-6">
                                        {/* Upload Section */}
                                        <Card className="border-2 border-dashed border-gray-300 bg-gray-50">
                                            <CardContent className="p-8">
                                                <div className="text-center">
                                                    <Camera className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                                                    <h3 className="text-xl font-bold text-black mb-2">Upload Rental Equipment</h3>
                                                    <p className="text-gray-600 mb-6">Add images and videos of your rental equipment</p>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                                        <div>
                                                            <Label htmlFor="rental-images" className="text-black font-medium">Equipment Images</Label>
                                                            <div className="flex items-center space-x-2 mt-2">
                                                                <Input id="rental-images" type="file" accept="image/*" multiple className="border-gray-300" />
                                                                <Button size="sm" className="bg-black hover:bg-gray-800 text-white">
                                                                    <Image className="w-4 h-4" />
                                                                </Button>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <Label htmlFor="rental-videos" className="text-black font-medium">Demo Videos</Label>
                                                            <div className="flex items-center space-x-2 mt-2">
                                                                <Input id="rental-videos" type="file" accept="video/*" multiple className="border-gray-300" />
                                                                <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                                                                    <Video className="w-4 h-4" />
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                                        <div>
                                                            <Label htmlFor="equipment-name" className="text-black font-medium">Equipment Name</Label>
                                                            <Input id="equipment-name" placeholder="e.g., Professional DSLR Camera" className="border-gray-300" />
                                                        </div>
                                                        <div>
                                                            <Label htmlFor="equipment-category" className="text-black font-medium">Category</Label>
                                                            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                                                                <option>Cameras</option>
                                                                <option>Lighting</option>
                                                                <option>Audio</option>
                                                                <option>Video</option>
                                                                <option>Accessories</option>
                                                            </select>
                                                        </div>
                                                        <div>
                                                            <Label htmlFor="price" className="text-black font-medium">Daily Rate</Label>
                                                            <Input id="price" placeholder="$50/day" className="border-gray-300" />
                                                        </div>
                                                    </div>

                                                    <div className="mb-4">
                                                        <Label htmlFor="features" className="text-black font-medium">Key Features</Label>
                                                        <Textarea id="features" placeholder="List key features and specifications" className="border-gray-300" />
                                                    </div>

                                                    <Button className="bg-black hover:bg-gray-800 text-white px-8">
                                                        <Plus className="w-4 h-4 mr-2" />
                                                        Add Equipment
                                                    </Button>
                                                </div>
                                            </CardContent>
                                        </Card>

                                        {/* Content Management */}
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-xl font-bold text-black">Rental Equipment ({rentalContent.length})</h3>
                                            <div className="flex items-center space-x-2">
                                                <div className="relative">
                                                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                    <Input
                                                        placeholder="Search equipment..."
                                                        className="pl-10 w-64"
                                                    />
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    <Download className="w-4 h-4 mr-1" />
                                                    Export
                                                </Button>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {rentalContent.map((item) => (
                                                <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                                    <div className="relative overflow-hidden rounded-t-lg">
                                                        <img
                                                            src={item.url}
                                                            alt={item.title}
                                                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                                        />
                                                        <div className="absolute top-2 left-2">
                                                            <Badge className="bg-black text-white">
                                                                <Camera className="w-3 h-3 mr-1" />
                                                                Equipment
                                                            </Badge>
                                                        </div>
                                                        <div className="absolute top-2 right-2">
                                                            <Badge className="bg-yellow-500 text-black">
                                                                {item.category}
                                                            </Badge>
                                                        </div>
                                                    </div>
                                                    <CardContent className="p-4">
                                                        <h4 className="font-bold text-black mb-1">{item.title}</h4>
                                                        <p className="text-sm text-gray-600 mb-3">Added: {item.uploadDate}</p>
                                                        <div className="flex items-center space-x-2">
                                                            <Button size="sm" variant="outline" className="flex-1">
                                                                <Eye className="w-3 h-3 mr-1" />
                                                                Preview
                                                            </Button>
                                                            <Button size="sm" variant="outline">
                                                                <Edit3 className="w-3 h-3" />
                                                            </Button>
                                                            <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                                                                <Trash2 className="w-3 h-3" />
                                                            </Button>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            ))}
                                        </div>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AdminDashboard;