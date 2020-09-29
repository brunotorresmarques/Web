import {createStore, combineReducers} from 'redux'

const reducers = combineReducers(
    {
        number: function(state, action){
            return {
                number1: 4,
                number2: 5
            }
        }
    }
)

function StoreConfig() {
    return createStore(reducers)
}

export default StoreConfig;