
import { Country } from "./Country";

export class City {
  public readonly id: string;
  public name: string;
  public country: Country;
  
  constructor(name: string, country: Country) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.country = country;
  }
}