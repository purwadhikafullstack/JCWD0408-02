export interface PropertyForm {
  name: string;
  description: string;
  category: string;
  thumbnail: File | null;
  location: string;
}

export interface RoomForm {
  type: string;
  price: string;
  pricediscount: string;
  capacity: number;
  description: string;
  facility: string;
}
