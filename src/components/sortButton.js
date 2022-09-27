import React,{useState,useEffect} from 'react';
import store from '../Redux/store';
import { getConst } from '../constants';
import { actions } from '../Redux/actionCreator';

export default function SortButton(){

    //Watch the status of sort status (asc or desc), default is sort by asc
    const [sortTitleAsc,setSortTitleAsc] = useState(true)
    const [sortDateAsc,setSortDateAsc] = useState(true)
    const [sortCountAsc,setSortCountAsc] = useState(true)
    const [sortAvgAsc,setSortAvgAsc] = useState(true)

    useEffect(()=>{
        store.subscribe(()=>{
            let curstate=store.getState().curState
            switch(store.getState().actionType){
                case "SORTAVG":
                    setSortAvgAsc(curstate)
                    return null
                
                case "SORTCOUNT":
                    setSortCountAsc(curstate)
                    return null
    
                case "SORTTITLE":
                    setSortTitleAsc(curstate)
                    return null
        
                case "SORTDATE":
                    setSortDateAsc(curstate)
                    return null
                default:
                    return null       
            }  

        })

    },[])

    

    return(<>
    <div style={{margin:"10px"}}>
            <button onClick={()=>{
                store.dispatch(actions.sortAction(getConst.SORTTITLE, sortTitleAsc))
            }}>Sort by title {sortTitleAsc?" ↑":" ↓"}</button>


            <button onClick={()=>{
                store.dispatch(actions.sortAction(getConst.SORTDATE, sortDateAsc))
            }}>Sort by date{sortDateAsc?" ↑":" ↓"}</button>

            <button  onClick={()=>{
                store.dispatch(actions.sortAction(getConst.SORTCOUNT, sortCountAsc))
            }}>Sort by vote count{sortCountAsc?" ↑":" ↓"}</button>

            <button onClick={()=>{
                store.dispatch(actions.sortAction(getConst.SORTAVG, sortAvgAsc))
            }}>Sort by vote avg{sortAvgAsc?" ↑":" ↓"}</button>
        </div>
    
    
    </>)
}


