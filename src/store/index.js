import { createStore } from 'redux';

const reducerFunction = (state={counter:0}, action) => {
    //synchronous function
    //we should not mutate the original state
    if(action.type==='inc'){
        return {counter:state.counter+1}
    }

    if(action.type==='dec'){
        return {counter: state.counter-1}
    }

    if(action.type==='add') {
        return {counter: state.counter +action.payload}
    }
   return state;

    

}

const store = createStore(reducerFunction);

export default store;