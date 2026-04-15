import { City } from './City'

export class Stadium {
  id: number
  name: string
  city: City
  capacity: number

  constructor(id: number, name: string, city: City, capacity: number) {
    this.id = id
    this.name = name
    this.city = city
    this.capacity = capacity
    
    if (!name || name.trim().length === 0) {
      throw new Error('Stadium name is required')
    }
    if (!city) {
      throw new Error('Stadium must be in a city')
    }
    if (capacity <= 0) {
      throw new Error('Capacity must be positive')
    }
  }
}