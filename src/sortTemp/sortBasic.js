import React,{useState,useEffect} from 'react';
import { getConst } from "./constants"
import ListMove from './componment';
import store from '../Redux/store';



export default function App(){


    useEffect(()=>{
        store.subscribe(()=>{
            let temp = [...store.getState().movieList]
            setmovieList(temp)         
        })

    },[])


    //temp list, for test, will replace later
    const [movieList,setmovieList] = useState(getConst.movieListTemp)




        return(<>

             <ListMove movieList={movieList}></ListMove>

        </>)
    

   


    }


   




