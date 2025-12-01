const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Wedding API calls
export const weddingAPI = {
  // Get all wedding images
  getAll: async (filters?: { category?: string; search?: string }) => {
    const params = new URLSearchParams();
    if (filters?.category) params.append('category', filters.category);
    if (filters?.search) params.append('search', filters.search);

    const response = await fetch(`${API_BASE_URL}/wedding?${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch wedding images');
    }

    return response.json();
  },

  // Create a new wedding image
  create: async (data: {
    title: string;
    category: string;
    imageUrl?: string;
    imageBase64?: string;
    description?: string;
  }) => {
    const response = await fetch(`${API_BASE_URL}/wedding`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Failed to create wedding image');
    }

    return response.json();
  },

  // Update a wedding image
  update: async (id: string, data: any) => {
    const response = await fetch(`${API_BASE_URL}/wedding/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Failed to update wedding image');
    }

    return response.json();
  },

  // Delete a wedding image
  delete: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/wedding/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error('Failed to delete wedding image');
    }

    return response.json();
  }
};

// Rental Equipment API calls
export const rentalAPI = {
  // Get all rental equipment
  getAll: async (filters?: { category?: string; search?: string; availability?: boolean }) => {
    const params = new URLSearchParams();
    if (filters?.category) params.append('category', filters.category);
    if (filters?.search) params.append('search', filters.search);
    if (filters?.availability !== undefined) params.append('availability', String(filters.availability));

    const response = await fetch(`${API_BASE_URL}/rental?${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch rental equipment');
    }

    return response.json();
  },

  // Get a single rental equipment
  getById: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/rental/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch rental equipment');
    }

    return response.json();
  },

  // Create new rental equipment
  create: async (data: {
    name: string;
    category: string;
    imageUrl?: string;
    imageBase64?: string;
    description?: string;
    dailyRate: number;
    keyFeatures?: string;
    availability?: boolean;
  }) => {
    const response = await fetch(`${API_BASE_URL}/rental`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Failed to create rental equipment');
    }

    return response.json();
  },

  // Update rental equipment
  update: async (id: string, data: any) => {
    const response = await fetch(`${API_BASE_URL}/rental/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Failed to update rental equipment');
    }

    return response.json();
  },

  // Delete rental equipment
  delete: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/rental/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error('Failed to delete rental equipment');
    }

    return response.json();
  }
};
