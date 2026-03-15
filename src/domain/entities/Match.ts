
import { Stadium } from "./Stadium";
import { Team } from "./Team";
import { MatchStatus } from "../enums/MatchStatus";
import { MatchStage } from "../enums/MatchStage";

export class Match {
  public readonly id: string;
  public stadium: Stadium;
  public homeTeam: Team;
  public awayTeam: Team;
  public datetime: Date;
  public stage: MatchStage;
  public status: MatchStatus;
  public homeScore?: number;
  public awayScore?: number;
  
  constructor(
    stadium: Stadium,
    homeTeam: Team,
    awayTeam: Team,
    datetime: Date,
    stage: MatchStage
  ) {
    
    if (homeTeam.id === awayTeam.id) {
      throw new Error("Une équipe ne peut pas jouer contre elle-même");
    }
    
    this.id = crypto.randomUUID();
    this.stadium = stadium;
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.datetime = datetime;
    this.stage = stage;
    this.status = MatchStatus.SCHEDULED; 
  }
  
  
  updateScore(homeScore: number, awayScore: number): void {
    if (homeScore < 0 || awayScore < 0) {
      throw new Error("Les scores ne peuvent pas être négatifs");
    }
    
    this.homeScore = homeScore;
    this.awayScore = awayScore;
    this.status = MatchStatus.COMPLETED;
  }
  

  postpone(): void {
    this.status = MatchStatus.POSTPONED;
  }
}