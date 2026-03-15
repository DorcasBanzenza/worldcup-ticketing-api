
import { Stadium } from "../domain/entities/Stadium";
import { atlanta, mexicoCity, vancouver } from "./cities";


export const stadiums = [
  new Stadium("Mercedes-Benz Stadium", atlanta, 67382),
  new Stadium("Estadio Azteca", mexicoCity, 72766),
  new Stadium("BC Place", vancouver, 54000)
];

export const mercedesBenz = stadiums[0];
export const azteca = stadiums[1];
export const bcPlace = stadiums[2];