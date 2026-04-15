import { Stadium } from './Stadium'
import { Team } from './Team'
import { MatchStatus } from '../enums/MatchStatus'
import { MatchStage } from '../enums/MatchStage'

export class Match {
  id: number
  homeTeam: Team
  awayTeam: Team
  stadium: Stadium
  date: Date
  stage: MatchStage
  status: MatchStatus

  constructor(
    id: number,
    homeTeam: Team,
    awayTeam: Team,
    stadium: Stadium,
    date: Date,
    stage: MatchStage,
    status: MatchStatus = MatchStatus.SCHEDULED
  ) {
    this.id = id
    this.homeTeam = homeTeam
    this.awayTeam = awayTeam
    this.stadium = stadium
    this.date = date
    this.stage = stage
    this.status = status
    
    if (!homeTeam || !awayTeam) {
      throw new Error('Both home and away teams are required')
    }
    if (homeTeam.id === awayTeam.id) {
      throw new Error('Home team and away team cannot be the same')
    }
    if (!stadium) {
      throw new Error('Stadium is required')
    }
    if (!date || isNaN(date.getTime())) {
      throw new Error('Valid date is required')
    }
  }
}