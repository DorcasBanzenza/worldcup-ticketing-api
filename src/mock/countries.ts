
import { Country } from "../domain/entities/Country";


export const countries = [
  new Country("États-Unis", "USA"),
  new Country("Mexique", "MEX"),
  new Country("Canada", "CAN")
];


export const usa = countries[0];
export const mexico = countries[1];
export const canada = countries[2];