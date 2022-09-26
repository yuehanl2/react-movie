function sortAvg(curstate){
    return{
        type:"SORTAVG",
        payload :curstate

    }
}


function sortCount(curstate){
    return{
        type:"SORTCOUNT",
        payload :curstate

    }
}


function sortTitle(curstate){
    return{
        type:"SORTTITLE",
        payload :curstate

    }
}

function sortDate(curstate){
    return{
        type:"SORTDATE",
        payload :curstate

    }
}

export const actions = {
    sortAvg,
    sortCount,
    sortDate,
    sortTitle
  };



