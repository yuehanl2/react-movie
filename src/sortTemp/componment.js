import React,{useState,useEffect} from 'react';

import store from './store';
import {actions} from './actionCreator';

export default function ListMove(props){

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
                store.dispatch(actions.sortTitle(sortTitleAsc))
            }}>Sort by title {sortTitleAsc?" ↑":" ↓"}</button>


            <button onClick={()=>{
                store.dispatch(actions.sortDate(sortDateAsc))
            }}>Sort by date{sortDateAsc?" ↑":" ↓"}</button>

            <button  onClick={()=>{
                store.dispatch(actions.sortCount(sortCountAsc))
            }}>Sort by vote count{sortCountAsc?" ↑":" ↓"}</button>

            <button onClick={()=>{
                store.dispatch(actions.sortAvg(sortAvgAsc))
            }}>Sort by vote avg{sortAvgAsc?" ↑":" ↓"}</button>
        </div>
     

        {props.movieList.map((item=>
        <div style={{border:'2px solid black',margin:"10px"}}>
            <img alt='img' src={'https://image.tmdb.org/t/p/w1280'+item.poster_path} height={200} width={150}></img>
            <div key={item.id}>{item.title}</div>
            <div>relase Date: {item.release_date}</div>         
            <div>Vote count: {item.vote_count}</div>
            <div>Vote Average: {item.vote_average}</div>
        </div>))}
    
    
    </>)
}

