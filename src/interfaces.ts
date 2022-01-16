export interface Team {
    type: string
    name: string
    logo: string
    score: number
    bonus: boolean
    possession: boolean
    fouls: boolean
    players: Array<Player>
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
