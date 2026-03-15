
import { Country } from "./Country";

export class Team {
  public readonly id: string;
  public name: string;
  public country: Country;
  public group?: string;
  
  constructor(name: string, country: Country, group?: string) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.country = country;
    this.group = group;
  }
}