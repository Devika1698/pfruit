import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Folder, ArrowLeft } from "lucide-react";
import { galleryData, GalleryFolder, GalleryImage } from "@/data/galleryData";

const GalleryPage = () => {
    const [selectedFolder, setSelectedFolder] = useState<GalleryFolder | null>(null);
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    const handleDownload = (image: GalleryImage) => {
        const link = document.createElement('a');
        link.href = image.src;
        link.download = `wedding-${image.alt.toLowerCase().replace(/\s+/g, '-')}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Show folder contents
    if (selectedFolder) {
        return (
            <div className="min-h-screen bg-white p-8">
                <div className="max-w-7xl mx-auto">
                    <Button
                        variant="ghost"
                        className="mb-8 hover:bg-rose-50"
                        onClick={() => setSelectedFolder(null)}
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Folders
                    </Button>

                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">{selectedFolder.title}</h1>
                        <p className="text-lg text-gray-600">{selectedFolder.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {selectedFolder.images.map((image, index) => (
                            <div
                                key={index}
                                className="relative group overflow-hidden rounded-lg shadow-lg"
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                                    <h3 className="text-white text-xl font-semibold mb-4">{image.alt}</h3>
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
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // Show folders
    return (
        <div className="min-h-screen bg-white p-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Wedding Gallery</h1>
                    <p className="text-lg text-gray-600">Browse our collection of wedding photographs by category</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryData.map((folder) => (
                        <div
                            key={folder.id}
                            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                            onClick={() => setSelectedFolder(folder)}
                        >
                            <div className="relative h-[400px]">
                                <img
                                    src={folder.coverImage}
                                    alt={folder.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Folder className="w-12 h-12 text-white mb-4" />
                                <h3 className="text-white text-2xl font-semibold mb-2">{folder.title}</h3>
                                <p className="text-white/80 text-sm px-4 text-center">{folder.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalleryPage;
