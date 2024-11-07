export interface ITransport {
  img: string;
  model: string;
  year?: number;
  place: string;
  priceForMonth?: number;
  priceForWeek?: number;
  priceForDay?: number;
  updatedAt?: string;
}

export interface ITransfer {
  img: string;
  model: string;
  place?: string;
  minRent: string;
  halfDay: number;
  seats: number;
  priceForHour?: number;
}

export interface IBoat {
  img: string;
  model: string;
  length: number;
  minRent: string;
  halfDay: number;
  guestCount: number;
  priceForHour?: number;
}

export interface ITicket {
  img: string;
  title: string;
  description: string;
  travelTime?: string;
  price: number;
}

export type IProduct = ITransport | IBoat | ITransfer | ITicket;
//   img: string;
//   model: string;
//   year?: number;
//   place: string;
//   ticketPrice?: string;
//   priceForMonth?: number;
//   priceForWeek?: number;
//   priceForDay?: number;
//   seats?: number;
//   minRent?: string;
//   halfDay?: number;
//   maxGuests?: number;
//   updatedAt?: string;
// }
