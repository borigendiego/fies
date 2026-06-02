type WPImageSize = {
  source_url: string;
  width: number;
  height: number;
  file?: string;
  mime_type?: string;
};

export type Blog = {
  id: number;
  title: string;
  imageUrl: string;
  imageSizes: {
    thumbnail?: WPImageSize;
    medium?: WPImageSize;
    medium_large?: WPImageSize;
    large?: WPImageSize;
    full?: WPImageSize;
    [key: string]: WPImageSize | undefined; // por si WordPress tiene tamaños personalizados
  } | null;
  slug: string;
  date: string;
  content: string;
  link: string;
  excerpt: string;
};