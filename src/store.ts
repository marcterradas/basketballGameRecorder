import { Team as TeamInterface } from './interfaces'

export const localTeam: TeamInterface = {
    type: 'local',
    name: 'Team A',
    logo: 'lakers.svg',
    score: 0,
    bonus: false,
    possession: false,
    fouls: false
}

export const guestTeam: TeamInterface = {
    type: 'guest',
    name: 'Team B',
    logo: 'celtics.svg',
    score: 0,
    bonus: false,
    possession: false,
    fouls: false
}
