import { useState, useEffect } from "react";
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
    Trash2,
    Edit3,
    Eye,
    Camera,
    Heart,
    Plus,
    Search,
    Filter,
    AlertCircle,
    Loader
} from "lucide-react";
import Navigation from "@/components/Navigation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { weddingAPI, rentalAPI } from "@/lib/api";
import { useToast } from "@/hooks/useToast";
import { fileToBase64, isValidImageFile, getFileSizeInMB } from "@/lib/fileUtils";

interface WeddingImage {
    _id: string;
    type: string;
    title: string;
    imageUrl: string;
    uploadDate: string;
    category: string;
    description?: string;
}

interface RentalEquipment {
    _id: string;
    type: string;
    name: string;
    title?: string;
    imageUrl: string;
    uploadDate?: string;
    createdAt?: string;
    category: string;
    dailyRate?: number;
    description?: string;
    keyFeatures?: string;
}

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState("wedding");
    const [searchTerm, setSearchTerm] = useState("");
    const contentRef = useScrollAnimation();
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [weddingContent, setWeddingContent] = useState<WeddingImage[]>([]);
    const [rentalContent, setRentalContent] = useState<RentalEquipment[]>([]);

    // Preview modal state
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    // Edit mode state
    const [editingWeddingId, setEditingWeddingId] = useState<string | null>(null);
    const [editingRentalId, setEditingRentalId] = useState<string | null>(null);

    // Delete confirmation modal state
    const [deleteConfirm, setDeleteConfirm] = useState<{ id: string; type: 'wedding' | 'rental' } | null>(null);

    // Form section refs for scrolling
    const weddingFormRef = useScrollAnimation();
    const rentalFormRef = useScrollAnimation();

    // Helper function to get full image URL
    const getImageUrl = (imageUrl: string) => {
        if (!imageUrl) return '';
        if (imageUrl.startsWith('http')) return imageUrl;
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
        const baseUrl = apiUrl.replace('/api', '');
        return `${baseUrl}${imageUrl}`;
    };
    const [weddingFormData, setWeddingFormData] = useState({
        title: "",
        category: "ceremony",
        description: "",
        imageFile: null as File | null
    });
    const [rentalFormData, setRentalFormData] = useState({
        name: "",
        category: "cameras",
        description: "",
        dailyRate: "",
        keyFeatures: "",
        imageFile: null as File | null
    });

    // Fetch wedding images
    useEffect(() => {
        fetchWeddingImages();
    }, []);

    // Fetch rental equipment
    useEffect(() => {
        fetchRentalEquipment();
    }, []);

    const fetchWeddingImages = async () => {
        try {
            setLoading(true);
            const response = await weddingAPI.getAll({ search: searchTerm });
            if (response.success) {
                setWeddingContent(response.data);
            }
        } catch (error) {
            toast({
                title: "Failed to fetch images",
                variant: "destructive"
            });
        } finally {
            setLoading(false);
        }
    };

    const fetchRentalEquipment = async () => {
        try {
            setLoading(true);
            const response = await rentalAPI.getAll({ search: searchTerm });
            if (response.success) {
                setRentalContent(response.data);
            }
        } catch (error) {
            toast({
                title: "Failed to fetch rental equipment",
                variant: "destructive"
            });
        } finally {
            setLoading(false);
        }
    };

    const handleUploadWedding = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!weddingFormData.title) {
            toast({
                title: "Please fill in all required fields",
                variant: "destructive"
            });
            return;
        }

        // When creating new, image is required. When editing, image is optional
        if (!editingWeddingId && !weddingFormData.imageFile) {
            toast({
                title: "Please upload an image",
                variant: "destructive"
            });
            return;
        }

        // Validate image file only if one is provided
        if (weddingFormData.imageFile && !isValidImageFile(weddingFormData.imageFile)) {
            toast({
                title: "Please upload a valid image file (JPEG, PNG, JPG)",
                variant: "destructive"
            });
            return;
        }

        // Check file size only if one is provided
        if (weddingFormData.imageFile && getFileSizeInMB(weddingFormData.imageFile) > 5) {
            toast({
                title: "Image size should be less than 5MB",
                variant: "destructive"
            });
            return;
        }

        try {
            setLoading(true);
            let imageBase64: string | undefined;

            // Only convert to base64 if a new image was selected
            if (weddingFormData.imageFile) {
                imageBase64 = await fileToBase64(weddingFormData.imageFile);
            }

            if (editingWeddingId) {
                // Update existing wedding image
                const updateData: any = {
                    title: weddingFormData.title,
                    category: weddingFormData.category,
                    description: weddingFormData.description
                };
                // Only include imageBase64 if a new image was selected
                if (imageBase64) {
                    updateData.imageBase64 = imageBase64;
                }

                await weddingAPI.update(editingWeddingId, updateData);

                toast({
                    title: "Image updated successfully",
                    variant: "success"
                });
                setEditingWeddingId(null);
            } else {
                // Create new wedding image (image required)
                await weddingAPI.create({
                    title: weddingFormData.title,
                    category: weddingFormData.category,
                    imageBase64: imageBase64!,
                    description: weddingFormData.description
                });

                toast({
                    title: "Image uploaded successfully",
                    variant: "success"
                });
            }

            setWeddingFormData({
                title: "",
                category: "ceremony",
                description: "",
                imageFile: null
            });

            fetchWeddingImages();
        } catch (error) {
            toast({
                title: "Error",
                description: error instanceof Error ? error.message : "Failed to upload image",
                variant: "destructive"
            });
        } finally {
            setLoading(false);
        }
    };

    const handleUploadRental = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!rentalFormData.name || !rentalFormData.dailyRate) {
            toast({
                title: "Please fill in all required fields",
                variant: "destructive"
            });
            return;
        }

        // When creating new, image is required. When editing, image is optional
        if (!editingRentalId && !rentalFormData.imageFile) {
            toast({
                title: "Please upload an image",
                variant: "destructive"
            });
            return;
        }

        // Validate image file only if one is provided
        if (rentalFormData.imageFile && !isValidImageFile(rentalFormData.imageFile)) {
            toast({
                title: "Please upload a valid image file (JPEG, PNG, JPG)",
                variant: "destructive"
            });
            return;
        }

        // Check file size only if one is provided
        if (rentalFormData.imageFile && getFileSizeInMB(rentalFormData.imageFile) > 5) {
            toast({
                title: "Image size should be less than 5MB",
                variant: "destructive"
            });
            return;
        }

        try {
            setLoading(true);
            let imageBase64: string | undefined;

            // Only convert to base64 if a new image was selected
            if (rentalFormData.imageFile) {
                imageBase64 = await fileToBase64(rentalFormData.imageFile);
            }

            if (editingRentalId) {
                // Update existing rental equipment
                const updateData: any = {
                    name: rentalFormData.name,
                    category: rentalFormData.category,
                    description: rentalFormData.description,
                    dailyRate: parseFloat(rentalFormData.dailyRate),
                    keyFeatures: rentalFormData.keyFeatures
                };
                // Only include imageBase64 if a new image was selected
                if (imageBase64) {
                    updateData.imageBase64 = imageBase64;
                }

                await rentalAPI.update(editingRentalId, updateData);

                toast({
                    title: "Equipment updated successfully",
                    variant: "success"
                });
                setEditingRentalId(null);
            } else {
                // Create new rental equipment (image required)
                await rentalAPI.create({
                    name: rentalFormData.name,
                    category: rentalFormData.category,
                    imageBase64: imageBase64!,
                    description: rentalFormData.description,
                    dailyRate: parseFloat(rentalFormData.dailyRate),
                    keyFeatures: rentalFormData.keyFeatures
                });

                toast({
                    title: "Equipment added successfully",
                    variant: "success"
                });
            }

            setRentalFormData({
                name: "",
                category: "cameras",
                description: "",
                dailyRate: "",
                keyFeatures: "",
                imageFile: null
            });

            fetchRentalEquipment();
        } catch (error) {
            toast({
                title: error instanceof Error ? error.message : "Failed to add equipment",
                variant: "destructive"
            });
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteWedding = async (id: string) => {
        setDeleteConfirm({ id, type: 'wedding' });
    };

    const handleDeleteRental = async (id: string) => {
        setDeleteConfirm({ id, type: 'rental' });
    };

    const confirmDelete = async () => {
        if (!deleteConfirm) return;

        try {
            setLoading(true);
            if (deleteConfirm.type === 'wedding') {
                await weddingAPI.delete(deleteConfirm.id);
                toast({
                    title: "Image deleted successfully",
                    variant: "success"
                });
                fetchWeddingImages();
            } else {
                await rentalAPI.delete(deleteConfirm.id);
                toast({
                    title: "Equipment deleted successfully",
                    variant: "success"
                });
                fetchRentalEquipment();
            }
        } catch (error) {
            toast({
                title: deleteConfirm.type === 'wedding' ? "Failed to delete image" : "Failed to delete equipment",
                variant: "destructive"
            });
        } finally {
            setLoading(false);
            setDeleteConfirm(null);
        }
    };

    const handleEditWedding = (item: WeddingImage) => {
        setWeddingFormData({
            title: item.title,
            category: item.category,
            description: item.description || "",
            imageFile: null
        });
        setEditingWeddingId(item._id);
        setTimeout(() => {
            const formElement = (weddingFormRef as any)?.current;
            if (formElement) {
                formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 0);
    };

    const handleEditRental = (item: RentalEquipment) => {
        setRentalFormData({
            name: item.name,
            category: item.category,
            description: item.description || "",
            dailyRate: item.dailyRate?.toString() || "",
            keyFeatures: item.keyFeatures || "",
            imageFile: null
        });
        setEditingRentalId(item._id);
        setTimeout(() => {
            const formElement = (rentalFormRef as any)?.current;
            if (formElement) {
                formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 0);
    };

    const cancelEdit = (type: 'wedding' | 'rental') => {
        if (type === 'wedding') {
            setEditingWeddingId(null);
            setWeddingFormData({
                title: "",
                category: "ceremony",
                description: "",
                imageFile: null
            });
        } else {
            setEditingRentalId(null);
            setRentalFormData({
                name: "",
                category: "cameras",
                description: "",
                dailyRate: "",
                keyFeatures: "",
                imageFile: null
            });
        }
    };

    const stats = [
        { label: "Total Images", value: (weddingContent.length + rentalContent.length).toString(), icon: Image, color: "bg-yellow-500" },
        { label: "Wedding Gallery", value: weddingContent.length.toString(), icon: Heart, color: "bg-yellow-600" },
        { label: "Rental Items", value: rentalContent.length.toString(), icon: Camera, color: "bg-gray-800" }
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
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-8">
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
                                Upload and manage images for your services
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
                                        <Card ref={weddingFormRef as any} className="border-2 border-dashed border-yellow-300 bg-yellow-50">
                                            <CardContent className="p-8">
                                                <div className="text-center">
                                                    <Upload className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
                                                    <h3 className="text-xl font-bold text-black mb-2">
                                                        {editingWeddingId ? "Edit Wedding Content" : "Upload Wedding Content"}
                                                    </h3>
                                                    <p className="text-gray-600 mb-6">Drag and drop files here or click to browse</p>

                                                    <form onSubmit={handleUploadWedding} className="space-y-4">
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                            <div>
                                                                <Label htmlFor="title" className="text-black font-medium">Title</Label>
                                                                <Input
                                                                    id="title"
                                                                    placeholder="Enter content title"
                                                                    className="border-yellow-300"
                                                                    value={weddingFormData.title}
                                                                    onChange={(e) => setWeddingFormData({ ...weddingFormData, title: e.target.value })}
                                                                    disabled={loading}
                                                                />
                                                            </div>
                                                            <div>
                                                                <Label htmlFor="category" className="text-black font-medium">Category</Label>
                                                                <select
                                                                    className="w-full px-3 py-2 border border-yellow-300 rounded-md"
                                                                    value={weddingFormData.category}
                                                                    onChange={(e) => setWeddingFormData({ ...weddingFormData, category: e.target.value })}
                                                                    disabled={loading}
                                                                >
                                                                    <option value="ceremony">Wedding</option>
                                                                    <option value="reception">Reception</option>
                                                                    <option value="engagement">Engagement</option>
                                                                    <option value="pre-wedding">Pre-Wedding</option>
                                                                    <option value="highlights">Highlights</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="mb-4">
                                                            <Label htmlFor="wedding-image-file" className="text-black font-medium">
                                                                Upload Image {!editingWeddingId && "*"}
                                                            </Label>
                                                            <Input
                                                                id="wedding-image-file"
                                                                type="file"
                                                                accept="image/*"
                                                                className="border-yellow-300"
                                                                onChange={(e) => {
                                                                    const file = e.target.files?.[0];
                                                                    if (file) {
                                                                        setWeddingFormData({ ...weddingFormData, imageFile: file });
                                                                    }
                                                                }}
                                                                disabled={loading}
                                                                required={!editingWeddingId}
                                                            />
                                                            {weddingFormData.imageFile && (
                                                                <p className="text-sm text-gray-600 mt-2">
                                                                    ✓ Selected: {weddingFormData.imageFile.name}
                                                                </p>
                                                            )}
                                                            {editingWeddingId && (
                                                                <p className="text-sm text-gray-500 mt-2">
                                                                    Leave empty to keep existing image
                                                                </p>
                                                            )}
                                                        </div>

                                                        <div className="mb-4">
                                                            <Label htmlFor="description" className="text-black font-medium">Description</Label>
                                                            <Textarea
                                                                id="description"
                                                                placeholder="Enter content description"
                                                                className="border-yellow-300"
                                                                value={weddingFormData.description}
                                                                onChange={(e) => setWeddingFormData({ ...weddingFormData, description: e.target.value })}
                                                                disabled={loading}
                                                            />
                                                        </div>

                                                        <Button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-black px-8" disabled={loading}>
                                                            {loading ? <Loader className="w-4 h-4 mr-2 animate-spin" /> : <Plus className="w-4 h-4 mr-2" />}
                                                            {loading ? "Processing..." : editingWeddingId ? "Update Content" : "Upload Content"}
                                                        </Button>
                                                        {editingWeddingId && (
                                                            <Button
                                                                type="button"
                                                                variant="outline"
                                                                className="px-8 ml-2"
                                                                onClick={() => cancelEdit('wedding')}
                                                                disabled={loading}
                                                            >
                                                                Cancel
                                                            </Button>
                                                        )}
                                                    </form>
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
                                            {weddingContent.length > 0 ? (
                                                weddingContent.map((item) => (
                                                    <Card key={item._id} className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                                        <div className="relative overflow-hidden rounded-t-lg">
                                                            <img
                                                                src={getImageUrl(item.imageUrl)}
                                                                alt={item.title}
                                                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                                            />
                                                            <div className="absolute top-2 left-2">
                                                                <Badge className="bg-yellow-500 text-black">
                                                                    <Image className="w-3 h-3" />
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
                                                            <p className="text-sm text-gray-600 mb-3">Uploaded: {new Date(item.uploadDate).toLocaleDateString()}</p>
                                                            <div className="flex items-center space-x-2">
                                                                <Button
                                                                    size="sm"
                                                                    variant="outline"
                                                                    className="flex-1"
                                                                    onClick={() => setPreviewImage(getImageUrl(item.imageUrl))}
                                                                >
                                                                    <Eye className="w-3 h-3 mr-1" />
                                                                    View
                                                                </Button>
                                                                <Button
                                                                    size="sm"
                                                                    variant="outline"
                                                                    onClick={() => handleEditWedding(item)}
                                                                >
                                                                    <Edit3 className="w-3 h-3" />
                                                                </Button>
                                                                <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700" onClick={() => handleDeleteWedding(item._id)}>
                                                                    <Trash2 className="w-3 h-3" />
                                                                </Button>
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                ))
                                            ) : (
                                                <Card className="col-span-full">
                                                    <CardContent className="p-8 text-center">
                                                        <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                                        <p className="text-gray-600">No images found</p>
                                                    </CardContent>
                                                </Card>
                                            )}
                                        </div>
                                    </div>
                                </TabsContent>

                                {/* Rental Services Tab */}
                                <TabsContent value="rental" className="p-6">
                                    <div className="space-y-6">
                                        {/* Upload Section */}
                                        <Card ref={rentalFormRef as any} className="border-2 border-dashed border-gray-300 bg-gray-50">
                                            <CardContent className="p-8">
                                                <div className="text-center">
                                                    <Camera className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                                                    <h3 className="text-xl font-bold text-black mb-2">
                                                        {editingRentalId ? "Edit Rental Equipment" : "Upload Rental Equipment"}
                                                    </h3>
                                                    <p className="text-gray-600 mb-6">Add images of your rental equipment</p>

                                                    <form onSubmit={handleUploadRental} className="space-y-4">
                                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                                            <div>
                                                                <Label htmlFor="equipment-name" className="text-black font-medium">Equipment Name</Label>
                                                                <Input
                                                                    id="equipment-name"
                                                                    placeholder="e.g., Professional DSLR Camera"
                                                                    className="border-gray-300"
                                                                    value={rentalFormData.name}
                                                                    onChange={(e) => setRentalFormData({ ...rentalFormData, name: e.target.value })}
                                                                    disabled={loading}
                                                                />
                                                            </div>
                                                            <div>
                                                                <Label htmlFor="equipment-category" className="text-black font-medium">Category</Label>
                                                                <select
                                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                                                    value={rentalFormData.category}
                                                                    onChange={(e) => setRentalFormData({ ...rentalFormData, category: e.target.value })}
                                                                    disabled={loading}
                                                                >
                                                                    <option value="cameras">Cameras</option>
                                                                    <option value="lighting">Lighting</option>
                                                                    <option value="audio">Audio</option>
                                                                    <option value="video">Video</option>
                                                                    <option value="accessories">Accessories</option>
                                                                </select>
                                                            </div>
                                                            <div>
                                                                <Label htmlFor="price" className="text-black font-medium">Daily Rate</Label>
                                                                <Input
                                                                    id="price"
                                                                    placeholder="50"
                                                                    className="border-gray-300"
                                                                    type="number"
                                                                    value={rentalFormData.dailyRate}
                                                                    onChange={(e) => setRentalFormData({ ...rentalFormData, dailyRate: e.target.value })}
                                                                    disabled={loading}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="mb-4">
                                                            <Label htmlFor="rental-image-file" className="text-black font-medium">
                                                                Upload Image {!editingRentalId && "*"}
                                                            </Label>
                                                            <Input
                                                                id="rental-image-file"
                                                                type="file"
                                                                accept="image/*"
                                                                className="border-gray-300"
                                                                onChange={(e) => {
                                                                    const file = e.target.files?.[0];
                                                                    if (file) {
                                                                        setRentalFormData({ ...rentalFormData, imageFile: file });
                                                                    }
                                                                }}
                                                                disabled={loading}
                                                                required={!editingRentalId}
                                                            />
                                                            {rentalFormData.imageFile && (
                                                                <p className="text-sm text-gray-600 mt-2">
                                                                    ✓ Selected: {rentalFormData.imageFile.name}
                                                                </p>
                                                            )}
                                                            {editingRentalId && (
                                                                <p className="text-sm text-gray-500 mt-2">
                                                                    Leave empty to keep existing image
                                                                </p>
                                                            )}
                                                        </div>

                                                        <div className="mb-4">
                                                            <Label htmlFor="description" className="text-black font-medium">Description</Label>
                                                            <Textarea
                                                                id="description"
                                                                placeholder="Enter equipment description"
                                                                className="border-gray-300"
                                                                value={rentalFormData.description}
                                                                onChange={(e) => setRentalFormData({ ...rentalFormData, description: e.target.value })}
                                                                disabled={loading}
                                                            />
                                                        </div>

                                                        <div className="mb-4">
                                                            <Label htmlFor="features" className="text-black font-medium">Key Features</Label>
                                                            <Textarea
                                                                id="features"
                                                                placeholder="List key features and specifications"
                                                                className="border-gray-300"
                                                                value={rentalFormData.keyFeatures}
                                                                onChange={(e) => setRentalFormData({ ...rentalFormData, keyFeatures: e.target.value })}
                                                                disabled={loading}
                                                            />
                                                        </div>

                                                        <Button type="submit" className="bg-black hover:bg-gray-800 text-white px-8" disabled={loading}>
                                                            {loading ? <Loader className="w-4 h-4 mr-2 animate-spin" /> : <Plus className="w-4 h-4 mr-2" />}
                                                            {loading ? "Processing..." : editingRentalId ? "Update Equipment" : "Add Equipment"}
                                                        </Button>
                                                        {editingRentalId && (
                                                            <Button
                                                                type="button"
                                                                variant="outline"
                                                                className="px-8 ml-2"
                                                                onClick={() => cancelEdit('rental')}
                                                                disabled={loading}
                                                            >
                                                                Cancel
                                                            </Button>
                                                        )}
                                                    </form>
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
                                            {rentalContent.length > 0 ? (
                                                rentalContent.map((item) => (
                                                    <Card key={item._id} className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                                        <div className="relative overflow-hidden rounded-t-lg">
                                                            <img
                                                                src={getImageUrl(item.imageUrl)}
                                                                alt={item.name}
                                                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                                            />
                                                            <div className="absolute top-2 left-2">
                                                                <Badge className="bg-black text-white">
                                                                    <Camera className="w-3 h-3 mr-1" />
                                                                </Badge>
                                                            </div>
                                                            <div className="absolute top-2 right-2">
                                                                <Badge className="bg-yellow-500 text-black">
                                                                    {item.category}
                                                                </Badge>
                                                            </div>
                                                        </div>
                                                        <CardContent className="p-4">
                                                            <h4 className="font-bold text-black mb-1">{item.name}</h4>
                                                            <p className="text-sm text-gray-600 mb-1">₹{item.dailyRate}/day</p>
                                                            <p className="text-sm text-gray-600 mb-3">Added: {new Date(item.createdAt || item.uploadDate || '').toLocaleDateString()}</p>
                                                            <div className="flex items-center space-x-2">
                                                                <Button
                                                                    size="sm"
                                                                    variant="outline"
                                                                    className="flex-1"
                                                                    onClick={() => setPreviewImage(getImageUrl(item.imageUrl))}
                                                                >
                                                                    <Eye className="w-3 h-3 mr-1" />
                                                                    Preview
                                                                </Button>
                                                                <Button
                                                                    size="sm"
                                                                    variant="outline"
                                                                    onClick={() => handleEditRental(item)}
                                                                >
                                                                    <Edit3 className="w-3 h-3" />
                                                                </Button>
                                                                <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700" onClick={() => handleDeleteRental(item._id)}>
                                                                    <Trash2 className="w-3 h-3" />
                                                                </Button>
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                ))
                                            ) : (
                                                <Card className="col-span-full">
                                                    <CardContent className="p-8 text-center">
                                                        <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                                        <p className="text-gray-600">No rental equipment found</p>
                                                    </CardContent>
                                                </Card>
                                            )}
                                        </div>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Image Preview Modal */}
            {previewImage && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    onClick={() => setPreviewImage(null)}
                >
                    <div
                        className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setPreviewImage(null)}
                            className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center z-10 transition-colors"
                        >
                            ✕
                        </button>
                        <img
                            src={previewImage}
                            alt="Preview"
                            className="w-full h-auto max-h-[90vh] object-contain"
                        />
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {deleteConfirm && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    onClick={() => setDeleteConfirm(null)}
                >
                    <div
                        className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
                            <Trash2 className="w-6 h-6 text-red-600" />
                        </div>
                        <h3 className="text-lg font-bold text-black text-center mb-2">
                            {deleteConfirm.type === 'wedding' ? 'Delete Image?' : 'Delete Equipment?'}
                        </h3>
                        <p className="text-gray-600 text-center mb-6">
                            {deleteConfirm.type === 'wedding'
                                ? 'This image will be permanently deleted.'
                                : 'This equipment will be permanently deleted.'}
                        </p>
                        <div className="flex items-center gap-3">
                            <Button
                                variant="outline"
                                className="flex-1"
                                onClick={() => setDeleteConfirm(null)}
                                disabled={loading}
                            >
                                Cancel
                            </Button>
                            <Button
                                className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                                onClick={confirmDelete}
                                disabled={loading}
                            >
                                {loading ? <Loader className="w-4 h-4 mr-2 animate-spin" /> : null}
                                Delete
                            </Button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default AdminDashboard;