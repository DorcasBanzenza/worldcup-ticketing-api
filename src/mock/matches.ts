
import { Match } from "../domain/entities/Match";
import { MatchStage } from "../domain/enums/MatchStage";
import { stadiums } from "../mock/stadiums";
import { teams } from "../mock/teams";


export const matches = [
  new Match(
    stadiums[0], 
    teams[0],    
    teams[3],    
    new Date("2026-06-15T20:00:00Z"),
    MatchStage.GROUP
  ),
  new Match(
    stadiums[1], 
    teams[1],    
    teams[4],    
    new Date("2026-06-16T18:00:00Z"),
    MatchStage.GROUP
  ),
  new Match(
    stadiums[2], 
    teams[2],    
    teams[5],    
    new Date("2026-06-17T19:00:00Z"),
    MatchStage.GROUP
  )
];