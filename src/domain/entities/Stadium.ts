
import { City } from "./City";

export class Stadium {
  public readonly id: string;
  public name: string;
  public city: City;
  public capacity: number;
  
  constructor(name: string, city: City, capacity: number) {

    if (capacity <= 0) {
      throw new Error("La capacité du stade doit être supérieure à 0");
    }
    
    this.id = crypto.randomUUID();
    this.name = name;
    this.city = city;
    this.capacity = capacity;
  }
}