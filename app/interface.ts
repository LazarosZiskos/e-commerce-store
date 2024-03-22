export interface simplifiedProduct {
  _id: string;
  imageUrl: string;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
}

export interface fullProduct {
  _id: string;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
  images: any;
  description: string;
}
