import { getFunction } from '../utils';

const reducer=(prevState={

    // this object will replace with fetch data later
    movieList:[],
    wholeList:[],
    actionType:"",
    curPage:1,
    curState:true,
    isLoading:false

}, action)=>{

    
    let newState={...prevState}
    newState.curState=!action.payload
    newState.actionType=action.type
    
    switch(action.type){
        case "SORTAVG":
            let tempAvg = getFunction.sortByAvg(newState.movieList,action.payload)
            newState.movieList=tempAvg   
            console.log("111")
            return newState
        
        case "SORTCOUNT":
            let tempCount = getFunction.sortByCount(newState.movieList,action.payload)
            newState.movieList=tempCount  
            return newState


        case "SORTTITLE":
            let tempTitle = getFunction.sortByName(newState.movieList,action.payload)
            newState.movieList=tempTitle    
            return newState

        case "SORTDATE":
            let tempDate = getFunction.sortByDate(newState.movieList,action.payload)
            newState.movieList=tempDate    
            return newState

            //add to xx list
            // delete xx list
         case "GETFETCH":
            newState.movieList=action.payload
            newState.wholeList.push(action.payload)
            // newState.wholeList[0] = page1 
            newState.curPage=action.curPage
            newState.isLoading=false
            return newState

        case "GETMOVIE":

            newState.movieList=newState.wholeList[action.curPage-1]      

            return newState

        default:
            return prevState

    }



}

export default reducer