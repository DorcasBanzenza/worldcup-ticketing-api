import { Stadium } from '@domain/entities/Stadium'
import { cities } from './cities'

export const stadiums: Stadium[] = [
  new Stadium(1, 'Mercedes-Benz Stadium', cities[0], 67382),
  new Stadium(2, 'Estadio Azteca', cities[1], 72766),
  new Stadium(3, 'BC Place', cities[2], 54000),
  new Stadium(4, 'AT&T Stadium', cities[3], 70122),
  new Stadium(5, 'Estadio Akron', cities[4], 44330),
  new Stadium(6, 'BMO Field', cities[5], 45000)
]