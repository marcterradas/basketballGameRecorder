import { Team } from '../interfaces'

export const localTeam: Team = {
    id: 1,
    type: 'local',
    name: 'Team A',
    logo: 'lakers.svg',
    score: 0,
    bonus: false,
    possession: false,
    fouls: false,
    players: {
        1: { id: 1, name: 'Player1', dorsal: 1, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: true },
        2: { id: 2, name: 'Player2', dorsal: 2, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: true },
        3: { id: 3, name: 'Player3', dorsal: 3, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: true },
        4: { id: 4, name: 'Player4', dorsal: 4, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: true },
        5: { id: 5, name: 'Player5', dorsal: 5, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: true },
        6: { id: 6, name: 'Player6', dorsal: 6, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        7: { id: 7, name: 'Player7', dorsal: 7, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        8: { id: 8, name: 'Player8', dorsal: 8, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        9: { id: 9, name: 'Player9', dorsal: 9, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        10: { id: 10, name: 'Player10', dorsal: 10, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        11: { id: 11, name: 'Player11', dorsal: 11, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        12: { id: 12, name: 'Player12', dorsal: 12, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false }
    },
    coach: { id: 1, name: 'CoachA', technicalFouls: 0, ejected: false }
}

export const guestTeam: Team = {
    id: 2,
    type: 'guest',
    name: 'Team B',
    logo: 'celtics.svg',
    score: 0,
    bonus: false,
    possession: false,
    fouls: false,
    players: {
        13: { id: 13, name: 'Player1', dorsal: 1, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: true },
        14: { id: 14, name: 'Player2', dorsal: 2, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: true },
        15: { id: 15, name: 'Player3', dorsal: 3, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: true },
        16: { id: 16, name: 'Player4', dorsal: 4, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: true },
        17: { id: 17, name: 'Player5', dorsal: 5, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: true },
        18: { id: 18, name: 'Player6', dorsal: 6, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        19: { id: 19, name: 'Player7', dorsal: 7, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        20: { id: 20, name: 'Player8', dorsal: 8, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        21: { id: 21, name: 'Player9', dorsal: 9, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        22: { id: 22, name: 'Player10', dorsal: 10, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        23: { id: 23, name: 'Player11', dorsal: 11, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        24: { id: 24, name: 'Player12', dorsal: 12, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false }
    },
    coach: { id: 2, name: 'CoachB', technicalFouls: 0, ejected: false }
}