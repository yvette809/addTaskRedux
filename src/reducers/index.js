export default function (state={},action){
    switch(action.type){
        //Add to tasklist
        case"ADD_TASK" :
        return{
            ...state,
            tasks:[...state.tasks, action.payload]
        }
        default: return state
    }
}