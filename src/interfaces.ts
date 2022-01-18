export interface Team {
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
    name: string
    technicalFouls: number
    ejected: boolean
}
