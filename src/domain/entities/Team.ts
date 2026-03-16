
import { Country } from "./Country";

export class Team {
  id: string
  name: string
  country:  Country
  group?: string
  
  constructor(name: string, country: Country, group?: string) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.country = country;
    this.group = group;
  }
}