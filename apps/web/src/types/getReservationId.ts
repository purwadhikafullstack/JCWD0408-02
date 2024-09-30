type Property = {
  name: string;
  category: string;
  location: string;
};

type Room = {
  price: number;
  capacity: number;
  type: string;
  pricediscount: number;
  property: Property;
};

type User = {
  username: string;
  phone: string;
  email: string;
};

export interface IReservationById {
  id: string;
  price: number;
  startDate: string; 
  endDate: string; 
  method: string;
  paymentProof: string;
  paymentLink: string | null;
  statusRes: string;
  createdAt: string; 
  updatedAt: string; 
  user_Id: number;
  room_Id: string;
  user: User;
  room: Room;
}
