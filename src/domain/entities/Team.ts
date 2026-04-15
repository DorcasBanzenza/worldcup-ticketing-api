export class Team {
  id: number
  name: string
  fifaCode: string
  group?: string

  constructor(id: number, name: string, fifaCode: string, group?: string) {
    this.id = id
    this.name = name
    this.fifaCode = fifaCode
    this.group = group
    
    if (!name || name.trim().length === 0) {
      throw new Error('Team name is required')
    }
    if (!fifaCode || fifaCode.length !== 3) {
      throw new Error('FIFA code must be exactly 3 characters')
    }
  }
}