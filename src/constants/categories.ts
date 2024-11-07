import {
  bikeCategoryImage,
  bikeCategoryWebpImage,
  boatsCategoryImage,
  boatsCategoryWebpImage,
  carsCategoryImage,
  carsCategoryWebpImage,
  ticketsCategoryImage,
  ticketsCategoryWebpImage,
  transferCategoryImage,
  transferCategoryWebpImage,
} from "../assets/images";

export enum CategoryKeys {
  bikes = "bikes",
  cars = "cars",
  boats = "boats",
  transfer = "transfer",
  tickets = "tickets",
}

export const categories: {
  name: string;
  key: CategoryKeys;
  img: string;
  imgWebp: string;
}[] = [
  {
    name: "Байки",
    key: CategoryKeys.bikes,
    img: bikeCategoryImage,
    imgWebp: bikeCategoryWebpImage,
  },

  {
    name: "Авто",
    key: CategoryKeys.cars,
    img: carsCategoryImage,
    imgWebp: carsCategoryWebpImage,
  },

  {
    name: "Лодки",
    key: CategoryKeys.boats,
    img: boatsCategoryImage,
    imgWebp: boatsCategoryWebpImage,
  },

  {
    name: "Трансфер",
    key: CategoryKeys.transfer,
    img: transferCategoryImage,
    imgWebp: transferCategoryWebpImage,
  },
  {
    name: "Билеты",
    key: CategoryKeys.tickets,
    img: ticketsCategoryImage,
    imgWebp: ticketsCategoryWebpImage,
  },
  {
    name: "Байки",
    key: CategoryKeys.bikes,
    img: bikeCategoryImage,
    imgWebp: bikeCategoryWebpImage,
  },

  {
    name: "Авто",
    key: CategoryKeys.cars,
    img: carsCategoryImage,
    imgWebp: carsCategoryWebpImage,
  },

  {
    name: "Лодки",
    key: CategoryKeys.boats,
    img: boatsCategoryImage,
    imgWebp: boatsCategoryWebpImage,
  },

  {
    name: "Трансфер",
    key: CategoryKeys.transfer,
    img: transferCategoryImage,
    imgWebp: transferCategoryWebpImage,
  },
  {
    name: "Билеты",
    key: CategoryKeys.tickets,
    img: ticketsCategoryImage,
    imgWebp: ticketsCategoryWebpImage,
  },
];
