const initialScoreState = {
    minutes: 10,
    seconds: 0,
    period: 1,
    inCountDown: false
}

const reducer = (state = initialScoreState, action: any) => {
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
        case 'isInCountDown':
            result = {
                ...state,
                inCountDown: action.inCountDown
            }
            break
        default:
            result = state
            break
    }
    return result
}

export default reducer
