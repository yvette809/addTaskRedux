import {createStore} from "redux"
import baseReducer from "../reducers"


const initial = {
    tasks:[]
}


export default function configureStore (){
    return createStore(baseReducer,initial,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}