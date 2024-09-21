<<<<<<< HEAD
export interface RoomForm {
  type: string;
  price: string;
  pricediscount: string;
  capacity: number;
  description: string;
  facility: string;
}

=======
>>>>>>> 7fe86820563b02bc7d743b813daca8931ae8db49
export interface PropertyForm {
  name: string;
  description: string;
  category: string;
  thumbnail: File | null;
  location: string;
}

<<<<<<< HEAD
export interface RoomData {
  id: number;
  capacity: number;
  description: string;
  facility: string;
  price: number;
  pricediscount: number;
  type: string;
}



export interface DataProperty {
  name: string;
  description: string;
  category: string;
  thumbnail: string;
  location: string;
  Room: RoomData[]
=======
export interface RoomForm {
  type: string;
  price: string;
  pricediscount: string;
  capacity: number;
  description: string;
  facility: string;
>>>>>>> 7fe86820563b02bc7d743b813daca8931ae8db49
}
