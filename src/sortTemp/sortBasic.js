import React,{useState,useEffect} from 'react';
import movieListTemp from "./constants"
import ListMove from './componment';
import store from './store';


export default function App(){


    useEffect(()=>{
        store.subscribe(()=>{
            let temp = [...store.getState().movieList]
            setmovieList(temp)         

        })

    },[])


    //temp list, for test, will replace later
    const [movieList,setmovieList] = useState(movieListTemp)


        return(<>

             <ListMove movieList={movieList}></ListMove>

        </>)
    

   


    }


   




