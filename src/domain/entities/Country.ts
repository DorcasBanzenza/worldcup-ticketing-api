
export class Country {
  public readonly id: string;
  public name: string;
  public fifaCode: string;
  
  constructor(name: string, fifaCode: string) {
    
    if (!/^[A-Z]{3}$/.test(fifaCode)) {
      throw new Error("Le code FIFA doit contenir exactement 3 lettres majuscules");
    }
    
    this.id = crypto.randomUUID();  
    this.name = name;
    this.fifaCode = fifaCode;
  }
}