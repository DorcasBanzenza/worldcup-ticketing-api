
import { City } from "../domain/entities/City";
import { usa, mexico, canada } from "./countries";


export const cities = [
  new City("Atlanta", usa),
  new City("Mexico City", mexico),
  new City("Vancouver", canada)
];

export const atlanta = cities[0];
export const mexicoCity = cities[1];
export const vancouver = cities[2];