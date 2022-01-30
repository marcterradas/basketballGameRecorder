const initialScoreState = {
    minutes: 10,
    seconds: 0,
    period: 1
}

const reducer = (state = initialScoreState, action) => {
    let result = {}

    switch (action.type) {
        case 'updateTime':
            result = {
                ...state,
                minutes: action.minutes,
                seconds: action.seconds
            }
            break
        case 'updatePeriod':
            result = {
                ...state,
                period: action.period
            }
            break
        default:
            result = state
            break
    }

    return result
}

export default reducer
