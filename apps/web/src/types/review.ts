export type IReviewList = {
  id: number;
  reservation_Id: string;
  room_Id: string;
  user: {
    username: string;
    avatar: string;
  };
  room: {
    property: {
      name: string;
    };
  };
  ratings: string;
  feedBack: string | null;
  content: string;
  createdAt: string;
  updatedAt: string;
};
