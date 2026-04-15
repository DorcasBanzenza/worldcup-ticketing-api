import { City } from '@domain/entities/City'
import { countries } from './countries'

export const cities: City[] = [
  new City(1, 'Atlanta', countries[0]),
  new City(2, 'Mexico City', countries[1]),
  new City(3, 'Vancouver', countries[2]),
  new City(4, 'Dallas', countries[0]),
  new City(5, 'Guadalajara', countries[1]),
  new City(6, 'Toronto', countries[2])
]