export interface RoomForm {
  type: string;
  price: string;
  pricediscount: string;
  capacity: number;
  description: string;
  facility: string[];
}

export interface PropertyForm {
  name: string;
  description: string;
  category: string;
  thumbnail: File | null;
  location: string;
}

export interface RoomData {
  id: string;
  capacity: number;
  description: string;
  facility: FacilityType[];
  price: number;
  pricediscount: number;
  type: string;
  availability: boolean;
  RoomPic: RoomPic[];
}

export interface DataProperty {
  id: number;
  name: string;
  description: string;
  category: string;
  thumbnail: string;
  isActive: boolean;
  location: string;
  Room: RoomData[];
}

export interface RoomPic {
  url: string;
}

export interface FacilityType {
  name: string;
}
