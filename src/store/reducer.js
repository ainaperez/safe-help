const initialState = {
    counter: 0
}

//Reducer

const rootReducer = (state = initalState, action) => {
    if(action.type == 'INC_COUNTER'){
        return {
            ...state, 
            counter: state.counter ++
        }
    }
    return state; 
}
ki