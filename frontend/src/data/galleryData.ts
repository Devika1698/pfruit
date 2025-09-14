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

export const galleryData: GalleryFolder[] = [
    {
        id: "romantic-ceremony",
        title: "Romantic Wedding Ceremony",
        coverImage: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop",
        description: "Beautiful moments from traditional wedding ceremonies",
        images: [
            {
                src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop",
                alt: "Romantic ceremony main"
            },
            {
                src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop",
                alt: "Ceremony details"
            },
            {
                src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
                alt: "Ceremony moments"
            }
        ]
    },
    {
        id: "couple-portraits",
        title: "Wedding Couple Portraits",
        coverImage: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
        description: "Intimate portraits of the happy couples",
        images: [
            {
                src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
                alt: "Couple portrait main"
            },
            {
                src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop",
                alt: "Romantic couple shot"
            },
            {
                src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
                alt: "Candid moments"
            }
        ]
    },
    {
        id: "wedding-reception",
        title: "Wedding Reception",
        coverImage: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=600&fit=crop",
        description: "Capturing the joy of wedding celebrations",
        images: [
            {
                src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=600&fit=crop",
                alt: "Reception main"
            },
            {
                src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
                alt: "Reception party"
            },
            {
                src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop",
                alt: "Reception details"
            }
        ]
    },
    {
        id: "wedding-details",
        title: "Wedding Details",
        coverImage: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=600&fit=crop",
        description: "Beautiful details that make the day special",
        images: [
            {
                src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=600&fit=crop",
                alt: "Details main"
            },
            {
                src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop",
                alt: "Decorative details"
            },
            {
                src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
                alt: "Wedding accessories"
            }
        ]
    },
    {
        id: "bridal-photography",
        title: "Bridal Photography",
        coverImage: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop",
        description: "Stunning bridal portraits and moments",
        images: [
            {
                src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop",
                alt: "Bridal main"
            },
            {
                src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
                alt: "Bridal preparation"
            },
            {
                src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop",
                alt: "Bridal portraits"
            }
        ]
    }
];
