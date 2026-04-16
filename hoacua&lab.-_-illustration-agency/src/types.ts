export interface Artwork {
  id: string;
  title: string;
  imageUrl: string;
  category?: string;
}

export interface Artist {
  id: string;
  slug: string;
  name: string;
  bio: string;
  location: string;
  specialty: string;
  thumbnailUrl: string;
  gallery: Artwork[];
  clients: string[];
}
