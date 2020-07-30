export default function (state={},action){
    switch(action.type){
        //Add to tasklist
        case"ADD_TASK" :
        return{
            ...state,
            tasks:[...state.tasks, action.payload]
        }
        // Remove from Task list
        case "REMOVE_TASK":
        return{
            ...state,
            tasks:state.tasks.filter(task =>task !== action.payload)

        }
        default: return state
    }
}