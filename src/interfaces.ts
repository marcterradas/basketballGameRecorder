export interface Team {
    id: number
    type: string
    name: string
    logo: string
    score: number
    bonus: boolean
    possession: boolean
    fouls: boolean
    players: Array<Player>
    coach: Coach
}

export interface Player {
    id: number
    name: string
    dorsal: number
    points: number
    fouls: number
    technicalFouls: number
    injured: boolean
    ejected: boolean
    inGame: boolean
}

export interface Coach {
    id: number
    name: string
    technicalFouls: number
    ejected: boolean
}

export interface Language {
    key: string
    value: string
}

export interface Historic {
    teamId: string
    playerId: string
    time: string
    points: number | null
}
