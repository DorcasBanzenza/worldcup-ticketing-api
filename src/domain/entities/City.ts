
import { Country } from "./Country";

export class City {
  id : number 
  name: string
  country: Country

  constructor(id : number , name: string, country: Country) {
    this.id = id;
    this.name = name;
    this.country = country;
    if (!name || name.trim().length === 0) {
      throw new Error('City name is required')
    }
    if (!country) {
      throw new Error('City must belong to a country')
    }
  }
}