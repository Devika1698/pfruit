import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Loader, Eye, X } from "lucide-react";
import type { GalleryImage } from "@/lib/galleryAPI";
import { galleryAPI } from "@/lib/galleryAPI";

const GalleryPage = () => {
    const [allImages, setAllImages] = useState<GalleryImage[]>([]);
    const [loading, setLoading] = useState(true);
    const [previewImage, setPreviewImage] = useState<GalleryImage | null>(null);

    useEffect(() => {
        fetchGalleryData();
    }, []);

    const fetchGalleryData = async () => {
        try {
            setLoading(true);
            const response = await galleryAPI.getWeddingGallery();
            if (response.success) {
                // Flatten all images from all categories
                const images = response.data.flatMap(folder => folder.images);
                setAllImages(images);
            }
        } catch (error) {
            console.error('Error fetching gallery:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = (image: GalleryImage) => {
        const link = document.createElement('a');
        link.href = image.src;
        link.download = `wedding-${image.alt.toLowerCase().replace(/\s+/g, '-')}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Show loading state
    if (loading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <Loader className="w-12 h-12 animate-spin text-rose-500 mx-auto mb-4" />
                    <p className="text-gray-600 text-lg">Loading gallery...</p>
                </div>
            </div>
        );
    }

    // Show all photos
    return (
        <div className="min-h-screen bg-white p-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Wedding Gallery</h1>
                    <p className="text-lg text-gray-600">Our collection of beautiful wedding photographs</p>
                    <p className="text-sm text-gray-500 mt-2">{allImages.length} photos</p>
                </div>

                {allImages.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allImages.map((image, index) => (
                            <div
                                key={index}
                                className="relative group overflow-hidden rounded-lg shadow-lg"
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                                    <h3 className="text-white text-xl font-semibold">{image.alt}</h3>
                                    <div className="flex gap-3">
                                        <Button
                                            onClick={() => setPreviewImage(image)}
                                            variant="outline"
                                            className="bg-white/20 hover:bg-white/30 text-white border-white"
                                        >
                                            <Eye className="w-5 h-5 mr-2" />
                                            Preview
                                        </Button>
                                        <Button
                                            onClick={() => handleDownload(image)}
                                            variant="outline"
                                            className="bg-white/20 hover:bg-white/30 text-white border-white"
                                        >
                                            <Download className="w-5 h-5 mr-2" />
                                            Download
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-600 text-lg">No images in gallery yet. Check back soon!</p>
                    </div>
                )}
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
                            <X className="w-6 h-6" />
                        </button>
                        <img
                            src={previewImage.src}
                            alt={previewImage.alt}
                            className="w-full h-auto max-h-[90vh] object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryPage;
