export interface GalleryImage {
    src: string;
    alt: string;
}

export interface GalleryFolder {
    id: string;
    title: string;
    coverImage: string;
    description: string;
    images: GalleryImage[];
}

export const galleryAPI = {
    async getWeddingGallery(): Promise<{ success: boolean; data: GalleryFolder[]; error?: string }> {
        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
            const response = await fetch(`${apiUrl}/wedding`);
            
            if (!response.ok) {
                throw new Error('Failed to fetch wedding images');
            }

            const apiData = await response.json();
            const images = apiData.data || [];

            // Group images by category
            const groupedByCategory = images.reduce((acc: { [key: string]: any[] }, item: any) => {
                const category = item.category || 'uncategorized';
                if (!acc[category]) {
                    acc[category] = [];
                }
                acc[category].push(item);
                return acc;
            }, {});

            // Convert grouped data to gallery folders format
            const galleryFolders: GalleryFolder[] = Object.entries(groupedByCategory).map(([category, items]: [string, any[]]) => {
                const categoryItems = items as any[];
                const images: GalleryImage[] = categoryItems.map(item => ({
                    src: getFullImageUrl(item.imageUrl),
                    alt: item.title || category
                }));

                return {
                    id: category.toLowerCase().replace(/\s+/g, '-'),
                    title: category.charAt(0).toUpperCase() + category.slice(1),
                    coverImage: images.length > 0 ? images[0].src : '',
                    description: `Beautiful moments from ${category} photography`,
                    images: images
                };
            });

            return {
                success: true,
                data: galleryFolders
            };
        } catch (error) {
            console.error('Error fetching wedding gallery:', error);
            return {
                success: false,
                data: [],
                error: error instanceof Error ? error.message : 'Failed to fetch gallery data'
            };
        }
    }
};

// Helper function to get full image URL
function getFullImageUrl(imageUrl: string): string {
    if (!imageUrl) return '';
    if (imageUrl.startsWith('http')) return imageUrl;
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
    const baseUrl = apiUrl.replace('/api', '');
    return `${baseUrl}${imageUrl}`;
}
