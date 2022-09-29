
import axios from "axios";
import store from "./store";
import { getConst } from "../constants";




function sortAction(curType,curstate){
    return{
        type:curType,
        payload :curstate
    }
}


const fetchMovie = (url,page) => {
 
    if(page-1<store.getState().wholeList.length){
        return{
          type:getConst.GETMOVIE,
          curPage :page
        }

        // return null
    }


    return(dispatch)=>{

        

      return axios.get(url).then((res) => {
        dispatch({
            type:getConst.GETFETCH,
            payload:res.data.results,
            curPage:page
        })
      });

    }
  };

export const actions = {
    sortAction,
    fetchMovie
  };



