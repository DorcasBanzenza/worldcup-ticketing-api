import { Match } from '@domain/entities/Match'
import { stadiums } from './stadiums'
import { teams } from './teams'
import { MatchStage } from '@domain/enums/MatchStage'
import { MatchStatus } from '@domain/enums/MatchStatus'

export const matches: Match[] = [
  new Match(
    1,
    teams[0],  // France
    teams[1],  // England
    stadiums[0],
    new Date('2026-06-15T15:00:00Z'),
    MatchStage.GROUP,
    MatchStatus.SCHEDULED
  ),
  new Match(
    2,
    teams[2],  // Spain
    teams[3],  // Germany
    stadiums[1],
    new Date('2026-06-16T18:00:00Z'),
    MatchStage.GROUP,
    MatchStatus.SCHEDULED
  ),
  new Match(
    3,
    teams[4],  // Italy
    teams[5],  // Brazil
    stadiums[2],
    new Date('2026-06-20T20:00:00Z'),
    MatchStage.GROUP,
    MatchStatus.SCHEDULED
  ),
  new Match(
    4,
    teams[6],  // Argentina
    teams[7],  // Mexico
    stadiums[4],
    new Date('2026-06-18T16:00:00Z'),
    MatchStage.GROUP,
    MatchStatus.SCHEDULED
  ),
  new Match(
    5,
    teams[8],  // Canada
    teams[9],  // USA
    stadiums[5],
    new Date('2026-06-17T19:00:00Z'),
    MatchStage.GROUP,
    MatchStatus.LIVE
  ),
  new Match(
    6,
    teams[10], // Portugal
    teams[11], // Netherlands
    stadiums[3],
    new Date('2026-07-05T15:00:00Z'),
    MatchStage.QUARTER_FINALS,
    MatchStatus.SCHEDULED
  )
]