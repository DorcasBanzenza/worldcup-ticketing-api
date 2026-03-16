

export class Country {
  
  id: string        
  name: string      
  fifaCode: string  
  

  constructor(name: string, fifaCode: string) {
  
    if (fifaCode.length !== 3) {
      throw new Error("Le code FIFA doit faire 3 lettres")
    }

    this.fifaCode = fifaCode.toUpperCase()
    
    
    this.id = crypto.randomUUID()  // Génère un ID unique 
    this.name = name
  }
}