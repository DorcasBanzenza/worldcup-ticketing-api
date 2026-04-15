

export class Country {
  
  id: number      
  name: string      
  fifaCode: string  
  

  constructor(id :number, name: string, fifaCode: string) {
    this.id = id
    this.name = name
    this.fifaCode = fifaCode
  
 if (!name || name.trim().length === 0) {
      throw new Error('Country name is required')
    }
    if (!fifaCode || fifaCode.length !== 3) {
      throw new Error('FIFA code must be exactly 3 characters')
    }
  }
}