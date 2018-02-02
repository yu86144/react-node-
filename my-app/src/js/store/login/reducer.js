import * as actionsType from './actionsTypes'

const initState = {
    data: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case actionsType.USERNAME:
            return {
                ...initState,
                data: action.data
            }
        case actionsType.ADD:
            let arr = [1]
            Array.prototype.push.apply(arr,state.data)
            // console.log(arr)
            return {
                ...initState,
                data:arr
            }
        default:
            return state
    }
}