import movieListTemp from "./constants"
import { sortFunction } from "./function"

const reducer=(prevState={

    // this object will replace with fetch data later
    movieList:movieListTemp,
    actionType:"",
    curState:true

}, action)=>{

    
    let newState={...prevState}
    newState.curState=!action.payload
    newState.actionType=action.type
    
    switch(action.type){
        case "SORTAVG":
            let tempAvg = sortFunction.sortByAvg(newState.movieList,action.payload)
            newState.movieList=tempAvg   
            newState.curState=!action.payload  
            return newState
        
        case "SORTCOUNT":
            let tempCount = sortFunction.sortByCount(newState.movieList,action.payload)
            newState.movieList=tempCount  
            return newState


        case "SORTTITLE":
            let tempTitle = sortFunction.sortByName(newState.movieList,action.payload)
            newState.movieList=tempTitle    
            return newState

        case "SORTDATE":
            let tempDate = sortFunction.sortByDate(newState.movieList,action.payload)
            newState.movieList=tempDate    
            return newState

        default:
            return prevState

    }



}

export default reducer