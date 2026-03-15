
import { Team } from "../domain/entities/Team";
import { Country } from "../domain/entities/Country";

const france = new Country("France", "FRA");
const brazil = new Country("Brésil", "BRA");
const argentina = new Country("Argentine", "ARG");
const germany = new Country("Allemagne", "GER");
const spain = new Country("Espagne", "ESP");
const england = new Country("Angleterre", "ENG");


export const teams = [
  new Team("France", france, "A"),
  new Team("Brésil", brazil, "B"),
  new Team("Argentine", argentina, "C"),
  new Team("Allemagne", germany, "A"),
  new Team("Espagne", spain, "B"),
  new Team("Angleterre", england, "C")
];