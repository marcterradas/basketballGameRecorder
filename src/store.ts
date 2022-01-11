import { Team as TeamInterface } from './interfaces'

export const localTeam: TeamInterface = {
    type: 'local',
    name: 'Team A',
    logo: 'lakers.svg'
}

export const guestTeam: TeamInterface = {
    type: 'guest',
    name: 'Team B',
    logo: 'celtics.svg'
}
