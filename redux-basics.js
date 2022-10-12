const redux = require('redux');
const createStore = redux.configureStore;

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

//Store 

const store =  createStore(rootReducer); 
console.log(store.getState());


//Dispatching Action
store.dispatch({type: 'INC-COUNTER',}); 
Store.DISPATCH({TYPE: 'ADD_COUNTER', value: 10}); 

console.log(store.getState());

//subscription

store.subscribe(()=> {
    console.log('[Subscription]', store.getState());
});

